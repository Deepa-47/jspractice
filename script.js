//var url="https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all";
var url="https://my-json-server.typicode.com/FreSauce/json-ipl/data";
async function getData(){
    let res=await fetch(url);
    let data=await res.json();
    let tbody=document.querySelector(".tablebody");
    data.forEach((e) => {
        let tr=document.createElement("tr");
        let td=document.createElement("td");
        td.innerText=e.No;
        tr.append(td);
        tbody.append(tr);console.log(e.fact);
        
    });
}
getData();

var printMethod = {

    hello: "world",
    
    func: function() {
    
    var self = this;
    
    console.log("First Output : this.hello = " + this.hello);
    
    console.log("Second output: self.hello = " + self.hello);
    
    (function() {
    
    console.log("Third Output: this.hello = " + this.hello);
    
    console.log("Fourth output: self.hello = " + self.hello);
    
    }());
    
    }
    
    };
    
    printMethod.func();

function greet (person) {

    if (person == { name: 'raj' }) {
    
    return 'hey raj';
    
    } else {
    
    return 'hey simran';
    
    }
    
    }
    
    console.log(greet({ name: 'raj' }));

    console.log(typeof undefined);
    console.log(typeof null)
    console.log(typeof NULL)
    console.log(typeof typeof 1)
/*
document.getElementById("btn").onclick=function(){
    if(document.querySelector(".main input").value.length==0){
        alert("Enter name first");

    }
    else{
        document.querySelector(".container").innerHTML +=`
        <div class="task">
        <span id="taskname">
        ${document.querySelector(".main input").value}
        </span>
        <button class="delete">Delete</button>
        <button class="edit">Edit</button>
        </div>`;
        document.getElementById("input").value="";
        var currentTask=document.querySelectorAll(".delete");
        for(var i=0;i<currentTask.length;i++){
            currentTask[i].onclick=function(){
                this.parentNode.remove();
            }
        }

        var editTask=document.querySelector(".edit");
        for(var i=0;i<editTask.length;i++){
            editTask[i].onclick=function(){
                document.getElementById("input").value=this.parentNode.childNodes[0].data;
            }
        }
    }
}
*/

/*function print(){
    let name=document.getElementById("name").value;
    let roll=document.getElementById("roll").value;
    let male=document.getElementById("male");
    let female=document.getElementById("female");
    // let checkbox=document.querySelector(".gender");
    var checkboxes = document.getElementsByName('check')

		    checkboxes.forEach((item) => {
		        if (item !== checkbox) item.checked = false
		    })
		    checkboxes.forEach((item) => {
		        if(item.checked){
		        	console.log(item.value)
		        }
		    })
    // for(const c of checkbox){
    //     c.checked=flase;
    // }
    // for(var i=0;i<checkbox.length;i++){
    //     checkbox[i].find(checkbox[i])
    // }
    console.log(name+" "+roll);
}

function reset(){
    let name=document.getElementById("name");
    name.value="";
    let roll=document.getElementById("roll");
    roll.value="";
    let male=document.getElementById("male").checked=false;

    let female=document.getElementById("female").checked=false;

}

/*
var x;
function a(){
    console.log("Hello");
}
x=10;
console.log(x);
a();


function greater(a,b,c){
    return (a>b)?
            (a>c?a:c):
            (b>c?b:c);
}

console.log(greater(100,300,2000));

let i=1;

let j=i+3;

j=i++;

console.log(i,j);

// let pr=new Promise(function(resolve, reject){
//     // let x=10;
//     // if(x==10){
//     //     resolve("resolve");
//     // }
//     // else{
//     //     reject("error");
//     // }
  
// });

// pr.then(function(value){
//     console.log(value);
// })
 
// function a(){
//     var x=10;
//     function b(){
//         var y=29;
//         sum=x+y;
//         console.log(sum);
//     }
//     b();
// }

 a();


*/





























/*
function abc(){
    let input=document.getElementById("input").value;
    let h1=document.getElementById('h1');
    let age=document.getElementById('age').value;
    let p=document.getElementById('p');
    h1.innerText=h1.innerText+" "+input;
    p.innerText=age;
}

async function getData(){
    try{
        let res=await fetch("https://reqres.in/api/users")
        let data=await res.json();
        console.log(data.data);
    }
   catch(e){
    console.log(e);
   }
}
getData();

function display(data){
    data.map(function(e,i){
        let img=document.createElement("img")
        img.src=e.avatar
        document.getElementById("")
    })
}


var x=10;
var x;
console.log(x);

function abc(name){
   name();
}


function callback(){
    console.log("deepa")
}

abc(callback)
*/