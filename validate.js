function check(){
    const username = document.contact.username.value;
    const nameError = document.getElementById('nameError');

    const mobilelength = Number(document.contact.countrycode.value);

    const mobile = document.contact.mobile.value;
    const mobileError = document.getElementById('mobileError');

    const email = document.contact.email.value;
    const emailError = document.getElementById('emailError');

    const password = document.contact.password.value;
    const passwordError = document.getElementById('passwordError');

    //const pin = document.contact.pincode.value;
   // const pinError = document.getElementById('pin')

    let nameStatus = false;
    let mobileStatus = false;
    let emailStatus = false;
    let passwordStatus = false;
   // let pinStatus = false;

    const alphaExp = /^[a-zA-Z]+$/;
    const numExp = /^[0-9]+$/;
    const emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordExp = /^[0-9a-zA-Z@#$_-]+$/
    //const pinExp = /^[0-9]+$/;

    //name validation
    
    if(username === ''){
       nameError.textContent = 'Name is Mandatory';
        nameError.classList = ' color: red'
    }else{
        if(username.match(alphaExp)){
            nameError.textContent=''
            nameStatus = true
        }else{
            nameError.textContent = 'Name should contain alphabets only'
            nameError.classList = ' color: red'

            
        }
      
    }
    //mobile validation
    if(mobile === ''){
        mobileError.textContent = 'Mobile Number is Mandatory';
        mobileError.classList = ' color: red'

    }else{
        if(mobile.match(numExp)){
            if(mobile.length === mobilelength){
                mobileError.textContent = ''
                mobileStatus = true;
            }else{
                mobileError.textContent = `${mobilelength} digit mobile number is mandatory.`
                mobileError.classList = ' color: red'

            }
        }else{
            mobileError.textContent = 'Mobile Number Should be in digits'
            mobileError.classList = ' color: red'
        }
    }

    //email validation
    if(email === ''){
        emailError.textContent = ' Email is Mandatory'
        emailError.classList = ' color: red'
    }else{
        if(email.match(emailExp)){
            emailError.textContent = ''
            emailStatus = true;
        }else{
            emailError.textContent = 'Invalid Email Address'
            emailError.classList = ' color: red'
        }
    }
    //password validation
    if(password === ''){
        passwordError.textContent = 'Password is Mandatory'
        passwordError.classList = ' color: red'
    }
    else{
        if(password.match(passwordExp)){
            passwordError.textContent = ''
            passwordStatus = true
        }
        else{
            passwordError.textContent = 'Enter a valid password'
            passwordError.classList = ' color: red'
        }
    }
    //pincode validation
   // if(pin === ''){
   //     pinError.textContent = 'Pincode is Mandatory'
   // }
   // else{
   //     if(pin.match(pinExp)){
            
   //         pinError.textContent = ''
   //         pinStatus = true;
    //    }
   //     else{
    //        pinError.textContent = 'Invalid Pincode'
    //    }

    //}

    //return logic
    //&& pinStatus
    if(nameStatus && mobileStatus && emailStatus && passwordStatus  ){
        return true
    }
    else{
        return false
    }
}
function join(){
    const email = document.contact.email.value;
    const emailError = document.getElementById('emailError');

    let emailStatus = false;

    const emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //email validation
    if(email === ''){
        emailError.textContent = ' Email is Mandatory';
    }else{
        if(email.match(emailExp)){
            emailError.textContent = ''
            emailStatus = true;
        }else{
            emailError.textContent = 'Invalid Email Address'
            emailError.classList = ' color: red'
        }
    }
}