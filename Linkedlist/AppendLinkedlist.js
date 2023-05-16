class Node {
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

    Append(value) {
        let node = new Node(value);
        let current;
        if(this.head == null) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }

            current = current.next;
        }
     this.size++;

    }
}

let LL = new Linkedlist();

LL.Append(10);
console.log(LL);
