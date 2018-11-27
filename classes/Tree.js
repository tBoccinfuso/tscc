"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tree = /** @class */ (function () {
    // When we create a new instance of this class, assign the parameters to our class variables
    function Tree(numberOfBranches, leafColor, type) {
        this.numberOfBranches = numberOfBranches;
        this.leafColor = leafColor;
        this.type = type;
    }
    // methods
    Tree.prototype.defineTree = function (treeType) {
        if (treeType === void 0) { treeType = this.type; }
        console.log("This is a " + treeType + " tree. It has a total of " + this.numberOfBranches + " and " + this.leafColor + " leaves!");
    };
    return Tree;
}());
// New instance of Tree class
var mapleTree = new Tree(42, "red", "maple");
// Call method
mapleTree.defineTree();
// Extend the Tree class
var Elm = /** @class */ (function (_super) {
    __extends(Elm, _super);
    function Elm(numberOfBranches, leafColor, type) {
        return _super.call(this, numberOfBranches, leafColor, type) || this;
    }
    // Use the method and pass in the elm value
    Elm.prototype.defineTree = function (treeType) {
        if (treeType === void 0) { treeType = this.type; }
        _super.prototype.defineTree.call(this, treeType);
    };
    return Elm;
}(Tree));
// New instance of Elm class
var elmTree = new Elm(42, "red", "maple");
// Call method.... but watch as our class overrides the "maple" value
elmTree.defineTree("elm");
