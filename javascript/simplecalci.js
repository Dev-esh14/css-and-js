function num(i){
    document.getElementById("view").value+=i;
}
function equ(){
    var x=document.getElementById("view").value;
    if(x){
        document.getElementById("view").value=eval(x);
    }
}
//function clear(){
//    var x=document.getElementById("view").value;
//    document.getElementById("view").value=x.substring(0, x.length - 1)
//}