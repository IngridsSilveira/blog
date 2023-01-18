const btn_inscreva = document.getElementById("btn-inscreva");
const btn_proximo = document.getElementById("btn-next");

function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(
    field.value.indexOf("@") + 1,
    field.value.length
  );

  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search("@") == -1 &&
    dominio.search("@") == -1 &&
    usuario.search(" ") == -1 &&
    dominio.search(" ") == -1 &&
    dominio.search(".") != -1 &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    alert("E-mail enviado com sucesso!!");
  } else {
    document.getElementById("incorreto").innerHTML = "seunome@dominio.com";
    alert("E-mail invalido");
  }
}

btn_inscreva.addEventListener("click", (evt) => {
  evt.preventDefault();
});

btn_proximo.addEventListener("click", (evt) => {
  alert("Não tem próximo, você será redirecionado para o meu porfólio");
  const timeout = setTimeout(() => {
    window.location.href = "https://ingridssilveira.github.io/IngridSouza/";
  }, 20);
});
