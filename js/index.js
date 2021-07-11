(function () {

  // VARIÁVEIS
  let divBoxes = Array.prototype.slice.call((document.querySelectorAll('label[for="slide"] div')));
  let closeButtom = document.querySelector('.close');
  let contents = document.querySelector('.content');
  let contentsChildren = Array.prototype.slice.call(contents.children);

  // CONTEÚDO
  // Abre janela
  divBoxes.forEach((e) => {
    e.addEventListener('click', function () {
      e.classList.add('box-on');
      e.classList.remove('box-off');
      closeButtom.classList.add('close-on');
      console.log(e);
    });
  });

  // Fechar janela
  closeButtom.addEventListener('click', closeAction);

  function closeAction() {
    let openWindow = document.querySelector('.box-on');
    openWindow.classList.remove('box-on');
    openWindow.classList.add('box-off');

    closeButtom.classList.remove('close-on');
  }

})();

