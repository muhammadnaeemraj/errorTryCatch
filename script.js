// let a, b;
function addTwoNum(a, b) {
  try {
    // console.log(a + b);
    if (typeof a != "number" && typeof b == "number") {
      throw new Error("The value of a is not a number!");
    } else if (typeof b != "number" && typeof a == "number") {
      throw new Error("The value of b is not a number!");
    } else if (typeof a != "number" && typeof b != "number") {
      throw new Error("The values of a and b are not numbers!");
    } else {
      console.log("Working Fine!");
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Finally Error Found!");
  }
}

addTwoNum(6, 6);
