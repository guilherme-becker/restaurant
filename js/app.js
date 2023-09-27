let body = document.body;
let mobileBtn = document.querySelector('#mobileBtn');
let closeBtn = document.querySelector('#closeBtn');

mobileBtn.addEventListener('click', e => {
    body.classList.toggle('overflow-y-hidden');
    body.classList.toggle('bg-body');
    let data = mobileBtn.dataset.target;
    let sidebar = document.querySelector(data);
    sidebar.classList.toggle('left-0');
    sidebar.classList.toggle('left-100min');

});

window.addEventListener('resize', e => {
    body.classList.remove('overflow-y-hidden');
    body.classList.remove('bg-body');
    let sidebar = document.querySelector('#sidebar1');
    sidebar.classList.remove('left-0');
    sidebar.classList.add('left-100min');

});


closeBtn.addEventListener('click', e => {
    body.classList.remove('overflow-y-hidden');
    body.classList.remove('bg-body');
    let data = closeBtn.dataset.target;
    let sidebar = document.querySelector(data);
    sidebar.classList.remove('left-0');
    sidebar.classList.add('left-100min');
});