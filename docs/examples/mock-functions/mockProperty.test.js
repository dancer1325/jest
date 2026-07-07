//  1. .mock
test(".mock", () => {
  const myMock = jest.fn();
  const mockFnWithImplementation = jest.fn(() => 42);
  const anotherMock = jest.fn();

  // 1.1 exist | ALL mock function
  console.log("myMock.mock " + myMock.mock);
  // != .mock()           NOT a function
  //console.log("myMock1.mock() " + myMock1.mock());        // throws an error

  // 1.2  .mock.calls
  console.log("myMock.mock.calls " + myMock.mock.calls);
  console.log("myMock.mock.calls " + myMock.mock.calls[0]);   // undefined    ==  NOT invoked
  myMock('first call');
  myMock('second call', 123);
  myMock({ complex: 'object' });
  console.log("myMock.mock.calls " + myMock.mock.calls);
  console.log("myMock.mock.calls " + myMock.mock.calls[0]);
  console.log("myMock.mock.calls " + myMock.mock.calls[1]);
  expect(myMock.mock.calls[0]).toEqual(['first call']);     //  array of arguments
  expect(myMock.mock.calls[0]).toStrictEqual(['first call']);
  expect(myMock.mock.calls[0][0]).toBe('first call');   // [][]   concrete element -> use .toBe()
  expect(myMock.mock.calls[1]).toEqual(['second call', 123]);
  expect(myMock.mock.calls).toHaveLength(3);

  // 1.3  .mock.results
  console.log("myMock.mock.results " + myMock.mock.results);    // array of return values -- based on -- # of invokes
  expect(myMock.mock.results).toHaveLength(3);
  console.log("myMock.mock.results[0] " + myMock.mock.results[0]);    // object
  console.log("myMock.mock.results[0].value " + myMock.mock.results[0].value);  // undefined    -- Reason: undefined | mocked function
  console.log("myMock.mock.results[0].type " + myMock.mock.results[0].type);
  mockFnWithImplementation();
  console.log("mockFnWithImplementation.mock.results[0].value " + mockFnWithImplementation.mock.results[0].value);
  expect(mockFnWithImplementation.mock.results[0].value).toBe(42);

  // 1.4  .mock.contexts
  console.log("myMock.mock.contexts " + myMock.mock.contexts);
  console.log("myMock.mock.contexts[0] " + myMock.mock.contexts[0]);    // undefined    -- Reason:    NOT called -- via using -- call or apply
  const context = { name: 'test' };     // if you create an object -> create a context
  anotherMock.call(context);    //  invoke the mock function  -- via -- `.call(someContextPassed)`
  console.log("AFTER anotherMock.call(context) - anotherMock.mock.contexts[0] ", anotherMock.mock.contexts[0]);
  expect(anotherMock.mock.contexts[0]).toBe(context);

  // 1.5  .mock.instances
  console.log("myMock.mock.instances ", myMock.mock.instances);
  console.log("myMock.mock.instances[0] ", myMock.mock.instances[0]);
  const instance = new myMock();  // from mock function -> create an instance
  console.log("instance " + instance);
  console.log("AFTER instantiate - myMock.mock.instances[0] ", myMock.mock.instances[0]);
  //expect(instance).toBe(myMock.mock.instances[0]);    // TODO: Why `myMock.mock.instances[0]` is undefined?
});
