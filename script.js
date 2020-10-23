let ulTasks = $("#ulTasks")
let inpNewTask = $("#inpNewTask")

let btnAdd = $("#btnAdd")
let btnClear = $("#btnClear")
let btnReset = $("#btnReset")
let btnSort = $("#btnSort")

inpNewTask.keypress((e)=>{
    if(e.which == 13){
        addItem()
    }
})

function addItem() {
    let listItem = $("<li></li>",{
        "class":"list-group-item",
        text : inpNewTask.val()
    })
    listItem.click(()=>{
        listItem.toggleClass("done")
    })
    ulTasks.append(listItem)
    inpNewTask.val("")
    toggler()
}

function clearDone() {
    console.log("ahah")
    $("#ulTasks .done").remove()
}

function TaskSort(){
    console.log("ABCDDC")
    $("#ulTasks .done").appendTo(ulTasks)
}

function toggler(){
    btnClear.prop("disabled", inpNewTask.val() == "")
    btnAdd.prop("disabled", inpNewTask.val() == "")
    btnSort.prop("disabled", ulTasks.children().length < 1)
    btnReset.prop("disabled", ulTasks.children().length < 1)
}

inpNewTask.on("input", ()=>{
    toggler(inpNewTask.val() != "")
})

btnAdd.click(()=>{
    toggler()
    addItem()
})

btnClear.click(()=>{
    inpNewTask.val("")
    toggler()
})

btnReset.click(()=>{
    clearDone()
    toggler()
})
btnSort.click(()=>{
    TaskSort()
})
