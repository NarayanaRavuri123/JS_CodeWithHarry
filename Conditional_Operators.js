//conditional operators
//if
//if else
//if elseif else
let age = 0;
if (age>0) {
    console.log("this is a valid age");
}
else if(age==0) {
    console.log("age is not a valid number");
}
else {
    console.log("age cant be zero");
}
//terinary operator
let a=2;
console.log("you can",a<18? "Not drive" : "drive");
let b = a>12?"Drive":"Not drive";
console.log(b);
//switch statement

let p = 20;
switch (p) {
    case 19:
        console.log("p value is 19");
        break;
    case 20:
        console.log("p value is 20");
        break;
    case 20:
        console.log("p value is 21");
        break;
}
