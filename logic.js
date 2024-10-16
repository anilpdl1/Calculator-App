let inputb=document.getElementById('inputBox');
let buttons=document.querySelectorAll("button");
let string='';
let arr=Array.from(buttons);
arr.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='AC'){
            string='';
            inputb.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            inputb.value=string;

        } else if(e.target.innerHTML=='='){
            string=eval(string);
            inputb.value=string;
        }
    else{
        string+=e.target.innerHTML;
        inputb.value = string;
    }
    })
})
