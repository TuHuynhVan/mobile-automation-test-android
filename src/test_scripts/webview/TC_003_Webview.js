import NavBar from "../../page_objects/common/NavBar";

describe(`Webview on ${browser.capabilities.deviceName}`, function () {

    const DOCS_LINK = '=Docs';

    it('should get all contexts', function () {
        NavBar.webview_icon.click()
        let contexts = driver.getContexts()
        console.log("All contexts: ", contexts)
        driver.switchContext("WEBVIEW_com.wdiodemoapp")
        $(DOCS_LINK).waitForDisplayed({timeout:30000})
        $(DOCS_LINK).click()
        driver.switchContext("NATIVE_APP")
        NavBar.login_icon.click()
    });
});