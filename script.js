
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
let name_user = document.getElementById('name')
let error_name = document.getElementById('error-name')
name_user.addEventListener('blur', function(){
    var name = /^[a-zA-Z]/
    if(name.test(name_user.value)){
        error_name.textContent = 'Tên hợp lệ'
        error_name.style.color = 'blue'
    }
    else{
        error_name.textContent = 'Tên không hợp lệ'
        error_name.style.color = 'red'
    }
})
