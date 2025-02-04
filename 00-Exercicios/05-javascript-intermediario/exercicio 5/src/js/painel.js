const imagens = document.querySelectorAll(".slide");
// console.log(imagens)
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

let imagemAtual = 0;

setaAvancar.addEventListener("click", () => {
	if (imagemAtual === imagens.length - 1) {
		return;
	}
	imagemAtual++;

	esconderImagemAberta();

	mostrarImagem();

	mostrarOuEsconderSetas();
});

setaVoltar.addEventListener("click", () => {
	if (imagemAtual === 0) {
		return;
	}
	imagemAtual--;

	esconderImagemAberta();

	mostrarImagem();

	mostrarOuEsconderSetas();
});

function mostrarImagem() {
	imagens[imagemAtual].classList.add("mostrar");
}

function esconderImagemAberta() {
	const imagemAberta = document.querySelector(".mostrar");
	imagemAberta.classList.remove("mostrar");
}

function mostrarOuEsconderSetas() {
	const naoEhAPrimeiraImagem = imagemAtual !== 0;
	const chegouNaUltimaImagem = imagemAtual === imagens.length - 1;

	setaVoltar.classList.toggle("opacidade", !naoEhAPrimeiraImagem);
	setaAvancar.classList.toggle("opacidade", chegouNaUltimaImagem);
}
