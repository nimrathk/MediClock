from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium_stealth import stealth
import time

# ✅ Configure Chrome with stealth settings
options = webdriver.ChromeOptions()
options.add_argument("--start-maximized")
options.add_argument("--disable-blink-features=AutomationControlled")
options.add_experimental_option("excludeSwitches", ["enable-automation"])
options.add_experimental_option('useAutomationExtension', False)

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

# ✅ Apply stealth
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
    time.sleep(10)  # Let page load

    # ✅ Try finding pharmacy buttons after bypass
    buttons = driver.find_elements(By.XPATH, "//button[contains(@data-qa, 'pharmacy-option')]")
    print(f"Found {len(buttons)} pharmacy buttons.")

    # ✅ Click each button and extract retail price
    for idx, button in enumerate(buttons[:5]):
        try:
            WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, f"(//button[contains(@data-qa, 'pharmacy-option')])[{idx + 1}]"))
            ).click()
            time.sleep(3)

            pharmacy_name_element = button.find_element(
                By.XPATH, './/span[contains(@class, "sc-1pf85vx-0") and contains(@class, "sc-1ka1vzl-0")]'
            )
            pharmacy_name = pharmacy_name_element.text.strip()

            # ✅ Output pharmacy name
            print(f"{pharmacy_name}")
            
            price_element = driver.find_element(By.XPATH, "//div[@data-qa='pricing-option-retail-price']/span/span")
            print(f"Pharmacy {idx + 1} Retail Price: {price_element.text}")
        except Exception as e:
            print(f"Could not extract price for pharmacy {idx + 1}: {e}")

finally:
    driver.quit()
