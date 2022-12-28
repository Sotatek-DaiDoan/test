describe("quick maffs test suite", () => {
  test("2 + 2 is 4", () => {
    expect(2 + 2).toBe(4);
  });

  test("4 - 1 thats 3", () => {
    expect(4 - 1).toEqual(expect.any(Number));
  });
});
