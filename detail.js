function sendMail(){
  let parms={
    name : document.getElementById("name").value,
    email: document.getElementById("email").value,
    Mobile : document.getElementById("Mobile").value,
    place : document.getElementById("place").value,
    que : document.getElementById("que").value,
    

  }
  emailjs.send("service_dcwgy69","template_bvvv34i",parms).then(alert("Email Sent!!"))
} 

