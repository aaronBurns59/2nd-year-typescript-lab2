//Interface must be implemented
export interface myQueue
{
    arr1: Array<String>;
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string):number;
}//myQueue