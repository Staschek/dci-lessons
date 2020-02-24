function createTable (){
    const body = document.querySelector('body')
    const h1 = document.createElement('h1');
    const table = document.createElement('table');
    const tblBody = document.createElement('tbody');
    
    //cells creation first Tablerow
    for (let i=0;i<5;i++){
        const row = document.createElement('tr')
        
        //table cells and Textnode
        for(let j=0;j<3;j++){
            const cell = document.createElement('td')
            const cellText = document.createTextNode('containerRow-' + i + ' cell-'+j)
            row.appendChild(cell)
            cell.id=(i+''+j)
            cell.appendChild(cellText)
        }
        tblBody.appendChild(row)
    }
    //append the <tbody> inside the <table>
    table.appendChild(tblBody)
    
    //put the table inside the <body>
    body.appendChild(h1).appendChild(document.createTextNode('Table made of Javascript'))
    body.appendChild(table);
    // adding the border attribute to table
    table.setAttribute('border', '3')
    return table;
};

function styleCells(){
//     function get_rand_color(){
//     var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
//     while(color.length < 6) {
//         color = "0" + color;
//     }
//     return "#" + color;
// }


// const color = get_rand_color()
const table = createTable()
const tr = table.children[0].children
console.log(tr)
const td = tr[0].childNodes

document.head.children[4].remove()

    for (let k = 0;k < tr.length; k++){
        for (let p = 0;p < td.length; p++){
            let r = Math.random() * 255;
            let g = Math.random() * 255;
            let b = Math.random() * 255;
            let a = Math.random() + 0.5;
            const cellId = document.getElementById(k+''+p)
            cellId.setAttribute('style', `background: rgba(${r},${g},${b},${a})` )
       }
    }
}
styleCells()



const lastUl = document.querySelectorAll('li:last-child')
console.log(lastUl)

for(let elem of lastUl){
    alert(elem.innerHTML);
}