document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("landingModal");
    const trialBtn = document.getElementById("trialBtn");
    const closeBtn = document.querySelector(".close");
    const proceedBtn = document.getElementById("proceedBtn");
    const outputText = document.getElementById("outputText");

    // Open modal on button click
    trialBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Handle file upload and output text
    proceedBtn.addEventListener("click", () => {
        const fileInput = document.getElementById("imageUpload");
        if (fileInput.files.length > 0) {
            outputText.innerText = "Image uploaded successfully!";
        } else {
            outputText.innerText = "Please upload an image.";
        }
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
