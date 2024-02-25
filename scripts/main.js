"use strict";

(function () {

    function DisplayHomePage() {

        console.log("Called DisplayHomePage")
    }

    function DisplayPortfolioPage() {

        console.log("Called DisplayPortfolioPage")
    }

    function DisplayServicesPage() {

        console.log("Called DisplayServicesPage")
    }

    function DisplayTeamPage() {

        console.log("Called DisplayTeamPage")
    }

    function DisplayBlogPage() {

        console.log("Called DisplayBlogPage")
    }

    function Start() {
        console.log("App Started...");

        switch(document.title) {

            case "Harmony Hub":
                DisplayHomePage();
                break;
            case "Portfolio":
                DisplayPortfolioPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "Team":
                DisplayTeamPage();
                break;
            case "Blog":
                DisplayBlogPage();
                break;
        }

    }

    window.addEventListener("load", Start);


})()