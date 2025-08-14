// jest     AVAILABLE | ANY test file   / NO need to import
console.log("BEFORE ALL ", jest);

// if NO test included -> throws an error
test('should be true', () => {
    expect(true).toBe(true);
});

// 2. .setTimeOut
jest.setTimeout(5000);
console.log("jest.setTimeout() ", jest);
