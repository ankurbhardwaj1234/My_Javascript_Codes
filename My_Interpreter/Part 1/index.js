function sendInput(){
var a=document.getElementById('input').value;
let inter=new interpreter(a);
let result=inter.interpret();
createOutput(result);
createOutput(10101010);
}

function createOutput(a){
document.body.innerHTML+="<div>"+a+"</div>";
}

function throwError(error){
document.body.innerHTML+='<div class="error">'+error+"</div>";
