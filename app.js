function sayHello(){
    let nombre = document.getElementById('nombre_completo_in')
    console.log(nombre)
    alert('Hola ' + nombre.value)
}

function getDataForm(){
    
    let email=document.getElementById('email_in')

    if(email.value == ''){
        alert('El campo nombre es obligatorio')
        email.setAttribute('style', 'border-color:red')
        email.setAttribute('placeholder','Escriba aqui el nombre')
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
        alert('El campo nombre es obligatorio')
        date_born.setAttribute('style', 'border-color:red')
        date_born.setAttribute('placeholder','Escriba aqui el nombre')
        return
    }

    let sexo=document.getElementById('select_in')

    if(sexo.value == ''){
        alert('El campo nombre es obligatorio')
        sexo.setAttribute('style', 'border-color:red')
        sexo.setAttribute('placeholder','Escriba aqui el nombre')
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

function validateState(id){
    const name=document.getElementById(id)
    if(name.value == ''){
        name.setAttribute('style','border-color:red')
    }else{
        name.setAttribute('style','border-color:black')
    }
}