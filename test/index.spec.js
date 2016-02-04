var Algorithms = require('../src/algorithms');


describe('the algorithms defined in this module', function () {

    var algorithms = Algorithms();

    it('should return True', function () {
        expect(true).toBe(true);
    });

    xit('should expect algorithms to exist', function() {
        expect(algorithms).toBeUndefined();
    });
});