from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium_stealth import stealth
from selenium.common.exceptions import TimeoutException
import time

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

try:
    url = "https://www.goodrx.com/ozempic"
    driver.get(url)
    time.sleep(10)  # Let the page load

    # Wait for pharmacy buttons to be present
    WebDriverWait(driver, 10).until(
        EC.presence_of_all_elements_located((By.XPATH, "//button[contains(@data-qa, 'pharmacy-option')]"))
    )
    buttons = driver.find_elements(By.XPATH, "//button[contains(@data-qa, 'pharmacy-option')]")
    print(f"Found {len(buttons)} pharmacy buttons.")

    # XPath for the retail price element (update if necessary)
    price_xpath = "//div[@data-qa='pricing-option-retail-price']//span//span"
    previous_price = ""

    # Click each pharmacy button and extract the updated retail price
    for idx in range(4):
        # Re-find the button to ensure we have a current reference
        button_xpath = f"(//button[contains(@data-qa, 'pharmacy-option')])[{idx + 1}]"
        button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, button_xpath))
        )
        
        # Click the button using JavaScript
        driver.execute_script("arguments[0].click();", button)
        time.sleep(5)  # Brief pause to let the click trigger an update

        page_html = driver.page_source
        file_name = "page_html" + str(idx + 1)

        with open(file_name, "w", encoding="utf-8") as file:
            file.write(page_html)

        print(f"Page source saved to {file_name}")
        
        # Wait until the updated price is present (its text is different from the previous_price)
        try:
            WebDriverWait(driver, 10).until(
                lambda d: d.find_element(By.XPATH, price_xpath).text != previous_price
            )
        except TimeoutException:
            print(f"Warning: Price text did not change after clicking button {idx + 1}.")
        
        # Re-find the price element to ensure we are reading the updated DOM
        price_element = driver.find_element(By.XPATH, price_xpath)
        current_price = price_element.text.strip()
        
        # Extract pharmacy name from the button
        pharmacy_name = button.find_element(
            By.XPATH, './/span[contains(@class, "sc-1pf85vx-0") and contains(@class, "sc-1ka1vzl-0")]'
        ).text.strip()
        print(f"Pharmacy {idx + 1}: {pharmacy_name} => Retail Price: {current_price}")

        # Update previous_price for next iteration
        previous_price = current_price
        time.sleep(2)

except Exception as e:
    print(f"Error: {e}")

finally:
    driver.quit()
