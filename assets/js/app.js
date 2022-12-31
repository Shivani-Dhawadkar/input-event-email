//alert("hello!");
let cl = console.log;


const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');

const onFocusHandler = (eve) => {
    eve.target.style.border = "4px solid orange"
};

const onFocusHandleremail = (eve) => {
    eve.target.style.border = "4px solid orange"
}; 

const onBlurHandler = (eve)=> {
    eve.target.style.border = "2px solid #ced4da "
    let input = eve.target;
    //cl(eve.target.value)
    
    if(input.value.length === 0){
        cl(input.nextElementSibling);
        input.nextElementSibling.classList.remove('d-none')
        
    }
    else{
        input.nextElementSibling.classList.add("d-none")
    };
}

const onBlurHandleremail = (eve) =>{
    eve.target.style.border = "2px solid #ced4da "
    let input = eve.target;
   // let emailValue = /@./
   
   
   /* if(input.value.length === 0){
        cl(input.nextElementSibling);
        input.nextElementSibling.classList.remove('d-none')
    }
    else{
        input.nextElementSibling.classList.add("d-none")
    };*/
    
    if
    (input.value.includes('@')===true &&
     (input.value.includes('.')===true )&&
     (input.value.indexOf ('@') > 2  )  &&
     (input.value.length)-(input.value.indexOf('.')) 
     
     )
     {
        input.nextElementSibling.nextElementSibling.classList.add("d-none")
    
        
    }  
    else{
        cl(input.nextElementSibling.nextElementSibling);
        input.nextElementSibling.nextElementSibling.classList.remove("d-none")
        
      //alert("please insert valid email id")
        
    };
}

//cl(onFocusHandler);


fname.addEventListener('focus', onFocusHandler);
fname.addEventListener('blur', onBlurHandler);
lname.addEventListener('focus', onFocusHandler);
lname.addEventListener('blur', onBlurHandler);
email.addEventListener('focus', onFocusHandler);
email.addEventListener('blur', onBlurHandler);
email.addEventListener('focus', onFocusHandleremail);
email.addEventListener('blur', onBlurHandleremail);


