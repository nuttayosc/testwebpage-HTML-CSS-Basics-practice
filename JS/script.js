var x = "5" + 2 + 3; //will print 523, store as string

var y = 2 + 3 + "5"; //will print 55, store as string

var z = ["John", "Taobin", "Trivago"]; //Array Z

//Object person
var person = {firstName: "John", 
            lastName: "Taobin", 
            Hotel: "Trivago", 
            fullName : function() {
                return this.firstName+" "+this.lastName;
                }
            }; 

// document.write(x+typeof(x));
document.write(person.fullName);
document.getElementById("demo").innerHTML = Name.fullName;