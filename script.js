const taskInput = document.getElementById("taskInput");
const addButton = document.querySelector("button");

addButton.addEventListener("click", function() {
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const taskItem = document.createElement("div");
    const taskText = document.createElement("span");
    const deleteButton = document.createElement("button");

    taskText.textContent = task;
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        taskItem.remove();
    });

    taskItem.appendChild(taskText);
    deleteButton.style.marginLeft="20px";
    taskItem.appendChild(deleteButton);

    document.body.appendChild(taskItem);

    taskInput.value = "";
});

taskItem.style.display = "flex";
taskItem.style.alignItems = "center";
taskItem.style.gap = "30px";
taskItem.style.margin = "10px auto";
taskItem.style.padding = "15px";
taskItem.style.width = "300px";
taskItem.style.backgroundColor = "#ffffff";
taskItem.style.borderRadius = "8px";