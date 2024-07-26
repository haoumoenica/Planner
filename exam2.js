let tasks = [
  {
    Status: "Task",
    taskName: "Clean the kitchen",
    taskDescription: "Cleaning the kitchen floor, sink, fridge and surfaces.",
    picture: "kitchen.jpg",
    priorityLevel: 0,
    deadline: "10.06.2024",
  },
  {
    Status: "Task",
    taskName: "Clean the bathroom",
    taskDescription:
      "Cleaning the bathroom floor, shower, mirror and surfaces.",
    picture: "Bathroom.jpg",
    priorityLevel: 0,
    deadline: "12.06.2024",
  },
  {
    Status: "Task",
    taskName: "Take out the garbage",
    taskDescription:
      "Take out the trash, and make sure to sort the recycling. ",
    picture: "trash.jpg",
    priorityLevel: 0,
    deadline: "09.06.2024",
  },
  {
    Status: "Task",
    taskName: "Organize closet",
    taskDescription:
      "Getting rid of items no longer used, and tidy up the shelves.",
    picture: "closet.jpg",
    priorityLevel: 0,
    deadline: "11.06.2024",
  },
  {
    Status: "Task",
    taskName: "Meal prep for tomorrow",
    taskDescription: "Make sure to prepare meals for the next day.",
    picture: "meal-prep.jpg",
    priorityLevel: 0,
    deadline: "10.06.2024",
  },
  {
    Status: "Task",
    taskName: "Grocery shopping",
    taskDescription: "Ensure that the weekly groceries are purchased.",
    picture: "grocery.jpg",
    priorityLevel: 0,
    deadline: "12.06.2024",
  },
  {
    Status: "Task",
    taskName: "Walk the dog",
    taskDescription: "Take out the puppy on 3 walks daily.",
    picture: "walkthedog.jpg",
    priorityLevel: 0,
    deadline: "10.06.2024",
  },
  {
    Status: "Task",
    taskName: "Send package back home",
    taskDescription: "Go to the post office and send the package.",
    picture: "package.jpg",
    priorityLevel: 0,
    deadline: "09.06.2024",
  },
  {
    Status: "Task",
    taskName: "Go for a hike.",
    taskDescription: "Pick a stadtwanderweg and ",
    picture: "hiking.jpg",
    priorityLevel: 0,
    deadline: "09.06.2024",
  },
];

function renderTasks() {
  document.getElementById("result").innerHTML = "";
}

for (let val of tasks) {
  document.getElementById("result").innerHTML += `
    <div class="mt-3">
        <div class="card card-padding card-box" style="width: 18rem;">
            <div class="card-top">
                <span class="badge text-bg-info badge-text-white">${val.Status}</span><span class="bookmark-btn"><i       class="fa-regular fa-bookmark"></i></span><span class="more-btn"><i class="fa-solid fa-ellipsis-vertical"></i></span>
            </div>
            <img src="images/${val.picture}" class="card-img-top" alt="...">
            <div class="card-body"><h4>${val.taskName}</h4>
                <h6 class="card-title">${val.taskDescription}</h6>
                <div class="prio-border">
                    <div class="text-margin">
                        <p class="card-text text-margin">
                            <i class="fa-solid fa-triangle-exclamation"></i> Priority level:
                            <a class="btn btn-primary prioBtns prioLevel">${val.priorityLevel}</a>
                        </p>
                    </div>
                    <p><i class="fa-regular fa-calendar-days"></i> Deadline: ${val.deadline}</p>
                </div>
                <div class="bothButtons" style=" display: flex; justify-content: flex-end;">
                    <a class="btn btn-danger deleteBtn" style="margin-right: 5px;"><i class="fa-solid fa-trash-can"></i> Delete</a>
                    <a class="btn btn-success doneBtn"><i class="fa-regular fa-circle-check"></i> Done</a>
                </div>
            </div>
        </div>
    </div>
`;
}

let prioBtns = document.querySelectorAll(".prioBtns");
prioBtns.forEach((element, index) => {
  element.addEventListener("click", function () {
    if (tasks[index].priorityLevel < 5) {
      tasks[index].priorityLevel++;
      document.querySelectorAll(".prioLevel")[index].innerHTML =
        tasks[index].priorityLevel;
      if (tasks[index].priorityLevel <= 1) {
        document
          .getElementsByClassName("prioLevel")
          [index].classList.add("bg-success");
        document
          .getElementsByClassName("prioLevel")
          [index].classList.remove("bg-warning", "bg-danger");
      } else if (tasks[index].priorityLevel <= 3) {
        document
          .getElementsByClassName("prioLevel")
          [index].classList.add("bg-warning");
        document
          .getElementsByClassName("prioLevel")
          [index].classList.remove("bg-success", "bg-danger");
      } else {
        document
          .getElementsByClassName("prioLevel")
          [index].classList.add("bg-danger");
        document
          .getElementsByClassName("prioLevel")
          [index].classList.remove("bg-warning", "bg-success");
      }
    }
  });
});

// document.getElementById("sort-button").addEventListener("click", function () {
//   tasks[index].priorityLevel.sort((a, b) => a.priorityLevel - b.priorityLevel);
//   renderTasks();
// });
