class Store{
    litsProduct
    constructor() {
        this.litsProduct = JSON.parse(localStorage.setItem("listProduct"));

    }
    add(newProduct){
         this.litsProduct.push(newProduct)
        localStorage.setItem("litsProduct",JSON.stringify(this.litsProduct) )
    }
    fileAll(){
        this.litsProduct = JSON.parse(localStorage.setItem("listProduct"));
        return this.litsProduct;
    }
    remove(index){
        this.litsProduct.splice(index, 1 )
        localStorage.setItem("litsProduct",JSON.stringify(this.litsProduct) )
    }
    edit(index,newProduct){
       this.litsProduct[index] = newProduct
        localStorage.setItem("litsProduct",JSON.stringify(this.litsProduct) )
    }
    search(index,value){
        let valueIndex = this.litsProduct[index].name.toLowerCase().indexOf(value.toLowerCase());
        return valueIndex;
    }

}
