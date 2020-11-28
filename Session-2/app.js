class Person {
  name;
  age;
  address;
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  speak() {
      console.log('hihi')
  }
  introduce() {
      console.log(`chào mọi người, mình tên là ${this.name}. Mình năm nay ${this.age} tuổi. Quê mình ở ${this.address}`)
  }
}

let name = "Thành";
let age = 24;
let address = "HN";

let person1 = new person(name,age,address);
let person2 = new person('a',12,'address');
let person3 = new person('b',15,'address');
let person2 = new person('a',2,'b')
person1.name = name;
person1.age = age;
person1.address = address;
console.log(person1)

class OldGirlfriend extends Person {
  favarites;
  hair;
  weight;
  height;
  constructor(name, age, address, favarites, hair, height, weight) {
    super(name,age,address);
    this.favarites = favarites;
    this.hair = hair;
    this.height = height;
    this.weight = weight;
    console.log(this);
  }
}

let Khanhhuyen = new OldGirlfriend(
  "Huyền",
  23,
  "HN",
  "Hát",
  "Ngắn",
  "160cm",
  "46kg"
);
let Dieungan = new OldGirlfriend(
  "Ngân",
  25,
  "NĐ",
  "Hát",
  "Ngắn",
  "163cm",
  "48kg"
);
let Tramanh = new OldGirlfriend(
  "Trâm Anh",
  24,
  "HN",
  "Chơi game",
  "Ngắn",
  "160cm",
  "47kg"
);
Khanhhuyen.speak();
Khanhhuyen.introduce();

class Boy extends Person {
    size;
    handsome;
    rich;
    constructor(size,handsome,rich,name,age,address) {
        super(name,age,address);
        this.size = size ; 
        this.handsome = handsome;
        this.rich = rich ;
        console.log(this)
    }
}

class Girl extends Person {
    size;
    beauty;
    good;
    constructor(size,beauty,good,name,age,address) {
        super(name,age,address);
        this.size = size ;
        this.beauty = beauty;
        this.good = good ; 
        console.log(this)
    }
}

class GoodBoy extends Boy {
    tediuous;
    constructor(size,handsome,rich,name,age,address,tediuous) {
        super(size,handsome,rich,name,age,address);
        this.tediuous = tediuous ;
    }
}

class BadBoy extends Boy {
    salty ;
    constructor(size,handsome,rich,name,age,address,salty) {
        super(size,handsome,rich,name,age,address);
        this.salty = salty ;
    }
    
}

class YellowBoy extends Boy {
    payment ; 
    constructor(size,handsome,rich,name,age,address,payment) {
        super(size,handsome,rich,name,age,address);
        this.payment = payment;
    }
    
}

let BadBoy1 = new BadBoy('M',9,5,"nam",22,"HN",10);
let Girl1 = new Girl ('M',10,8,"Ngọc",22,"HN");
let GoodBoy1 = new GoodBoy('M',5,10,"Tài",23,"HN");
let YellowBoy1 = new YellowBoy('M',5,8,"A",23,"HN",300)

class MyMath {
    static Sum(a,b) {
        return a + b;
    }
    static substract ( a, b) {
        return a - b ; 
    }
    static multiply ( a, b ) {
        return a*b;
    }
    static divide(a,b) {
        if(b!=0) return a/b ; 
        return false;
    }
}

// let m1 = new MyMath();
console.log(MyMath.Sum(1,2));
console.log(MyMath.substract(10,2));
console.log(MyMath.multiply(4,2));
console.log(MyMath.divide(6,2));