const { expect } = require("@jest/globals")
const { capitalize } = require('./script');
const { reverseString } = require('./script');
const { calculator } = require("./script");
const { caesarCipher } = require('./script');
const { analyzeArray } = require('./script');
test("capitalize first character 1, test all lowercase string", () => {
    expect(capitalize("hello")).toBe("Hello");
});
test("capitalize first character 2, test string with spaces", () => {
    expect(capitalize("what the fuck")).toBe("What the fuck");
});
test("reverse string test 1, test a single word", () => {
    expect(reverseString("hello")).toBe("olleh");
});
test("reverse string test 2, test two or more words with spaces", () => {
    expect(reverseString("Hello There")).toBe("erehT olleH");
});
test("calculator add, test add func", () => {
    expect(calculator.add(1, 2)).toBe(3);
});
test("calculator subtract", () => {
    expect(calculator.sub(1, 2)).toBe(-1);
});
test("calculator multiply", () => {
    expect(calculator.mul(1, 2)).toBe(2);
});
test("calculator divide", () => {
    expect(calculator.div(1, 2)).toBe(.5);
});
test("ceasar cipher 1, test two or more words with spaces", () => {
    expect(caesarCipher("defend the east wall of the castle"))
        .toBe("efgfoe uif fbtu xbmm pg uif dbtumf");
});
test("ceasar cipher 2, test the entire alphabet see if z wrap to a", () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz"))
        .toBe("bcdefghijklmnopqrstuvwxyza");
});
test("analyze Array 1", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
});