let formation=document.getElementById('formation');
// creating the invader

for(x=1; x<7;x++)
{
    inv  = document.createElement('div');
    inv.className='invader';
inv.id=('inv'+x);
console.log('bingo')
inv.top=('100px');
inv.position=('absolute');
inv.left=((x*10)+'vh');
inv.zIndex=(''+(x+20));
inv.innerText=(''+x);
formation.appendChild(inv);
}