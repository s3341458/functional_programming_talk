// three pricinples
//

// 1 function is pure:
let functionCalledTime = 0;

const notPureFunction = () => {
  functionCalledTime++;
  return functionCalledTime;
};
// 1, 2, 3, 4
// it does not take a input, every time you call it you get different result

notPureFunction();

const pureFunction = (totalCalledTime) => totalCalledTime + 1;
// the function behavior never determined by any thing
// given the same input it always the same response

functionCalledTime = pureFunction(functionCalledTime);

// functionCalledTime can be put into any library and it always guaranteed
// will worked, the function not relay to context, if I put into a library
// the code I wrote can basically lives forever, not relay to any framework or
// OS you are using or whether it is on cloud or local machine. Very testable
// as well.

// data are immutatable, again functional programming is for invented by
// mathmaticians, so they pursue a matching to mathmatical concepts, so
// 'memory' should not be considered as a factor
// You can think about things in this way, if function mutate data
// then it can be considered as a side

const mutableData = {
  count: 0,
  name: 'Product A'
};

const functionMutateData = (data) => {
  data.count += 1;
  return data;
};

const referenceOfMutableData = functionMutateData(mutableData);
// referenceOfMutableData.count == mutableData.count
// ? del mutableData

const functionWillNotMutateData = (data) => ({
  ...data,
  count: data.count + 1
});

const notReferenceOfMutableData = functionWillNotMutateData(mutableData);
// notReferenceOfMutableData.count > mutableData.count

// functions are data
const functionsDict = {
  bad: functionMutateData,
  good: functionWillNotMutateData
};

// functionsDict.bad(data)
// functionsDict.good(data)
