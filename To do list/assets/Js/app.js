function Add(){
    var value= document.querySelector('#inp').value;



    if(value.length==0){
       alert("Input is empty")
    }
    else{
        var bos=document.createElement('second');
        bos.setAttribute('class','d-flex justify-content-around bg-dark rounded-5 text-light mt-3 p-3 align-items-center aylo m-auto');
        var h2=document.createElement('h2');
        var icon=document.createElement('i');   
    
        
        icon.setAttribute('class','fa-solid fa-trash-can remove');
     
        h2.innerHTML=value;
        bos.appendChild(h2);
        bos.appendChild(icon);
        
        document.getElementById('second').appendChild(bos)
    
        var remover=document.querySelectorAll('.remove');
         for(var i=0;i<remover.length;i++){
             remover[i].onclick=function(){
                 this.parentElement.remove();
             }
         }
    
    }
  


}