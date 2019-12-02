// let today, futureDay;

// today = new Date();
// futureDay = new Date('October 3 2031')

// function checkDate(current, future){
//     if(current < future) {
//         return `Your book to the event for ${futureDay} is already guaranteed!`
//     } else { return 'Your request is before today. Please select another date.'
//     }
// }

// let x = checkDate(today, futureDay)
// console.log(x)
///////////////////////////////////////////////////////////////////////////////////////7777


// let phoneSale = {
//     cashier : 0,
//     cover : ['green', 'pink', 'orange', 'red', 'black', 'white', 'blue', 'yellow', 'transparent'],
//     pricing: {
//         phone: 600,
//         headphone: 50,
//         cover: 20
//     },
//     discount:{
//         headphone: .1,
//         cover: .05,
//         green: .07,
//         pink: .12,
//         orange: .15
//     }
// }


//////////////////////////////////////////////////////////////////


// let phoneSale = {
//     cashier : 0,            //at the beginning 0
//     phone : false,          //Boolean for printing later
//     headphone : false,      //     ---""---
//     cover : '',
//     pricing: {
//         phone: 600,
//         headphone: 50,
//         cover: 20
//     },
//     discount:{
//         headphone: .1,
//         cover : [
//             {color: 'green', discount: .07},
//             {color: 'pink', discount: .12},
//             {color: 'orange', discount: .15},
//             {color: 'red', discount: .05},
//             {color: 'black', discount: .05},
//             {color: 'white', discount: .05},
//             {color: 'blue', discount: .05},
//             {color: 'yellow', discount: .05},
//             {color: 'transperent', discount: .05}
//         ]
//     }
// }
//         function cashierSale (phone, headp, cover){
//             let color = new RegExp(cover,'gi');         //Defining a Regex with color name
//             let coverDiscount;
//             (phone && headp) ?  (function (){ phoneSale.headphone = true; phoneSale.phone = true }())  //
//                 : (phone) ? phoneSale.phone = true : phoneSale.phone;                   //try to swich the boolean to true
//             for(i = 0; i < phoneSale.discount.cover.length; i++){                             //Loop for Array to find colorname and discount
//                 (phoneSale.discount.cover[i].color.match(color)) ? (function (){
//                     coverDiscount = phoneSale.discount.cover[i].discount; 
//                     phoneSale.cover = cover;}())
//                          : coverDiscount ;       //assign Discount to coverDiscount and !!! Problem2: add Color to phoneSale.cover
//             }
//             //Boring Ternary Operator to Set Price and Discount from the Product you choosed
//             return (phone && headp && cover) ? (phoneSale.cashier = phoneSale.pricing.phone + phoneSale.pricing.headphone + phoneSale.pricing.cover) * (1 - phoneSale.discount.headphone - coverDiscount) 
//                     : (phone && headp) ? (phoneSale.cashier = phoneSale.pricing.phone + phoneSale.pricing.headphone) * (1 - phoneSale.discount.headphone)
//                         : (phone && cover) ? (phoneSale.cashier = phoneSale.pricing.phone + phoneSale.pricing.cover) * (1 - coverDiscount)
//                             : (phone) ? phoneSale.cashier = phoneSale.pricing.phone 
//                                 : phoneSale.cashier;
//         }
// //Choose your Product
// let cash = cashierSale(true, false, 'pink')
// console.log(`Cashier is ${cash}€. The Customer choose ${(phoneSale.phone) ? 'one' : 'no'} Phone, ${(phoneSale.headphone) ? 'one' : 'no'} headphone and a ${phoneSale.cover} cover.`)


//////////////////////////////////////////////////////////////////////////////////////////////

// let ship = {
//     container: [
//         {weight: 10, amount: 100},
//         {weight: 20, amount: 100},
//         {weight: 50, amount: 50},
//         {weight: 100, amount: 50},
//         {weight: 200, amount: 100},
//         {weight: 500, amount: undefined}
//     ],
//     capacity: 10000,
//     loaded: [],
//     shipWeight: 0,
//     load: (function (){
//         for(i = 0; i < this.container.length; i++){
//             for(j = 0; j < this.container[i].amount;j++){
//                 if ((this.shipWeight) <= this.capacity) {
//                     this.shipWeight += this.container[i].weight
//                     this.loaded.push(this.container[i].weight)
//                     if (this.shipWeight > this.capacity) {
//                         this.shipWeight = this.shipWeight - this.loaded[this.loaded.length - 1]
//                         this.loaded.pop()
//                     }
//                 }
//             }
//         }
//         return `The amount of containers is: ${this.loaded.length}, the loaded containers weight ${this.shipWeight}kg, the ship has a capacity of ${this.capacity}kg, so the free available weight is: ${this.capacity-this.shipWeight}kg.`
//     })}

// console.table(ship.load())

///////////////////////////////////////////////////////////////////////////////////////

let company = {
    employees: [
        {amount: 1, position: 'Data Analyst', earns: 7500},
        {amount: 1, position: 'Machine Learning Engineer', earns: 10000},
        {amount: 2, position: 'FullStack developers', earns: 3000},
        {amount: 4, position: 'Backend Developers', earns: 2000},
        {amount: 4, position: 'Frontend Developers', earns: 1500},
        {amount: 50, position: 'normal Workers', earns: 1000},
        {amount: 5, position: 'DevOps Engineers', earns: 5000},
        {amount: 5, position: 'Project managers', earns: 4000}
    ],
    cashier: 100000,
    payed: 0,
    loaded: [],
    pay: (function(){
        for(i = 0; i < this.employees.length; i++){
            for(j = 0; j < this.employees[i].amount;j++){
                if (this.payed <= this.cashier) {
                    this.payed += this.employees[i].earns
                    this.loaded.push(this.employees[i].earns)
                    if (this.payed > this.cashier) {
                        this.payed = this.payed - this.loaded[this.loaded.length - 1]
                        this.loaded.pop()
                    }
                }
            }
        }
        return `The Number of Workers which are already payed is: ${this.loaded.length}, the total amount of salary is ${this.payed}€, the company has a cashier of ${this.cashier}€, so the left amount of Cash is: ${this.cashier-this.payed}€.`
    })
}

console.table(company.pay() )
console.table(company.loaded )

// emplArr=[];
// for (i=0; i<72;i++){emplArr.push([])};
// emplArr.fill({JobDes: 'Worker', payment:1000}, 0, 50);
// emplArr.fill({JobDes: 'Frontend', payment:1500}, 50, 54);
// emplArr.fill({JobDes: 'Backend', payment:2000}, 54, 58);
// emplArr.fill({JobDes: 'Fullstack', payment:3000}, 58, 60);
// emplArr.fill({JobDes: 'ProjMan', payment:4000}, 60, 65);
// emplArr.fill({JobDes: 'DevOps', payment:5000}, 65, 70);
 
// emplArr.fill({JobDes: 'DataAnalyst', payment:7500}, 70, 71);
// emplArr.fill({JobDes: 'MachLrnEng', payment:10000}, 71, 72);
 
// console.log(emplArr)