import axios from "axios";

export const ServicesModule = {
    state: {
        types: {},
        filter: [],
        services: []
    },
    actions: {
        async fetchServicesTypes(ctx) {
            try{
                const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/services/types`)
                ctx.commit('updateServiceTypes', res.data)
            }
            catch (e){
                alert(`Ошибка ${e}`)
            }
        },
        async fetchServices(ctx) {
            try{
                const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/services`)
                ctx.commit('updateServices', res.data)
            }
           catch (e){
                alert(`Ошибка ${e}`)
           }
        },
    },
    mutations: {
        updateServices(state, data) {
            state.services = data
            state.filter = data
        },
        updateServiceTypes(state, data){
            state.types = data
        },
        resetFilter(state){
            state.types.forEach(item=>{
                item.active = false
            })
            state.filter = state.services
        },
        filterService(state, data){
            state.types.forEach(item=>{
               if(item.id === data.id) item.active = true
               else item.active = false
            })
            state.filter = state.services.filter(item => item.type_id === data.id)
        }
    },
    getters: {
        getServices(state) {
            return state.filter
        },
        getServiceTypes(state) {
            return state.types
        },
    }
}