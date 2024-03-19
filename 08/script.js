function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').textContent = 'Please enter valid weight and height.';
        return;
    }

    let bmi = calculateBMIScore(weight, height);
    let bmiCategory = getBMICategory(bmi);

    document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory}).`;
}

function calculateBMIScore(weight, height) {
    // BMI = weight (kg) / (height (m))^2
    let heightInMeters = height / 100;
    return weight / (heightInMeters ** 2);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}