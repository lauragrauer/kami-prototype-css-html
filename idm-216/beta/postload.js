const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const valueEl = document.getElementById("qtyValue");

let qty = 1;
minusBtn.addEventListener("click", () => {
  if (qty > 1) {
    qty--;
    valueEl.textContent = qty;
  }
});

plusBtn.addEventListener("click", () => {
  qty++;
  valueEl.textContent = qty;
});
