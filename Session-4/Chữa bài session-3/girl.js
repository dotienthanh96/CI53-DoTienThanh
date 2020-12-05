import Person from "./person.js" ;
export default class Girl extends Person {
    beauty;
    constructor(name,age,beauty) {
        super(name,age);
        this.beauty = beauty ;
    }
}