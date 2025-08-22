import { expectedEnteredNumberValues } from "./src/parser.js";
import { calculateResult } from "./src/math.js";
import { generateResultText, outputResult } from "./src/output.js";

const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();

  const numberInputs = expectedEnteredNumberValues(form);

  let result = calculateResult(numberInputs);
  let resultText = generateResultText(result);

  outputResult(resultText);
}

form.addEventListener("submit", formSubmitHandler);
