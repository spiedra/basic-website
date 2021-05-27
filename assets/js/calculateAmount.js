var total = 0;

document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      initApplication();
    }
  }
  
function initApplication(){  
    this.setAmountTours(0);
    document.getElementById('button_tour_1').addEventListener('click', () => {
        this.setAmountTours(document.getElementById('input_tour_1').value * 15000);
    });

    document.getElementById('button_tour_2').addEventListener('click', () => {
        this.setAmountTours(document.getElementById('input_tour_2').value * 20000);
    });

    document.getElementById('button_tour_3').addEventListener('click', () => {
        this.setAmountTours(document.getElementById('input_tour_3').value * 18000);
    });
}

function setAmountTours(amount){
    total = total + amount;
    document.getElementById('amount-tours').innerHTML = "₡" +total;
}