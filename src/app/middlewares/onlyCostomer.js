import store from '@/app/store';

export default function onlyCustomer({next, router}) {
    if (store.state.isAdmin) {
        return router.push({name: 'admin.home'});

    } else {
        return next();
    }


}
