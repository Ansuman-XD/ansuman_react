document.getElementById('calculate').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        document.getElementById('result').innerText = `Your BMI is: ${bmi.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid weight and height.';
    }
});
