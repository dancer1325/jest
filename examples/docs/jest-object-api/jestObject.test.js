// jest     AVAILABLE | ANY test file   / NO need to import
console.log(jest);

// if NO test included -> throws an error
test('should be true', () => {
    expect(true).toBe(true);
});
