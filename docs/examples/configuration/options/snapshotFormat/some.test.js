test('does not show prototypes for object and array inline', () => {
  const object = {
    array: [{hello: 'Danger'}],
  };
  expect(object).toMatchInlineSnapshot(`
    {
      "array": [
        {
          "hello": "Danger",
        },
      ],
    }
  `);
});
