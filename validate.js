function check(){
    const username = document.contact.username.value;
    const nameError = document.getElementById('nameError');

    const mobilelength = Number(document.contact.countrycode.value);

    const mobile = document.contact.mobile.value;
    const mobileError = document.getElementById('mobileError');

    const email = document.contact.email.value;
    const emailError = document.getElementById('emailError');

    //const pin = document.contact.pincode.value;
   // const pinError = document.getElementById('pin')

    let nameStatus = false;
    let mobileStatus = false;
    let emailStatus = false;
   // let pinStatus = false;

    const alphaExp = /^[a-zA-Z]+$/;
    const numExp = /^[0-9]+$/;
    const emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //const pinExp = /^[0-9]+$/;

    //name validation
    
    if(username === ''){
       nameError.textContent = 'Name is Mandatory';
    }else{
        if(username.match(alphaExp)){
            nameError.textContent=''
            nameStatus = true
        }else{
            nameError.textContent = 'Name should contain alphabets only'
        }
      
    }
    //mobile validation
    if(mobile === ''){
        mobileError.textContent = 'Mobile Number is Mandatory';
    }else{
        if(mobile.match(numExp)){
            if(mobile.length === mobilelength){
                mobileError.textContent = ''
                mobileStatus = true;
            }else{
                mobileError.textContent = `${mobilelength} digit mobile number is mandatory.`
            }
        }else{
            mobileError.textContent = 'Mobile Number Should be in digits'
        }
    }

    //email validation
    if(email === ''){
        emailError.textContent = ' Email is Mandatory';
    }else{
        if(email.match(emailExp)){
            emailError.textContent = ''
            emailStatus = true;
        }else{
            emailError.textContent = 'Invalid Email Address'
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
    if(nameStatus && mobileStatus && emailStatus ){
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