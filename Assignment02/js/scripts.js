document.addEventListener("DOMContentLoaded", function () {
    const customNumberInput = document.getElementById("customNumber");
    const customColorButton = document.querySelector(".custColor");
    const randColorButton = document.querySelector(".randColor");
    const imageSelect = document.getElementById("imageSelect");
    const images = document.getElementById("images");
    const myStudentId = document.getElementById("myStudentId");

    // Function to change bg color from user input and add student id
    function changeCustomColor() {
        const inputValue = parseInt(customNumberInput.value);
        if (inputValue >= 0 && inputValue <= 100) {
            myStudentId.textContent = "200555982";
            document.body.style.backgroundColor = getColor(inputValue);
        } else {
            alert("Please enter a number between 0 and 100");
        }
    }

    // Function to generate a random number between min and max (inclusive)
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to change bg color from random number
    function changeRandomColor() {
        const randomValue = getRandomNumber(0, 100);
        myStudentId.textContent = "200555982";
        customNumberInput.value = randomValue; // Set the random value in the number input
        document.body.style.backgroundColor = getColor(randomValue);
    }

    // Function to get color based on the value
    function getColor(value) {
        if (value < 0 || value > 100) return "red";
        else if (value <= 20) return "green";
        else if (value <= 40) return "blue";
        else if (value <= 60) return "orange";
        else if (value <= 80) return "purple";
        else return "yellow";
    }

    // Function to generate options for select list
    function addList() {
        const imageArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.png"]; // Add your image names here
        imageArray.forEach((imageName) => {
            const option = document.createElement("option");
            option.value = imageName;
            option.textContent = imageName;
            imageSelect.appendChild(option);
        });
    }

    // Function to change image
    function changeImage() {
        const selectedImage = imageSelect.value;
        images.src = "./img/" + selectedImage;
    }

    // Event listeners
    customColorButton.addEventListener("click", changeCustomColor);
    randColorButton.addEventListener("click", changeRandomColor);
    imageSelect.addEventListener("change", changeImage);

    // Initial function calls
    addList(); // Generate image options on page load
});
