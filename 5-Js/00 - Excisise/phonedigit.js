function givePrice(str,birthday){
    let   arr= Array.from(str)
    let newArr=[]
    let tarif;
    let price ;
    for(i=0;i<arr.length;i++){
      if(newArr.indexOf(arr[i])== -1){
        newArr.push(arr[i])
      }if(newArr.length> 1 && newArr.length<=4 && str!==birthday){
      price = 89
      tarif = 'Silver'
      }else if(newArr.length==1){
        price= 139
        tarif = 'Golden'
      }else if(str===birthday){
        terif= 'platinum'
        price = 239
      }else{
        tarif ='normal'
        price =39
      }
    }
    return `your sim cart tarif is ${tarif} and it costs ${price}`
    }
    let x = givePrice('51252451')
    console.log(x)

// let phoneData = {
//    name: 'Sascha',
//    birthday: '08031986',
//   // phone: '98747894',
//    phone: '22558899',
//    price: 39
// }

// function checkNumber(data){
//     let x = Array.from(data.phone)
//     let buff = [x[0]];
//     if(x !== data.birthday){
//         for(i=0;i<x.length;i++){
//             for(k=0;k<x.length;k++){
//                 let regEx = new RegExp(x[i]);
//                 console.log(x[k])
//                 if(x[i] === x[k] && buff[i] !== x[k]){
//                     buff.push(x[i])}
//                 }
//         }        
//     }else{
//         data.price += 200
//     }
//     return buff;
// }

// let result = checkNumber(phoneData);
// console.log(result)
// console.log(phoneData.phone)

// // Starttime = 09:30 Ending Time 11:15