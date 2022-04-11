import * as axios from 'axios';

const baseURL = 'https://sas.front.kreosoft.space/api/';

const instance = axios.create({
    baseURL : baseURL
});

function getNews(){
    return instance.get('News')
    .then(respose => {
        if(respose.status === 200){
            return respose.data;
        }
    })
    .catch(error => {
        console.log(error.respose.data.error);
    });
}

function postLikes(id){
    return instance.post('News/like', { id : id })
    .then(respose => {
      if (respose.status === 200) {
        return respose.data;
      }
    })
    .catch(error => {
      console.log(error.respose.data.error);
    });
}
export const newsApi = {
    getNews : getNews, 
    postLikes : postLikes
}