import { api } from '../services/api';

class Cep{
    public async getCep(nro: string){
        const {data} = await api.get(`/${nro}/json`)
        return data;   
    
    }
}

export default new Cep();