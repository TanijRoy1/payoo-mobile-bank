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

// add addEventListener to each card using funcsion
function cardClick (id) {
  document.getElementById(id + "-card").addEventListener("click", function() {
    const containers = document.getElementsByClassName("container");
    for (const container of containers) {
      container.style.display = "none";
      container.classList.remove("active-container")
    }
    document.getElementById(id + "-container").style.display = "block";
    document.getElementById(id + "-container").classList.add("active-container");

    const cards = document.getElementsByClassName("card");
    for (const card of cards) {
      card.classList.remove("active-card");
    }
    document.getElementById(id + "-card").classList.add("active-card");
  });
}
// Cards
cardClick("add-money");
cardClick("cash-out");
cardClick("transfer-money");
cardClick("get-bonus");
cardClick("pay-bill");
cardClick("transactions");



// add eventLister on Add Money Button
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const availableBalance = getInnerTextNumber("available-balance");
    const addAmountValue = getInputValueNumber("add-amount");
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
    document.getElementById("success-msg-container").classList.remove("opacity-0");
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
  document.getElementById("success-msg-container").classList.remove("opacity-0");
  // to give transition property hidden is not working, that's why I use opacity-0
});
// add addEventListener on Transfer Money Button Button
document.getElementById("transfer-money-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const availableBalance = getInnerTextNumber("available-balance");
  const cashOutAmount = getInputValueNumber("transfer-money-amount");
  const cashOutPin = getInputValueNumber("transfer-money-pin");
  const agentNumber = getInputValueString("transfer-money-number");

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

  document.getElementById("success-text").innerText = `${cashOutAmount}$ is transfered successfully`;
  document.getElementById("success-msg-container").classList.remove("opacity-0");
  // to give transition property hidden is not working, that's why I use opacity-0
});


// add addEventListener on modal close button 
document.getElementById("close-success-msg").addEventListener("click", function() {
  document.getElementById("success-msg-container").classList.add("opacity-0");
});