import {
    bankCard,
    bankCardFront,
    bankCardBack,
    cardCvv2
} from '../common.js';

const cardRotateHandler = () => {
    bankCard.classList.toggle("card-rotate");
    bankCardFront.classList.toggle("card-front--hidden");
    bankCardBack.classList.toggle("card-back--show");
};

cardCvv2.addEventListener("focus", cardRotateHandler);
cardCvv2.addEventListener("blur", cardRotateHandler);