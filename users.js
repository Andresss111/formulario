let users = []

function showUsers(){
    fetch("http://localhost/api-php/listusers.php")
    .then(response => result = response.json())
    .then(data => {
        users = data
        renderUsers()
    })
    .catch(error => console.log(error))
}


function renderUsers(){
    clearTableUsers()
    const table = document.getElementById('table-users')
    for(let i=0; i<users.length; i++){
        const row = document.createElement('tr')
        row.setAttribute('class','row-user')
        const user = users[i]
        for(let prop in user){
            const col = document.createElement('td')
            if(prop == "sexo"){
                col.innerHTML = user[prop] == 1 ? "Varón" : "Mujer"
            }else{
                col.innerHTML = user[prop]
            }
                
            row.appendChild(col)
            
        }
        const btnUpdate = document.createElement('button')
        btnUpdate.innerHTML = 'Actualizar'
        btnUpdate.setAttribute('onclick',`showFrmUpdate('${users[i].id}','${users[i].username}','${users[i].email}','${users[i].birthdate}','${users[i].sexo}')`)
        row.appendChild(btnUpdate)
        const btnDelete = document.createElement('button')
        btnDelete.innerHTML = 'Eliminar'
        btnDelete.setAttribute('onclick',`confirmDelete('${users[i].id}','${users[i].username}','${users[i].email}','${users[i].birthdate}','${users[i].sexo}')`)
        row.appendChild(btnDelete)
        table.appendChild(row)
    }
}

function clearTableUsers(){
    const rows = document.getElementsByClassName('row-user');
    const users = [...rows];
    users.map(user => user.remove());
}

function closeFrmUpdate(){
    const dialog = document.getElementById('frmUpdate');
    
}

function showFrmUpdate(id, name, email, birthDate, sexo){
    const dialog = document.getElementById('frmUpdate')
    const txtid = document.getElementById('id');
    txtid.value = id;
    const txtname = document.getElementById('name');
    txtname.value = name;
    const txtemail = document.getElementById('email');
    txtemail.value = email;
    const txtdateBirth = document.getElementById('dateBirth');
    txtdateBirth.value = birthDate;
    const txtsexo = document.getElementById('sexo');
    txtsexo.value = sexo;
    dialog.showModal()
}

function update(){
    console.log('Hola');
    const id = document.getElementById('id');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const birthDate = document.getElementById('dateBirth');
    const sexo = document.getElementById('sexo');

    const user = {
        id: id.value,
        name: name.value,
        email: email.value,
        birthdate: birthDate.value,
        sexo: sexo.value
    }
    console.log(user)
    fetch("http://localhost/api-php/update.php", {method:"POST",body:JSON.stringify(user)})
    .then(() => alert('Registro Actualizado'))
    .catch(error => console.log(error))
}

function confirmDelete(id, name, email, birthDate, sexo){
    const dialogDelete = document.getElementById('frmDelete');
    dialogDelete.showModal();
    const spanName=document.getElementById('spanName');
    spanName.innerHTML=name;
    const Id = document.getElementById('idToDelete');
    Id.value=id;
}

function deleteUser(){
    const id=document.getElementById('idToDelete').value;
    fetch(`http://localhost/api-php/delete.php?id=${id}`)
    .then(() => {
        alert('Registro Eliminado');
        showUsers();
    })
    .catch((error) => {
        alert('No se pudo eliminar');
        console.log(error);
    })
}