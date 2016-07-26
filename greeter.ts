class Greeter{
    greeting:string;
    constructor(message:string) {
        this.greeting = message;
     }
    greet() {
        return "<h1>" + this.greeting +"</h1>";
    }
};

var greeter = new Greeter("Hello World");
document.body.innerHTML = greeter.greet();
