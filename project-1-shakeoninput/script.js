

function validateInput(){
    let input = document.getElementById("inputField");
    let val = input.value.trim();
    const errorMsg = document.getElementById("errorMessage");
    if(val === ""){
        input.classList.add("shake");
        errorMsg.style.visibility ="visible";
        setTimeout(function(){
            input.classList.remove("shake");
            errorMsg.style.visibility ="hidden";
        }, 500);
    }
    else{
        alert("Valid Input Buddy!")
    }
}
