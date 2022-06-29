import store from '@/app/store';
import {isEmpty, isNull} from 'lodash';
import {getCookie} from '@/app/extra/helper';

export default function auth({next, router}) {

    const token = store.state.token || getCookie('lms-demo') || null;
    if (isEmpty(token) || isNull(token)) {
        return router.push({name: 'login'});
    }

   return  next();

}
