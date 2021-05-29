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
 
    document.getElementById('button_tour_4').addEventListener('click', () => {
        this.setAmountTours(document.getElementById('input_tour_4').value * 35000);
    });

    document.getElementById('button_tour_5').addEventListener('click', () => {
        this.setAmountTours(document.getElementById('input_tour_5').value * 23000);
    });

    document.getElementById('button_tour_6').addEventListener('click', () => {
        this.setAmountTours(document.getElementById('input_tour_6').value * 27000);
    });

    document.getElementById('button_tour_7').addEventListener('click', () => {
        this.setAmountTours(document.getElementById('input_tour_7').value * 12000);
    });

    document.getElementById('button_tour_8').addEventListener('click', () => {
        this.setAmountTours(document.getElementById('input_tour_8').value * 14000);
    });

    document.getElementById('button_tour_9').addEventListener('click', () => {
        this.setAmountTours(document.getElementById('input_tour_9').value * 16000);
    });
}

function setAmountTours(amount){
    total = total + amount;
    document.getElementById('amount-tours').innerHTML = "₡" +total;
}