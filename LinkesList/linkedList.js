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
        let newNode=new Node(val)
        if(this.head==null){
             this.head=newNode
        }
    }
}