const {ApiHandler} = require("../../src/wrappers/slack/ApiHandler");
const assert = require("assert");

describe("The class ApiHandler", function() {
	describe("The method callMethod", function() {
		it("Calls an invalid method", function() {
			//Arrange
			let methodName: string = "invalid.method";

			//Act
			return ApiHandler.callMethod(methodName, {}).then(result => {
				//Assert
				assert.strictEqual(result.ok, false, "The result is not ok.");
				assert.strictEqual(result.error, "unknown_method", "An unknown method has been called.");
				assert.strictEqual(result.req_method, methodName, "The invalid method name was returned correctly");
			});
		});

		it("Calls a method with invalid parameters", function() {
			//Arrange
			let methodName: string = "rtm.connect";

			//Act
			return ApiHandler.callMethod(methodName, {}).then(result => {
				//Assert
				assert.strictEqual(result.ok, false, "The result is not ok.");
				assert.ok(result.error, "The api returned an error message.");
			});
		});
	});
});