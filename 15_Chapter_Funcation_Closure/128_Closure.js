function startBrowser(){
    let name = "Chrome";

    function installBrowser(){
        console.log(name);
    }
    return installBrowser;
}
const testCase = startBrowser();
testCase();

