import Swiper from 'swiper';
import { Navigation, Keyboard} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper-projects', {
    modules: [Navigation, Keyboard],
    
    navigation: {
        nextEl: '.swiper-projects-button-next',
        prevEl: '.swiper-projects-button-prev',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
 });