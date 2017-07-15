
function myParameterDecorator(target, propertyKey, parameterIndex) {
    console.log("MyParameterDecorator called on: \n    target: " + target + ", propertyKey : " + propertyKey + ", parameterIndex : " + parameterIndex);
}
var MyParameterDecoratorExample = (function () {
    function MyParameterDecoratorExample() {
    }
    MyParameterDecoratorExample.prototype.print = function (param1, param2) {
        console.log("MyStaticMethodDecoratorExample.print(" + param1 + ", " + param2 + ") called.");
    };
    __decorate([
        __param(0, myParameterDecorator),
        __param(1, myParameterDecorator)
    ], MyParameterDecoratorExample.prototype, "print", null);
    return MyParameterDecoratorExample;
}());
var testObj = new MyParameterDecoratorExample();
testObj.print("test", 800);
