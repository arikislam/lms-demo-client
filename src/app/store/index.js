import { createStore } from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import VuexPersistence from "vuex-persist";


const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

const store = createStore({
    state() {
        return{
            user: null,
            token: null,
            expiry: null,
            isSidebarOpen: true,
            isAdmin: false
        }
    },
    actions,
    mutations,
    getters,
    plugins: [vuexLocal.plugin]
});

export default store;