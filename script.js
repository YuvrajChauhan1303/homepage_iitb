const nameElem = document.getElementById("name");
const name = "Yuvraj Chauhan";

let index = 0;

function writeName() {
  if (index < name.length) {
    nameElem.textContent += name[index];
    index++;
    setTimeout(writeName, 120);
  } else {
    setTimeout(eraseName, 3000);
  }
}

function eraseName() {
  if (index > 0) {
    index--;
    nameElem.textContent = name.substring(0, index);
    setTimeout(eraseName, 30);
  } else {
    setTimeout(writeName, 1000);
  }
}

writeName();