let rowCount = 3;

function init(){
	let cellHeight = $('#rootcell').width();
	$('.comparerow').css('min-height',cellHeight);

	$('.countrieslist').append('<option value="0">Add a country</option>');
	countries.forEach(function(d){
		$('.countrieslist').append('<option value="'+d['country id']+'">'+d['country name']+'</option>');
	});

	$('.countrieslist').on('change',function(d){
		addIcons(this.value,$(this).attr('data-id'));
	});

	$('#addrows').on('click',function(d){
		addRows(3);
	});

	$('#addregion').on('click',function(d){
		addRegion($('#addregionselect').val());
	});

	addIcons(12,1);
	$('#countrylist1').val(12);
}

function addIcons(countryID,row){
	let cellHeight = $('#rootcell').width();
	orientationDataCut = getData(countryID,orientationData);
	if(orientationDataCut!=false){
		$('#compare'+row+'1').html('');
		generateOrientationAfter('#compare'+row+'1',orientationDataCut,1,1,0,true,false);
	}

	diffusionDataCut = getData(countryID,diffusionData);
	if(diffusionDataCut!=false){
		$('#compare'+row+'2').html('');
		generateDiffusion('#compare'+row+'2',diffusionDataCut,1,1,true,false,4);
	}

	distanceDataCut = getData(countryID,distanceData);
	if(distanceDataCut!=false){
		$('#compare'+row+'3').html('');
		generateDistance('#compare'+row+'3',distanceDataCut,1,1,4,true,false);
	}

	attractionDataCut = getData(countryID,attractionData);
	if(attractionDataCut!=false){
		$('#compare'+row+'4').html('');
		generateAttraction('#compare'+row+'4',attractionDataCut,1,1,6,true,false);
	}
}

function getData(id,dataSet){
	let found = false;
	dataSet.forEach(function(d){
		if(d['country_id'] == id){
			found = [d];
		}
	});
	return found;
}

function addRows(n){
	for(i=0;i<n;i++){
		html =`
		<div class="row comparerow">
			<div class="col-md-2 offset-md-1 selectcell">
				<select data-id="{{row}}" id ="countrieslist{{row}}" class="countrieslist">
				</select>
			</div>
			<div id="compare{{row}}1" class="col-md-2 comparecell">
			</div>
			<div id="compare{{row}}2" class="col-md-2 comparecell">
			</div>
			<div id="compare{{row}}3" class="col-md-2 comparecell">
			</div>
			<div id="compare{{row}}4" class="col-md-2 comparecell">
			</div>
		</div>
		`;
		rowCount++;
		html = html.split('{{row}}').join(rowCount);

		let cellHeight = $('#rootcell').width();
		$('#comparerows').append(html);
		$('.comparerow').css('min-height',cellHeight);
		$('#countrieslist'+rowCount).append('<option>Add a country</option>');

		countries.forEach(function(d){
			$('#countrieslist'+rowCount).append('<option value="'+d['country id']+'">'+d['country name']+'</option>');
		});

		$('#countrieslist'+rowCount).on('change',function(d){
			addIcons(this.value,$(this).attr('data-id'));
		});
	}
}

function addRegion(region){
	$('.comparecell').html('');
	$('.countrieslist').val(0);
	let countries = getCountriesByRegion(region);
	let diff = countries.length - rowCount;
	if(diff>0){
		addRows(diff);
	}

	countries.forEach(function(d,i){
		let id = i+1
		$('#countrieslist'+id).val(d['country id']);
		addIcons(d['country id'],id);
	});
}

function getCountriesByRegion(region){
	let countries = regionsToCountries.filter(function(d){
		if(d['region']==region){
			return true
		} else {
			return false;
		}
	});
	return countries;
}

$('.proportional').each(function() {
	let width = $(this).width();
    $(this).height(width);
});

init();
