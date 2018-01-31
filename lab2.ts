//Aaron Burns lab2 Creating an array and functions to add and remove to and from array

let arr1: Array<string>= [];


function addTask(task:string):number
{
    arr1.push(task);
    console.log("Item added " + task);
    return arr1.length;
}//addTask

function listAllTasks()
{
    for(let item of arr1)
        console.log(item);
}//listAllTasks

function deleteTask(task: string):number
{
    let index: number = arr1.indexOf(task);
    
    if(index > -1)
        arr1.splice(index, 1);
    
    return arr1.length;
}//deleteTask

addTask("Clean");
addTask("Cook");
listAllTasks();

console.log(deleteTask("Cook"));

