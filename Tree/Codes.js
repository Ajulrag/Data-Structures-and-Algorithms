/*Binary Search Tree Creation--Empty Tree
---------------------------------------------*/
class Node{
    constructor(value) {
        this.value = value
        this.left =  null 
        this.right = null
    }
}

class BST{
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root == null;
    }
}

const bst = new BST();
console.log("Is empty?",bst.isEmpty()); //Is empty? true
/*----------------------------------------------------------- */

/* Adding a node to empty Tree using Reccursion
-------------------------------------------------- */
class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor() {
        this.root =null
    }

    isEmpty(){
        return this.root == null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(root, newNode) {
        if(newNode.value < root.value) {
            if(root.left == null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if(root.right == null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }
}

const bst =new BST();

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(7)

//----------------------------------------------------------


/* Search method in Binary Search Tree
------------------------------------------------------------ */
class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor() {
        this.root =null
    }

    isEmpty(){
        return this.root == null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(root, newNode) {
        if(newNode.value < root.value) {
            if(root.left == null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if(root.right == null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if(!root) {
            return false;
        } else {
            if(root.value == value) {
                return true;
            } else if(value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value);
            }
        }
    }
}

const bst =new BST();

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(7)

console.log(bst.search(bst.root, 7));//true

//-------------------------------------------------------

/* TRAVERSING 
---------------------------------------------------------*/
class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor() {
        this.root =null
    }

    isEmpty(){
        return this.root == null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(root, newNode) {
        if(newNode.value < root.value) {
            if(root.left == null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if(root.right == null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if(!root) {
            return false;
        } else {
            if(root.value == value) {
                return true;
            } else if(value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value);
            }
        }
    }

    preOrder(root) {
        if(root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if(root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if(root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
}

const bst =new BST();

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(7)
bst.insert(4)

bst.preOrder(bst.root);//10 5 4 7 15
console.log("--------------");
bst.inOrder(bst.root);//4 5 7 10 15
console.log("--------------");
bst.postOrder(bst.root)//4 7 5 15 10