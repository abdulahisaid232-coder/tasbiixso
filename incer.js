const counter = document.querySelector("#counter");
const btninrc = document.querySelector("#btninrc");
const btndecr = document.querySelector("#btndecr");
const btnrest = document.querySelector("#btnrest");
const message = document.querySelector("#message");
const message2 = document.querySelector("#message2");
const message3 = document.querySelector("#message3");
const message4 = document.querySelector("#message4");

let currentValue = 0;


btninrc.addEventListener("click", () => {
  currentValue++;
  counter.innerHTML = currentValue;

  if (currentValue === 10) {
    counter.style.color = "red";
    message.style.display = "block";  
  }

  else if(currentValue === 20) {
    counter.style.color = "yellow";
    message2.style.display = "block";  
  }
  
  else if(currentValue === 30) {
    counter.style.color = "green";
    message3.style.display = "block";  
  }
  else if(currentValue === 40) {
    counter.style.color = "blue";
    message4.style.display = "block";  
  }
  
  


  else {
    counter.style.color = "black";
    message.style.display = "none";   
    message2.style.display = "none";   
    message3.style.display = "none";   
    message4.style.display = "none";   
  }




});


btndecr.addEventListener("click", () => {
  if (currentValue > 0) {
    currentValue--;
    counter.innerHTML = currentValue;

    // Midabka iyo fariimaha markasta oo hoos loo dhigo
    if (currentValue === 10) {
      counter.style.color = "red";
      message.style.display = "block";
      message2.style.display = "none";
      message3.style.display = "none";
      message4.style.display = "none";
    } else if (currentValue === 20) {
      counter.style.color = "yellow";
      message.style.display = "none";
      message2.style.display = "block";
      message3.style.display = "none";
      message4.style.display = "none";
    } else if (currentValue === 30) {
      counter.style.color = "green";
      message.style.display = "none";
      message2.style.display = "none";
      message3.style.display = "block";
      message4.style.display = "none";
    } else if (currentValue === 40) {
      counter.style.color = "blue";
      message.style.display = "none";
      message2.style.display = "none";
      message3.style.display = "none";
      message4.style.display = "block";
    } else {
      counter.style.color = "black";
      message.style.display = "none";
      message2.style.display = "none";
      message3.style.display = "none";
      message4.style.display = "none";
    }
  }
});




















btnrest.addEventListener("click", () => {
  currentValue = 0;
  counter.innerHTML = currentValue;
  counter.style.color = "black";
  
});