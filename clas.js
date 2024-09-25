class animal{
    constructor(name,legcount)
    {
        this.name=name;
        this.legcount=legcount;
    }
    speak()
    {
        console.log("hi there "+ this.legcount)
    }
}
let dog= new animal("dog",5);
console.log(dog.name);
