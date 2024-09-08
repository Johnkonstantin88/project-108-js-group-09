import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import pathSprite from '../../img/sprite.svg';

const tabletViewport = 768;
const informationListEl = document.querySelector(".information-container");
const informationData = [
    {
        title: "About me",
        description: ["I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages ​​and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.",
            "Able to work both independently and in a team.I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions.Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work.I am always looking for opportunities for self - imp r ovement.I atively study new technologies and practices to stay abreast of the latest innovations.I hve a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."]
    },
    {
        title: "Role",
        description: ["Frontend development", "HeadlessCMS,Wordpress", "Blender(enjoy)"]
    },
    {
        title: "Education",
        description: ["2018 - 2019  / Frontend Development Diploma, GoIT IT </br> School, New York",
            "2019 - 2020 / Advanced Web Development Certificate, GoIT IT </br> School, New York",
            "2020 - 2022 / Advanced Blender Animation Techniques, Udemy"]
    }
];

const renderListDescription = (items) => {
    return items.map(item =>
        `<li class="information-description-item">${item}</li>`
    ).join("");
}

const renderContentAccordion = (data) => {
    const markup = data.map(item =>
        `<li class="information-item ac">
                <h2 class="ac-header">
                    <button type="button" class="information-item-button ac-trigger"><span>${item.title.toUpperCase()}<span></button>
                </h2>
                <div class="ac-panel">
                    <ul class="description-list ac-text">${renderListDescription(item.description)}</ul>
                </div>
            </li>`).join("");
    informationListEl.insertAdjacentHTML("beforeend", markup);
};

const changeStyleAccordionTriggerBtn = () => {
    const triggerBtns = document.querySelectorAll('.ac-trigger');
    triggerBtns.forEach(triggerBtn => {
        const markup = ` <svg class="description-open-icon">
          <use href="${pathSprite}#icon-open"></use>
        </svg>`
        triggerBtn.insertAdjacentHTML("beforeend", markup)

    });
}

const scrollDownInformationPanel = (currentElement) => {
    const elementRect = currentElement.getBoundingClientRect();
    const elementY = elementRect.top;
    const viewportHeight = window.innerHeight;

    window.scrollTo({
        top: elementY + window.scrollY - (viewportHeight / 2) + (elementRect.height / 2),
        behavior: 'smooth'
    });

};

const changePaddingOnMobileAccordion = (currentElement, paddingValue) => {
    if (window.innerWidth < tabletViewport) {
        currentElement.style.paddingBottom = paddingValue;
    }
}

const onInitAccordion = () => {
    console.log('Accordion initialized');
    const firstInformationItemEl = document.querySelector('.information-item');
    changePaddingOnMobileAccordion(firstInformationItemEl, '20px');
};


renderContentAccordion(informationData);

const accordion = new Accordion('.accordion-container', {
    duration: 500,
    showMultiple: true,
    openOnInit: [0],
    triggerClass: "information-item-button",
    onOpen: (currentElement) => {
        changePaddingOnMobileAccordion(currentElement, '20px');
        scrollDownInformationPanel(currentElement);
    },
    onClose: (currentElement) => {
        changePaddingOnMobileAccordion(currentElement, '32px');
    },

});

onInitAccordion();

changeStyleAccordionTriggerBtn();






