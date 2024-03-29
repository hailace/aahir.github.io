"use strict";

// Dynamically add 'Careers' link to the navbar
const navbar = document.querySelector('.navbar-nav') as HTMLElement;
const careersLink = document.createElement('li');
careersLink.classList.add('nav-item');
careersLink.innerHTML = '<a class="nav-link" href="careers.html"><i class="fa-solid fa-briefcase"></i>Careers</a>';
navbar.appendChild(careersLink);

// Change 'Blog' link to 'News'
const blogLink = document.querySelector('a[href="blog.html"]') as HTMLElement;
if (blogLink) {
    blogLink.innerHTML = '<i class="fa-solid fa-newspaper"></i> News';
    blogLink.setAttribute('href', 'blog.html');
}
