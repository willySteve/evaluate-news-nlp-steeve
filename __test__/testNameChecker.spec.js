// Import the js file to test
import { checkForName } from "../src/client/js/nameChecker"

   
describe("Testing the checkForName functionality", () => {
    test("Test should be defined", () => {
        expect(checkForName).toBeDefined();
    });

});