class Stack{
    constructor(){
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
       return this.items.pop();
    }

    size() {
        return this.items.length
    }

    peek() {
       return this.items[this.items.length-1];
    }

    isEmpty() {
       return this.items.length === 0;
    }

    print() {
        console.log(this.items.toString());
    }
}


const stack = new Stack();

stack.push(8);
stack.push(9);
stack.push(5);
stack.print();

console.log(stack.pop());
stack.print()

console.log(stack.isEmpty());
