import {myQueue} from "./interface";

class myClass implements myQueue
{
    arr1: Array<string>= [];


    addTask(task:string):number
    {
        this.arr1.push(task);
        console.log("Item added " + task);
        return this.arr1.length;
    }//addTask
    
    listAllTasks()
    {
        for(let item of arr1)
            console.log(item);
    }//listAllTasks
    
    deleteTask(task: string):number
    {
        let index: number = this.arr1.indexOf(task);
        
        if(index > -1)
            this.arr1.splice(index, 1);
        
        return this.arr1.length;
    }//deleteTask
    
}//myClass

let newClass= new myClass();
newClass.addTask("Hello");
newClass.listAllTasks();
newClass.deleteTask("Hello");