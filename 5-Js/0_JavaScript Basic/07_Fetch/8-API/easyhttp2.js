/**
 * Easy HTTP Library
 * Library for making HTTP request
 * 
 * @version 0.0.4
 * @author staschek
 * @license MIT 
 **/
//fetch("https://api.github.com/users/Staschek/followers")

 class EasyHTTP{
     //Make an HTTP Get Request
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((res) => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

    post(url,data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'Post',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then((res) => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

    //Make a put Request
    put(url,data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then((res) => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }


    //Make a put Request
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type' : 'application/json'
                }
            })
            .then((res) => res.json())
            .then(data => resolve('Done !!!'))
            .catch(err => reject(`My custom Message  .. ${err}`))
        })
    }
 }