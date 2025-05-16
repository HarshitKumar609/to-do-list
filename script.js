const inputBox=document.getElementById("text");
const listcontainer=document.getElementById("list-container");
const button=document.querySelector("#btn");

          // FUNCTION FOR ADDING TASK 

function addTask(){
    if(inputBox.value==='')
    {
        alert(" you have to write something");
    }
    else
    {
       let li=document.createElement("li");
       li.className="task";
       li.innerHTML=inputBox.value;
       listcontainer.appendChild(li);
       

    //    for cancel sign in task
       let span=document.createElement("span");
       span.className = "deleteIcon"
       span.innerHTML="\u00d7";
       li.appendChild(span)
    }
    inputBox.value="";
    savedata();
}

    // if task is done then ticked it ,and if you want to remove then remove it
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="Li"){
        e.target.classList.toggle("checked");    
        savedata();
    }
    else if(e.target.tagName==="span")
    {
        e.target.parentElement.remove();
        savedata();
    }
},false);

// function to save data in localstorage 
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showdata()
{
    listcontainer.innerHTML=localStorage.getItem("data");
}

showdata();

listcontainer.addEventListener("click", (e)=> {
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    }
    if(e.target.tagName == "SPAN"){
       e.target.parentElement.remove();
       savedata();
    }
})
