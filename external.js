//external js 
//function to validate the form 
function validateform(){ 
//varibles  
var name=document.myform.name.value;  
var lastname=document.myform.lastname.value;
var email=document.myform.email.value;  
var dob=document.myform.dob.value;  
var pnum=document.myform.pnum.value;  
var gender=document.myform.gender.value;  
var country=document.myform.contry.value;
var password=document.myform.password.value;   
// if statement to stop user from leaving thr form blank
if (name==null || name==""){
  alert("Frist Name can't be blank");  
  return false;  
  }else if(lastname==null || lastname==""){
    alert("Lastname cant be blank");
    return false;
  }else if(email==null || email==""){
    alert("email cant be blank");
    return false;
  }else if(dob==null || dob==""){
    alert("DOB cant be blank");
    return false;
  }else if(pnum.length<10){ // using .length to check that the password is at least 6 characters long
    alert("Phone Number must be 10 digits long");
    return false;
  }else if(gender==null || gender=="")
    alert("You must pick an option");
    return false; 
  }else(country==null || country==""){
    alert("Country cant be blank");
    return false;
  }
/*
function showmenu(){
  var x = document.getElementById('myUL');
  if (x.style.display == 'none') {
      x.style.display = 'block';
  }else {
      x.style.display = 'none';
  }
}    

