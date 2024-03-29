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
    function DisplayStatisticsPage(){
        console.log("Called DisplayStatisticsPage...");
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
            case "Statistics":
                DisplayStatisticsPage();
                break;
        }

    }

    window.addEventListener("load", Start);


})()