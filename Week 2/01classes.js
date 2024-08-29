class Rectangle{
    constructor(width, height, color){ //constructor is like a function that gets automatically called when you attach the new variable
        this.width = width;     //this refers to the object inside which it is placed
        this.height = height;
        this.color = color;
    }
    area(){
        const area = this.width * this.height;
        return area;
    }
    paint(){
        console.log(`Painting with color ${this.color}`);
    }
}
const rect = new Rectangle(2,4,"blue");  //new means I have to create a new object of this class
                                        //rect variable is an instance or an object of rectangle class
const ans = rect.area();
console.log(ans);
rect.paint()


//---------YOU CAN TOTALLY DO ALL OF THIS WITHOUT USING CLASSES BY JUST USING OBJECTS