

//Group-Task1

function Group(){
  var name = document.getElementById('input').value;
    if (name.length>=4) {
        var checkname = name.slice(-3,-2);
        if (checkname == 1) {
            alert(`Welcome ${name}`);
            document.body.style.backgroundColor = 'orange';
        }
        else if(checkname == 2){
            alert(`Welcome ${name}`);
            document.body.style.backgroundColor = 'green';
        }
        else if(checkname == 3){
            alert(`Welcome ${name}`);
            document.body.style.backgroundColor = 'red';
        }
        else{
            alert('Qrup adi dogru deyil');
        }
    }
    else{
        alert('Dogru qrup adi daxil edin');
    }
}



//Confirm-Task3

// function Demo() {
//     let content;
//     if (confirm("Click a button!") === true) {
//       content = "Welcome";
//       document.body.style.backgroundColor = 'green';
//     } else {
//       content = "Fail Attempt";
//       document.body.style.backgroundColor = 'red';
//     }
//     document.getElementById("verify").innerHTML=content;
// }

//Prompt-Task2


// function Show(){
//     let age = prompt('Please enter your age', '18');
//     if (age<18) {
//       document.getElementById('UserAge').innerHTML = 'You are not allowed to enter';
//     }
//     else{
//       document.getElementById('UserAge').innerHTML= 'Welcome to our site';
//     }
// }
