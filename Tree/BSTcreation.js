/*Binary Search Tree Creation--Empty Tree
---------------------------------------------*/
class Node{
    constructor(value) {
        this.value = value;
        this.left = null
        this.right = null
    }
}

class BST{
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root == null
    }
}

const bst = new BST();
console.log("Is empty?",bst.isEmpty()); //Is empty? true