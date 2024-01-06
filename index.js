const modalBtn = document.querySelectorAll('.task_add')
const modal = document.querySelector('.modal')
const modalDialog = document.querySelector('.modal-dialog')
const changeForm = document.forms.changeTodo

modalBtn.forEach(btn => {
    btn.onclick = () => {
        modal.classList.add('show', 'fade')
    }
})

function addTask() {
    const newTitle = document.querySelector("#taskTitle").value
    const newDescribe = document.querySelector("#taskDescribe").value
    const newDate = document.querySelector("#taskDate").value
    const newTime = document.querySelector("#taskTime").value
    const newAction = document.querySelector("#taskAction").value

    const newRow = document.createElement("tr")

    const titleCell = document.createElement("td")
    titleCell.textContent = newTitle
    titleCell.id = "title"
    newRow.appendChild(titleCell)

    const describeCell = document.createElement("td")
    describeCell.textContent = newDescribe
    describeCell.id = "describe"
    newRow.appendChild(describeCell)

    const dateCell = document.createElement("td")
    dateCell.textContent = newDate
    dateCell.id = "data"
    newRow.appendChild(dateCell)

    const timeCell = document.createElement("td")
    timeCell.textContent = newTime
    timeCell.id = "time"
    newRow.appendChild(timeCell)

    const actionCell = document.createElement("td")
    actionCell.textContent = newAction
    actionCell.id = "action"
    newRow.appendChild(actionCell)

    document.querySelector("tbody").appendChild(newRow)
    modal.classList.remove('show', 'fade')
}
