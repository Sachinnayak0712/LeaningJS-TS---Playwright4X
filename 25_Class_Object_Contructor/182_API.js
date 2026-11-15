class APIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    nameTest(path) {
        return this.baseURL + path;
    }
}
let staging = new APIClient("https://staging.api.com");
let prod = new APIClient("https://prod.api.com");
console.log(staging.nameTest("/users"));
console.log(prod.nameTest("/prod/users"));

