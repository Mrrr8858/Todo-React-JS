import * as axios from 'axios';

const baseURL = 'https://sas.front.kreosoft.space/api/';

const instance = axios.create({
    baseURL: baseURL
});

function getToDoLists() {
   /*  if(localStorage.getItem('token') === null){

        authorization(user)
    } */
    return instance.get('ToDoList', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(respose => {
            if (respose.status === 200) {
                return respose.data;
            }
           /*  else if(400 < respose.status && respose.status < 500){
                authorization(user);
                getToDoLists();
            }  */
        })
        .catch(error => {
           return authorization(user)
            .then(resp => {
                return getToDoLists();
            }) 
            console.log('AAAA');
        });
}
const user = {
    "username": "liza222",
    "password": "liza222"
}
authorization(user)

function authorization(body) {
    return instance.post('auth', body)
        .then(respose => {
            if (respose.status === 200) {
                localStorage.setItem('token', respose.data.accessToken);
                console.log("11111");
            }
        })
        .catch(error => {
            console.log('1111111');
        });
}

function createOrUpdateToDoList(body) {
    return instance.post('ToDoList', body, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(respose => {
            if (respose.status === 200) {
                return respose.data;
            }
        })
        .catch(error => {
            console.log('AAAA');
        });
}
function createOrUpdateToDoTask(body) {
    return instance.post('ToDoItem', body, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(respose => {
            if (respose.status === 200) {

                return respose.data;
            }
        })
        .catch(error => {
            console.log('AAAA');
        });
}


function checkTask(body) {
    return instance.post('ToDoItem/check', body, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(respose => {
            if (respose.status === 200) {
                return respose.data;
            }
        })
        .catch(error => {
            console.log('AAAA');
        });
}

function deleteList(body) {
    return instance.delete('ToDoList', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: {
            ...body
        }
    })
        .then(respose => {
            if (respose.status === 200) {
                return respose.data;
            }
        })
        .catch(error => {
            console.log('AAAA');
        });
}


function deleteTask(body) {
    return instance.delete('ToDoItem', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: {
            ...body
        }
    })
        .then(respose => {
            if (respose.status === 200) {
                return respose.data;
            }
        })
        .catch(error => {
            console.log('AAAA');
        });
}



export const todoApi = {
    getToDoLists: getToDoLists,
    createOrUpdateToDoList: createOrUpdateToDoList,
    createOrUpdateToDoTask: createOrUpdateToDoTask,
    deleteList: deleteList,
    deleteTask: deleteTask,
    checkTask: checkTask
}