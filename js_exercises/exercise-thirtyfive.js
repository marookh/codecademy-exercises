function monitorCount(rows, columns) {
  return rows * columns;
}
// Declare a function to find the cost of monitors
function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5,4);
console.log(totalCost);
function classArea(rows, columns) {
  return rows * columns // Multiply row and culumns 
}
function numberOfStudents(rows, columns) {
  return classArea(rows, columns) - 2; // calling the helper function
}
let students = numberOfStudents(5, 6);
console.log(students) // Log the number of students.
