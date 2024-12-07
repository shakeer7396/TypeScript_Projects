"use strict";
class BottleMaker {
    constructor() {
        this.name = "Milton";
    }
}
class MetalBottleMaker extends BottleMaker {
    constructor() {
        super(...arguments);
        this.material = "metal";
    }
    changeName() {
        this.name = "Some Name";
    }
}
let b3 = new MetalBottleMaker();
console.log(b3);
// b3.name = "Some other name";  // there shows error outside the class not accessable
