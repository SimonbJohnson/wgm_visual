$('.proportional').each(function() {
	let width = $(this).width();
    $(this).height(width);
});

$('#frontreligion').on('click',function(){
	window.location.href = 'lenses/religion/'
});

$('#frontsociety').on('click',function(){
	window.location.href = 'lenses/society/'
});

$('#frontbenefits').on('click',function(){
	window.location.href = 'lenses/benefits/'
});

$('#frontattraction').on('click',function(){
	window.location.href = 'lenses/future_economies/'
});