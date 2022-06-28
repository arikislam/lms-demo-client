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
        path: '/admin/home',
        component: () => import('@/views/pages/admin/home/Index'),
        name: 'admin.home',
        meta: {
            middleware: [auth, onlyAdmin],
        },
    },
    {
        path: '/admin/coupons',
        component: () => import('@/views/pages/admin/coupons/List'),
        name: 'admin.coupons.list',
        meta: {
            middleware: [auth, onlyAdmin],
        },
    },
    {
        path: '/admin/coupons/create',
        component: () => import('@/views/pages/admin/coupons/Form'),
        name: 'admin.coupons.create',
        meta: {
            middleware: [auth, onlyAdmin],
        },
    },
    {
        path: '/admin/coupons/:id/edit',
        component: () => import('@/views/pages/admin/coupons/Form'),
        name: 'admin.coupons.edit',
        meta: {
            middleware: [auth, onlyAdmin],
        },
    },
    {
        path: '/admin/courses',
        component: () => import('@/views/pages/admin/courses/List'),
        name: 'admin.courses.list',
        meta: {
            middleware: [auth, onlyAdmin],
        },
    },
    {
        path: '/admin/courses/:id/details',
        component: () => import('@/views/pages/admin/courses/Details'),
        name: 'admin.courses.details',
        meta: {
            middleware: [auth, onlyAdmin],
        },
    }


];


export default routes;