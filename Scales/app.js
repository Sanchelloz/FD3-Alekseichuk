var Car = /** @class */ (function () {
    function Car(_numb) {
        this.speed = 0;
        this.numb = _numb;
    }
    Car.prototype.start = function (_speed) {
        this.speed = _speed;
    };
    Car.prototype.stop = function () {
        this.speed = 0;
    };
    Car.prototype.beep = function () {
        console.log("car " + this.numb + " beeep!");
    };
    return Car;
}());
var Ship = /** @class */ (function () {
    function Ship() {
        this.speed = 0;
        this.sailState = false;
    }
    Ship.prototype.setSail = function (_state) {
        this.sailState = _state;
    };
    Ship.prototype.start = function (_speed) {
        this.speed = _speed;
        this.setSail(true);
    };
    Ship.prototype.stop = function () {
        this.speed = 0;
        this.setSail(false);
    };
    Ship.prototype.showShip = function () {
        console.log("ship sailState=" + this.sailState
            + " speed=" + this.speed);
    };
    return Ship;
}());
function trainer(trainee) {
    for (var test = 0; test < 10; test++) {
        if (trainee instanceof Car) {
            // внутри этого if считается, что trainee - Car
            trainee.beep();
        }
        if (trainee instanceof Ship) {
            // внутри этого if считается, что trainee - Ship
            trainee.showShip();
        }
    }
}
var car1 = new Car("2870-ОГО");
trainer(car1);
var ship1 = new Ship();
trainer(ship1);
//# sourceMappingURL=app.js.map