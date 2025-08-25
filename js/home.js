const validPin = 1234;

// get input value as integer
function getInputValueNumber(id) {  
  const inputValue = document.getElementById(id).value;
  const inputValueNumber = parseInt(inputValue);
  return inputValueNumber;
}
// get innerText as number 
function getInnerTextNumber (id) {
  const text = document.getElementById(id).innerText;
  const textNumber = parseInt(text);
  return textNumber;
}
// get input value as string
function getInputValueString (id) {
  const inputValueStr = document.getElementById(id).value;
  return inputValueStr;
}


// add eventLister on Add Money Button
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const availableBalance = getInnerTextNumber("available-balance");
    addAmountValue = getInputValueNumber("add-amount");
    const addPin = getInputValueNumber("add-pin");
    const bankAccount = getInputValueString("bank-account-number");

    if (bankAccount.length > 10) {
      alert("Please Provide a valid account number.");
      return;
    }
    if (addPin !== validPin) {
      alert("Please provide a valid pin.");
      return;
    }

    const newAvailableBalance = availableBalance + addAmountValue;
    document.getElementById("available-balance").innerText = newAvailableBalance;

    document.getElementById("success-text").innerText = `${addAmountValue}$ is added successfully`;
    document.getElementById("success-msg-container").classList.remove("hidden");
    // not success-msg-container. icon tag also consider as innerText. 
    // that's why it will remove the icon while changing innerText.
  });

// add addEventListener on Cash Out Button
document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const availableBalance = getInnerTextNumber("available-balance");
  const cashOutAmount = getInputValueNumber("cash-out-amount");
  const cashOutPin = getInputValueNumber("cash-out-pin");
  const agentNumber = getInputValueString("agent-number");

  if (agentNumber.length > 10) {
    alert("Please Provide a valid account number.");
    return;
  }
  if (cashOutPin !== validPin) {
    alert("Please provide a valid pin.");
    return;
  }

  const newAvailableBalance = availableBalance - cashOutAmount;
  document.getElementById("available-balance").innerText = newAvailableBalance;

  document.getElementById("success-text").innerText = `${cashOutAmount}$ is withdrawed successfully`;
  document.getElementById("success-msg-container").classList.remove("hidden");
});


// add addEventListener to each card using funcsion
function cardClick (id) {
  document.getElementById(id + "-card").addEventListener("click", function() {
    const containers = document.getElementsByClassName("container");
    for (const container of containers) {
      container.style.display = "none";
    }
    document.getElementById(id + "-container").style.display = "block";

    const cards = document.getElementsByClassName("card");
    for (const card of cards) {
      card.classList.remove("active-card");
    }
    document.getElementById(id + "-card").classList.add("active-card");
  });
}
// add addEventListener on Add Money Card
cardClick("add-money");
// Add addEventListener on Cash Out Card
cardClick("cash-out");
// Add addEventListener on Transfer Money Card
cardClick("transfer-money");

// add addEventListener on modal close button 
document.getElementById("close-success-msg").addEventListener("click", function() {
  document.getElementById("success-msg-container").classList.add("hidden");
});