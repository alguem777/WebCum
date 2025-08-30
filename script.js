document.addEventListener("DOMContentLoaded", () => {
  const senhaCorreta = "alguem777";
  const btn = document.getElementById("btnEntrar");
  const modal = document.getElementById("ageModal");
  const senhaInput = document.getElementById("senha");
  const erro = document.getElementById("mensagemErro");

  btn.addEventListener("click", () => {
    const senhaDigitada = senhaInput.value;

    if (senhaDigitada === senhaCorreta) {
      modal.style.display = "none"; // esconde o modal
    } else {
      erro.textContent = "Token incorreto. Tente novamente.";
    }
  });
});