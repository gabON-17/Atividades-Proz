const list = document.getElementById("ulList");
const item = document.getElementById("item")

// PRESS ENTER
item.addEventListener('keypress', event => {
  if(event.key === "Enter") {
    const buttom = createBottomLi();
    const li = createElementLi(item.value, buttom);

    list.appendChild(li);
    setItemLocalStorage(buttom.parentElement);
  }
  return
});


// EVENT of the Buttons
const buttomSave = document
  .getElementById("submit")
  .addEventListener("click", (event) => {
    const buttom = createBottomLi();
    const li = createElementLi(item.value, buttom);

    list.appendChild(li);
    setItemLocalStorage(buttom.parentElement);
  });

const buttomReload = document
  .getElementById("reload")
  .addEventListener("click", (event) => {
    const quantItens = localStorage.length;
    const itens = getItensLocalStorage();

    for (textLi of itens) {
      const buttom = createBottomLi();
      const li = createElementLi(textLi, buttom);

      list.appendChild(li);
    }
  });

const buttomDeleteAll = document
  .getElementById("deleteAll")
  .addEventListener("click", event => {
    for(let i = 0; list.lastElementChild !== null; i++) {
      const element = list.lastElementChild
      list.removeChild(element)
      deleteItemLocalStorage(element.innerHTML.split('<')[0])
    }
  })

const buttomFilter = document
  .getElementById('filter')
  .addEventListener('click', event => {
    const filterInput = document.getElementById("filterInput")
    const filterText = filterInput.value.toLowerCase().trim()
    
    // Se o campo de filtro estiver vazio, mostrar todos os itens
    if (filterText === '') {
      showAllItems()
      return
    }
    
    // Filtrar itens da lista
    const allItems = list.children
    for (let i = 0; i < allItems.length; i++) {
      const item = allItems[i]
      const itemText = item.innerHTML.split('<')[0].toLowerCase().trim()
      
      // Se o item contém o texto de filtro, mostrar; senão, ocultar
      if (itemText.includes(filterText)) {
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
    }
  })



// FUNCTIONS CREATE Elements
function showAllItems() {
  const allItems = list.children
  for (let i = 0; i < allItems.length; i++) {
    allItems[i].style.display = 'block'
  }
}

function createElementLi(text, buttom) {
  const newLi = document.createElement("li");
  newLi.innerHTML = text;

  newLi.appendChild(buttom);
  return newLi;
}

function createBottomLi() {
  const newBottom = document.createElement("button");

  newBottom.addEventListener("click", (e) => {
    const element = newBottom.parentElement;
    list.removeChild(element);
    deleteItemLocalStorage(element.innerHTML.split('<')[0]);
  });

  newBottom.className = "buttom-end";
  newBottom.innerHTML = "X";
  return newBottom;
}

// FUNCTIONS localStorage
function setItemLocalStorage(item) {
  const quantItens = localStorage.length;
  let indexStorage = quantItens == 0 ? 0 : quantItens;

  localStorage.setItem(`item_${indexStorage}`, item.innerHTML.split("<")[0]);
  indexStorage++;
}

function getItensLocalStorage() {
  const itens = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    itens.push(localStorage.getItem(key));
  }
  return itens;
}

function deleteItemLocalStorage(value) {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const item = localStorage.getItem(key);

    if (item === value) {
      localStorage.removeItem(key);
      return;
    }
  }
}
