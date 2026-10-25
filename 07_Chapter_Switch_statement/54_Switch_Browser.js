let browser = "Edge";

switch (browser) {
    case "Chrome":
        console.log("Opera Project!");
        break;
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Opera Project!");
        break;
    case "Firefox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple browser — uses JavaScriptCore engine");
        break;
    default:
        console.log("Unknown browser — manual testing needed");

}