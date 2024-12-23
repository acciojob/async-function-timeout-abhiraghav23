const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const outputDiv = document.getElementById('output');
const submitButton = document.getElementById('btn');

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayMessage() {
  const text = textInput.value;  
  const delayTime = parseInt(delayInput.value);  
  
  // Validate the inputs
  if (!text || isNaN(delayTime)) {
    outputDiv.textContent = 'Please provide valid text and delay time.';
    return;
  }

  outputDiv.textContent = 'Processing...';  
  await delay(delayTime);  
  outputDiv.textContent = text;  
}

submitButton.addEventListener('click', displayMessage);
