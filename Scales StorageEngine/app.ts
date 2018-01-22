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
	
	constructor() {
    //this.items=[];
  };

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
  	return this.items.length-1
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
}



class Scales {

		//listAddedProducts:Array<Products>=[];
		constructor() {    };
		// add(currentProduct:Products):void {
		// 		this.listAddedProducts.push(currentProduct);
		// };
		// remove(currentProduct:Products):void {
			
		// 	let i = this.items.indexOf(currentProduct);
		// 	this.items.splice(i,1);
		// };
};






let scales = new Scales();

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