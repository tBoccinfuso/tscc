// Anything created in this 'namespace' is only accessible from this namespace
var TomsNamespace;
(function (TomsNamespace) {
    function someFunc() {
        document.write("Hello, from TomsNamespace");
    }
    TomsNamespace.someFunc = someFunc;
})(TomsNamespace || (TomsNamespace = {}));
