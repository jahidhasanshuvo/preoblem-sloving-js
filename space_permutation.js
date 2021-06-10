const permutation = (output, input) => {
  if (input.length == 1) {
    console.log("output", output + input);
  } else {
    let newOutput = output + input.substr(0, 1);
    const newInput = input.substr(1, input.length - 1);
    permutation(newOutput, newInput);
    permutation(newOutput + " ", newInput);
  }
};
const str = "abc";
permutation("", str);
