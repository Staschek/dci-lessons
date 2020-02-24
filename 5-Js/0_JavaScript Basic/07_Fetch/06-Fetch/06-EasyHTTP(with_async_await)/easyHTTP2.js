/*
 * Easy HTTP Library
 * Library for making HTTP request
 * 
 * @version 0.0.4
 * @author staschek
 * @license MIT
 */

 class EasyHTTP{

    async get(url){
        //await response of the getch call
        const response = await fetch(url)

        //only proceed once it resolved
        const resData = await response.json() 

        //only proceed once the second promise is resolved
        return data
    }   

    async post(url, data){
        const response = await fetch(url,{
            method: 'POST',
            headers: {
                'Contend-type' : 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData
    }

    async put(url, data){
        const response = await fetch(url,{
            method: 'PUT',
            headers: {
                'Contend-type' : 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData
    }

    async delete(url){
        const response = await fetch(url,{
            method: 'DELETE',
            headers: {
                'Contend-type' : 'application/json'
            }
        });
        const resData = await response.json();
        return resData
    }

}