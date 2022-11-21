const form=document.getElementById("Form");
const input=document.getElementById("Innput");
const taskList=document.getElementById("Taask_list");




console.log(form, input, taskList);

form.addEventListener('submit',function(b){
b.preventDefault()
addTask();


});


function addTask(task){ 
let taskValue = input.value;
  if (task)  { 
    taskValue= task.text;
   }
   
console.log(taskValue);
if(taskValue){ //if taskValue exist

    displayTask();
}
else{
    taskValue;
}
function displayTask(){
    const newTask=document.createElement("li");
    newTask.innerHTML=taskValue;  
    newTask.addEventListener('click',event => { 
     newTask.classList.toggle("completed"); }) 
       taskList.appendChild(newTask);
       input.value="";
}

    
}



