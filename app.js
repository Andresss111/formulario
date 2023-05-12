function validateState(element){
    if(element.value == ''){
        element.setAttribute('style','border-color:red')
    }else{
        element.removeAttribute('style')
    }
}

function validateInputs(id){
    const ob=document.getElementById(id)
    if(ob.value == ''){
        ob.setAttribute('style','border-color:red')
        return false
    }
    ob.removeAttribute('style')
    return true
}

function validateInterests(){
    const Interests=document.querySelectorAll('#Interests')
    const cont=document.getElementById('id-cont-in')
    for(let i=0; i<Interests.length;i++){
        if(Interests[i].checked){
            cont.removeAttribute('style')
            return true
        }
    }
    cont.setAttribute('style','border:1px solid; border-color:red;')
    return false
}

function register(){
    let errors=[]
    if(!validateInputs('email_in')){errors.push('Debe agregar un email')}
    if(!validateInputs('nombre_completo_in')){errors.push('Debe agregar un nombre')}
    if(!validateInputs('fecha_na_in')){errors.push('Debe agregar una fecha de nacimiento')}

    if (!validateInterests()){
        errors.push('Debe seleccionar por lo menos un interes')
    }

    if(errors.length>0){
        showErrors(errors)
        return
    }

    const request={
        email: GetValue('email_in'),
        name: GetValue('nombre_completo_in'),
        date_born: GetValue('fecha_na_in'),
        sexo: GetValue('select_in'),
        interests: GetValueArray('Interests')
    }

    console.log(request)
    users.push(request)
    console.log("Lista de usuarios:",users)
    
    fetch('http://localhost/api-php/',{
            method: 'POST', body: JSON.stringify(request)
        })
        .then(response => result = response.json())
        .then(data => {
            phpUsers = data
            console.log(phpUsers)
        })
        .catch(error => console.log(error))

    alert('Usted se ha registrado satisfactoriamente')
    showListUsers(request)
}

function GetValue(id){
    const ob=document.getElementById(id)
    return ob.value
}

function GetValueArray(id){
    const ob=document.querySelectorAll('#'+id)
    let array=[]
    for(let i=0;i<ob.length;i++){
        if(ob[i].checked){
            array.push(ob[i].value)
        }
    }
    return array
}

function showErrors(errors){
    let messageError='Se encontraron los siguientes errores en el formulario \n'
    for(let i=0;i<errors.length;i++){
        messageError += '\n'+ (i+1) + '. ' + errors[i]
    }
    alert(messageError)
    console.log(errors)
}

function showListUsers(request){
    const table = document.getElementById('table-users')
    const row = document.createElement('tr')

    for(let prop in request){
        if(prop == 'interests'){break}
        const col = document.createElement('td')
        if(prop == 'sexo'){
            col.innerHTML = request[prop] == 1 ? 'Varón' : 'Mujer'
        }else{
            col.innerHTML = request[prop]
        }
        row.appendChild(col)
    }

    table.appendChild(row)
}