
class Scales {

    name:string;
    weight:number;
    listAddProducts:Array<string>;
    baseProducts:{name:string, weight:number};
    sumScale:number;
    
    constructor(_name:string,_weight:number) {
        this.weight=0;
        this.sumScale=0;
        this.name=_name;
        this.weight=_weight;
    }

    add(_name:string,_weight:number):void {
        this.baseProducts={name:_name, weight:_weight}
        
    };

    getSumScale(_baseProducts:{name:string, weight:number}):number {
			this.baseProducts=_baseProducts;
      for (var key in this.baseProducts) {
        this.sumScale += this.baseProducts[key]
			};
				
        return this.sumScale;
    };
    
    getNameList(_baseProducts:{name:string, weight:number}):string[] {

			this.listAddProducts = Object.keys(_baseProducts);
      return this.listAddProducts;
    };

}

class Product {
    
	speed:number;
	sailState:boolean;

	constructor() {
			this.speed=0; 
			this.sailState=false;
	}

	setSail(_state:boolean):void {
			this.sailState=_state;
	}

	start(_speed:number):void {
			this.speed=_speed;
			this.setSail(true);
	}

	stop():void {
			this.speed=0;
			this.setSail(false);
	}    

	showShip():void {
			console.log("ship sailState="+this.sailState
				+" speed="+this.speed);
	}
}




class Car {

    numb:string;
    speed:number;
    
    constructor(_numb:string) {
        this.speed=0; 
        this.numb=_numb;
    }

    start(_speed:number):void {
        this.speed=_speed;
    }

    stop():void {
        this.speed=0;
    }
    
    beep():void {
        console.log("car "+this.numb+" beeep!");
    }

}

class Ship {
    
    speed:number;
    sailState:boolean;

    constructor() {
        this.speed=0; 
        this.sailState=false;
    }

    setSail(_state:boolean):void {
        this.sailState=_state;
    }

    start(_speed:number):void {
        this.speed=_speed;
        this.setSail(true);
    }

    stop():void {
        this.speed=0;
        this.setSail(false);
    }    

    showShip():void {
        console.log("ship sailState="+this.sailState
          +" speed="+this.speed);
    }
}

    
function trainer(trainee:Car|Ship):void {
    for ( let test=0; test<10; test++ ) {
        if ( trainee instanceof Car ) {
            // внутри этого if считается, что trainee - Car
            trainee.beep();
        }
        if ( trainee instanceof Ship ) {
            // внутри этого if считается, что trainee - Ship
            trainee.showShip();
        }
    }
}

let car1:Car=new Car("2870-ОГО");
trainer(car1);

let ship1:Ship=new Ship();
trainer(ship1);
