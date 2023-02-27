const math = require("./math");

describe("Test Math Function", () =>{
    test("test add function 1+1 = 2", () =>{
        expect(math.add(1,1)).toBe(2);
    })
})