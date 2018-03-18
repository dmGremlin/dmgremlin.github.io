// alert("Hello from outside!");
// var hisname;
// hisname = prompt("What's your name?");
// alert("Привет, "+hisname+"!");

// var name = "Миша";
// var surname = "Макеев";
// var date = 1988;
// var car = true;

// var data;

// data = name + " " + surname + "\n " + date + " " + car;
// alert(data);


// var a = prompt('enter nomber');


// if (isNaN(parseInt(a))){
// alert('!!!ERORR!!!')
// }

// else if (a<10){
//     alert('a<10');
// }
// else if (a==10){
//     alert('a=10');
// }
// else{
//     alert('a>10')
// }

// for (var i=-11;i<=11;i++){
//     if (i%2==0){
//         console.log(i);
//     }
// }

// var city = ['Moscow','Berlin','Paris','Samara','New York','Tokyo','Tyumen'];
// function cityList(a){
//     if(a){
//         for (var i=0;i<=a.length-1;i++)
//         {
//             console.log(a[i]);
//         }
//     }
//     else{
//         console.log("Error~!");
//     }
// }
// cityList(city);
// cityList();


function makeLoop(start, end){
    for(var i=start ; i<=end ; i++)
    if (i%2==0)
    {console.log(i);
    }
}
makeLoop(-14,6);