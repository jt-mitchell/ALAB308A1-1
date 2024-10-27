// Part 1
let counter = 0;
function addCount() {
  try {
    counter++;

    console.log("Counter value is: ", counter);
    addCount(counter);
  } catch (error) {
    console.error("Error during adding the count:", error);
    console.error("Final counter value:", counter);
  }
}
addCount(); // Final counter value: 6802

// Part 2
