import { inputsAreValid } from "./utils/inputs-are-valid";

export class AlertService {
  constructor() {
    this.errorBox = document.getElementById("error");
  }
  handleAdditionError(inputs, numbers) {
    console.log(numbers);
    const fullMessage = inputs.reduce((message, str, index) => {
      console.log(message, str);
      if (inputsAreValid(numbers[index])) {
        return message + "";
      } else {
        return message + `${str} is not a number. `;
      }
    }, "Please enter two valid numbers! ");

    this.errorBox.classList.remove("invisible");
    this.errorBox.innerText = fullMessage;
  }

  hideErrors() {
    this.errorBox.classList.add("invisible");
  }
}
