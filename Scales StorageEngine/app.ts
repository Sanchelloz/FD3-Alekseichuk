interface IStorageEngine {
	addItem(item:Products):void;
	
	getItem(index:number):Products;

	getCount():number;

	getSumWeight():number;

	getNameList():string[];
}

class Products {
		
	name:string;
	weight:number;

	constructor(currentName:string,currentWeight:number) {
		this.name=currentName; 
		this.weight=currentWeight;
	};

	getName():string {
			return this.name;
	};

	getWeight ():number {
		return this.weight;
	};
 
};

class ScalesStorageEngineArray implements IStorageEngine {
	
	items: Array<Products>=[];;
	
	constructor() {};

  addItem(item:Products):void{
  	this.items.push(item);

    console.log("сохранён объект с именем"
      + item.getName() + " весом"
      + item.getWeight() +" грамм"
    );
  };

  getItem(index:number):Products{

  	return this.items[index]
  };

  getCount():number{
  	return this.items.length
	};

  getSumWeight():number {
	  let sumWeight:number=0;

	  for (let currentProduct of this.items) {
		  sumWeight += currentProduct.getWeight();
	  };
		 
	  return sumWeight;
  };
 
  getNameList():string[] {
	  let namesList:Array<string>=[];

	  for (let currentProduct of this.items) {
		  namesList.push(currentProduct.getName());
	  };

	  return namesList;
  };
};


// параметризованная фабрика
// умеет создавать и возвращать объекты любых типов
/*function uniFactory<objtype>(classRef: { new (): objtype; }): objtype {

   return new classRef();

};*/
//	описывайте класс "весы", который шаблонизован StorageEngine и создавайте весы, указывая как тИповый аргумент ScalesStorageEngineArray 
//	объект типа StorageEngine можно как создавать внутри класса Scale, так и передавать снаружи заранее созданный; 
//	советую второй вариант
//	ну и весы, когда хотят суммарный вес продуктов, обращаются именно к объекту типа StorageEngine
/*	так, окей, в классе Scales нужно описать переменную типа StorageEngine и присвоить ей в
 		конструкторе объект этого класса для создания объекта да, надо использовать эту фабрику*/

//let newStorageEngine:Products = uniFactory<Products>;


class Scales<StorageEngine extends IStorageEngine> {

		storageEngine:StorageEngine;

		constructor(_storageEngine) {
			this.storageEngine = _storageEngine;
		};

	getSumWeight():number {
		 
	  return this.storageEngine.getSumWeight();
  };
 
  getNameList():string[] {

	  return this.storageEngine.getNameList();
  };


};


let scales = new Scales(ScalesStorageEngineArray);

//let newScales<StorageEngine> = uniFactory<StorageEngine>(StorageEngine);


// let apple = new Apple("яблоки", 1000);

// let tomato = new Tomato("помидоры", 1500);

// let cucumber = new Cucumber("огурцы", 2500);


// scales.add("apple");
// scales.add("tomato");

// console.log(scales.getNameList());
// console.log(scales.getSumWeight());

// scales.add(cucumber);


// console.log(scales.getNameList());
// console.log(scales.getSumWeight());

// scales.remove(apple);


// console.log(scales.getNameList());
// console.log(scales.getSumWeight());