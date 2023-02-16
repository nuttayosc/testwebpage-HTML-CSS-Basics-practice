var x = "5" + 2 + 3; //will print 523, store as string

var y = 2 + 3 + "5"; //will print 55, store as string

var z = ["John", "Taobin", "Trivago"]; //Array Z

//Object person
var person = {firstName: "John", 
            lastName: "Taobin", 
            Hotel: "Trivago", 
            fullName : this.firstName+" "+this.lastName
            }; 

var footn = "JS ACTIVE";


const btn = document.getElementById('eventt');
btn.addEventListener('mouseover', function onmouseover(event) {
    myEvent();
});
btn.addEventListener('mouseleave', function onmouseleave(event) {
    document.body.style.backgroundColor='white';
});

function myEvent(){
    document.body.style.backgroundColor='black';
}

document.write(footn);
// document.getElementById("demo").innerHTML = Name.fullName;