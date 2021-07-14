(function () {

  // VARIÁVEIS
  const divBoxes = Array.prototype.slice.call((document.querySelectorAll('.slide .box')));
  const navegationButton = document.querySelector('.navegation');
  const closeButton = document.querySelector('.close');
  const titleBox = Array.prototype.slice.call(document.querySelectorAll('.box p'));
  const contentTitle = document.querySelectorAll('.content h1');
  const selectInput = document.querySelector('#select-content');
  const buttonLeft = document.querySelector('.button-left');
  const buttonRight = document.querySelector('.button-right');
  const radiusRight = document.querySelector('#rd-right');
  const radiusLeft = document.querySelector('#rd-left');
  const bar = document.querySelector('.progress-bar span');


  // CONTEÚDO
  // Abre janela
  divBoxes.forEach((e) => {
    e.addEventListener('click', openAction);
  });
  // Fecha janela janela
  closeButton.addEventListener('click', closeAction);

  // POP-UP
  // Titulo nas pop-up
  titleBox.forEach((title, index) => {
    contentTitle[index].innerText = title.innerText;
  });

  // CONTROLE

  titleBox.forEach((item, index) => {
    let optionSelect = document.createElement('option');
    optionSelect.innerText = item.innerText;
    optionSelect.id = 'opt-' + index;

    selectInput.append(optionSelect);
  });

  selectInput.addEventListener('change', selectOption);

  buttonLeft.addEventListener('click', previousTab);
  buttonRight.addEventListener('click', nextTab);


  // FUNÇÕES
  function progressBar(boxNumber){
    barLenght = divBoxes.length;
    boxNumber = boxNumber + 1;
    widthTotal = 100;
    if (boxNumber > 0 && boxNumber <= barLenght){
      bar.style.width = String( (widthTotal/barLenght) * boxNumber + '%');
    }
  }

  function previousTab() {
    const options = Array.prototype.slice.call(selectInput);
    let position;

    options.forEach((item, index) => {
      if (item.value == selectInput.value) {
        position = index;
      }
    });

    if (position > 0) {
      position -= 1;
      selectInput.value = options[position].value;
      selectInput.dispatchEvent(new Event('change'));

      if (position > 0) {
        document.querySelector('.box-' + (position)).classList.add('box-on');  
      }
    }
  }

  function nextTab() {
    const options = Array.prototype.slice.call(selectInput);
    let optionsLenght = options.length;
    let position;

    options.forEach((item, index) => {
      if (item.value == selectInput.value) {
        position = index;
      }
    });

    if (position >= 0 && position < (optionsLenght - 1)) {
      position += 1;
      selectInput.value = options[position].value;
      selectInput.dispatchEvent(new Event('change'));
    }
    
  }
  
  function selectOption() {

    let arrayOptions = Array.prototype.slice.call(selectInput);

    divBoxes.forEach(box => {
      let arrayClass = Array.from(box.classList);
      if (arrayClass.indexOf('box-on') != -1) {
        box.classList.remove('box-on');
      }
    });

    arrayOptions.forEach((item) => {
      if (item.value == selectInput.value) {
        let boxNumber = Number(item.id.split('-')[1]);
        boxIdentifier = '.box-' + boxNumber;
        
        let box = document.querySelector(boxIdentifier);
        box.classList.add('box-on');
        
        if (boxNumber > 15) {
          radiusLeft.removeAttribute('checked');
          radiusRight.setAttribute('checked', '');
          
        }
        else {
          radiusRight.removeAttribute('checked');
          radiusLeft.setAttribute('checked', '');
        }
        
        progressBar(boxNumber);
        navegationButton.classList.add('navegation-on');
      }

      // selectInput.dispatchEvent(new Event('change'));
    });
  }


  function openAction() {
    let boxIdentifier = this;
    if (!Array.prototype.slice.call(this.classList).indexOf(`box`)) {
      this.classList.add('box-on');
    }
    selectInput.value = boxIdentifier.querySelector('p').innerText;
    navegationButton.classList.add('navegation-on');

  }
  function closeAction() {
    let openWindow = document.querySelector('.box.box-on');
    openWindow.classList.remove('box-on');
    navegationButton.classList.remove('navegation-on');

  }
})();

