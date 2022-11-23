function average() {
    const salman =[89,120,103] 
    var sum1=salman[0]+salman[1]+salman[2];
    var avg1=sum1/3;
    document.getElementById("ans1").value = avg1;

    const mike =[116,94,123] 
    var sum2=mike[0]+mike[1]+mike[2];
    var avg2=sum2/3;
    document.getElementById("ans2").value = avg2;

    if (avg1 > avg2) {
        document.getElementById("result").value = "Highest average score is Salman team"
    }
    else {
        document.getElementById("result").innerHTML = "Highest average score is Mike team"
    }
}