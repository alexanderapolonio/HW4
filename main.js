function getCheckedValue(allExercise) {
    let radios =document.getElementsByName(allExercise);
    for(i=0; i<radios.length; i++) {
        if (radios[i].checked) {
            console.log(radios[i].value);
            return radios[i].value;
        }
    }
    return null;
}

exerArray =[];

let ExerItem =function(pExerName, pMinutes,pBurned) {
    this.exerName =pExerName;
    this.minutes =parseInt(pMinutes);
    this.burned =pBurned;
};

function add(){
    let totalCalories =0;
    let exerName =getCheckedValue("exercise");
    let exerMins =document.getElementById("minutes").value;
        let calories =0;
        if(exerName ==="Sit Ups"){
            calories =10;
        }
        else if(exerName ==="Push Ups"){
            calories =15;
        }
        else if(exerName ==="Jump Rope"){
            calories =18;
    }
    totalCalories =exerMins*calories;
    exerArray.push(new ExerItem(exerName,exerMins, totalCalories));
 }

function mostBurned() {
    let winner =0;
    for(i=0; i<exerArray.length; i++) {
       if (exerArray[i].burned>exerArray[winner].burned)
       {
        winner =i;
       }
    }
    document.getElementById("mostburnedcalories").value =exerArray[winner].exerName + " " + exerArray[winner].burned;
}

function show(){
    //let message ="exercise minutes mostburned\n";
    console.log(exerArray);

    let theList = document.getElementById("output");
    theList.innerHTML = "";
       
    for (i=0; i<exerArray.length;i++) {
     //message =message + exerArray[i].exerName +" "+exerArray[i].minutes+" "+exerArray[i].burned+"\n";
        var myLi = document.createElement("li");
        myLi.innerHTML = exerArray[i].exerName + " " + exerArray[i].minutes + " minutes " + exerArray[i].burned + " calories";
        theList.appendChild(myLi);
     }
     //document.getElementById("output").innerText=message;
     };
