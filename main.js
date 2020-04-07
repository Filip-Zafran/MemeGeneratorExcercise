const updateText = () => {
  const userText = document.getElementById("userText");
  const memeText = document.getElementById("memeText");

  memeText.innerText = userText.value;
};
