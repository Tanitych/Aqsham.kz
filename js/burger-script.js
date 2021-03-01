$('.header__burger').click(function (event) {
	$('.header__burger,.header__menu').toggleClass('active');
	$('body').toggleClass('lock');
});

$('.category').click(function (event) {
	$(this).next('.category__toggle__block').toggleClass('active');
	$('.category__toggle__block').not($(this).next('.category__toggle__block')).removeClass('active');
});


$('.dropdown.toggle').click(function (event) {
	$('.dropdown.toggle, .dropdown__menu.toggle').toggleClass('active');
});