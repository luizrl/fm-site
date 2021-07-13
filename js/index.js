(function () {

  // VARIÁVEIS
  let divBoxes = Array.prototype.slice.call((document.querySelectorAll('.slide .box')));
  let closeButtom = document.querySelector('.close');
  let searchInput = document.querySelector('.search input');
  let titleBox = Array.prototype.slice.call(document.querySelectorAll('.box p'));


  // CONTEÚDO
  // Abre janela
  divBoxes.forEach((e) => {
    e.addEventListener('click', openAction);
  });
  // Fecha janela janela
  closeButtom.addEventListener('click', closeAction);

  // BUSCA
  searchInput.addEventListener('keyup', filterBoxes);




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

