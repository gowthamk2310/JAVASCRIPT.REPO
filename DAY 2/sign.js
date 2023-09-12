var n1=parseInt(prompt());
var n2=-parseInt(prompt());
var n3=parseInt(prompt());

var product = n1*n2*n3;
function sign(n1,n2,n3){
    if(product >0){
        alert("the sign is + ");
    }
    else if(product < 0){
        alert ("The sign is - ");
    }
    else{
        alert("The sign is zero");
    }
}
sign(n1,n2,n3);