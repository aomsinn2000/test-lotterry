document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.btn-random');
    const checkButton = document.querySelector('.check');
    const inputNumber = document.getElementById('input-number');
    const valueCheck = document.getElementById('value-check');

    let randomNumbers = [];
    let randomAlphabet = '';

    button.addEventListener('click', () => {
      randomNumbers = generateRandomNumbers(0, 999, 6);
      randomAlphabet = generateRandomNumbers(0, 99, 1)[0];
      const resultA = document.getElementById('result-a');
      const resultB = document.getElementById('result-b');
      const resultC = document.getElementById('result-c');
      const resultD = document.getElementById('result-d');
      const resultE = document.getElementById('result-e');
      const resultF = document.getElementById('result-f');
      const resultG = document.getElementById('result-g');

      const resultAValue = randomNumbers[0];
      resultB.textContent = formatNumber(resultAValue - 1, 3);
      resultC.textContent = formatNumber(resultAValue + 1, 3);
      resultA.textContent = formatNumber(resultAValue, 3); 

      resultD.textContent = formatNumber(randomNumbers[3], 3);
      resultE.textContent = formatNumber(randomNumbers[4], 3);
      resultF.textContent = formatNumber(randomNumbers[5], 3);
      resultG.textContent = formatNumber(randomAlphabet, 2);
    });

    checkButton.addEventListener('click', () => {
      const userInput = parseInt(inputNumber.value);
      const resultA = parseInt(document.getElementById('result-a').textContent);
      const resultB = parseInt(document.getElementById('result-b').textContent);
      const resultC = parseInt(document.getElementById('result-c').textContent);
      const resultD = parseInt(document.getElementById('result-d').textContent);
      const resultE = parseInt(document.getElementById('result-e').textContent);
      const resultF = parseInt(document.getElementById('result-f').textContent);
      const resultG = parseInt(document.getElementById('result-g').textContent);
      let resultText = '';

            if (userInput === resultA) {
      resultText = 'ขอแสดงความยินดี! คุณถูกรางวัลที่ 1';
    } else if (userInput === resultB || userInput === resultC) {
      resultText = 'ขอแสดงความยินดี! คุณถูกรางวัลข้างเคียงรางวัลที่ 1';
    } else if (userInput % 100 === resultA % 100 && userInput % 100 === resultG % 100) {
      resultText = 'ขอแสดงความยินดี! คุณถูกรางที่ 1 และ เลขท้ายสองตัว';
    } else if (userInput % 100 === resultB % 100 && userInput % 100 === resultC % 100 && userInput % 100 === resultG % 100) {
      resultText = 'ขอแสดงความยินดี! คุณถูกรางเคียงข้าง และ  เลขท้ายสองตัว';
    } else if (userInput % 100 === resultD % 100 && userInput % 100 === resultE % 100 && userInput % 100 === resultF % 100 && userInput % 100 === resultG % 100) {
      resultText = 'ขอแสดงความยินดี! คุณถูกรางที่ 2 และ  เลขท้ายสองตัว';
    } else if (userInput === resultD || userInput === resultE || userInput === resultF) {
      resultText = 'ขอแสดงความยินดี! คุณถูกรางวัลที่ 2';
    } else if (userInput % 100 === resultG) {
      resultText = 'ขอแสดงความยินดี! คุณถูกรางเลขท้าย 2 ตัว';
    } else if (isNaN(userInput)) {
    resultText = 'กรุณากรอกตัวเลขล็อตเตอรี่';
    }  else {
      resultText = 'คุณไม่ถูกรางวัล';
    }


      valueCheck.textContent = resultText;
    });

    function generateRandomNumbers(min, max, count) {
      const numbers = new Set();
      while (numbers.size < count) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(randomNumber);
      }
      return Array.from(numbers);
    }

    function formatNumber(number, length) {
      const formatted = String(number).padStart(length, '0');
      return formatted;
    }
  });


  document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".btn");
    const checkButton = document.querySelector(".check");
    const inputNumber = document.getElementById("input-number");
    const valueCheck = document.getElementById("value-check");

    let randomNumbers = [];
    let randomAlphabet = "";

    // ตรวจสอบว่ามีข้อมูลใน Local Storage หรือไม่
    if (localStorage.getItem("randomNumbers")) {
      randomNumbers = JSON.parse(localStorage.getItem("randomNumbers"));
      randomAlphabet = localStorage.getItem("randomAlphabet");

      // แสดงตัวเลขจาก Local Storage
      const resultA = document.getElementById("result-a");
      const resultB = document.getElementById("result-b");
      const resultC = document.getElementById("result-c");
      const resultD = document.getElementById("result-d");
      const resultE = document.getElementById("result-e");
      const resultF = document.getElementById("result-f");
      const resultG = document.getElementById("result-g");

      const resultAValue = randomNumbers[0];
      resultB.textContent = formatNumber(resultAValue - 1, 3);
      resultC.textContent = formatNumber(resultAValue + 1, 3);
      resultA.textContent = formatNumber(resultAValue, 3);

      resultD.textContent = formatNumber(randomNumbers[3], 3);
      resultE.textContent = formatNumber(randomNumbers[4], 3);
      resultF.textContent = formatNumber(randomNumbers[5], 3);
      resultG.textContent = formatNumber(randomAlphabet, 2);
    } else {
      // ถ้าไม่มีข้อมูลใน Local Storage ให้สร้างตัวเลขสุ่มใหม่
      randomNumbers = generateRandomNumbers(0, 999, 6);
      randomAlphabet = generateRandomNumbers(0, 99, 1)[0];

      // บันทึกข้อมูลใน Local Storage
      localStorage.setItem("randomNumbers", JSON.stringify(randomNumbers));
      localStorage.setItem("randomAlphabet", randomAlphabet);
    }
    function generateRandomNumbers(min, max, count) {
      const numbers = new Set();
      while (numbers.size < count) {
        const randomNumber =
          Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(randomNumber);
      }
      return Array.from(numbers);
    }

    function formatNumber(number, length) {
      const formatted = String(number).padStart(length, "0");
      return formatted;
    }
  });