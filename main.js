const list =[];
var lineBreak = "---------------------------------------"
var displayMessage = `TASK MANAGER\n\nWhat would you like to do: \n${lineBreak}\n"NEW" - Add a New Task \n"LIST" - Display The Task \n"REMOVE" - Remove an Added Task \n"CLOSE" - Closes the Task Manager\n${lineBreak}\n`


const displayOption = [
    'NEW',
    'LIST',
    'REMOVE',
    'CLOSE'
];


function Loaded() {
    mainHandler();
}


function mainHandler() {
    var rawResponse = prompt(displayMessage).toUpperCase();
    var displayResponse = rawResponse;
    if(displayResponse == displayOption[0]) {
        //Add New Task
        var newTaskName = prompt('Please Enter a Task:');
        list.unshift(newTaskName);
        alert(`${newTaskName} was added as a New Task.`)
        //Reset on finish
        mainHandler();
    }
    else if (displayResponse == displayOption[1]) {
        //List Task
        listTaskHandler();

        //Reset on finish
        mainHandler();
    }
    else if (displayResponse == displayOption[2]) {
        //Remove Task
        removeTask();


        //Reset on finish
        mainHandler();
    }
    else if (displayResponse == displayOption[3]) {
        var confirmClose = prompt("Are you sure you want to leave?\nEnter Yes or No: ").toUpperCase()
        if (confirmClose == "NO") {
            onLoad();
        }else{
            return 0;
        }
    };
}


function listTaskHandler() {
    var listMessage = `TASK MANAGER\nYou have ${list.length} listed Tasks\n`

    if (list.length < 1){
        alert(listMessage)
    }else{
        for (i = 0; i <= (list.length -1); i++){
            listMessage += `\n ${i}: ${list[i]}`;
        }
        alert(listMessage);
    }
}


function removeTask() {
    var taskName = prompt("Enter the exact name of the task you want to remove: ");
    if (list.includes(taskName) == true){
        var itemNum = list.indexOf(taskName);
        list.splice(itemNum, 1);
    }else {
        var tryAgain = prompt("That isn't a listed task! Would you like to try again? (Yes or No)").toUpperCase();
        if (tryAgain == "YES") {
            removeTask();
        }else {
            mainHandler();
        }
    }
}
function handleLoading() {
    var loadingBar = document.getElementById("progressbar").value;
    var loadingText = document.getElementById("loadingText");
    //loop 10x for 1 second every loop
    for (i = 1; i <= 10; i++){
        setTimeout(() => { 
            //to do every 1 sec
            loadingBar = 10;
            loadingText = `${loadingBar}%`
        }, 1000);
    }



    Loaded();
}