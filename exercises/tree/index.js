// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data){
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data){
        this.children = this.children.filter(node => {  //in filter if we want to return false it means we want to remove it
            return node.data !== data;
        });
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    traverseBF(fn){
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();       //calls first element out of the array
        
        arr.push(...node.children);        //push(add) it at the end
        fn(node);
        }
    }

    traverseDF(fn){
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();       //calls first element out of the array
        
        arr.unshift(...node.children);        //unshift(add) it at the start
        fn(node);
        }
    }
}

module.exports = { Tree, Node };
