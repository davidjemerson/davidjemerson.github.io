// This array holds the project data objects. To be replaced with db model.
var project = [
    {
        title: "EventPlan",
        subtitle: "easy event scheduling",
        image: "./assets/images/eventplan.png",
        description: "<p>EventPlan will be the best way to get your busy friend group together for game night, dinner, or just a few beers.</p>" +
                        "<p>This is a MERN stack application initially coded over the course of two weeks in between other work. I mainly focused on the database, models, authoring the server, and user authentication.</p>" +
                        "<p>This project is far from complete, but I'm definitely looking forward to getting back to it. I need it's scheduling functionality for my own D&D get togethers!</p>",
        github: "https://github.com/davidjemerson/eventplanapp",
        live: "http://www.eventplanapp.com"
    },
    {
        title: "Where's the Show",
        subtitle: "quick concert info",
        image: "./assets/images/wts.png",
        description: "<p>Where's The Show was born from the idea that it should be easier to quickly find local music events in your area, with a fast and clean interface.</p>" +
                        "<p>The front-end was built using Materialize components, with simple AJAX API calls and jQuery manipulation.</p>",
        github: "https://github.com/davidjemerson/Wheres-The-Show",
        live: "https://davidjemerson.github.io/Wheres-The-Show/"
    },
    {
        title: "Doctor Who Memory",
        subtitle: "react based fun",
        image: "./assets/images/doctorwho.png",
        description: "<p>First things first - I love Doctor Who</p>" +
                        "<p>This app was the first thing that came out of my work with React.</p>" +
                        "<p>Of course it's peppered with Doctor Who references in addition to the imagery. I've got an idea for an easter egg that I haven't yet gotten around to coding...</p>",
        github: "https://github.com/davidjemerson/memory",
        live: "https://davidjemerson.github.io/memory/"
    },
    {
        title: "Project Three-Sixty",
        subtitle: "project cost tracking",
        image: "./assets/images/pts.png",
        description: "<p>Project Three-Sixty is a web app built to help track project costs for one of the co-developer's painting business.</p>" +
                        "Technologies used include Express, Sequelize, MySQL, and Passport.",
        github: "https://github.com/davidjemerson/project-threesixty",
        live: "https://project-three-sixty.herokuapp.com"
    },
    {
        title: "Liri",
        subtitle: "command line fun with node",
        image: "./assets/images/liri.png",
        description: "<p>A node based command line application that performs a few basic functions, including downloading my most recent Twitter blatherings.</p>",
        github: "https://github.com/davidjemerson/liri-node-app",
        live: "https://github.com/davidjemerson/liri-node-app"
    },
    {
        title: "Game Gif Getter",
        subtitle: "alliterative API application",
        image: "./assets/images/gifgetter.png",
        description: "<p>This project was my introduction to working with APIs, with a little bit of image swapping flair on the side</p>" + 
                        "<p>Comes preloaded with some videogame themed buttons, but anything typed into the search box becomes a loader button.</p>",
        github: "https://github.com/davidjemerson/giftastic",
        live: "https://davidjemerson.github.io/giftastic"
    },
    {
        title: "Doctor Who Trivia",
        subtitle: "what better way to play with timers",
        image: "./assets/images/dwt.png",
        description: "<p>C'mon. Is it always Doctor Who or Star Wars with this guy?</p>" + 
                        "<p>Yes.</p>" +
                        "<p>A pretty simple timed trivia game with a Doctor Who theme. Maybe I should add a Star Wars variant...</p>",
        github: "https://github.com/davidjemerson/TriviaGame",
        live: "https://davidjemerson.github.io/TriviaGame"
    },
    {
        title: "Crystals Collector",
        subtitle: "strategic random counting",
        image: "./assets/images/crystals.png",
        description: "<p>Crystals Collector was my first project that utilized jQuery.</p>" + 
                        "<p>The goal of the game is to hit the target score without going over. Crystal values are hidden and reassigned with each new game.</p>",
        github: "https://github.com/davidjemerson/week-4-game",
        live: "https://davidjemerson.github.io/week-4-game"
    },
    {
        title: "Star Wars Hangman",
        subtitle: "where it all started",
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
        var projectBlock = "<div id='" + i + "' class='mx-auto col-xl-4 col-lg-6 col-md-12 project'>" +
        "<img class='img-fluid project-img' src='" + project[i].image +
        "' alt='" + project[i].title + "' /><div class='proj-caption'><h3>" + project[i].title + "</h3>" +
        "<p>" + project[i].subtitle + "</p></div></div>";
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
    $(".modal-title").text(project[modalId].title);
    $("#imgLink").attr("href", project[modalId].live);
    $("#modalImg").attr("src", project[modalId].image);
    $("#modalDesc").html(project[modalId].description);
    $("#githubButton").attr("href", project[modalId].github);
    $("#liveButton").attr("href", project[modalId].live);
    $('.modal-template').modal();
});



$(function(o) {
    "use strict";
    o('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = o(this.hash);
            if ((a = a.length ? a : o("[name=" + this.hash.slice(1) + "]")).length)
                return o("html, body").animate({
                    scrollTop: a.offset().top - 50
                }, 1e3, "easeInOutExpo"),
                !1
        }
    }),
    o(".js-scroll-trigger").click(function() {
        o(".navbar-collapse").collapse("hide")
    }),
    o("body").scrollspy({
        target: "#mainNav",
        offset: 50
    });
    var a = function() {
        50 < o("#mainNav").offset().top ? o("#mainNav").addClass("navbar-shrink") : o("#mainNav").removeClass("navbar-shrink"),
        50 < o("#mainNav").offset().top ? o("#skills").addClass("skills-show") : o("#skills").removeClass("skills-show"),
        50 < o("#mainNav").offset().top ? o("#portfolio").addClass("portfolio-show") : o("#portfolio").removeClass("portfolio-show")
    };
    a(),
    o(window).scroll(a)
});