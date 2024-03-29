"use strict";

declare const window: Window;

// Define Route interface
interface Route {
    path: string;
    contentPath: string;
}

class Router {
    routes: Route[];

    constructor(routes: Route[]) {
        this.routes = routes;
        this.loadInitialRoute();
    }

    loadInitialRoute(): void {
        const pathName = window.location.pathname;
        const initialRoute = this.routes.find((route: Route) => pathName.startsWith(route.path));
        if (initialRoute) {
            this.loadRoute(initialRoute.path);
        } else {
            console.error('Initial route not found');
        }
    }

    loadRoute(path: string): void {
        const route = this.routes.find((route: Route) => path.startsWith(route.path));
        if (!route) {
            console.error('Route not found');
            return;
        }

        // Clear existing img
        const contentContainer = document.getElementById('img');
        if (contentContainer) {
            contentContainer.innerHTML = '';

            // Fetch and load img associated with the route
            fetch(route.contentPath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to load img');
                    }
                    return response.text();
                })
                .then(html => {
                    if (contentContainer) {
                        contentContainer.innerHTML = html;
                    }
                })
                .catch(error => {
                    console.error('Error loading route:', error);
                    // Optionally, display an error message to the user
                });

            // Update active navigation link
            this.updateActiveLink(path);
        } else {
            console.error('Content container not found');
        }
    }

    updateActiveLink(path: string): void {
        // Remove 'active' class from all navigation links
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add 'active' class to the current navigation link
        const currentLink = document.querySelector(`nav a[href="${path}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }
}

// Define routes for each HTML file
const routes = [
    {
        path: '/',
        contentPath: 'views/img/about.html'
    },
    {
        path: '/blog',
        contentPath: 'views/img/blog.html'
    },
    {
        path: '/careers',
        contentPath: 'views/img/careers.html'
    },
    {
        path: '/contact',
        contentPath: 'views/img/contact.html'
    },
    {
        path: '/events',
        contentPath: 'views/img/events.html'
    },
    {
        path: '/gallery',
        contentPath: 'views/img/gallery.html'
    },
    {
        path: '/load',
        contentPath: 'views/img/load.html'
    },
    {
        path: '/login',
        contentPath: 'views/img/login.html'
    },
    {
        path: '/portfolio',
        contentPath: 'views/img/portfolio.html'
    },
    {
        path: '/privacy-policy',
        contentPath: 'views/img/PrivacyPolicy.html'
    },
    {
        path: '/register',
        contentPath: 'views/img/register.html'
    },
    {
        path: '/services',
        contentPath: 'views/img/services.html'
    },
    {
        path: '/team',
        contentPath: 'views/img/team.html'
    },
    {
        path: '/terms-of-service',
        contentPath: 'views/img/TermsOfService.html'
    }
];

const router = new Router(routes);
export default router;
