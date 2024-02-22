class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    area() {
      let a = this.width * this.height;
      console.log(`矩形の面積は${a}`);
  
    }
  
    perimeter() {
      let b = (this.width + this.height) * 2;
      console.log(`矩形の周囲長は${b}`);
    }
  }
  
  const rectangle = new Rectangle(10, 10);
  
  rectangle.area();
  rectangle.perimeter();