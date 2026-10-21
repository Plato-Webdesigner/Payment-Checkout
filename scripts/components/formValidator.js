import {
    cardName,
    cardNumber,
    cardExpiryDate,
    cardCvv2,
    payBtn,
    paymentForm,
    animationBox,
    paymentHeaderBtn
} from '../common.js';

// Defining a function to check whether input values ​​are text or numbers.
const checkTextOrNumber = value => {
    const textPatternLower = /[a-z]/;
    const textPatternUpper = /[A-Z]/;
    const persianPattern = /[\u0600-\u06FF]/;
    const numberPattern = /[0-9]/;

    if (textPatternLower.test(value) ||
        textPatternUpper.test(value) ||
        persianPattern.test(value)
    ) {
        return "Text";
    };
    if (numberPattern.test(value)) {
        return "Number";
    };

};

const validateTextOrNumber = (value, event, type) => {
    if (type === "text") {
        if (checkTextOrNumber(value) === "Text") {
            event.target.value = value;
        }
        else {
            event.target.value = "";
        };
    }
    else if (type === "number") {
        if (checkTextOrNumber(value) === "Number") {
            event.target.value = value;
        }
        else {
            event.target.value = "";
        };
    };

};

const paymentFormHandler = event => {
    let inputValue = event.target.value;
    let inputClassName = event.target.className;
    if (inputClassName.includes("cardName-input")) {
        validateTextOrNumber(inputValue, event, "text");
    };
    if (
        inputClassName.includes("cardNumber-input") ||
        inputClassName.includes("cardExpiry-input") ||
        inputClassName.includes("cardCvv2-input")
    ) {
        validateTextOrNumber(inputValue, event, "number");
    };

};

paymentForm.addEventListener("input", paymentFormHandler);


// Add event to payment header button.
paymentHeaderBtn.addEventListener("click", event => {
    event.preventDefault();
    location.replace("https://plato-webdesigner.github.io/Payment-Checkout/");
});

// Defined a function for checking situation of filling inputs.
const inputsCheckFill = () => {
    if (cardName.value.length > 0 &&
        cardCvv2.value.length == 3 &&
        [...cardNumber].every(inputNumber => inputNumber.value.length == 4) &&
        [...cardExpiryDate].every(inputExpiry => inputExpiry.value.length == 2)
    ) {

        return true;

    }
    else {
        return false;
    }
};

const payClickHandler = () => {
        alert("okey")
        animationBox.classList.remove("animation-hidden");
        setTimeout(() => {
            animationBox.classList.add("animation-hidden");
        }, 3500)
    
};

payBtn.addEventListener("click", payClickHandler);