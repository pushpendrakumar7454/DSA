class Node{
    constructor(val){
        this.data=val
        this.next=null
    }
}


class LL{
    constructor(){
        this.head=null
        this.size=0

       
    }
    inserAtFirst(val){
        this.size++
        let newNode=new Node(val)
        if(this.head==null){
             this.head=newNode
             return
        }
        newNode.next=this.head
        this.head=newNode

    }
}