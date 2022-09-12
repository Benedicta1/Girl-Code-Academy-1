const unlock =document.getElementById('unlock');
const modal_container =document.getElementById('modal_container');
const lock =document.getElementById('lock');

unlock.addEventListener('click', () =>{
    modal_container.classList.add('visible');
});
lock.addEventListener('click', () =>{
    modal_container.classList.remove('visible');
});