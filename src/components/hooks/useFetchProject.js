import {onMounted, ref} from "vue";
import axios from "axios";

export async function useFetchProject(init = {}) {
    try{
            const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/services/project/${init.id}` )
        return res.data

    }
    catch (e){
        alert('Ошибка')
    }
}