import store from '@/app/store';

export default function onlyCustomer({next, router}) {
    if (store.state.isAdmin) {
        return router.push({name: 'admin.index'});

    } else {
        return next();
    }


}
