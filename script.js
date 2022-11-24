const btnTop = document.querySelector('#btn-top');

window.onscroll = () => {
  scroll();
}

function scroll() {
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}

btnTop.addEventListener("click", voltarTopo);

function voltarTopo() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const btnUni = document.querySelector('#btn-uni');
const btnPadrao = document.querySelector('#btn-padrao');
const btnDavinci = document.querySelector('#btn-davinci');

btnUni.addEventListener("click", () => { document.getElementById(`plano1`).checked = true });
btnPadrao.addEventListener("click", () => { document.getElementById(`plano2`).checked = true });
btnDavinci.addEventListener("click", () => { document.getElementById(`plano3`).checked = true });
