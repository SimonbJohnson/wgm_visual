console.log('attractions draft');
console.log(attractionData);

/*data.forEach(function(d){
  d.position = d['industry']*1+d['services']*2
});

let newData = data.sort(function(a,b){
  return a.position - b.position;
});*/

newData = example3(sortByAlpha(byIncomeGroup(attractionData,1),'country_name'));
generateAttraction('#viz1afew',newData,2,1,1,false,true);
newData = example3(sortByAlpha(byIncomeGroup(attractionData,2),'country_name'));
generateAttraction('#viz1bfew',newData,2,1,1,false,true);
newData = example3(sortByAlpha(byIncomeGroup(attractionData,3),'country_name'));
generateAttraction('#viz1cfew',newData,2,1,1,false,true);
newData = example3(sortByAlpha(byIncomeGroup(attractionData,4),'country_name'));
generateAttraction('#viz1dfew',newData,2,1,1,false,true);

newData = sortByAlpha(byIncomeGroup(attractionData,1),'country_name');
generateAttraction('#viz1a',newData,9,5,1,false,true);
newData = sortByAlpha(byIncomeGroup(attractionData,2),'country_name');
generateAttraction('#viz1b',newData,9,5,1,false,true);
newData = sortByAlpha(byIncomeGroup(attractionData,3),'country_name');
generateAttraction('#viz1c',newData,9,5,1,false,true);
newData = sortByAlpha(byIncomeGroup(attractionData,4),'country_name');
generateAttraction('#viz1d',newData,9,5,1,false,true);
$('#viz1all').hide();

newData = example3(sortByAlpha(byIncomeGroup(attractionData,1),'country_name'));
generateAttraction('#viz2afew',newData,2,1,2,false,true);
newData = example3(sortByAlpha(byIncomeGroup(attractionData,2),'country_name'));
generateAttraction('#viz2bfew',newData,2,1,2,false,true);
newData = example3(sortByAlpha(byIncomeGroup(attractionData,3),'country_name'));
generateAttraction('#viz2cfew',newData,2,1,2,false,true);
newData = example3(sortByAlpha(byIncomeGroup(attractionData,4),'country_name'));
generateAttraction('#viz2dfew',newData,2,1,2,false,true);

newData = sortByAlpha(byIncomeGroup(attractionData,1),'country_name');
generateAttraction('#viz2a',newData,9,5,2,false,true);
newData = sortByAlpha(byIncomeGroup(attractionData,2),'country_name');
generateAttraction('#viz2b',newData,9,5,2,false,true);
newData = sortByAlpha(byIncomeGroup(attractionData,3),'country_name');
generateAttraction('#viz2c',newData,9,5,2,false,true);
newData = sortByAlpha(byIncomeGroup(attractionData,4),'country_name');
generateAttraction('#viz2d',newData,9,5,2,false,true);

$('#viz2all').hide();

newData = attractionData.sort(function(a,b){
  return a['HDI'] - b['HDI'];
});

//generateAttraction('#viz3',newData,9,16,3);

generateScaleArrow('#scale4','Low HDI','High HDI');
generateAttraction('#viz4',newData,8,18,4,false,true);

attractionData.forEach(function(d){
  d.position = d['industry']*1+d['services']*2
});

newData = attractionData.sort(function(a,b){
  return a.position - b.position;
});

generateScaleArrow('#scale5','Agriculture','Serivces');
generateAttraction('#viz5',newData,8,18,5,false,true);

newData = attractionData.sort(function(a,b){
  return a['HDI'] - b['HDI'];
});

generateScaleArrow('#scale6','Low HDI','High HDI');
generateAttraction('#viz6',newData,8,18,6,false,true);

$('#viz1switch').on('click',function(d){
	console.log('click');
	$('#viz1all').toggle();
	$('#viz1few').toggle();
});

$('#viz2switch').on('click',function(d){
	console.log('click');
	$('#viz2all').toggle();
	$('#viz2few').toggle();
});