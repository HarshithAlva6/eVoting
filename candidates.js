console.log("yhan aagya")

let userAccount = localStorage.getItem("userAddress");

let userAccountBalance = localStorage.getItem("userBalance");

document.getElementById(
  "adminAddress1"
).innerHTML = `<i class="bi bi-person-fill me-1"></i>  ${userAccount}`;
document.getElementById(
  "adminBalance1"
).innerHTML = `<i class="bi bi-currency-dollar me-1"></i>
  ${userAccountBalance} Eth `;