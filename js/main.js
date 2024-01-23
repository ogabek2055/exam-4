let data = [
  {
    id: 2,
    name: "Default",
    email: "default@gmail.com",
  },
];

function readAll() {

  localStorage.setItem("object", JSON.stringify(data));
  var tableData = document.querySelector(".data_table");

  var object = localStorage.getItem("object");
  var objectData = JSON.parse(object);
  var elements = "";

  objectData.map((record) => {
    elements += `
   <tr>
   <td>${record.name}</td>
   <td>${record.email}</td>
   <td>
   <button class="edit" onclick={edit(${record.id})}>Edit</button>
   <button class="delete"  onclick={delet(${record.id})}>Delete</button>
   </td>
   </tr>

    `;
  });

  tableData.innerHTML = elements;
}

function delet(id) {
  data = data.filter((rec) => rec.id !== id);
  alert("Successfully deleted! ✔")
  readAll();
}

function create() {
  document.querySelector(".create_form").style.display = "block";
  document.querySelector(".add_div").style.display = "none";
}

function add() {
  var name = document.querySelector(".name").value;
  var email = document.querySelector(".email").value;
  
  if (name && email) {
    var newObj = { id: 3, name: name, email: email };
    data.push(newObj);
    
    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add_div").style.display = "block";
    alert("Successfully created ✔");

    readAll();
  }else {
    alert("Name yoki email kiritilmagan!!! 🙄 ")
  }
}

function edit(id) {
  document.querySelector(".update_form").style.display = "block";
  var obj = data.find((rec) => rec.id === id);
  document.querySelector(".uname").value = obj.name;
  document.querySelector(".uemail").value = obj.email;
  document.querySelector(".id").value = obj.id; 
}

function update() {
  var id = parseInt(document.querySelector(".id").value);
  var name = document.querySelector(".uname").value;
  var email = document.querySelector(".uemail").value;

  var index = data.findIndex((rec) => rec.id === id);
  data[index] = { id, name, email };
  alert("Successfully Edited ✔!")
  document.querySelector(".update_form").style.display = "none";

  readAll();
}
