import guest from "@/app/middlewares/guest";
import auth from "@/app/middlewares/auth";
import onlyAdmin from "@/app/middlewares/onlyAdmin";
import onlyCustomer from "@/app/middlewares/onlyCostomer";



const routes = [
    {
        path: '/',
        component: () => import('@/views/pages/public/Home'),
        name: 'home',
        // meta: {
        //     middleware: [guest],
        // },
    },
    {
        path: '/login',
        component: () => import('@/views/pages/auth/Login'),
        name: 'login',
        meta: {
            middleware: [guest],
        },
    },
    {
        path: '/register',
        component: () => import('@/views/pages/auth/Register'),
        name: 'register',
        // meta: {
        //     middleware: [guest],
        // },
    },
    {
        path: '/my-courses',
        component: () => import('@/views/pages/public/Customers/MyCourses'),
        name: 'customer.courses',
        meta: {
            middleware: [auth, onlyCustomer],
        },
    },
    {
        path: '/admin',
        component: () => import('@/views/pages/admin/Index'),
        name: 'admin.index',
        meta: {
            middleware: [auth, onlyAdmin],
        },
    }

    ];


export default routes;