// const axios = require('axios');
const APIEndPoint = 'https://api.adviceslip.com/advice';
const adviceNumber = document.getElementById('advice-num');
const adviceText = document.querySelector('#advice-text');
const generateRandomAdvice = document.querySelector('#generate-random-advice');

// Getting a random advice
const getAdvice = async () => {
    try {
        // The code belong its to avoid cache browser
        // const timestamp = Date.now();
        // const apiUrl = `${APIEndPoint}?t=${timestamp}`;
        const advice = await axios.get(APIEndPoint);
        const randomAdvice = advice.data.slip
        return randomAdvice
    } catch (error) {
        console.log(error);
    }
}

const randomAdvice = async () => {
    const advice = await getAdvice();
    const id = advice.id;
    const text = advice.advice;

    adviceNumber.innerText = id;
    adviceText.innerText = `"${text}"`;
}

generateRandomAdvice.addEventListener('click', (e) => {
    randomAdvice();
})