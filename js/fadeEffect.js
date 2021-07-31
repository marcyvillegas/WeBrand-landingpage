// Button hover effect
document.getElementById("btn-text").addEventListener("mouseover",function(){
     let buttonText = document.getElementById("btn-text");

     buttonText.innerHTML = "Copy email address";
     buttonText.style.padding = "15px 40px";
});

document.getElementById("btn-text").addEventListener("mouseout",function(){
     let buttonText = document.getElementById("btn-text");

     buttonText.innerHTML = "Get in Touch";
     buttonText.style.padding = "15px 66px";
});

document.getElementById("btn-text").addEventListener("click",function(){
     let buttonText = document.getElementById("btn-text");

     buttonText.innerHTML = "Copied!";
     buttonText.style.padding = "15px 84.8px";
});

// Satisfied Clients text fade effect
window.addEventListener("scroll", function() {
    let satisfiedText = document.getElementById("satisfied-text");

     if (window.pageYOffset > 200) {
          satisfiedText.style.display = "flex";
     }  else if (window.pageYOffset < 10){
          satisfiedText.style.display = "none";
     }
});

