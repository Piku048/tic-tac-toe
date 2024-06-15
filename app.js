const button=document.querySelectorAll('.box1');
console.log(button);
var currentPlayer='X';
var flag=0;
button.forEach((value)=>{
    value.addEventListener("click",function(){
      if(flag==0){
      value.innerHTML=currentPlayer;
      flag=1;
      }
      else{
        value.innerHTML='o';
        flag=0;
      }
    } 
)
        
    
})