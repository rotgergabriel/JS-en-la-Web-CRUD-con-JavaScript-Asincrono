const url = 'http://localhost:3000/perfil'

const clientList = () => fetch(url).then( response => response.json())

const createClient = (nombre, email, id) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({
            nombre, 
            email,
            id: uuid.v4()
        })
    })
}

const deleteClient = (id) => {
    return fetch(`${url}/${id}`, {
        method: 'DELETE',
    })
}

const detailClient = async (id) => {
    const response = await fetch(`${url}/${id}`)
    return await response.json()
}

const updateClient = async (nombre, email, id) => {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                nombre,
                email
            })
        })
        return response
    } catch (error) {
        return console.error(new Error(error))
    }
}

export const clientServices = {
    clientList,
    createClient,
    deleteClient,
    detailClient,
    updateClient
}

//XMLHttpRequest / Promises
//Abrir  - open(métodos, url)
//Enviar - send()
//Cargar - onload = () => {}

//CRUD    - Métodos HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - DELETE

