class BasePage{
    constructor(pageName){
        this.pageName = pageName;
    }
    open(){
        console.log("Opening the page");
    }
    close(){
        console.log("Closing the page");
    }
}

class loginPage extends BasePage{

}

let page = new loginPage();
page.open();
page.close();