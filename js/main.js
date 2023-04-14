window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    const homeButton = document.getElementById("home-link");
    const membersButton = document.getElementById("members-link");
    const eventsButton = document.getElementById("events-link");
    const joinusButton = document.getElementById("joinus-link");

    //Creates the equivalent of a button for the different sections
    homeButton.addEventListener("click", homeSwitch);
    membersButton.addEventListener("click", membersSwitch);
    eventsButton.addEventListener("click", eventsSwitch);
    joinusButton.addEventListener("click", joinusSwitch);
}

function homeSwitch() {
    // Turns off all displays besides home and sets home to block display
    document.getElementById("home").style.display = "block";
    document.getElementById("members").style.display = "none";
    document.getElementById("events").style.display = "none";
    document.getElementById("joinus").style.display = "none";

    //Clear classes of active and sets home to active
    clearClass();
    document.getElementById("home-link").classList.add("active");
}

function membersSwitch() {
    // Turns off all displays besides members and sets members to block display
    document.getElementById("home").style.display = "none";
    document.getElementById("members").style.display = "block";
    document.getElementById("events").style.display = "none";
    document.getElementById("joinus").style.display = "none";

    //Clear classes of active and sets members to active
    clearClass();
    document.getElementById("members-link").classList.add("active");
}

function eventsSwitch() {
    // Turns off all displays besides events and sets events to block display
    document.getElementById("home").style.display = "none";
    document.getElementById("members").style.display = "none";
    document.getElementById("events").style.display = "block";
    document.getElementById("joinus").style.display = "none";

    //Clear classes of active and sets events to active
    clearClass();
    document.getElementById("events-link").classList.add("active");
}

function joinusSwitch() {
    // Turns off all displays besides joinus and sets joinus to block display
    document.getElementById("home").style.display = "none";
    document.getElementById("members").style.display = "none";
    document.getElementById("events").style.display = "none";
    document.getElementById("joinus").style.display = "block";

    //Clear classes of active and sets joinus to active
    clearClass();
    document.getElementById("joinus-link").classList.add("active");
}


function clearClass() {
    //Removes to active class from all links.
    //Reminder: the class active makes the button a different color.
    document.getElementById("home-link").classList.remove("active");
    document.getElementById("members-link").classList.remove("active");
    document.getElementById("events-link").classList.remove("active");
    document.getElementById("joinus-link").classList.remove("active");
}