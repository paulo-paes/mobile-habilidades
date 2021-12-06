import axios from "axios";

const baseUrl = 'http://192.168.1.105:4000';

const ApiInstance = axios.create({
    baseURL: baseUrl
})

export {ApiInstance}

const API = {
    login(credenciais){
        return ApiInstance.post(`/usuarios/login`, credenciais)
    },

    setAuthToken(authToken){
        if(authToken) ApiInstance.defaults.headers.common['Authorization'] = `bearer ${authToken}`;
    },

    deleteToken(){
        delete ApiInstance.defaults.headers.common["Authorization"];
    },

    getHabilidades(){
        return ApiInstance.get('/habilidades')
    },

    postHabilidade(habilidade){
        return ApiInstance.post('/habilidades', habilidade)
    },

    vinculaHabilidade(id, habilidade){
        return ApiInstance.post(`/usuarios/${id}/habilidades`, habilidade)
    },

    getUsers(){
        return ApiInstance.get('/usuarios')
    },
    
    criarConta(user){
        return ApiInstance.post('/usuarios', user)
    },

    emailCadastrado(email){
        return ApiInstance.get('/emailcadastrado', {params: {email}})
    },

    recuperarSenha(email) {
        return ApiInstance.post('/recuperarsenha', email)
    },

    codigoCorreto(codigo){
        return ApiInstance.post('/recuperarsenha/codigo', codigo)
    },

    novaSenha(senha){
        return ApiInstance.post('/recuperarsenha/senha', senha)
    },

    getUserById(id){
        return ApiInstance.get(`/usuarios/${id}/habilidades`)
    }

}

export default API
