// changing font
document.querySelector('body').style.fontFamily = "Impact,Charcoal,sans-serif";

// setting h1 center
document.querySelector('h1').style.textAlign = "center";

// change category data

let catList = document.getElementsByClassName('category');
catA = Array.from(catList);
//console.log(catA);

catA.forEach(function (item) {

    item.style.color = "blue";
    item.style.fontFamily = '"Times New Roman", Times, serif';
});

let foodcatList = document.getElementsByClassName('food-category');
catA = Array.from(foodcatList);
catA.forEach(function (item) {

    item.style.backgroundColor = colorGenerator();
    item.style.width = `${Math.floor(Math.random()*50)+30}%`;
    //item.style.width = "80%";
    item.style.padding = "2rem";
    item.style.margin = "1rem";

});

/*document.querySelector('.main').style.display = "flex";
document.querySelector('.main').style.justifyContent = "space-between";*/
catA[0].parentElement.style.display = "flex";
catA[0].parentElement.style.justifyContent = "space-between";

//changing warning
warning = document.getElementById('warning');
warning.style.fontSize ='150%';
warning.style.textAlign = "center";
warning.style.fontFamily = 'Times';

//allergy info
warningLst=document.getElementById('allergy-info');
warningLst

const items = document.querySelectorAll('li.allergy-info:nth-child(even)');
items.forEach(function(item){
    item.style.background = '#9df';
    item.style.textAlign = "center";
})


// function section

function colorGenerator() {
    h = Math.floor(Math.random() * 256);
    s = Math.floor(Math.random() * 50);
    l = Math.floor(Math.random() * 70); // too low or too high lightness will lead to unreadable contrast
    a = Math.random().toFixed(1);
    retS = `hsla( ${h}, ${s+50}%, ${l+30}%, ${a})`;

    return retS;
}