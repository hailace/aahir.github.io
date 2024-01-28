<!--
Author: Ajay Singh Ahir, Cooper McDonald
Group: Group 12
Date: January 24, 2024
-->


"use strict";

// IIFE - Immediately invoked functional expression
(function () {
    function DisplayHomePage() {
        console.log("Called DisplayHomePage...");

        // home page logic
        let aboutUsButton = document.getElementById("aboutUsBtn");
        aboutUsButton.addEventListener("click", function () {
            location.href = "about.html";
        });

        let mainContent = document.getElementsByTagName("main")[0];
        let mainParagraph = document.createElement("p");
        mainParagraph.setAttribute("id", "mainParagraph");
        mainParagraph.setAttribute("class", "mt-3");
        mainParagraph.textContent = "Welcome to Harmony Hub - Empowering the Community!";

        mainContent.appendChild(mainParagraph);

        let firstString = "Explore ";
        let secondString = `${firstString}our vibrant community center and its offerings.`;
        mainParagraph.textContent = secondString;

        mainContent.appendChild(mainParagraph);

        let documentBody = document.body;

        let article = document.createElement("article");
        let articleParagraph = `<p id="articleParagraph" class="mt-3">Learn more about our community initiatives and projects.</p>`;
        article.setAttribute("class", "container");
        article.innerHTML = articleParagraph;

        documentBody.appendChild(article);
    }

    function DisplayPortfolioPage() {
        console.log("Called DisplayPortfolioPage...");

        // portfolio page logic here
    }

    function DisplayServicesPage() {
        console.log("Called DisplayServicesPage...");

        // services page logic here
    }

    function DisplayTeamPage() {
        console.log("Called DisplayTeamPage...");

        // team page logic here
    }

    function DisplayBlogPage() {
        console.log("Called DisplayBlogPage...");

        // blog page logic here
    }

    function DisplayContactPage() {
        console.log("Called DisplayContactPage...");

        // contact page logic here

        // Event Handling for Contact Form Submission
        const contactForm = document.getElementById("contactForm");

        if (contactForm) {
            contactForm.addEventListener("submit", function (event) {
                event.preventDefault(); // Prevent default form submission behavior

                // Validate the form
                if (validateForm(contactForm)) {
                    // Display entered data in a modal
                    displayModal(contactForm);

                    // Reset the form
                    contactForm.reset();

                    // Set a timer for redirection after 5 seconds
                    setTimeout(function () {
                        window.location.href = "index.html";
                    }, 5000);
                }
            });
        }


        // addFooterNavigationBar();
    }

    function addFooterNavigationBar() {
        let footer = document.createElement("footer");
        footer.setAttribute("class", "fixed-bottom bg-dark text-white p-2");

        let navLinks = document.createElement("div");
        navLinks.innerHTML = `
<!--            <a href="privacy.html" class="text-white mx-2">Privacy Policy</a>-->
<!--            <a href="terms.html" class="text-white mx-2">Terms of Service</a>-->
<!--            <a href="contact.html" class="text-white mx-2">Contact Us</a>-->
        `;

        footer.appendChild(navLinks);
        document.body.appendChild(footer);
    }

    function validateForm(form) {
        // Assuming the form has input fields with class "form-control"
        const inputFields = form.querySelectorAll('.form-control');

        // Flag to track form validity
        let isValid = true;

        // Loop through each input field
        inputFields.forEach((input) => {
            // Check if the input value is empty
            if (input.value.trim() === '') {
                // If empty, mark the form as invalid and add an error class to the input field
                isValid = false;
                input.classList.add('is-invalid');
            } else {
                // If not empty, remove any existing error class
                input.classList.remove('is-invalid');
            }
        });

        // You can add additional validation checks based on your form requirements

        return isValid;
    }

    function displayModal(form) {

        alert("Form submitted successfully!");
    }

    function Start() {
        console.log("App Started...");

        switch (document.title) {
            case "Home":
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
            case "Contact":
                DisplayContactPage();
                break;
        }
    }

    window.addEventListener("load", Start);

})();
