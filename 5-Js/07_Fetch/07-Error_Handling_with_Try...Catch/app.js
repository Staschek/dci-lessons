const user =  {email :  'stasd@asdasd.de'};

try{
    console.log('hello Mr.X')

    //Make a Reference Error
 //    myFunc()

 //Make a TypeError
//null.myMethod()
//Make a URIError
//eval('random Text') 
if(!user.name){
    //throw my own Error ' User has no name'
    throw new SyntaxError('User has no name')
}

console.log('hello Mr.Y')

}
catch(err){
    console.log(err)
    console.log(`User Error: ${err.message}`)

    //You can continue in catch but ... LN.29
    console.log('hello Mr.Z')

}finally{
    console.log('Finally runs regardless of the result ...')
    console.log('Hello Mr.ZZ')

}
console.log('Program continue ...')
