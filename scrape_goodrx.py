import time
import pandas as pd
from datetime import datetime

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium_stealth import stealth
from selenium.common.exceptions import TimeoutException

def timenow():
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")

# List of drugs to scrape. Each drug name will be appended to the GoodRx URL.
drugs = ["ozempic", "trulicity", "victoza"]

# Configure Chrome with stealth settings
options = webdriver.ChromeOptions()
options.add_argument("--start-maximized")
options.add_argument("--disable-blink-features=AutomationControlled")
options.add_experimental_option("excludeSwitches", ["enable-automation"])
options.add_experimental_option("useAutomationExtension", False)

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

# Apply stealth
stealth(driver,
        languages=["en-US", "en"],
        vendor="Google Inc.",
        platform="MacIntel",
        webgl_vendor="Intel Inc.",
        renderer="Intel Iris OpenGL Engine",
        fix_hairline=True,
)

data_rows = []

try:
    # Loop over each drug in the array
    for drug in drugs:
        url = f"https://www.goodrx.com/{drug}"
        driver.get(url)
        time.sleep(10)  # Wait for the page to load

        # Wait for pharmacy buttons to be present
        WebDriverWait(driver, 10).until(
            EC.presence_of_all_elements_located((By.XPATH, "//button[contains(@data-qa, 'pharmacy-option')]"))
        )
        buttons = driver.find_elements(By.XPATH, "//button[contains(@data-qa, 'pharmacy-option')]")
        print(f"Drug: {drug} - Found {len(buttons)} pharmacy buttons.")

        # XPath for the retail price element (adjust if necessary)
        price_xpath = "//div[@data-qa='pricing-option-retail-price']//span//span"
        previous_price = ""

        # Loop through the first four pharmacy buttons
        for idx in range(4):
            # Construct an XPath that targets the (idx+1)th button (XPath indexing is 1-based)
            button_xpath = f"(//button[contains(@data-qa, 'pharmacy-option')])[{idx + 1}]"
            button = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, button_xpath))
            )
            
            # Scroll the button into view for a smoother click
            driver.execute_script("arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'});", button)
            time.sleep(1)  # Allow time for scrolling
            
            # Click the button using JavaScript to overcome potential interaction issues
            driver.execute_script("arguments[0].click();", button)
            time.sleep(5)  # Wait for the page to update

            # Optionally, save page source for debugging (each iteration gets its own file)
            page_html = driver.page_source
            file_name = f"page_html_{drug}_{idx + 1}.html"
            with open(file_name, "w", encoding="utf-8") as file:
                file.write(page_html)
            print(f"Page source saved to {file_name}")

            # Wait until the retail price element is updated
            try:
                WebDriverWait(driver, 10).until(
                    EC.staleness_of(driver.find_element(By.XPATH, price_xpath))
                )
            except TimeoutException:
                print(f"Warning: Price element did not become stale for {drug} button {idx + 1}.")
            
            # Re-find the updated price element from the live DOM
            price_element = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.XPATH, price_xpath))
            )
            # Use JavaScript to extract the fresh text content
            current_price = driver.execute_script("return arguments[0].textContent;", price_element).strip()

            # Extract the pharmacy name from the button
            pharmacy_name = button.find_element(
                By.XPATH, './/span[contains(@class, "sc-1pf85vx-0") and contains(@class, "sc-1ka1vzl-0")]'
            ).text.strip()
            print(f"Drug: {drug} - Pharmacy {idx + 1}: {pharmacy_name} => Retail Price: {current_price}")

            # Append the data for this entry
            data_rows.append({
                "drug_name": drug,
                "pharmacy_name": pharmacy_name,
                "retail_price": current_price,
                "timestamp": timenow()
            })
            previous_price = current_price
            time.sleep(2)

except Exception as e:
    print(f"Error: {e}")

finally:
    driver.quit()

# Create a DataFrame and write data to CSV
df = pd.DataFrame(data_rows)
csv_filename = "goodrx_prices.csv"
df.to_csv(csv_filename, index=False)
print(f"CSV saved: {csv_filename}")
