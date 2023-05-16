class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertAt(value,index) {
        if(index < 0 || index > this.size) {
            return console.log("Please provide valid index");
        } else {
            let node = new Node(value);
            let curr,prev;

            if(index == 0){
                node.next = this.head;
                this.head = node;
            } else {
                
            }
        }
    }
}