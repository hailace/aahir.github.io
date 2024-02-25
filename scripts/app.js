"use strict";
//LIFE - Invoked functional expression
(function(){

    function  CheckLogin(){

        if(sessionStorage.getItem("user")){
            $("#login").html(`<a id = "logout" class="nav-link" href="#"><i class="fa fa-undo" ></i>Logout</a>`);

        }
        $("#logout").on("click", function (){
            sessionStorage.clear();

            location.href="index.html";
        });
    }
    function  LoadHeader(html_data){
        $("header").html(html_data);
        $(`li>a:contains(${document.title})`).addClass("active").attr("aria-current","page");
        CheckLogin();
    }

    function AjaxRequest(method, url, callback){

        //Step1: Instantiate a xhr object
        let xhr = new XMLHttpRequest();

        //step2: Add an event listener for readystatechange
        xhr.addEventListener("readystatechange", () => {

            if(xhr.readyState === 4 && xhr.status === 200)
            {
                if(typeof callback === "function")
                {
                    callback(xhr.responseText);
                }else{
                    console.error("ERROR: callback not a function");
                }

            }

        });

        //step3: open a connection to the server
        xhr.open(method, url);

        //step4: send the request to the server
        xhr.send();
    }
    function  ContactFormValidation(){
        //fullName
        ValidateField("#fullName",/^([A-Z][a-z]{1,3}\.?\s)?([A-Z][a-z]+)+([\s,-]([A-z][a-z]+))*$/,"Please enter the valid First and Last name");
        //contactNumber
        ValidateField("#contactNumber",/^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]\d{4}$/,"Please enter the valid phone contact number");
        //emailAddress
        ValidateField("#emailAddress",/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,10}$/,"Please enter the valid email address");

    }
    /**
     * This function will validate field input based on regular expression
     * @param input_field_id
     * @param regular_expression
     * @param error_message
     */
    function ValidateField(input_field_id,regular_expression,error_message){
        let messageArea = $("#messageArea").hide();


        $(input_field_id).on("blur", function(){
            let inputFieldText = $(this).val();
            if(!regular_expression.test(inputFieldText)){
                //fails validation
                $(this).trigger("focus").trigger("select");
                messageArea.addClass("alert alert-danger").text(error_message).show();
            }
            else{
                // passes validation
                messageArea.removeClass("class").hide();
            }
        });
    }
    function AddContact(fullName,contactNumber,emailAddress){
        let contact = new core.Contact(fullName, contactNumber, emailAddress);
        if(contact.serialize()) {
            let key = contact.fullName.substring(0, 1) + Date.now();
            localStorage.setItem(key, contact.serialize());
        }
    }
    function DisplayHomePage(){
        console.log("Called DisplayHomePage...");

        $("#AboutUsBtn").on("click",() => {
            location.href= "about.html";
        });

        $("main").append(`<p id="MainParagraph" class="mt-3"> This is my first paragraph</p>`);

        $("body").append(`<article class="container">
                          <p id="ArticleParagraph" class="mt-3">This is my article paragraph</p></article></article>`)

    }

    function DisplayAboutPage(){
        console.log("Called DisplayAboutPage...");
    }

    function DisplayPortfolioPage(){
        console.log("Called DisplayPortfolioPage...");
    }

    function DisplayServicePage(){
        console.log("Called DisplayServicePage...");
    }
    function DisplayContactPage(){
        console.log("Called DisplayContactPage...");

        //TestFullName();
        ContactFormValidation();


        let sendButton=document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function (){
            if(subscribeCheckbox.checked){
                AddContact(fullName.value, contactNumber.value, emailAddress.value);
            }
        });
    }

    function DisplayContactListPage(){
        console.log("Called DisplayContactListPage...");

        if(localStorage.length >0){
            let contactList= document.getElementById("contactList");
            let data="";

            let keys = Object.keys(localStorage);

            let index=1;
            for(const key of keys){


                let contactData = localStorage.getItem(key);
                let contact = new core.Contact();
                contact.deserialize(contactData);
                data += `<tr><th scope="row" class="text-center">${index}</th>
                         <td>${contact.fullName}</td>
                         <td>${contact.contactNumber}</td>
                         <td>${contact.emailAddress}</td> 
                         <td>
                             <button value="${key}" class="btn btn-primary btn-sm edit">
                                 <i class="fa fa-edit fa-lang">Edit</i>
                             </button>
                         </td>
                         <td>
                             <button value="${key}" class="btn btn-danger btn-sm delete">
                                     <i class="fa fa-trash-alt fa-lang">Delete</i>
                             </button>
                         </td>
                         </tr>`;

                index++;
            }

            contactList.innerHTML = data;
        }

        $("#addButton").on("click",() =>{
            location.href = "edit.html#add";
        });

        $("button.edit").on("click", function (){
            location.href="edit.html#" + $(this).val();
        });

        $("button.delete").on("click",function(){
            if(confirm("Confirm Contact delete?")){
                localStorage.removeItem($(this).val());
            }
            location.href="contact-list.html";

        });
    }

    function  DisplayEditPage(){
        console.log("Called DisplayEditPage...")

        ContactFormValidation();

        let page = location.hash.substring(1);
        switch (page){
            case "add":
                $("main>h1").text("Add Contact");

                $("#editButton").html(`<i class="fa fa-plus fa-sm">Add`);

                $("#editButton").on("click",(event) => {

                    //prevent form submission
                    event.preventDefault();
                    AddContact(fullName.value,contactNumber.value,emailAddress.value);
                    location.href="contact-list.html";

                });

                $("#cancelButton").on("click",() =>{
                    location.href="contact-list.html";
                });
                break;
            default:
                //edit operation
                let contact= new core.Contact();
                contact.deserialize(localStorage.getItem(page));

                $("#fullName").val(contact.fullName);
                $("#contactNumber").val(contact.contactNumber);
                $("#emailAddress").val(contact.emailAddress);

                $("#editButton").on("click",(event) =>{

                    event.preventDefault();
                    contact.fullName= $("#fullName").val();
                    contact.contactNumber= $("#contactNumber").val();
                    contact.emailAddress= $("#emailAddress").val();

                    localStorage.setItem(page,contact.serialize());

                    location.href="contact-list.html";

                });
                $("#cancelButton").on("click",() =>{
                    location.href="contact-list.html";
                });

                break;
        }
    }

    function DisplayLoginPage(){
        console.log("Called DisplayLoginPage...")

        let messageArea = $("#messageArea");

        $("#loginButton").on("click", function (){

            let success = false;
            let newUser = new core.User();

            $.get("./data/users.json",function (data){

                for(const user of data.users){

                    console.log(user);
                    //check if the username and password
                    if(username.value === user.UserName && password.value === user.Password){
                        newUser.fromJSON(user);
                        success= true;
                        break;
                    }
                }

                if(success){
                    sessionStorage.setItem("user", newUser.serialize());
                    messageArea.removeAttr("class").hide();
                    location.href ="contact-list.html";
                }else{
                    $("username").trigger("focus").trigger("select");
                    messageArea
                        .addClass("alert alert-danger")
                        .text("Error: Invalid Login Credentials")
                        .show();
                }

            });

        });

        $("#cancelButton").on("click",function (){
            document.forms[0].reset();
            location.href="index.html";
        });
    }

    function  DisplayRegisterPage(){
        console.log("Called DisplayRegisterPage...")
    }

    function  DisplayTeamPage(){
        console.log("Called DisplayTeamPage...")
    }

    function  DisplayBlogPage(){
        console.log("Called DisplayBlogPage...")
    }

    function  DisplayEventPage(){
        console.log("Called DisplayEventPage...")
    }

    function  DisplayGalleryPage(){
        console.log("Called DisplayGalleryPage...")
    }

    function Start() {
        console.log("App Started....");

        AjaxRequest("GET", "header.html", LoadHeader);

        switch(document.title){
            case "Home":
                DisplayHomePage();
                break;
            case "Portfolio":
                DisplayPortfolioPage();
                break;
            case "Contact":
                DisplayContactPage();
                break;
            case "Services":
                DisplayServicePage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Contact List":
                DisplayContactListPage();
                break;
            case "Team":
                DisplayTeamPage();
                break;
            case "Blog":
                DisplayBlogPage();
                break;
            case "Events":
                DisplayEventPage();
                break;
            case "gallery":
                DisplayGalleryPage();
                break;
            case "Edit Contact":
                DisplayEditPage();
                break;
            case "Login":
                DisplayLoginPage();
                break;
            case "Register":
                DisplayRegisterPage();
                break;

        }
    }
    window.addEventListener("load",Start);

})();