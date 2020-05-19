const form = document.getElementById('email-form')
const submitBtn = document.getElementById('submit-btn')
const errorBtn = document.getElementById('error-b')
const emailField = document.getElementById('email-field')

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    if(emailField.validity.patternMismatch){
        form.classList.add('error-p')
        errorBtn.style.display="block"
        emailField.addEventListener('input', e=>{
            init()
            if(!emailField.validity.patternMismatch){
                form.classList.remove('error-p')
                errorBtn.style.display="none"
            }
        })
    } else{
        form.classList.add('success')
        emailField.value=""
    } 
})

const init = ()=>{
    form.classList.remove('success')
}
