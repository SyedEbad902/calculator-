 
 
 
function getNumber(num) {
    var bc = document.getElementById("a");
      bc.value += num;
}
function cleare(){
    var bc = document.getElementById("a");
   
    bc.value='';
}
function res(){
    var bc = document.getElementById("a");
    bc.value=eval(bc.value)
    
    }

