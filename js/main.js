

document.getElementById('log-in-btn').addEventListener("click", function(e) {
    e.preventDefault();

    const databaseMobile = 1521799480;
    const databasePin = 1234;

    const userMobileNumber = parseInt(document.getElementById('mobile-number').value);
    const userPin = parseInt(document.getElementById('pin-number').value);

    if (databaseMobile === userMobileNumber && databasePin === userPin) {
        window.location.href = "./home.html";
    } else {
        alert("Invalid Credemtials");
    }

});