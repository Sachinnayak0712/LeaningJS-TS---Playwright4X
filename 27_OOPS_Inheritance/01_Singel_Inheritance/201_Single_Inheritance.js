class BasePage {
    verify() {
        console.log("Verifying base page");
    }
}

class LoginPage extends BasePage {
    verify() {
        console.log("Verify: Username field exists");
        console.log("Verify: Password field exists");
        console.log("Verify: login button is visible");
        console.log("Select the Login button");
    }
}

class DashboardPage extends BasePage {
    verify() {
        console.log("Verify: welcome message shown");
        console.log("Verify: sidebar menu loaded");
    }
}

class CartPage extends BasePage {
    verify() {
        console.log("Verify: cart items displayed");
        console.log("Verify: total price is correct");
    }
}

let pages = [new BasePage(), new LoginPage(), new DashboardPage(), new CartPage()];

pages.forEach(function (page) {
    page.verify();
    console.log("---------------------------------------");
});