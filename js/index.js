(function () {

  // VARIÁVEIS
  const divBoxes = Array.prototype.slice.call((document.querySelectorAll('.slide .box')));
  const closeButton = document.querySelector('.close');
  const searchInput = document.querySelector('.search input');
  const titleBox = Array.prototype.slice.call(document.querySelectorAll('.box p'));
  const contentTitle = document.querySelectorAll('.content h1');


  // CONTEÚDO
  // Abre janela
  divBoxes.forEach((e) => {
    e.addEventListener('click', openAction);
  });
  // Fecha janela janela
  closeButton.addEventListener('click', closeAction);

  // BUSCA
  searchInput.addEventListener('keyup', filterBoxes);

  // POP-UP
  // Titulo nas pop-up
  titleBox.forEach( (title,index) => {
    contentTitle[ index ].innerText = title.innerText;
  });

  // CONTROLE
  let selectInput = document.querySelector('#select-content');
  let buttonLeft = document.querySelector('.button-left');
  let buttonRight = document.querySelector('.button-right');

  titleBox.forEach( (item, index) => {
    let optionSelect = document.createElement('option');
    optionSelect.innerText = item.innerText;
    optionSelect.id = 'opt-' + index;

    selectInput.append(optionSelect);
  });

  selectInput.addEventListener('change', selectOption);

  buttonLeft.addEventListener('click', previousTab);
  buttonRight.addEventListener('click', nextTab);
  
  
  // FUNÇÕES
  function previousTab(){
    let options = Array.prototype.slice.call(selectInput);
    let position;
    
    options.forEach( (item, index) => {
      if (item.value == selectInput.value){
        position = index;
      }
    });

    if (position > 0){
      position -= 1;
      selectInput.value = options[ position ].value;
      selectInput.dispatchEvent(new Event('change'));
    }
  }
  function nextTab(){
    let options = Array.prototype.slice.call(selectInput);
    let optionsLenght = options.length;
    let position;
    
    options.forEach( (item, index) => {
      if (item.value == selectInput.value){
        position = index;
      }
    });

    if (position >= 0 && position < (optionsLenght - 1)){
      position += 1;
      selectInput.value = options[ position ].value;
      selectInput.dispatchEvent(new Event('change'));
    }
  }

  function selectOption(){
    let arrayOptions = Array.prototype.slice.call(selectInput);

    arrayOptions.forEach( item => {

      if (item.value == selectInput.value){  
        boxIdentifier = '.box-' + Number(item.id.split('-')[1]);

        let box =  document.querySelector(boxIdentifier);
        box.classList.add('box-on');
        
        closeButton.classList.add('close-on');
      }
    });
  }


  function filterBoxes() {
    let valueBox = this.value.toLowerCase();

    titleBox.forEach(box => {
      let arrayBox = (box.innerText.toLowerCase());

      if (!arrayBox.indexOf(valueBox)) {
        let boxElement = box.parentElement.style;
        boxElement.display = 'block';

      }

      else {
        box.parentElement.style.display = 'none';
      }

    });
  }


  function openAction() {
    if (!Array.prototype.slice.call(this.classList).indexOf(`box`)) {
      this.classList.add('box-on');
    }
    closeButton.classList.add('close-on');

  }
  function closeAction() {
    let openWindow = document.querySelector('.box.box-on');
    openWindow.classList.remove('box-on');
    closeButton.classList.remove('close-on');
  }
})();

