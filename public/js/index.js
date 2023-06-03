const urlParams = new URLSearchParams(window.location.search);
const requestCode = urlParams.get("request");

function getHintFromServer(requestCode) {
  return fetch(`/hint?request=${requestCode}`)
    .then((response) => response.text())
    .then((hint) => {
      document.getElementById("hint").textContent = `Hint: ${hint}`;
    })
    .catch((error) => {
      console.error(error);
    });
}

function getImageFromServer(requestCode) {
  return fetch(`/image?request=${requestCode}`)
    .then((response) => response.text())
    .then((image) => {
      document.getElementById("image").src = image;
    })
    .catch((error) => {
      console.error(error);
    });
}

if (requestCode === "abcD542AcEfgH12") {
  const ruleList = document.createElement("ol");
  const ruleTexts = [
    "If you scanned the qr-code, don't try to damage it.",
    "Take pictures of qr-codes, it's important for prizes.",
    "Have fun.",
  ];
  ruleTexts.forEach((text) => {
    const ruleItem = document.createElement("li");
    ruleItem.textContent = text;
    ruleList.appendChild(ruleItem);
  });
  const rulesH2 = document.getElementById("rules");
  rulesH2.textContent = "Rules of the challenge:";
  rulesH2.insertAdjacentElement("afterend", ruleList);
}

getHintFromServer(requestCode);
getImageFromServer(requestCode);
