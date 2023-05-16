class Queue{
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue(){
        return this.items.shift();
    }

    isEmpty 
}