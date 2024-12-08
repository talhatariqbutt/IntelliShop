# from selenium import webdriver
# from selenium.webdriver.chrome.service import Service as ChromeService
# from selenium.webdriver.common.by import By
# from selenium.webdriver.chrome.options import Options
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# import warnings

# warnings.filterwarnings('ignore')

# def check_sizes(url: str) -> dict:
#     options = Options()
#     options.headless = True
#     service = ChromeService(executable_path=r"D:\selenium\chromedriver-win64\chromedriver-win64\chromedriver.exe")
#     driver = webdriver.Chrome(service=service, options=options)
#     driver.get(url)

#     try:
#         WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CLASS_NAME, "swatch-view")))
#         size_elements = driver.find_elements(By.CSS_SELECTOR, ".swatch-view-item")
#         sizes_info = {}

#         for size_element in size_elements:
#             size_name = size_element.get_attribute("orig-value")
#             is_unavailable = "swatch-item-unavailable" in size_element.get_attribute("class")
#             sizes_info[size_name] = "Sold Out" if is_unavailable else "In Stock"

#         return sizes_info

#     except Exception as e:
#         raise Exception(f"An error occurred while checking sizes: {e}")

#     finally:
#         driver.quit()
