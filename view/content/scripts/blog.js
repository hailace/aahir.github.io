"use strict";
const navbar = document.querySelector('.navbar-nav');
const careersLink = document.createElement('li');
careersLink.classList.add('nav-item');
careersLink.innerHTML = '<a class="nav-link" href="careers.html"><i class="fa-solid fa-briefcase"></i>Careers</a>';
navbar.appendChild(careersLink);
const blogLink = document.querySelector('a[href="blog.html"]');
if (blogLink) {
    blogLink.innerHTML = '<i class="fa-solid fa-newspaper"></i> News';
    blogLink.setAttribute('href', 'blog.html');
}
//# sourceMappingURL=blog.js.map