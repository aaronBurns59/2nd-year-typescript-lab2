//Aaron Burns lab2 Creating an array and functions to add and remove to and from array
var arr1 = [];
function addTask(task) {
    arr1.push(task);
    console.log("Item added " + task);
    return arr1.length;
} //addTask
function listAllTasks() {
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var item = arr1_1[_i];
        console.log(item);
    }
} //listAllTasks
function deleteTask(task) {
    var index = arr1.indexOf(task);
    if (index > -1)
        arr1.splice(index, 1);
    return arr1.length;
} //deleteTask
addTask("Clean");
addTask("Cook");
listAllTasks();
console.log(deleteTask("Cook"));
