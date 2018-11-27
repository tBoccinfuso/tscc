"use strict";
var Tree = /** @class */ (function () {
    // When we create a new instance of this class, assign the parameters to our class variables
    function Tree(numberOfBranches, leafColor, type) {
        this.numberOfBranches = numberOfBranches;
        this.leafColor = leafColor;
        this.type = type;
    }
    // methods
    Tree.prototype.defineTree = function () {
        console.log("This is a " + this.type + " tree. It has a total of " + this.numberOfBranches + " and " + this.leafColor + " leaves!");
    };
    return Tree;
}());
var mapleTree = new Tree(42, "red", "maple");
mapleTree.defineTree();
