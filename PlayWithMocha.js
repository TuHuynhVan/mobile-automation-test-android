// Specifying for a test suite
describe('Account Feature', function () {

    before(function () {
        console.log("BEFORE ALL TEST CAES")
    });

    after(function () {
        console.log("AFTER ALL TEST CASES")
    })

    beforeEach(function () {
        console.log("Before Each Test cases")
    })

    afterEach(function () {
        console.log("After EACH test cases")
    });

    // Specify for a test case
    it('should show error when missing email', function () {
        console.log("First Test Case")
    });

    it('should create an account successfully', function () {
        console.log("Second Test case")
    });


});
