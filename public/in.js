function titleChange(){
    let name = document.getElementById('name').value;
    let number = document.getElementById('num').value;
    let eamil = document.getElementById('email').value;
    let password = document.getElementById('pass').value;
    let cpassword = document.getElementById('cpass').value;
    if(name == "" || number == "" || eamil == "" || password == "" || cpassword ==""){
       alert('Input field can not be empty..');
    }
    else if(number.length != 10){
      alert('Mo.No. should be 10 digit..');
    }
    else if(password != cpassword){
      alert('Password and current password should be same..');
    }
 }