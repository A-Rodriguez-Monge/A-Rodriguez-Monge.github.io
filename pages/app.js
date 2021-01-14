let tasks = [];
let noTask = document.getElementById("noTask");

function add_item() {

    //get box and ul with id
    let item = document.getElementById("box");
    let list = document.getElementById("task_list");

    if(item.value !== "") {

        //make new element + name it
        let textnode = document.createTextNode(item.value);
        let task = document.createElement("li");
        let checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        task.appendChild(checkbox)
        task.appendChild(textnode);

        list.appendChild(task);

        //reset input box
        item.value = "";

        tasks.push(task);

        //strike li on click
        checkbox.onclick = function () {
            task.classList.toggle('toggle_cross');
        }

        if (tasks.length > 0) {
            noTask.style.display = "none";
        }

        //delete li:
        //this.parentNode.removeChild(this);

    } else {
        //empty input!
        alert("Add a Task!");
    }
}

function showAll(){
    noTask.style.display = "none";

    if (tasks.length === 0) {
        noTask.style.display = "";
    } else {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].style.display === "none") {
                tasks[i].style.display = ""; //doesnt remove more than one at a time
            }
        }
    }

    console.log("all: ");
    console.log(tasks)
}

function active(){
    noTask.style.display = "none";

    let count = 0;
    if (tasks.length > 0) {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].firstElementChild.checked) {
                tasks[i].style.display = "none";
            } else {
                count++;
                tasks[i].style.display = "";
            }
        }
    }

    if (count === 0) {
        noTask.style.display = "";
    }
    console.log("active: ");
    console.log(tasks);
}

function showCompleted() {
    noTask.style.display = "none";

    let count = 0;

    if (tasks.length > 0) {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].firstElementChild.checked) {
                tasks[i].style.display = "";
                count++;
            } else {
                tasks[i].style.display = "none";
            }
        }
    }

    if (count === 0) {
        noTask.style.display = "";
    }
    console.log("completed: ");
    console.log(tasks);
}

function remove_items() {

    if (tasks.length > 0) {
        document.querySelectorAll("li").forEach(item => {
            if (item.firstElementChild.checked) {
                item.parentNode.removeChild(item);
                let index = tasks.indexOf(item);
                if (index > -1) {
                    tasks.splice(index, 1);
                }
            }
        });
    }
    showAll();

    console.log("remove: ");
    console.log(tasks);
}

