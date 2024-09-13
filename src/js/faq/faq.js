import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.faq-list', {
  duration: 300,
  showMultiple: false,
  triggerClass: 'toggle-btn',
});
