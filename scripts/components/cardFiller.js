import {
    cardNumber,
    cvv2Text,
    paymentForm,
    cardNameText,
    cardNumberText,
    cardExpiryMonth,
    cardExpiryDay,
} from '../common.js';


const cardFillerHandler = event => {
    let inputValue = event.target.value;
    let inputClassName = event.target.className;
    if (inputClassName.includes("cardName-input")) {
        cardNameText.textContent = inputValue || "X";
    }
    else if (inputClassName.includes("cardNumber-input")) {
        cardNumber.forEach(input => {
            input.addEventListener("input", () => {
                const values = [...cardNumber].map(input => input.value);

                cardNumberText.textContent = values
                    .map(value => value.padEnd(4, "X"))
                    .join(" ") || "XXXX XXXX XXXX XXXX";
            });
        });
    }
    else if (inputClassName.includes("expiry-month--input")) {
        if (Number(inputValue) > 12) {
            event.target.value = "";
            inputValue = "XX";
        };
        cardExpiryMonth.textContent = inputValue || "XX";
    }
    else if (inputClassName.includes("expiry-day--input")) {
        if (Number(inputValue) > 31) {
            event.target.value = "";
            inputValue = "XX";
        };
        cardExpiryDay.textContent = inputValue || "XX";
    }
    else if (inputClassName.includes("cardCvv2-input")) {
        cvv2Text.textContent = "•••".substring(0, inputValue.length) || "";
    }
};

paymentForm.addEventListener("input", cardFillerHandler);