"use strict";

// IIFE - Immediately invoked functional expression
(function(){
    function DisplayHomePage()
    {
        console.log("Called DisplayHomePage...");

        let AboutUsButton = document.getElementById("AboutUsBtn");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        });

         let MainContent= document.getElementsByTagName("main")[0];
         let MainParagraph = document.createElement("p");
         MainParagraph.setAttribute("id", "MainParagraph");
         MainParagraph.setAttribute("class", "mt-3");
         MainParagraph.textContent = "this is my first paragraph";

         MainContent.appendChild(MainParagraph);

         let FirstString = "this is";
         let SecondString = `${FirstString}the main paragraph`;
         MainParagraph.textContent = SecondString;

         MainContent.appendChild(MainParagraph);

         let DocumentBody = document.body;

         let Article = document.createElement("article");
         let ArticleParagraph = `<p id="ArticleParagraph" class"mt-3">This is my article paragraph</p>`;
         Article.setAttribute("class", "container")
         Article.innerHTML = ArticleParagraph;

         DocumentBody.appendChild(Article);

    }
    function DisplayProductsPage()
    {
        console.log("Called DisplayProductsPage...");
    }
    function DisplayServicesPage()
    {
        console.log("Called DisplayServicesPage...");
    }
    function DisplayAboutPage()
    {
        console.log("Called DisplayAboutPage...");
    }
    function DisplayContactPage()
    {
        console.log("Called DisplayContactPage...");
    }


    function Start(){
        console.log("App Started...")

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Products":
                DisplayProductsPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Contact":
                DisplayContactPage();
                break;
        }
    }

    window.addEventListener("load", Start);

})()
