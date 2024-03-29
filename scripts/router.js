"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Router {
    routes;
    constructor(routes) {
        this.routes = routes;
        this.loadInitialRoute();
    }
    loadInitialRoute() {
        const pathName = window.location.pathname;
        const initialRoute = this.routes.find((route) => pathName.startsWith(route.path));
        if (initialRoute) {
            this.loadRoute(initialRoute.path);
        }
        else {
            console.error('Initial route not found');
        }
    }
    loadRoute(path) {
        const route = this.routes.find((route) => path.startsWith(route.path));
        if (!route) {
            console.error('Route not found');
            return;
        }
        const contentContainer = document.getElementById('content');
        if (contentContainer) {
            contentContainer.innerHTML = '';
            fetch(route.contentPath)
                .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load content');
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
            });
            this.updateActiveLink(path);
        }
        else {
            console.error('Content container not found');
        }
    }
    updateActiveLink(path) {
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        const currentLink = document.querySelector(`nav a[href="${path}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }
}
const routes = [
    {
        path: '/',
        contentPath: 'views/content/about.html'
    },
    {
        path: '/blog',
        contentPath: 'views/content/blog.html'
    },
    {
        path: '/careers',
        contentPath: 'views/content/careers.html'
    },
    {
        path: '/contact',
        contentPath: 'views/content/contact.html'
    },
    {
        path: '/events',
        contentPath: 'views/content/events.html'
    },
    {
        path: '/gallery',
        contentPath: 'views/content/gallery.html'
    },
    {
        path: '/load',
        contentPath: 'views/content/load.html'
    },
    {
        path: '/login',
        contentPath: 'views/content/login.html'
    },
    {
        path: '/portfolio',
        contentPath: 'views/content/portfolio.html'
    },
    {
        path: '/privacy-policy',
        contentPath: 'views/content/PrivacyPolicy.html'
    },
    {
        path: '/register',
        contentPath: 'views/content/register.html'
    },
    {
        path: '/services',
        contentPath: 'views/content/services.html'
    },
    {
        path: '/team',
        contentPath: 'views/content/team.html'
    },
    {
        path: '/terms-of-service',
        contentPath: 'views/content/TermsOfService.html'
    }
];
const router = new Router(routes);
exports.default = router;
//# sourceMappingURL=router.js.map