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

function showAll(){
    let productInStore = store.fileAll()
    let str = ``
    for (let i = 0; i < productInStore.length; i++) {
        str += `
        <tr>
        <td>${productInStore[i].id}</td>
        <td>${productInStore[i].name}</td>
        <td><img src="${productInStore[i].img}" alt=""></td>
        <td>${productInStore[i].quantity}</td>
        <td>${productInStore[i].price}</td>
        <td><button style="
        background-color: coral" onclick="remove(${i})">Remove</button></td>
        <td><button style="background-color: aqua" onclick="showFromEdit(${i})">Edit</button></td>
        </tr>
        `
    }
    document.getElementById("product").innerHTML = str
}
function add(){
    let id = +document.getElementById("id").value
    let name  = document.getElementById("name").value
    let img = document.getElementById('img').value
    let quantity = +document.getElementById("quantity").value
    let price = +document.getElementById("price").value
    let newProduct = new Product(id,name,img,quantity,price)
    store.add(newProduct)
    console.log(store)
    alert(" Add Success")
    showAll()
    document.getElementById('form-add').innerHTML= '';
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
    <td>Img</td>
    <td><input type="text" id="img"></td>
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
function search(){
    let nameproduct = prompt("Nhập tên sản phẩm cần tìm :");
    let str = ''
    for (let i = 0; i <array.length ; i++) {
        if (store.search(i, name_product) !== -1){
            str += `
             <tr>
        <td>${array[i].id}</td>
        <td>${array[i].name}</td>
        <td><img src="${productInStore[i].img}" alt=""></td>
        <td>${array[i].quantity}</td>
        <td>${array[i].price}</td>
        <td><button style=" background-color: coral" onclick="remove(${i})">Remove</button></td>
        <td><button style="background-color: aqua" onclick="showFromEdit(${i})">Edit</button></td>
        </tr>
            `
        }
    }
    document.getElementById('find').innerHTML = str
}

function showFromEdit(index){
    let productInStore = store.fileAll();
    let productEdit = productInStore[index]
    document.getElementById('from-edit').innerHTML = `
<center>
     <h1>Edit Product</h1>
          <table style="border: 1px solid black">
            <tr>
                <td>Id:</td>
                <td><input type="number" value="${productEdit.id}" id="idedit"></td>
            </tr>
            <tr>
                <td>Name:</td>
                <td><input type="text" value="${productEdit.name}" id="nameedit"></td>
            </tr>
            <tr>
                <td>Img:</td>
                <td><input type="text" value="${productEdit.img}" id="imgedit"></td>
            </tr>
            <tr>
                <td>Quantity:</td>
                <td><input type="number" value="${productEdit.quantity}" id="quantityedit"></td>

            </tr>
            <tr>
                <td>Price:</td>
                <td><input type="number" value="${productEdit.price}" id="priceedit"></td>
            </tr>
            <tr>
                <th colspan="2">
                    <button onclick="edit(${index})">Submit</button>
                </th>
            </tr>
        </table>
        </center>
              `;


}
function edit(index){
    let id = document.getElementById("idedit").value;
    let name  = document.getElementById("nameedit").value;
    let img = document.getElementById("imgedit").value;
    let quantity = document.getElementById("quantityedit").value;
    let price = document.getElementById("priceedit").value;
    let newProductEdit = new Product(id,name,quantity,price)
    store.edit(index,newProductEdit);
    showAll()
    alert('Edit Success')
    document.getElementById('from-edit').innerHTML=''

}

showAll()