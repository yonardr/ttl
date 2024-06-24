import {onMounted, ref} from "vue";
import axios from "axios";

export function useFetchFromType() {
    const data = ref({})
    const id_type = ref(0)
    try{
        const fetch = async() =>{
            const types = await axios.get(`${import.meta.env.VITE_APP_API_URL}/services/types` )
                types.data.map(item=>{
                if(item.title === 'Ремонт промышленной электроники') id_type.value = item.id
            })
            const service = await axios.get(`${import.meta.env.VITE_APP_API_URL}/services` )
            data.value = service.data.filter(item => item.type_id === id_type.value)
        }
        onMounted(fetch)
    }
    catch (e){
        alert('Ошибка')
    }
    return {data}
}