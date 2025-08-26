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

    closeModal();
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

    addTransaction(addAmountValue, "Added");
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

  addTransaction(cashOutAmount, "Withdrawed");
});
// add addEventListener on Transfer Money Button
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
  
  addTransaction(cashOutAmount, "Transfered");
});
// add addEventListener on Pay Bill Button
document.getElementById("pay-bill-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const availableBalance = getInnerTextNumber("available-balance");
  const cashOutAmount = getInputValueNumber("pay-bill-amount");
  const cashOutPin = getInputValueNumber("pay-bill-pin");
  const agentNumber = getInputValueString("pay-bill-number");

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

  document.getElementById("success-text").innerText = `${cashOutAmount}$ is paid successfully`;
  document.getElementById("success-msg-container").classList.remove("opacity-0");
  
  addTransaction(cashOutAmount, "Paid");
});


// appendChild to Transaction List 
function addTransaction(money, transactionName) {
  // const transaction = document.createElement("div");
  // create element gives an extra div
  const transactionList = document.getElementById("transactions-list");
  transactionList.innerHTML = transactionList.innerHTML + `<div class="transaction relative flex bg-white items-center p-1.5 gap-2.5 rounded-[6px] ">
              <div class="transaction-close-btns absolute right-0 top-0 border border-white hover:border-gray-400  rounded-[3px] w-4 h-4 flex items-center justify-center text-center  cursor-pointer">
                <i class="fa-solid fa-xmark w-[100%] h-[100%]"></i>
              </div>
              <div class="rounded-full bg-gray-200 border border-gray-400 p-1.5"><img src="assets/wallet1.png" alt="Add money logo"></div>
              <div>
                <h5 class="transaction-title font-semibold">${money}$ ${transactionName}</h5>
                <p class="transaction-date text-[12px] text-gray-600">Today 10:44AM</p>
              </div>
            </div>`;
  // document.getElementById("transactions-list").appendChild(transaction);
}
// close transaction 
// const transactionCloseBtns = document.getElementsByClassName("transaction-close-btns");
// for (const btn of transactionCloseBtns) {
//   btn.addEventListener("click", function () {
//     btn.parentNode.remove();
//   });
// }

// const transaction = e.target.closest(".transaction");
// this finds the nearest ancestor with class .transaction
// Event delegation: listen on the parent container
document.getElementById("transactions-list").addEventListener("click",
  function (e) {
    if (e.target.classList.contains("transaction-close-btns")
      || e.target.closest(".transaction-close-btns")) { 
        const transaction = e.target.closest(".transaction");
        // console.log(e.target.closest(".transaction-close-btns"))
        // console.log(transaction);
        if (transaction) {
          transaction.remove();
        }
    }
  }
)



// add addEventListener on modal close button 
function closeModal() {
  document.getElementById("success-msg-container").classList.add("opacity-0");
}
document.getElementById("close-success-msg").addEventListener("click", closeModal);