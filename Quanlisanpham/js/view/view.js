let store = new Store()
// function main(){
//     let product = new Product(1, 'Đề',8,1200)
//     store.add(product)
//
//     let productInStore = store.fileAll()
//     for (let i = 0; i <productInStore.length ; i++) {
//         console.log(productInStore[i])
//     }
//     store.remove(0)
//     console.log(store)
// }
// main()
let array = store.fileAll()
function showAll(){
    let productInStore = store.fileAll()
    let str = ``
    for (let i = 0; i < productInStore.length; i++) {
        str += `
        <tr>
        <td>${productInStore[i].id}</td>
        <td>${productInStore[i].name}</td>
        <td>${productInStore[i].quantity}</td>
        <td>${productInStore[i].price}</td>
        <td><button style="background-color: coral" onclick="remove(${i})">Remove</button></td>
        <td><button style="background-color: aqua" onclick="edit(${i})">Edit</button></td>
        </tr>
        `
    }
    document.getElementById("product").innerHTML = str
}
function add(){
    let id = document.getElementById("id").value
    let name  = document.getElementById("name").value
    let quantity = document.getElementById("quantity").value
    let price = document.getElementById("price").value
    let newProduct = new Product(id,name,quantity,price)
    store.add(newProduct)
    console.log(store)
    alert(" Add Success")
    showAll()
    document.getElementById('from-add').innerHTML= []
}
function showFormAdd() {
    document.getElementById('form-add').innerHTML = `
    <center>
    <h1>Add Product</h1>
<table style="border: 1px solid black ; margin-top: 50px " >
  <tr>
    <td>Id</td>
    <td><input type="number" id="id"></td>
  </tr>
  <tr>
    <td>Name</td>
    <td><input type="text" id="name"></td>
  </tr>
  <tr>
    <td>Quantity</td>
    <td><input type="number" id="quantity"></td>
  </tr>
  <tr>
    <td>Price</td>
    <td><input type="number" id="price"></td>
  </tr>
  <tr>
    <th colspan="2"><button onclick="add()">Add</button></th>
  </tr>
</table>
</center>
    `
}
function remove(index) {
    let isConfirm = confirm("Bạn muốn xóa không ?")
    if(isConfirm) {
        store.remove(index);
        showAll();
    }
}

function edit(index){
    let id = document.getElementById("id1").value
    let name  = document.getElementById("name1").value
    let quantity = document.getElementById("quantity1").value
    let price = document.getElementById("price1").value
    let ediProduct = new Product(id,name,quantity,price)
    store.edit(index,ediProduct)
    showAll()
}

function showFromEdit(){
    document.getElementById('from-edit').innerHTML `
     <h1>Edit product</h1>
          <table style="border: 1px solid black">
            <tr>
                <td>Id:</td>
                <td><input type="number" value="${newProduct.id}" id="id"></td>
            </tr>
            <tr>
                <td>Name:</td>
                <td><input type="text" value="${newProduct.name}" id="name"></td>
            </tr>
            <tr>
                <td>Quantity:</td>
                <td><input type="number" value="${newProduct.quantity}" id="quantity"></td>

            </tr>
            <tr>
                <td>Price:</td>
                <td><input type="number" value="${newProduct.price}" id="price"></td>
            </tr>
            <tr>
                <th colspan="2">
                    <button onclick="edit(${index})">Submit</button>
                </th>
            </tr>
        </table>
              `;


}