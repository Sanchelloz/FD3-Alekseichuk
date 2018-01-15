var Apple = /** @class */ (function () {
    function Apple(currentName, currentWeight) {
        this.name = currentName;
        this.weight = currentWeight;
    }
    ;
    Apple.prototype.getName = function () {
        return this.name;
    };
    ;
    Apple.prototype.getWeight = function () {
        return this.weight;
    };
    ;
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(currentName, currentWeight) {
        this.name = currentName;
        this.weight = currentWeight;
    }
    ;
    Tomato.prototype.getName = function () {
        return this.name;
    };
    ;
    Tomato.prototype.getWeight = function () {
        return this.weight;
    };
    ;
    return Tomato;
}());
var Cucumber = /** @class */ (function () {
    function Cucumber(currentName, currentWeight) {
        this.name = currentName;
        this.weight = currentWeight;
    }
    ;
    Cucumber.prototype.getName = function () {
        return this.name;
    };
    ;
    Cucumber.prototype.getWeight = function () {
        return this.weight;
    };
    ;
    return Cucumber;
}());
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