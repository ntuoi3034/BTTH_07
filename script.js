let userid = document.getElementById('user-id')
let error_id=document.getElementById('error-id')
userid.addEventListener('blur',function(){
    var user_id = /^[a-z0-9_-]{5,12}$/
    if(user-id.test(userid.value)){
        error_id.textContent ="Hợp lệ"
        error_id.style.color ='blue'
    }else{
        error_id.textContent ="không Hợp lệ"
        error_id.style.color ='red'
      }
 })

 let password = document.getElementById('password')
let error_PW=document.getElementById('errorPW')
password.addEventListener('blur',function(){
    var password1= /^[a-z0-9_-]{7,12}$/
    if(password1.test(password.value)){
        error_PW.textContent ="Hợp lệ"
        error_PW.style.color ='blue'
    }else{
        error_PW.textContent ="không Hợp lệ"
        error_PW.style.color ='red'
      }
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



