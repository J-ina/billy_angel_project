// lnb_active
const nav = document.querySelector('.gnb_container');
const gnb = document.querySelector('.gnb');
const gnb_menu = document.querySelectorAll('.gnb > li');
const lnb = document.querySelectorAll('.lnb');
const bg_lnb = document.querySelector('.bg_lnb');

const nav_height = nav.scrollHeight;
const bg_lnb_height = gnb.scrollHeight - nav_height;

gnb_menu.forEach(menu => menu.addEventListener('mouseover', () => {
  menu.style.color = '#f0616e';
  bg_lnb.style.maxHeight = bg_lnb_height + 'px';
  gnb.style.maxHeight = gnb.scrollHeight + 'px';
}))
gnb_menu.forEach(menu => menu.addEventListener('mouseout', () => {
  menu.style.color = '#333';
}))
nav.addEventListener('mouseout', () => {
  bg_lnb.style.maxHeight = '0';
  gnb.style.maxHeight = nav_height + 'px';
})

// snb_active
const btn_snb_active = document.querySelector('.snb_container > .fa-bars');
const snb = document.querySelector('aside');
const btn_snb_close = document.querySelector('aside > .btn_close');

btn_snb_active.addEventListener('click', () => {
  snb.style.right = '0px';
})
btn_snb_close.addEventListener('click', () => {
  snb.style.right = '-' + snb.scrollWidth + 'px';
})

// slide_banner
const banner_container = document.querySelector('#slide_banner');
const banner = document.querySelector('#slide_banner > .banner');
const banner_imgs = document.querySelectorAll('#slide_banner > .banner > li');
const btn_prev = document.querySelector('#slide_banner > .btn_banner_prev');
const btn_next = document.querySelector('#slide_banner > .btn_banner_next');

let banner_current_index = 0;
let banner_timer = setInterval(index_count, 3000);

// banner_stop
banner_container.addEventListener('mouseover', () => {
  clearInterval(banner_timer);
})
// banner_active
banner_container.addEventListener('mouseout', () => {
  banner_timer = setInterval(index_count, 3000);
})
// banner_btn
btn_prev.addEventListener('click', () => {
  banner_current_index --;
  if (banner_current_index == -1) {
    banner_current_index = banner_imgs.length - 1;
  }
  slide_banner(banner_current_index);
})
btn_next.addEventListener('click', () => {
  index_count();
  slide_banner(banner_current_index);
})

function slide_banner (i) {
  let banner_left = -100 * i;
  banner.style.left = banner_left + '%';
}
function index_count () {
  banner_current_index ++;
  if (banner_current_index == banner_imgs.length) {
    banner_current_index = 0;
  }
  slide_banner(banner_current_index);
}