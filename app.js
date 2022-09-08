const accordian = document.getElementsByClassName('content-container');
console.log(accordian);

// Looping through the HTMLCollection to apply event Listeners
for (let i = 0; i < accordian.length; i++) {
	accordian[i].addEventListener('click', function () {
		this.classList.toggle('active');
		if (this.classList.contains('active')) {
			this.children[0].style.fontWeight = '700';
		} else {
			this.children[0].style.fontWeight = '400';
		}
	});
}
