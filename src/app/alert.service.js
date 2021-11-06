import { inputsAreValid } from "./utils/inputs-are-valid";

export class AlertService {
    constructor() {
        this.errorBox = document.getElementById("error")
    }

    handleAdditionalError(inputs, numbers) {
        const fullMessage = inputs.reduce((message, str, index) => {
            if (inputsAreValid(numbers[index])) {
                return message + "";
            } else {
                return message + `${str} is not a number`;
            }
        }, "Please enter valid number");

        this.errorBox.classList.remove("invisible");
        this.errorBox.innerText = fullMessage;
    }

    hideErrors() {
        this.errorBox.classList.add("invisible")
    }
}