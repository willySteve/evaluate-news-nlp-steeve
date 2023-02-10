// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"

   
describe("Testing the submit functionality", () => {
    test("Test should be defined", () => {
        expect(handleSubmit).toBeDefined();
});

    test('Should be a function', () => {
        expect(typeof handleSubmit).toEqual("function");
    });

});