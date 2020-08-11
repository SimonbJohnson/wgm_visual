$('.proportional').each(function() {
	let width = $(this).width();
    $(this).height(width);
});

$('#religionbutton').on('click',function(){
	alert('click');
})

init();