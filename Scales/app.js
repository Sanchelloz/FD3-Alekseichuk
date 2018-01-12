var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Products = /** @class */ (function () {
    function Products(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    ;
    Products.prototype.getName = function () {
        return this.name;
    };
    ;
    Products.prototype.getWeight = function () {
        return this.weight;
    };
    ;
    return Products;
}());
;
var Scales = /** @class */ (function () {
    function Scales() {
        this.listAddedProducts = [];
    }
    ;
    Scales.prototype.add = function (currentProduct) {
        this.listAddedProducts.push(currentProduct);
    };
    ;
    Scales.prototype.remove = function (currentProduct) {
        var i = this.listAddedProducts.indexOf(currentProduct);
        this.listAddedProducts.splice(i, 1);
    };
    ;
    Scales.prototype.getSumWeight = function () {
        var sumWeight = 0;
        for (var _i = 0, _a = this.listAddedProducts; _i < _a.length; _i++) {
            var currentProduct = _a[_i];
            sumWeight += currentProduct.getWeight();
        }
        ;
        return sumWeight;
    };
    ;
    Scales.prototype.getNameList = function () {
        var namesList = [];
        for (var _i = 0, _a = this.listAddedProducts; _i < _a.length; _i++) {
            var currentProduct = _a[_i];
            namesList.push(currentProduct.getName());
        }
        ;
        return namesList;
    };
    ;
    return Scales;
}());
;
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(name, weight) {
        return _super.call(this, name, weight) || this;
    }
    return Apple;
}(Products));
;
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(name, weight) {
        return _super.call(this, name, weight) || this;
    }
    return Tomato;
}(Products));
;
var Cucumber = /** @class */ (function (_super) {
    __extends(Cucumber, _super);
    function Cucumber(name, weight) {
        return _super.call(this, name, weight) || this;
    }
    return Cucumber;
}(Products));
;
var scales = new Scales();
var apple = new Apple("яблоки", 1000);
var tomato = new Tomato("помидоры", 1500);
var cucumber = new Cucumber("огурцы", 2500);
scales.add(apple);
scales.add(tomato);
console.log(scales.getNameList());
console.log(scales.getSumWeight());
scales.add(cucumber);
console.log(scales.getNameList());
console.log(scales.getSumWeight());
scales.remove(apple);
console.log(scales.getNameList());
console.log(scales.getSumWeight());
//# sourceMappingURL=app.js.map