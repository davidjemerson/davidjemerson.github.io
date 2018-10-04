// This array holds the project data objects. To be replaced with db model.
var project = [
    {
        title: "EventPlan",
        image: "./assets/images/eventplan.png",
        description: "<p>EventPlan will be the best way to get your busy friend group together for game night, dinner, or just a few beers.</p>" +
                        "<p>This is a MERN stack application initially coded over the course of two weeks in between other work. I mainly focused on the database, models, authoring the server, and user authentication.</p>" +
                        "<p>This project is far from complete, but I'm definitely looking forward to getting back to it. I need it's scheduling functionality for my own D&D get togethers!</p>",
        github: "https://github.com/davidjemerson/eventplanapp",
        live: "http://www.eventplanapp.com"
    },
    {
        title: "Where's the Show",
        image: "./assets/images/wts.png",
        description: "<p>Where's The Show was born from the idea that it should be easier to quickly find local music events in your area, with a fast and clean interface.</p>" +
                        "<p>The front-end was built using Materialize components, with simple AJAX API calls and jQuery manipulation.</p>",
        github: "https://github.com/davidjemerson/Wheres-The-Show",
        live: "https://davidjemerson.github.io/Wheres-The-Show/"
    },
    {
        title: "Doctor Who Memory",
        image: "./assets/images/doctorwho.png",
        description: "<p>First things first - I love Doctor Who</p>" +
                        "<p>This app was the first thing that came out of my work with React.</p>" +
                        "<p>Of course it's peppered with Doctor Who references in addition to the imagery. I've got an idea for an easter egg that I haven't yet gotten around to coding...</p>",
        github: "https://github.com/davidjemerson/memory",
        live: "https://davidjemerson.github.io/memory/"
    },
    {
        title: "Star Wars Hangman",
        image: "./assets/images/swh.png",
        description: "<p>It's hangman without a hangman, and all the words are proper nouns from the Star Wars universe.</p>" + 
                        "<p>My first Javascript app. Included here only for nostalgia, and to allow others to snicker at the layout.</p>",
        github: "https://github.com/davidjemerson/Hangman-Game",
        live: "https://davidjemerson.github.io/Hangman-Game/"
    }
]

// This function iterates over the project array and generates tiles based on that data
function getProjects() {
    var projectContainer = $("#projects");
    for (var i = 0 ; i < project.length ; i++) {
        var projectBlock = "<div id='" + i + "' class='mx-auto col-xl-3 col-lg-4 col-md-6 border p-3 project'>" +
        "<div class='row'><h3 class='mx-auto'>" + project[i].title + "</h3></div><img class='img-fluid' src='" + project[i].image +
        "' alt='" + project[i].title + "' /><div class='row mt-3'><button class='mx-auto btn btn-dark'>Find Out More</button></div></div>";
        projectContainer.append(projectBlock);
    }
}

getProjects();

// Populates and calls the modal template when a project tile is clicked.
$(".project").on('click', function(event) {
    event.preventDefault();
    var modalId = $(this).attr("id");
    var description = "";
    for (var j = 0 ; j < project[modalId].description.length ; j++) {
        description += "<p>" + project[modalId].description[j] + "</p>";
    }
    console.log(description);
    $(".modal-title").text(project[modalId].title);
    $("#imgLink").attr("href", project[modalId].live);
    $("#modalImg").attr("src", project[modalId].image);
    $("#modalDesc").html(project[modalId].description);
    $("#githubButton").attr("href", project[modalId].github);
    $("#liveButton").attr("href", project[modalId].live);
    $('.modal-template').modal();
});