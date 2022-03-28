let userid = document.getElementById('user-id')
let valid_id = document.getElementById('valid-id')
let error_id=document.getElementById('error-id')
let password = document.getElementById('password')
let validpw = document.getElementById('valid-pw')
let error_pw = document.getElementById('error-pw')
let nameuser = document.getElementById('name')
let validname = document.getElementById('valid-name')
let errorname = document.getElementById('error-name')
let zip_code = document.getElementById('code')
let validcode = document.getElementById('valid-code')
let errorcode = document.getElementById('error-code')
let email = document.getElementById('email')
let validemail = document.getElementById('valid-email')
let erroremail = document.getElementById('error-email')
userid.addEventListener('blur',function(){
    var user_id = /^[a-z0-9_-]{5,12}$/
    if(user_id.test(userid.value)){
        valid_id.classList.remove('disappear')
        error_id.classList.add('disappear')
    }else{
        valid_id.classList.add('disappear')
        error_id.classList.remove('disappear')
      }
 })

password.addEventListener('blur', function(){
    var Password = /^[a-z0-9_-]{7,12}$/
    if(Password.test(password.value)){
        validpw.classList.remove('disappear')
        error_pw.classList.add('disappear')
    }else{
        error_pw.classList.remove('disappear')
        validpw.classList.add('disappear')
    }
})
nameuser.addEventListener('blur', function(){
    var name_user = /^[A-Za-z]/
    if(name_user.test(nameuser.value)){
        validname.classList.remove('disappear')
        errorname.classList.add('disappear')
    }else{
        validname.classList.add('disappear')
        errorname.classList.remove('disappear')
    }
})
zip_code.addEventListener('blur', function(){
    var code = /^[0-9]/
    if(code.test(zip_code.value)){
        validcode.classList.remove('disappear')
        errorcode.classList.add('disappear')
    }else{
        validcode.classList.add('disappear')
        errorcode.classList.remove('disappear')
    }
})
email.addEventListener('blur', function(){
    var mail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(mail.test(email.value)){
        validemail.classList.remove('disappear')
        erroremail.classList.add('disappear')
    }else{
        validemail.classList.add('disappear')
        erroremail.classList.remove('disappear')
    } 
})



