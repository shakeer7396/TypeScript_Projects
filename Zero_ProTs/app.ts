class BottleMaker{
    protected name = "Milton";
    
}
class MetalBottleMaker extends BottleMaker{
    public material ="metal";

    changeName(){
        this.name ="Some Name"
    }
    
}
let b3=new MetalBottleMaker();
console.log(b3);


// b3.name = "Some other name";  // there shows error outside the class not accessable