console.log('attractions draft');
console.log(attractionData);

/*data.forEach(function(d){
  d.position = d['industry']*1+d['services']*2
});

let newData = data.sort(function(a,b){
  return a.position - b.position;
});*/

newData = filterForIDs(byIncomeGroup(attractionData,1),[100,103]);
generateAttraction('#viz1afew',newData,2,1,1,false,true);
newData = filterForIDs(byIncomeGroup(attractionData,2),[96,67]);
generateAttraction('#viz1bfew',newData,2,1,1,false,true);
newData = example3(sortByAlpha(byIncomeGroup(attractionData,3),'country_name'));
generateAttraction('#viz1cfew',newData,2,1,1,false,true);
newData = example3(sortByAlpha(byIncomeGroup(attractionData,4),'country_name'));
generateAttraction('#viz1dfew',newData,2,1,1,false,true);

newData = sortByAlpha(byIncomeGroup(attractionData,1),'country_name');
generateAttraction('#viz1a',newData,9,5,1,false,false);
newData = sortByAlpha(byIncomeGroup(attractionData,2),'country_name');
generateAttraction('#viz1b',newData,9,5,1,false,false);
newData = sortByAlpha(byIncomeGroup(attractionData,3),'country_name');
generateAttraction('#viz1c',newData,9,5,1,false,false);
newData = sortByAlpha(byIncomeGroup(attractionData,4),'country_name');
generateAttraction('#viz1d',newData,9,5,1,false,false);
$('#viz1all').hide();

newData = filterForIDs(byIncomeGroup(attractionData,1),[100,103]);
generateAttraction('#viz2afew',newData,2,1,2,false,true);
newData = filterForIDs(byIncomeGroup(attractionData,2),[96,67]);
generateAttraction('#viz2bfew',newData,2,1,2,false,true);
newData = example3(sortByAlpha(byIncomeGroup(attractionData,3),'country_name'));
generateAttraction('#viz2cfew',newData,2,1,2,false,true);
newData = example3(sortByAlpha(byIncomeGroup(attractionData,4),'country_name'));
generateAttraction('#viz2dfew',newData,2,1,2,false,true);

newData = sortByAlpha(byIncomeGroup(attractionData,1),'country_name');
generateAttraction('#viz2a',newData,9,5,2,false,false);
newData = sortByAlpha(byIncomeGroup(attractionData,2),'country_name');
generateAttraction('#viz2b',newData,9,5,2,false,false);
newData = sortByAlpha(byIncomeGroup(attractionData,3),'country_name');
generateAttraction('#viz2c',newData,9,5,2,false,false);
newData = sortByAlpha(byIncomeGroup(attractionData,4),'country_name');
generateAttraction('#viz2d',newData,9,5,2,false,false);

$('#viz2all').hide();

newData = attractionData.sort(function(a,b){
  return a['HDI'] - b['HDI'];
});

//generateAttraction('#viz3',newData,9,16,3);

generateScaleArrow('#scale4','Low HDI','High HDI');

decData = decimate(newData);
decData.shift();
generateAttraction('#viz4few',decData,2,7,4,false,true);
generateAttraction('#viz4',newData,8,18,4,false,true);

$('#viz4').hide();

attractionData.forEach(function(d){
  d.position = d['industry']*1+d['services']*2
});

newData = attractionData.sort(function(a,b){
  return a.position - b.position;
});

generateScaleArrow('#scale5','Agriculture','Services');

decData = decimate(newData);
decData.shift();
generateAttraction('#viz5few',decData,2,7,5,false,true);
generateAttraction('#viz5',newData,8,18,5,false,true);

$('#viz5').hide();

newData = attractionData.sort(function(a,b){
  return a['HDI'] - b['HDI'];
});

generateScaleArrow('#scale6','Low HDI','High HDI');

decData = decimate(newData);
decData.shift();
generateAttraction('#viz6few',decData,2,7,6,false,true);
generateAttraction('#viz6',newData,8,18,6,false,true);

$('#viz6').hide();

newData = attractionData.filter(function(d){
	if(d['country_id'] ==31){
		return true
	} else {
		return false
	}
});
generateAttraction('#viz7',newData,1,1,5,true,false);

newData = attractionData.filter(function(d){
  if(d['country_id'] ==11){
    return true
  } else {
    return false
  }
});
generateAttraction('#viz8',newData,1,1,5,true,false);

$('#viz1switch').on('click',function(d){
	$('#viz1all').toggle();
	$('#viz1few').toggle();
});

$('#viz2switch').on('click',function(d){
	$('#viz2all').toggle();
	$('#viz2few').toggle();
});

$('#viz4switch').on('click',function(d){
	$('#viz4').toggle();
	$('#viz4few').toggle();
});

$('#viz5switch').on('click',function(d){
	$('#viz5').toggle();
	$('#viz5few').toggle();
});

$('#viz6switch').on('click',function(d){
	$('#viz6').toggle();
	$('#viz6few').toggle();
});
/*
sticky = false
$(window).scroll(function(){
    if(!sticky){
        let topWin = $(window).scrollTop();
        let topElement = $('#stickyend').offset().top;
        let height = $(window).height();
        if(topWin>topElement-height){
        	$('#attractionchallenge1').fadeOut();
        	$('#attractionchallenge2').fadeOut();
        	$('#attractionchallenge3').fadeOut();
        	sticky=true;
        }
    }
    if(sticky){
        let topWin = $(window).scrollTop();
        let topElement = $('#stickyend').offset().top;
        let height = $(window).height();
        if(topWin<topElement-height){
        	$('#attractionchallenge1').fadeIn();
        	$('#attractionchallenge2').fadeIn();
        	$('#attractionchallenge3').fadeIn();
        	sticky=false;
        }
    }
});
*/
$(window).resize(function(){
  $('.proportional').each(function() {
    let width = $(this).width();
      $(this).height(width);
  });
});

$('.proportional').each(function() {
  let width = $(this).width();
    $(this).height(width);
});