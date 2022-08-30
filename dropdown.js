var container=document.getElementById("container");
let data=[]
document.getElementById("additem").addEventListener('click',()=>{
    var item=prompt("What would you like to add?", "");
    if(item!=""){
        data.push(item);
    }
    displayItem();

})

function displayItem(){
    container.innerHTML="";
    var select=document.createElement("select");
    select.id="dselect";
    for(var i=0; i<data.length; i++){
        var option=document.createElement("option");
        option.value=i;
        option.innerText=data[i];
        select.appendChild(option);
    }
    container.appendChild(select);
}
document.getElementById("removeItem").addEventListener('click',()=>{
    var selectedItem = document.getElementById("dselect");
    // console.log(selectedItem.value)
    let remainItem=data.filter((value, index)=>{
        return index!=selectedItem.value;
    })
    data=remainItem
    
    displayItem();
})

document.getElementById("displayItem").addEventListener('click',()=>{
    let alertdata="";
    for(let i=0; i<data.length; i++){
        alertdata+=`${data[i]} `;
    }
    alert(alertdata+"- length: "+data.length);
})