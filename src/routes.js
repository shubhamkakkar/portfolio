import home from '../src/components/routerView/Home.vue';
import portfolio from '../src/components/routerView/MyWork.vue';
import about from '../src/components/routerView/About.vue';
import contact from '../src/components/routerView/Contact.vue';

export const routes = [
    {
       path : '/', name : 'home' , component : home
    },
    {
        path : 'portfolio', name : 'portfolio' , component : portfolio
     },
     {
        path : 'about-me', name : 'about' , component : about
     },
     {
        path : 'contact', name : 'contact' , component : contact
     },
     {
        path : '*', redirect: '/'
    }
]