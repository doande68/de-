class Store{
    litsProduct
    constructor() {
        this.litsProduct = []
    }
    add(newProduct){
         this.litsProduct.push(newProduct)
    }
    fileAll(){
        return this.litsProduct;
    }
    remove(index){
        this.litsProduct.splice(index, 1 )
    }
    edit(index,value){
       this.litsProduct[index] = value
    }
}