from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Aumentar el tamaño de la ventana para verificar mejor el layout
        page.set_viewport_size({"width": 1920, "height": 1080})

        # Verificar la página de inicio
        page.goto("http://localhost:5173/")
        page.wait_for_load_state('networkidle')
        page.screenshot(path="jules-scratch/verification/homepage.png")

        # Verificar la página de contacto
        page.goto("http://localhost:5173/contacto")
        page.wait_for_load_state('networkidle')
        page.screenshot(path="jules-scratch/verification/contactpage.png")

        browser.close()

run()
