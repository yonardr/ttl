import {createStore} from "vuex";
import {ServicesModule} from "./ServicesModule.js";

export default createStore({
    modules: {
        services: ServicesModule
    }
})