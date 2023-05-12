let users = []

fetch("http://localhost/api-php/listusers.php")
.then(response => result = response.json())
.then(data => {
    users = data
    showUsers()
})
.catch(error => console.log(error))

function showUsers(){
    const table = document.getElementById('table-users')
    for(let i=0; i<users.length; i++){
        const row = document.createElement('tr')
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
        
        table.appendChild(row)
    }
}