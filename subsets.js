const subset = (str, output, input) => {
  if (input < 0) {
    console.log(`'${output}'`);
  } else {
    subset(str, output, input - 1);
    subset(str, str[input] + output, input - 1);
  }
};
const subsetTwo = (output, input) => {
  if (!input.length) {
    console.log(`'${output}'`);
  } else {
    const newInput = input.substr(0, input.length - 1);
    subsetTwo(input[input.length - 1] + output, newInput);
    subsetTwo(output, newInput);
  }
};
const str = "xyz";
subsetTwo("", str);
