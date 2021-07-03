let drop = document.getElementById("nav-drop");
let hamb = document.getElementById("hamb");
let close = document.getElementById("close_menu")
let listitems = document.querySelectorAll(".navbar li");


listitems.forEach((ele)=>{
	ele.onclick = () =>{
		drop.classList.toggle('deactivate');
		drop.classList.toggle('activate');
		hamb.classList.toggle('remove_hamb');
		close.classList.toggle('remove_hamb')

	}
})



hamb.onclick=()=>{
    drop.classList.remove('disp-none')
    drop.classList.toggle('deactivate');
	drop.classList.toggle('activate');
	hamb.classList.toggle('remove_hamb');
	close.classList.toggle('remove_hamb')
}

close.onclick = () =>{
    drop.classList.remove('disp-none')
    drop.classList.toggle('deactivate');
	drop.classList.toggle('activate');
	hamb.classList.toggle('remove_hamb');
	close.classList.toggle('remove_hamb')
}
