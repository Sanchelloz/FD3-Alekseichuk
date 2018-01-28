var Products = /** @class */ (function () {
    function Products(currentName, currentWeight) {
        this.name = currentName;
        this.weight = currentWeight;
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
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.items = [];
    }
    ;
    ;
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.items.push(item);
        console.log("сохранён объект с именем"
            + item.getName() + " весом"
            + item.getWeight() + " грамм");
    };
    ;
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.items[index];
    };
    ;
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.items.length;
    };
    ;
    ScalesStorageEngineArray.prototype.getSumWeight = function () {
        var sumWeight = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var currentProduct = _a[_i];
            sumWeight += currentProduct.getWeight();
        }
        ;
        return sumWeight;
    };
    ;
    ScalesStorageEngineArray.prototype.getNameList = function () {
        var namesList = [];
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var currentProduct = _a[_i];
            namesList.push(currentProduct.getName());
        }
        ;
        return namesList;
    };
    ;
    return ScalesStorageEngineArray;
}());
;
// параметризованная фабрика
// умеет создавать и возвращать объекты любых типов
/*function uniFactory<objtype>(classRef: { new (): objtype; }): objtype {

   return new classRef();

};*/
//	описывайте класс "весы", который шаблонизован StorageEngine и создавайте весы, указывая как тИповый аргумент ScalesStorageEngineArray 
//	объект типа StorageEngine можно как создавать внутри класса Scale, так и передавать снаружи заранее созданный; 
//	советую второй вариант
//	ну и весы, когда хотят суммарный вес продуктов, обращаются именно к объекту типа StorageEngine
//let newStorageEngine:Products = uniFactory<Products>;
/*	так, окей, в классе Scales нужно описать переменную типа StorageEngine и присвоить ей в
        конструкторе объект этого класса для создания объекта да, надо использовать эту фабрику*/
var Scales = /** @class */ (function () {
    function Scales(_storageEngine) {
        this.storageEngine = _storageEngine;
    }
    ;
    Scales.prototype.getSumWeight = function () {
        return this.storageEngine.getSumWeight();
    };
    ;
    Scales.prototype.getNameList = function () {
        return this.storageEngine.getNameList();
    };
    ;
    return Scales;
}());
;
var newStorageEA = new ScalesStorageEngineArray();
var scales = new Scales(newStorageEA);
var fruit1 = new Products("Apple 1", 2);
var fruit2 = new Products("Apple 2", 3);
var car1 = new Products("Volvo XC90", 2400);
var car2 = new Products("Mazda 6", 1800);
var fruitBasket = scales.storageEngine.addItem(fruit1);
fruitBasket = scales.storageEngine.addItem(fruit2);
var garage = scales.storageEngine.addItem(car1);
garage = scales.storageEngine.addItem(car2);
console.log(scales.storageEngine.getSumWeight());
console.log(scales.storageEngine.getNameList());
console.log(scales.storageEngine.getCount());
console.log(scales.storageEngine.getItem(3));
//# sourceMappingURL=app.js.map