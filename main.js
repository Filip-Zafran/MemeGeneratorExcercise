const updateText = () => {
  const userText = document.getElementById("userText");
  const memeText = document.getElementById("memeText");

  memeText.innerText = userText.value;
};

const updateImage = () => {
  const img = document.querySelector("img");
  // querySelector  / returns first tag
  const file = document.querySelector("input[type=file").files[0];

  // 1) we need to tell to change the picture from before
  // (the backgroud ilite source picture) to a new picure

  img.src = window.URL.createObject;
};

// SOLUTION CODE

// function updateText() {
//   const text = document.getElementById("user-text").value;
//   document.getElementById("meme-text").innerHTML = text;
// }

// function updateImage() {
//   const file = document.getElementById("user-picture").files[0];
//   document.getElementById("meme-picture").src = window.URL.createObjectURL(
//     file
//   );
// }

// function generateMeme() {
//   html2canvas(document.getElementById("meme"), { allowTaint: true }).then(
//     function (canvas) {
//       const data = canvas.toDataURL("image/jpeg", 1);
//       const src = encodeURI(data);
//       document.getElementById("screenshot").src = src;
//     }
//   );
// }
