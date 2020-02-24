
function getPrice(initPrice, mobileNumber, userBirthDate){
    let result = 'Please enter a valid Mobile Number'
    if(mobileNumber.length != 8){
      return result
    }
    else if(mobileNumber.includes(userBirthDate)){
      result = `Platinium Number : ${initPrice + 200}`
      return result
    }
    let test = Array.from(mobileNumber)
    let counter = [0,0,0,0,0,0,0,0,0,0]
    for(i=0; i<test.length;i++){
      if(test[i] == 0){
            counter[0] = counter[0]+1
          }
          else  if(test[i] == 1){
            counter[1] = counter[1]+1
          }
          else  if(test[i] == 2){
            counter[2] = counter[2]+1
          }
          else  if(test[i] == 3){
            counter[3] = counter[3]+1
          }
          else  if(test[i] == 4){
            counter[4] = counter[4]+1
          }
          else  if(test[i] == 5){
            counter[5] = counter[5]+1
          }
          else  if(test[i] == 6){
            counter[6] = counter[6]+1
          }
          else  if(test[i] == 7){
            counter[7] = counter[7]+1
          }
          else  if(test[i] == 8){
            counter[8] = counter[8]+1
          }
          else  if(test[i] == 9){
            counter[9] = counter[9]+1
          }
    }
     console.log(counter)

    for (j=0; j<=counter.length;){
            if(counter[j]==0){
            counter.splice(j,1);         //deleting all the '0' whitin the counter array to count the length of the Digits which are used
            } else{j++}
        }

        console.log(counter)

        if(counter.length ==1){
        return result = `Golden Number Price :${initPrice + 100}`
        }
        else if(counter.length >=2 && counter.length<= 4){
            result = `Silver Number Price :${initPrice + 50}`
            return result
        }
    else{
        result = `Normal Number Price :${initPrice }`
        return result
    }
  }

  let n1 = '11115555'
  let n2 = '22222222'
  let n3 = '51456485'
  let n4 = '12345678'
  let n5 = '1254'
  let bd = '24031987'
  let t1 = getPrice(39, n1, bd)
  let t2 = getPrice(39, n2, bd)
  let t3 = getPrice(39, n3, bd)
  let t4 = getPrice(39, n4, bd)
  let t5 = getPrice(39, n5, bd)
  let t6 = getPrice(39, bd, bd)
  console.log(t1)
  console.log(t2)
  console.log(t3)
  console.log(t4)
  console.log(t5)
  console.log(t6)

  
// function getPrice(initPrice,mobileNumber, userBirthDate){
//     let result = 'Please enter a valid Mobil Number'
//     if(mobileNumber.length != 8){
//         return result
//     }else if(mobileNumber.includes(userBirthDate)){
//         result = `You have a Platin Number: ${initPrice + 200}`
//         return result
//     }
//     let test = Array.from(mobileNumber)
//     let counter = [0,0,0,0,0,0,0,0,0,0]

//     for(i=0; i < test.length; i++){
//         switch (test[i]){
//             case '0':
//                 counter[0] = counter[0]+1
//                 break;
//             case '1':
//                     counter[1] = counter[1]+1
//                     break;
//             case '2':
//                     counter[2] = counter[2]+1
//                     break;
//             case '3':
//                     counter[3] = counter[3]+1
//                     break;
//             case '4':
//                     counter[4] = counter[4]+1
//                     break;
//             case '5':
//                     counter[5] = counter[5]+1
//                     break;
//             case '6':
//                     counter[6] = counter[6]+1
//                     break;
//             case '7':
//                     counter[7] = counter[7]+1
//                     break;
//             case '8':
//                     counter[8] = counter[8]+1
//                     break;
//             case '9':
//                     counter[9] = counter[9]+1
//                     break;
                
//                 }
//     }

//     for (j=0; j < counter.length; j++){
//         if(counter[j] == 8){
//             result = `You have a Golden Number: ${initPrice + 100}`
//             return result
//         }
//         else if(counter[j] >=2 && counter[j] <=4){
//             result = `Silver Number Price : ${initPrice + 50}`
//             return result
//         }
//     }
//     result = `normal number price ${initPrice}`
//     return result
// }
// let x = getPrice(39,'51456485','07011983');
// console.log(x)