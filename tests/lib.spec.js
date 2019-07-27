const lib = require("../scripts/lib");
// test("Asolute", () => {
//   expect(1).toBe(lib.absolute(1));
// });
describe("Abslute", () => {
  it("for ng", () => {
    expect(1).toBe(lib.absolute(-1));
  });
  it("for pos", () => {
    expect(1).toBe(lib.absolute(1));
  });
  it("for 0", () => {
    expect(0).toBe(lib.absolute(0));
  });
});
describe("greetings", () => {
  it("Should return greeting message", () => {
    const result = lib.greeting("Arun");
    // exact match
    // expect(result).toBe('Welcome Arun');
    // using regular expression
    // expect(result).toMatch(/Arun/);
    expect(result).toContain("Arun");
  });
});
describe("getCurrencies", () => {
  it("Should contain supported currencies", () => {
    const result = lib.getCurrencies();

    // General test cases
    // expect(result).not.toBeNull();

    // Too specific test cases
    expect(result[0]).toBe("USD");
    // expect(result[1]).toBe('INR');
    // expect(result[2]).toBe('CAD');

    // proper test cases
    expect(result).toContain("USD");
    expect(result).toContain("INR");
    expect(result).toContain("CAD");

    // ideal test cases
    expect(result).toEqual(expect.arrayContaining(["INR", "CAD", "USD"]));
  });
});
describe("getProduct", () => {
  it("should return product with a given ID", () => {
    const result = lib.getProducts(1);
   // expect(result).toBe({ id: 1, price: 10 });
    expect(result).toEqual({ id: 1, price: 10 });
    expect(result).toHaveProperty("id", 1);
  });
});
describe('Register user', () => {
  it('Should throw error if invalid username is passed', () => {
      const args = [null, undefined, NaN, '', 0, false];

      args.forEach((item) => {
          expect(() => {
              lib.registerUser(item);
          }).toThrow();
      });

  });
});
describe('getUserCallback', () => {
  it('Should return user object if userid is valid', () => {
      const userId = 10;
      function callback(data) {
          expect(data).toMatchObject({id:userId, name:'User 1'})
      }
      lib.getUserCallback(userId, callback);
  });
});
