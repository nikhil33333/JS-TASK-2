function totalValue(){
    var arr = document.getElementsByClassName('dataInput');
    var total=0.0;
    for(var i=0;i<arr.length;i++){
        total += parseFloat(arr[i].value);
    }
    document.getElementById("totalvalue").value = total.toFixed(1);
}

function nullValueCheck(event){
    if(event.target.value.length == 1 && event.key=="Backspace"){
        event.target.value="0";
    }
    if(event.target.value + event.key > 100){
        event.target.value = "100";
        event.preventDefault();
    }
}


