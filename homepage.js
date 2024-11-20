// Function for booking a consultation
function bookConsultation() {
    alert("Thank you for reaching out! Contact us at (123) 456-7890 or email info@criminallawfirm.com to schedule your free case review.");
}

// Function to toggle "Read More" and "Read Less"
function toggleReadMore() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more-text");
    const btnText = document.getElementById("read-more-btn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}
