var swiper = new Swiper('.swiper', {
  // Optional parameters
    loop: true,
    autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
      delay : 8000,   // 시간 설정
      disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

});




/* 우상단 리스트 모양 변경 */
const bus_list = document.querySelector('.bus_list');
const card_btn = document.querySelector('#card_type_btn');
const list_btn = document.querySelector('#list_type_btn');

card_btn.addEventListener('click', event => {
    bus_list.id = "card_type";
    card_btn.className = 'on';
    list_btn.className = '';
});

list_btn.addEventListener('click', event => {
    bus_list.id = "list_type";
    card_btn.className = '';
    list_btn.className = 'on';
});





/* 헤더 열고 접음 */
const header_btn = document.querySelector('#header_toggle'); 
const header = document.querySelector('header'); 

header_btn.addEventListener('click', event => {
    header.classList.toggle('header_open');
    header_btn.classList.toggle('open');
});



const sortMenu = document.querySelector('.sort_menu'); 
const sortBtn = sortMenu.querySelectorAll('p'); 

for (let i = 0; i < sortBtn.length; i++) {
    sortBtn[i].addEventListener("click", click);
}

function click(e) {
    for (let i = 0; i < sortBtn.length; i++) {
        sortBtn[i].className = '';
    }
    this.className = 'on';
}