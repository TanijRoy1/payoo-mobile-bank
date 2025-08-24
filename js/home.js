const validPin = 1234;
// add eventLister on Add Money Button
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    const bankAccount = document.getElementById("bank-account-number").value;
    const addAmountValue = parseInt(
      document.getElementById("add-amount").value
    );
    const addPin = parseInt(document.getElementById("add-pin").value);

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
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  const agentNumber = document.getElementById("agent-number").value;
  const cashOutAmount = parseInt(
    document.getElementById("cash-out-amount").value
  );
  const cashOutPin = parseInt(document.getElementById("cash-out-pin").value);

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

// add addEventListener on Add Money Card
const containers = document.getElementsByClassName("container");
document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    for (const container of containers) {
      container.style.display = "none";
    }
    document.getElementById("add-money-container").style.display = "block";

    const cards = document.getElementsByClassName("card");
    for (const card of cards) {
      card.classList.remove("active-card");
      document.getElementById("add-money-card").classList.add("active-card");
    }
  });
// Add addEventListener on Cash Out Card
document.getElementById("cash-out-card").addEventListener("click", function () {
  for (const container of containers) {
    container.style.display = "none";
  }
  document.getElementById("cash-out-container").style.display = "block";

  const cards = document.getElementsByClassName("card");
  for (const card of cards) {
    card.classList.remove("active-card");
    document.getElementById("cash-out-card").classList.add("active-card");
  }
});
// Add addEventListener on Transfer Money Card
document.getElementById("transfer-money-card").addEventListener("click", function () {
  for (const container of containers) {
    container.style.display = "none";
  }
  document.getElementById("transfer-money-container").style.display = "block";

  const cards = document.getElementsByClassName("card");
  for (const card of cards) {
    card.classList.remove("active-card");
    document.getElementById("transfer-money-card").classList.add("active-card");
  }
});


document.getElementById("close-success-msg").addEventListener("click", function() {
  document.getElementById("success-msg-container").classList.add("hidden");
});