const { defineFeature, loadFeature } = require('jest-cucumber');
const feature = loadFeature('./e2e/features/visualize-routes.feature');
const puppeteer = require('puppeteer');
let browser = null;
let page = null;

defineFeature((feature), (test) => {

    beforeAll(async () => {
        //Create page
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        });
        page = await browser.newPage();

        await page.goto("http://localhost:3000/", { waitUntil: "load", timeout: 0 });

        const newPagePromise = new Promise((x) => browser.once(("targetcreated"), (target) => x(target.page())));
        await expect(page).toClick("button", { className: "btn btn-primary a-solid button-login" });
        popup = await newPagePromise;

        expect(popup).toClick("button", { text: "Solid Community", timeout: 0 });
        await popup.waitForNavigation({ waitUntil: "load", timeout: 0 });

        await popup.type("[name='username']", "aswes1b", { visible: true });
        await popup.type("[name='password']", "Viade_es1b", { visible: true });
        await expect(popup).toClick("button", { text: "Log In" });
    });

    afterAll(() => {
        browser.close();
    });

    //Scenario 1
    test("The user has routes in his POD but not loaded", ({ given, when, then, and }) => {

        given("the map page", async () => {
            await page.goto("http://localhost:3000/#/map", { waitUntil: "load", timeout: 0 });
        });

        when("the user types the folder with routes", async () => {
            await page.waitForSelector('input');
            await page.type("[id='download-input']", "viade/routes", { visible: true });
            await new Promise((res) => setTimeout(() => {
                expect(true).toBe(true)
                res()
            }, 2000));
        });

        and("press the download button", async () => {
            const downloadButton = await page.$('[id="download-button"]');
            await downloadButton.click();
        });

        then("the user expects to watch them in the list", async () => {
            await page.waitForSelector('h4', { class: "title", timeout: 0 });
            const refreshButton = await page.$('[id="refresh-button"]');
            await refreshButton.click();
            await expect(page).toMatch("test", { waitUntil: "load", timeout: 0 });
        });

    });


    //Scenario 2
    test("The user has already loaded routes in the app", ({ given, when, then }) => {

        given("the map page with routes loaded", async () => {
            await page.goto("http://localhost:3000/#/map", { waitUntil: "load", timeout: 0 });
        });

        when("the user press a route name", async () => {
            await expect(page).toClick("li", { text: "test" });
        });

        then("the user expects to watch it drown in the map", async () => {
            const markerPanel = await page.$('[class="leaflet-pane leaflet-marker-pane"]');
            await expect(markerPanel).not.toBeNull();
            await new Promise((res) => setTimeout(res, 6000));
        });

    });

});