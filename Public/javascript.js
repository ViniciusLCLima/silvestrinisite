function openattr(){
					let elemento = document.querySelector("nav");
					let elemento2 = document.getElementById("menu_btn");
					if(elemento.classList.contains("open")){
						elemento.classList.remove("open")
						elemento2.classList.remove("open")
					}
					else{
					elemento.classList.add("open")
					elemento2.classList.add("open")
					}
					}
const botaomenu = document.getElementById("menu_btn");
botaomenu.addEventListener("click",openattr);
const nav = document.querySelector("nav");
nav.addEventListener("click",openattr);
function destaca() {
	let elemento = document.getElementById("cardaplink");
	elemento.classList.add("mouseover");
}
function tiradestaque() {
	let elemento = document.getElementById("cardaplink");
	elemento.classList.remove("mouseover");
}
const cardapiolink= document.getElementById("cardaplink");
cardapiolink.addEventListener("mouseover",destaca);
cardapiolink.addEventListener("mouseout",tiradestaque);
const rightbtn = document.querySelector(".fotospassbtn.right");
const leftbtn = document.querySelector(".fotospassbtn.left");
const wrapperfotos = document.querySelector(".wrapperfotos");
function rightfotos() {
	let quantiascroll = wrapperfotos.scrollLeft
	wrapperfotos.scroll({
		left:quantiascroll+400,
		behavior:'smooth',
	})
}
function leftfotos() {
	let quantiascroll = wrapperfotos.scrollLeft;
	wrapperfotos.scroll({
		left:quantiascroll-400,
		behavior:'smooth',
	})
}
leftbtn.addEventListener('click', leftfotos);
rightbtn.addEventListener('click', rightfotos);
if (window.screen.width>=582){
	const video = document.querySelector("video");
	video.setAttribute("src", "videopaisagem.mp4")
}
