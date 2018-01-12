
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

class Scales {

		listAddedProducts:Array<Products>=[];

		constructor() {    };

		add(currentProduct:Products):void {
				
				this.listAddedProducts.push(currentProduct);

		};

		remove(currentProduct:Products):void {
			
			 let i = this.listAddedProducts.indexOf(currentProduct);
			 this.listAddedProducts.splice(i,1);
			
		};

		getSumWeight():number {
			let sumWeight:number=0;

			for (let currentProduct of this.listAddedProducts) {
				sumWeight += currentProduct.getWeight();
			};
				
			return sumWeight;
		};
		
		getNameList():string[] {
			let namesList:Array<string>=[];

			for (let currentProduct of this.listAddedProducts) {
				namesList.push(currentProduct.getName());
			};
			return namesList;
		};

};

class Apple extends Products {
	constructor(name:string,weight:number) {
		super(name, weight);
	}
};

class Tomato extends Products {
	constructor(name:string,weight:number) {
		super(name, weight);
	}
};

class Cucumber extends Products {
	constructor(name:string,weight:number) {
		super(name, weight);
	}
};

let scales = new Scales();

let apple = new Apple("яблоки", 1000);

let tomato = new Tomato("помидоры", 1500);

let cucumber = new Cucumber("огурцы", 2500);


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