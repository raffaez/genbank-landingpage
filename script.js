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

btnUni.addEventListener("click", () => { document.getElementById(`conta1`).checked = true });
btnPadrao.addEventListener("click", () => { document.getElementById(`conta2`).checked = true });
btnDavinci.addEventListener("click", () => { document.getElementById(`conta3`).checked = true });

const celular = document.querySelector('#floatCelular');
const cpf = document.querySelector('#floatCpf');

const maskOptionsCel = {
  mask: '(00)00000-00000'
};
const maskOptionsCpf = {
  mask: '000.000.000-00'
}

const maskCelular = IMask(celular, maskOptionsCel);
const maskCpf = IMask(cpf, maskOptionsCpf);

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()