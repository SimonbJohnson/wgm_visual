function init(){
	let cellHeight = $('#rootcell').width();
	$('.comparerow').height(cellHeight);

	$('.countrieslist').append('<option>Add a country</option>');
	countries.forEach(function(d){
		$('.countrieslist').append('<option value="'+d['country id']+'">'+d['country name']+'</option>');
	});

	$('.countrieslist').on('change',function(d){
		console.log(this.value);
		console.log($(this).attr('data-id'));
		addIcons(this.value,$(this).attr('data-id'));
	});
}

function addIcons(countryID,row){
	orientationDataCut = getData(countryID,orientationData);
	if(orientationDataCut!=false){
		$('#compare'+row+'1').html('');
		generateOrientationAfter('#compare'+row+'1',orientationDataCut,1,1,0,true,false);
	}
}

function getData(id,dataSet){
	let found = false;
	dataSet.forEach(function(d){
		if(d['ID'] == id){
			found = [d];
		}
	});
	return found;
}

init();