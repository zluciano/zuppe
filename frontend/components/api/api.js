import axios from '~/helpers/axios';

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

const api = {
    login(username, password){
        return post('/api/login', {username: username, password: password});
    },
    logout(){
        return post('/api/logout');
    },
    whoami(){
        return get('/api/whoami');
    },
    add_todo(newtask){
        return post('/api/add_todo', {new_task: newtask});
    },
    list_todos(){
        return get('/api/list_todos');
    },
    list_meals(day){
        return get('/api/list_meals', {day: day});
    },
    list_recipes(){
        return get('/api/list_recipes');
    },
    list_my_recipes(){
        return get('/api/list_my_recipes');
    },
    new_recipe(recipe, ingredients){
        return post('/api/new_recipe', {recipe: recipe, ingredients: ingredients});
    },
    list_materials(){
        return get('/api/list_materials');
    }
}
export default api;

function get(url, params){
    return axios.get(url, {params: params});
}

function post(url, params){
    var fd = new FormData();
    params = params || {}
    Object.keys(params).map((k) => {
        fd.append(k, params[k]);
    })
    return axios.post(url, fd);
}
