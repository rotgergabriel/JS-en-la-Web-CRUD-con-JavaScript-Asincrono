import { clientServices } from "../service/client-service.js"

export const createNewLine = (nombre, email, id) => {
    const line = document.createElement('tr')
    const content = `
        <td class="td" data-td>
            ${nombre}
        </td>
        <td>
            ${email}
        </td>
        <td>
            <ul class="table__button-control">
            <li>
                <a
                href="../screens/editar_cliente.html?id=${id}"
                class="simple-button simple-button--edit"
                >Editar</a
                >
            </li>
            <li>
                <button
                class="simple-button simple-button--delete"
                type="button"
                id='${id}'
                >
                Eliminar
                </button>
            </li>
            </ul>
        </td>`
    line.innerHTML = content
    const deleteBtn = line.querySelector('button')
    deleteBtn.addEventListener('click', () => {
        const id = deleteBtn.id
        clientServices
            .deleteClient(id).then((response) => {
                console.log(response)
            })
            .catch((error)=> {
                console.error(new Error(error))
            })
    })
    return line
}

const table = document.querySelector('[data-table]')

clientServices
    .clientList()
    .then((data) => {
        data.forEach(perfil => {
            const { nombre, email, id } = perfil
            const newLine = createNewLine(nombre, email, id)
            table.appendChild(newLine)
        });
    })
    .catch((error) => {
        console.error(new Error(error))
    })