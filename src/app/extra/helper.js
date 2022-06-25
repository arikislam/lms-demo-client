import {mapValues, last, first, values, isNull, isEmpty} from 'lodash';
import Cookie from 'js-cookie';
import {useToast} from "vue-toastification";

// import app from "@/main";

export const getCookie = function (name) {
    return Cookie.get(name);
};

export const emptyErrorMessages = function (errors) {
    const messages = {};
    if (!isNull(errors) && !isEmpty(errors)) {
        const keys = Object.keys(errors);
        keys.forEach((key) => {
            messages[key] = '';
        })
    }
    return messages;
};


export const serializeValidationMessage = function (messages) {
    return mapValues(messages, msg => last(msg));
};


export default {
    setCookie(name, value, ttl, attr) {
        if (typeof ttl === 'undefined') {
            ttl = 30;
        }
        attr = attr || {};
        return Cookie.set(name, value, {
            ...attr,
            expires: ttl
        });
    },

    removeCookie(name) {
        return Cookie.remove(name);
    },


    showErrorMessage(error) {
        if (typeof error === 'object') {
            let {data, status} = error.response;

            if (status === 422) {
                let messages = this.serializeValidationMessage(data.message);
                let firstMessage = first(values(messages));
                if (firstMessage) {
                    // app.$toast.error(firstMessage);
                }
                return messages;
            } else {
                let {message} = data;
                if (message) {
                    // app.$toast.error(message);
                }
            }
        }
        console.log(error)
    }
}

export function middlewarePipeline(context, middleware, index) {
    const nextMiddleware = middleware[index];

    if (!nextMiddleware) {
        return context.next;
    }

    return () => {
        const nextPipeline = middlewarePipeline(
            context, middleware, index + 1
        );

        nextMiddleware({...context, next: nextPipeline});

    }
}

export function successNotification(message, timeOut = 2000) {
    const toast = useToast();

    toast.success(message, {
        timeout: timeOut
    });
    return { toast }
}


export function failedNotification(message, timeOut = 2000) {
    const toast = useToast();

    toast.error(message, {
        timeout: timeOut
    });
    return { toast }
}

export function warningNotification(message, timeOut = 2000) {
    const toast = useToast();

    toast.warning(message, {
        timeout: timeOut
    });
    return { toast }
}
