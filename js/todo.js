

/*
$(document).ready(function () {
    $("#liveToast1").toast("show")
})
*/



function newElement() {
    let newTask = document.querySelector("#task")

    console.log(!newTask.value)
    if (!newTask.value) {
        $(document).ready(function () {
            $("#liveToast1").toast("show")
        })
    }else{
        let liDom = document.createElement("li")
        let del = '<span onclick="deleteTask(this)" id="delTask" class="button2">Sil</span>'
        liDom.innerHTML = newTask.value + del 
    
        let ulDom = document.querySelector("ul#list")
        ulDom.append(liDom)

        $(document).ready(function () {
            $("#liveToast").toast("show")
        })
    }

    
}


function deleteTask(e) {
    e.parentNode.parentNode.removeChild(e.parentNode);
}

