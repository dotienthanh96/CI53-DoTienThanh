import Person from "./person.js" ;
export default class Boy extends Person {
    handsome;
    constructor(name,age,handsome) {
        super(name,age);
        this.handsome = handsome ;
    }
}