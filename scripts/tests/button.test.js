const buttonClick = require("../../03_mocking/scripts/button");

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("03_mocking/index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
})
