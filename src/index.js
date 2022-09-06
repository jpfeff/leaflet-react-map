import $ from 'jquery';
import './style.scss';

// timer
let sec = 0;
setInterval(() => {
  $('#main').html(`You've been on this page for ${sec} seconds.`);
  sec += 1;
}, 1000);
