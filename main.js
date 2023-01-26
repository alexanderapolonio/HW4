document.addEventListener("DOMContentLoaded", function (event) {

// document.getElementById("show").addEventListener("click", function(){

function getCheckedValue(allExercise) {
    let radios =document.getElementById(allExercise);
    for(i=0; i<radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return null;
}
});

exerArray =[];

let ExerItem =function(pExerName, pMinutes, pCalories) {
    this.exerName =pExerName;
    this.minutes =parseInt(pMinutes);
    this.calories =parseInt(pCalories);
};

exerArray.push(new ExerItem("Sit Ups", 10));
exerArray.push(new ExerItem("Push Ups", 15));
exerArray.push(new ExerItem("Jump Rope", 18));

function add(){
    let totalCalories =0;
    let totalExerName =document.getElementById("exerName").value;
    let totalExerMins =document.getElementById("minutes").value;
    exerArray.push(new ExerItem(totalExerName,totalExerMins))

    for(i =0; i<exerArray.length; i++) {
        totalCalories =total*exerArray[i].minutes;
    }
    document.getElementById("totalMinutes").value =total;
}

function mostBurned() {
    let winner =0;
    for(i=0; i<exerArray.length; i++) {
       if (exerArray[i].minutes>exerArray[winner].minutes)
       {
        winner =i;
       }
    }
    document.getElementById("whichOutput").value =exerArray[winner].exerName;
}

function show(){
    let message ="exercise minutes mostburned\n";
       
    for (i=0; i<exerArray.length;i++) {
     message =message + PersonArray[i].Exercise +" "+ExerArray[i].minutes+" "+ExerArray[i].mostburned+"\n";
     }
     document.getElementById("output").value =message;
     };


