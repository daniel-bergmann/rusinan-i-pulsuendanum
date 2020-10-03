// skilgreining á breytunum
let enterButton = document.getElementById('enter');
let input = document.getElementById('userInput');
let ul = document.querySelector('ul');
var item = document.getElementsByTagName('li');

function inputLength() {
  return input.value.length;
}

function listLength() {
  return item.length;
}

function createListElement() {
  var li = document.createElement('li'); //býr til 'li'
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li); //sér til þess að 'li' fer í 'ul'
  input.value = ''; //Þegar ýtt er á enter hverfur textinn í input svæðinu og placeholder tekur við.

  //Byrjar hér -  function til að losa verkefni þegar það er búið
  function crossOut() {
    li.classList.toggle('done');
  }

  li.addEventListener('click', crossOut);
  // Endar hér - function til að losa verkefni þegar það er búið

  // Takkinn sem addar og eyðir elementum
  var dBtn = document.createElement('button');
  dBtn.appendChild(document.createTextNode('💸'));
  li.appendChild(dBtn);
  dBtn.addEventListener('click', deleteListItem);
  // Hér klárast kóðinn fyrir adda og eyða

  // delete og (display: none)
  function deleteListItem() {
    li.classList.add('delete');
  }
  // hér klárast delete og (display: none)
}

function addListAfterClick() {
  if (inputLength() > 0) {
    //sér til þess að tómur input field búi ekki til 'li' element
    createListElement();
  }
}

function assListAfterKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
    //Ef maður ýtir á enter takkann sem er númer 13 (það er keycode enter takkans.)
    // (sjá: https://css-tricks.com/snippets/javascript/javascript-keycodes/)
    createListElement();
  }
}

enterButton.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);
