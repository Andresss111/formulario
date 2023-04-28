function sayHello(){
    let nombre = document.getElementById('nombre_completo_in')
    console.log(nombre)
    alert('Hola ' + nombre.value)
}

function getDataForm(){
    
    let email=document.getElementById('email_in')

    if(email.value == ''){
        alert('El campo email es obligatorio')
        email.setAttribute('style', 'border-color:red')
        email.setAttribute('placeholder','Escriba aqui el email')
        return
    }

    let name=document.getElementById('nombre_completo_in')

    if(name.value == ''){
        alert('El campo nombre es obligatorio')
        name.setAttribute('style', 'border-color:red')
        name.setAttribute('placeholder','Escriba aqui el nombre')
        return
    }

    let date_born=document.getElementById('fecha_na_in')

    if(date_born.value == ''){
        alert('El campo fecha es obligatorio')
        date_born.setAttribute('style', 'border-color:red')
        date_born.setAttribute('placeholder','Escriba aqui el fecha')
        return
    }

    let sexo=document.getElementById('select_in')

    if(sexo.value == ''){
        alert('El campo sexo es obligatorio')
        sexo.setAttribute('style', 'border-color:red')
        sexo.setAttribute('placeholder','Escriba aqui el sexo')
        return
    }
        
    const datosFormulario={
        name: name.value,
        date_born: date_born.value,
        email: email.value,
        sexo: sexo.value
    }

    console.log(datosFormulario)
}

function validateState(element){
    if(element.value == ''){
        element.setAttribute('style','border-color:red')
    }else{
        element.removeAttribute('style')
    }
}

function validateInterests(){
    const Interests=document.querySelectorAll('#Interests')
    
    for(let i=0; i<Interests.length;i++){
        if(Interests[i].checked){
            return true
        }
    }
    return false
}

function register(){
    if (!validateInterests()){
        alert('Debe seleccionar por lo menos un interes')
    }
}