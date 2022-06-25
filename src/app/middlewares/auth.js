import store from '@/app/store';
import {isEmpty, isNull} from 'lodash';
import {getCookie} from '@/app/extra/helper';

export default function auth({next}) {

    const token = store.state.token || getCookie('lms-demo') || null;
    if (isEmpty(token) || isNull(token)) {
       return  next({name: 'login'});
    }

   return  next();

}
