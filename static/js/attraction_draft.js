console.log('attractions draft');
console.log(attractionData);

/*data.forEach(function(d){
  d.position = d['industry']*1+d['services']*2
});

let newData = data.sort(function(a,b){
  return a.position - b.position;
});*/

newData = sortByAlpha(byIncomeGroup(attractionData,1),'country_name');
generateAttraction('#viz1a',newData,9,5,1);
newData = sortByAlpha(byIncomeGroup(attractionData,2),'country_name');
generateAttraction('#viz1b',newData,9,5,1);
newData = sortByAlpha(byIncomeGroup(attractionData,3),'country_name');
generateAttraction('#viz1c',newData,9,5,1);
newData = sortByAlpha(byIncomeGroup(attractionData,4),'country_name');
generateAttraction('#viz1d',newData,9,5,1);

newData = sortByAlpha(byIncomeGroup(attractionData,1),'country_name');
generateAttraction('#viz2a',newData,9,5,2);
newData = sortByAlpha(byIncomeGroup(attractionData,2),'country_name');
generateAttraction('#viz2b',newData,9,5,2);
newData = sortByAlpha(byIncomeGroup(attractionData,3),'country_name');
generateAttraction('#viz2c',newData,9,5,2);
newData = sortByAlpha(byIncomeGroup(attractionData,4),'country_name');
generateAttraction('#viz2d',newData,9,5,2);

newData = attractionData.sort(function(a,b){
  return a['HDI'] - b['HDI'];
});

generateAttraction('#viz3',newData,9,16,3);

generateAttraction('#viz4',newData,9,16,4);

attractionData.forEach(function(d){
  d.position = d['industry']*1+d['services']*2
});

newData = attractionData.sort(function(a,b){
  return a.position - b.position;
});

generateAttraction('#viz5',newData,9,16,5);

newData = attractionData.sort(function(a,b){
  return a['HDI'] - b['HDI'];
});

generateAttraction('#viz6',newData,9,16,6);