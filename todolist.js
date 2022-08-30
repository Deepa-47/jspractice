let item=document.getElementById("input");
let data=[];
let updateId=-1;
document.getElementById("btn").onclick=function(){
    if(updateId>=0){
        data[updateId] = document.getElementById("input").value;
        printAllData();
        item.value="";
        document.getElementById("btn").innerHTML="Add";
        updateId=-1;
    }else
    if(item.value==""){
        alert("Enter name first");
    }
    else
    {
        data.push(item.value);
        printAllData();
        item.value="";
    }

}
function printAllData(){
    console.log(data);
    let container=document.querySelector(".container");
    container.innerHTML="";
    for(let i=0;i<data.length;i++)
    {
        container.innerHTML+=`<p>${data[i]} <button onclick="deleteItem(${i})">Delete</button><button onclick="updateItem(${i})">update</button></p>`;
    }
}

function deleteItem(id){
    console.log(id);
    data = data.filter((value, index)=>{
        return index!=id;
    }) 
    console.log(data);
    printAllData();
}

function updateItem(id){
    console.log(id);
    updateId=id;
    item.value=data[updateId];
    document.getElementById("btn").innerHTML="update";
}