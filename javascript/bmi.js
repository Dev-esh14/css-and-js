function bmicalci(){
    var weight=document.getElementById("weight1").value;
    var height=document.getElementById("height1").value;
    var bmi1=(weight)/(height*height);
    document.getElementById("ans1").value=bmi1;

    var weight=document.getElementById("weight2").value;
    var height=document.getElementById("height2").value;
    var bmi2=(weight)/(height*height);
    document.getElementById("ans2").value=bmi2;

if(bmi1>bmi2){
    document.getElementById("result").value="Harry's BMI is higher than Salman"
}
else{
    document.getElementById("result").value="Salman's BMI is higher than Harry"
}
}