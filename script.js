
$(document).ready(function(){
    function checkUserId(){
        let userID = $('#txtUserID').val();
        let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
        if(userIDRegex.test(userID)){
            return true
        }
        return false
    }

$("#btnRegister").click(function(e){
    e.preventDefault();
    if(checkUserId()){
        $("#statusOfUserID").text('UserID hợp lệ')
        $("#statusOfUserID").css('color','blue')
    }else{
        $("#statusOfUserID").text('UserID không hợp lệ')
        $("#statusOfUserID").css('color','red')
    }
    })
})