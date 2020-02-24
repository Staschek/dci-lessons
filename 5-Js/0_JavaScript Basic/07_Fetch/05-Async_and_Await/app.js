/** 
 * Async/await : special syntax to work with promises in a more comfortable fashion
 * The word 'async' before a function 
 * this means a function always returns a promise.
 * values are wrapped in a resolved promise automatically
 * 
 **/

 /**
  * 
  async function sampleFunc(){
      //return Promise.resolve('Hello February') //not neccessary anymore
      return 'Hello February'
    }
    console.log(sampleFunc())
    
    sampleFunc().then(val => console.log(val))
   */

//so, async 'ensures' that the function returns a promise and 'warps' it's returned value into the resolve value

//Await:

//There is another keyword, await, that works only inside async functions.

//The Keyword await makes Javascript wait until that promise settle and returns its result.
/**
 * 
 
 function myTest(){
     let promise = new Promise((resolve, reject) => {
         setTimeout(() => resolve('done!'), 1000)
    });
    return promise
      //done"
    }
    //myTest()
    
    async function await(){
        let result = await myTest();
        console.log(result);
    }
    
    console.log(await())
    */
    
    //await literally makes Javascript wait until the promise get executed and then go with the result.
    
    //That doesn't cost any CPU resources, because the engine can do other jobs in the meantime: execute other syripts, handle events, etc.
    
    /**
     * 
     async function myFunc(){
         const error = false;
         const promise = new Promise((resolve, reject) => {
             setTimeout(() => resolve('Hello Feb'), 2000);
            });
            if(!error){
        const res = await promise;
        return res
    }else{
        await Promise.reject(new Error('Something went wrong'))
    }
}

myFunc().then(val => console.log(val)).catch(err => console.log(err))
*/

async function getUsers(){
    //await response of the getch call
    const response = await fetch('https://api.github.com/users')

    //only proceed once it resolved
    const data = await response.json() 

    //only proceed once the second promise is resolved
    
    return data

}

getUsers().then(users => console.log(users))