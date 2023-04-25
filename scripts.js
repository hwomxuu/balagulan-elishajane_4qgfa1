function formSubmit() {
    var answer = confirm("Are you sure you want to submit?");
    if(answer == true){
        window.location.href = "https://www.kidsofhope.org/";
    }else{
        console.log("User does not wish to share his/her information.");
    }
}