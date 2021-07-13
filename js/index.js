(function () {

  // VARIÁVEIS
  let divBoxes = Array.prototype.slice.call((document.querySelectorAll('label[for="slide"] div')));
  let closeButtom = document.querySelector('.close');

  // CONTEÚDO
  // Abre janela
  divBoxes.forEach((e) => {
    e.addEventListener('click', openAction);
  });

  // Fecha janela janela
  closeButtom.addEventListener('click', closeAction);

  // Funções
  function openAction(){
    if (!Array.prototype.slice.call(this.classList).indexOf(`box`)){
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

