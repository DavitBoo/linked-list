class LinkedList {
    constructor(value){
        this.value = value;
        this.index = 0;
        this.head = null
        this.list = []
    }

    append(value){
        // adds a new node containing value to the end of the list
        let newNode = new Node(value)

        if(this.head === null)
            this.head = newNode
        else{
            let address = this.head
            while(address.next !== null){
                address = address.next
            }
            console.log(address)
            console.log(newNode)
            address.next = newNode
        }

    }

    prepend(value){
        // adds a new node containing value to the start of the list
        if(this.head === null){
            let newNode = new Node(value)
            this.head = newNode
        }else{
            // console.log(this.head.next)
            let newNode = new Node(value, this.head)
            this.head = newNode
            // console.log()
        }

    }

    size(){
        // returns the total number of nodes in the list
    }

    head(){
        // returns the first node in the list
    }

    tail(){
        // returns the last node in the list
    }

    at(index){
        // returns the node at the given index
    }  
    
    pop(){
        // removes the last element from the list
    }

    contains(value){
        // returns true if the passed in value is in the list and otherwise returns false.
    }

    find(value){
        // returns the index of the node containing value, or null if not found.
    }

    toString (){
        // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    }
}


class Node {
    constructor(value = null, next = null){
        this.value = value
        this.next = next
        this.address 
    }
}

const myList = new LinkedList
myList.append(1)
myList.prepend(2)
myList.append(3)
myList.append(4)
console.log(myList)