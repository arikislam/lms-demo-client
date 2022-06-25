import store from '@/app/store';
import {isEmpty, isNull} from 'lodash';
import {getCookie} from '@/app/extra/helper';

export default function guest({next}) {
    const token = store.state.token || getCookie('lms-demo') || null;
    if (!isEmpty(token) && !isNull(token)) {
        if (store.state.isAdmin) {
            return next({name: 'admin.index'});
        } else {
            return next({name: 'customer.courses'});
        }
    }

    return next();

}
