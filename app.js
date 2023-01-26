class LinkedList {
    constructor(value, index){
        this.value = value
        this.index = index
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
            address.next = newNode
        }

    }

    prepend(value){
        // adds a new node containing value to the start of the list
        if(this.head === null){
            let newNode = new Node(value)
            this.head = newNode
        }else{
            let newNode = new Node(value, this.head)
            this.head = newNode
        }

    }

    size(){
        // returns the total number of nodes in the list
        if(this.head !== null){
            let address = this.head
            let nodes = 1           
            
            while(address.next !== null){
                address = address.next
                nodes++
            }
            console.log(nodes)
        }else console.log('The are not nodes yet')
    }

    getHead(){
        // returns the first node in the list
        return this.head.next;
    }

    tail(){
        // returns the last node in the list
        let address = this.head
            while(address.next !== null){
                address = address.next
            }
        return address
    }

    at(index){
        // returns the node at the given index
        let address = this.head
        index--
        for(let i=0; i<index; i++){
            address = address.next
        }  
        return address
    }  
    
    pop(){
        // removes the last element from the list
        let address = this.head
            while(address.next.next !== null){
                address = address.next
            }

            address.next = null
    }

    contains(value){
        // returns true if the passed in value is in the list and otherwise returns false.
        let address = this.head
            while(address.next !== null){
                address = address.next
                if(address.value === value){
                    return true
                }
            }
        return false
    }
    

    find(value){
        // returns the index of the node containing value, or null if not found.
        let address = this.head
        let index = 1
            while(address !== null){
                if(address.value === value){
                    return index
                }
                index++
                address = address.next
            }
   
        return null
    }

    toString (){
        let address = this.head
        let string = ``
            while(address !== null){
                string += `( ${address.value} ) -> `
                address = address.next
            }
        return `${string} null`
        // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    }


    insertAt(value, index) {
    //insertAt(value, index) that inserts a new node with the provided value at the given index.
        if(index === 1){
            //append first
        }

        //if index === al tamaño (es decir al último), append last

        let address = this.head
        let prev = null
        index--
        for(let i=0; i<index; i++){
            prev = address
            address = address.next
        }  

        prev.next = new Node(value, address)
       
        return
    }
}


class Node {
    constructor(value = null, next = null){
        this.value = value
        this.next = next
       // this.address 
    }
}

const myList = new LinkedList
myList.size();
myList.append(2)
myList.prepend(1)
myList.append(3)
myList.append(4)
myList.size()
console.log(myList.getHead()) 
console.log(myList.tail())
console.log(myList.at(4))
console.log(myList.pop())
myList.append(5)
console.log(myList.contains(3))
console.log(myList.find(5))

myList.insertAt(4, 4)

console.log(myList)
console.log(myList.toString())