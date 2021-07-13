(function () {

  // VARIÁVEIS
  const divBoxes = Array.prototype.slice.call((document.querySelectorAll('.slide .box')));
  const closeButtom = document.querySelector('.close');
  const searchInput = document.querySelector('.search input');
  const titleBox = Array.prototype.slice.call(document.querySelectorAll('.box p'));
  const contentTitle = document.querySelectorAll('.content h1');


  // CONTEÚDO
  // Abre janela
  divBoxes.forEach((e) => {
    e.addEventListener('click', openAction);
  });
  // Fecha janela janela
  closeButtom.addEventListener('click', closeAction);

  // BUSCA
  searchInput.addEventListener('keyup', filterBoxes);

  // POP-UP
  // Titulo nas pop-up
  titleBox.forEach( (title,index) => {
    contentTitle[ index ].innerText = title.innerText;
  });




  // FUNÇÕES
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
    closeButtom.classList.add('close-on');

  }
  function closeAction() {
    let openWindow = document.querySelector('.box.box-on');
    openWindow.classList.remove('box-on');
    closeButtom.classList.remove('close-on');
  }
})();

