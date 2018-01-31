"use strict";
exports.__esModule = true;
var myClass = /** @class */ (function () {
    function myClass() {
        this.arr1 = [];
    }
    myClass.prototype.addTask = function (task) {
        this.arr1.push(task);
        console.log("Item added " + task);
        return this.arr1.length;
    }; //addTask
    myClass.prototype.listAllTasks = function () {
        for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
            var item = arr1_1[_i];
            console.log(item);
        }
    }; //listAllTasks
    myClass.prototype.deleteTask = function (task) {
        var index = this.arr1.indexOf(task);
        if (index > -1)
            this.arr1.splice(index, 1);
        return this.arr1.length;
    }; //deleteTask
    return myClass;
}()); //myClass
var newClass = new myClass();
newClass.addTask("Hello");
newClass.listAllTasks();
newClass.deleteTask("Hello");
