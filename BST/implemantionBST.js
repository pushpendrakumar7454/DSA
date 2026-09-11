
class Node{
    constructor(val){
        this.val=val
        this.left=null
        this.right=null
    }
}


class BST{
    constructor(){
        this.root=null
    }
    inserNote(root,val){
        if(root===null){
            root=new Node(val)
            return root
        }
        if(root.val>val){
            root.left=this.inserNote(root.left,val)
        }else if(root.val<val){
            root.right=this.inserNote(root.right,val)
        }
        return root
    }

    LDR(root){
        if(root===null) return
        this.LDR(root.left)
        process.stdout.write(root.val+" ")
        this.LDR(root.right)
    }
}

let obj = new BST()

obj.root = obj.inserNote(obj.root, 50)
obj.root = obj.inserNote(obj.root, 40)
obj.root = obj.inserNote(obj.root, 30)
obj.root = obj.inserNote(obj.root, 45)
obj.root = obj.inserNote(obj.root, 55)
obj.root = obj.inserNote(obj.root, 60)


console.log("Inorder:")

obj.LDR(obj.root)