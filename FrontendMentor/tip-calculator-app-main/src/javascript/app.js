// Inputs
const amountBillInput = document.querySelector('#billAmount');
const percentageButtons = document.querySelectorAll('.percentageButton');
const customTipPercentage = document.querySelector('#customTipPercentage')
const peopleToSplitTheBill = document.querySelector('#numberOfPeople');
const totalPercentage = document.querySelector('#totalPercentage');
const totalTipPercentage = document.querySelector('#totalTipPercentage');


// Changing button status
for (let percentageButton of percentageButtons) {
    percentageButton.addEventListener('click', (e) => {
        const clickedButton = e.target;

        if (clickedButton.classList.contains('activeButton')) {
            clickedButton.classList.remove('activeButton');
        } else {
            percentageButtons.forEach(button => {
                if (button !== clickedButton) {
                    button.classList.remove('activeButton');
                }
            });

            clickedButton.classList.add('activeButton');
        }
    });
}

