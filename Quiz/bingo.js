const tds = document.getElementsByTagName('td');

const clicked = event => {
    event.target.style.backgroundColor = "green";
    event.target.style.color = "white";
}

for (var i = 0; i < tds.length; i++) {
    tds[i].onclick = clicked;
}