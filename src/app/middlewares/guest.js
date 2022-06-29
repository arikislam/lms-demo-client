import store from '@/app/store';
import {isEmpty, isNull} from 'lodash';
import {getCookie} from '@/app/extra/helper';

export default function guest({next, router}) {
    const token = store.state.token || getCookie('lms-demo') || null;
    if (!isEmpty(token) && !isNull(token)) {
        if (store.state.isAdmin) {
            return router.push({name: 'admin.home'});
        } else {
            return router.push({name: 'customer.courses'});
        }
    }

    return next();

}
