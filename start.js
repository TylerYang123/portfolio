const text = "Hello there and welcome to Tyler's Personal Portfolio";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("myParagraph").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // typing speed
  } else {
    document.getElementById("continueBtn").style.display = "inline-block"; // reveal button
  }
}

window.onload = typeWriter;