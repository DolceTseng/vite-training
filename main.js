import './assets/scss/all.scss';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';

console.log("Hello world!");

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      console.log("Scroll to Position");
    }
  });

  const highlightedCode = hljs.highlight(
    '<span>Hello World!</span>',
    { language: 'html' }
  ).value