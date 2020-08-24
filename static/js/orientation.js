console.log(orientationData);

let newData = filterForIDs(byIncomeGroup(orientationData,1),[66,41]);
generateOrientationBefore('#viz1afew',newData,1,2,1,false,true);
newData = filterForIDs(byIncomeGroup(orientationData,2),[183,10]);
generateOrientationBefore('#viz1bfew',newData,1,2,1,false,true);
newData = filterForIDs(byIncomeGroup(orientationData,3),[32,22]);
generateOrientationBefore('#viz1cfew',newData,1,2,1,false,true);
newData = filterForIDs(byIncomeGroup(orientationData,4),[18,12]);
generateOrientationBefore('#viz1dfew',newData,1,2,1,false,true);

newData = sortByAlpha(byIncomeGroup(orientationData,1),'country name');
generateOrientationBefore('#viz1a',newData,5,9,1,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,2),'country name');
generateOrientationBefore('#viz1b',newData,5,9,1,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,3),'country name');
generateOrientationBefore('#viz1c',newData,5,9,1,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,4),'country name');
generateOrientationBefore('#viz1d',newData,5,9,1,false,true);
$('#viz1all').hide();

$('#viz1switch').on('click',function(d){
  $('#viz1all').toggle();
  $('#viz1few').toggle();
});

/*let newData = data.sort(function(a,b){
  let value1 = a['B-Q30-religion-Q12 high']+a['C-D1-rest'];
  let value2 = b['B-Q30-religion-Q12 high']+b['C-D1-rest']
  return value1-value2
});*/

//generateOrientationBefore('#orientationviz1L',newData,16,9,1);

newData = filterForIDs(byIncomeGroup(orientationData,1),[66,41]);
generateOrientationBefore('#viz2afew',newData,1,2,2,false,true);
newData = filterForIDs(byIncomeGroup(orientationData,2),[183,10]);
generateOrientationBefore('#viz2bfew',newData,1,2,2,false,true);
newData = filterForIDs(byIncomeGroup(orientationData,3),[32,22]);
generateOrientationBefore('#viz2cfew',newData,1,2,2,false,true);
newData = filterForIDs(byIncomeGroup(orientationData,4),[18,12]);
generateOrientationBefore('#viz2dfew',newData,1,2,2,false,true);

newData = sortByAlpha(byIncomeGroup(orientationData,1),'country name');
generateOrientationBefore('#viz2a',newData,5,9,2,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,2),'country name');
generateOrientationBefore('#viz2b',newData,5,9,2,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,3),'country name');
generateOrientationBefore('#viz2c',newData,5,9,2,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,4),'country name');
generateOrientationBefore('#viz2d',newData,5,9,2,false,true);

$('#viz2all').hide();

$('#viz2switch').on('click',function(d){
  $('#viz2all').toggle();
  $('#viz2few').toggle();
});

newData = filterForIDs(byIncomeGroup(orientationData,1),[66,41]);
generateOrientationBefore('#viz3afew',newData,1,2,3,false,true);
newData = filterForIDs(byIncomeGroup(orientationData,2),[183,10]);
generateOrientationBefore('#viz3bfew',newData,1,2,3,false,true);
newData = filterForIDs(byIncomeGroup(orientationData,3),[32,22]);
generateOrientationBefore('#viz3cfew',newData,1,2,3,false,true);
newData = filterForIDs(byIncomeGroup(orientationData,4),[18,12]);
generateOrientationBefore('#viz3dfew',newData,1,2,3,false,true);

newData = sortByAlpha(byIncomeGroup(orientationData,1),'country name');
generateOrientationBefore('#viz3a',newData,5,9,3,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,2),'country name');
generateOrientationBefore('#viz3b',newData,5,9,3,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,3),'country name');
generateOrientationBefore('#viz3c',newData,5,9,3,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,4),'country name');
generateOrientationBefore('#viz3d',newData,5,9,3,false,true);

$('#viz3all').hide();

$('#viz3switch').on('click',function(d){
  $('#viz3all').toggle();
  $('#viz3few').toggle();
});


let india = orientationData.filter(function(d){
  if(d['country name']=='India'){
    return true;
  } else {
    return false;
  }
});
generateOrientationBefore('#instance1',india,1,1,2,true,false);

let ghana = orientationData.filter(function(d){
  if(d['country name']=='Ghana'){
    return true;
  } else {
    return false;
  }
});

generateOrientationBefore('#instance2',ghana,1,1,2,true,false);

let nigeria = orientationData.filter(function(d){
  if(d['country name']=='Nigeria'){
    return true;
  } else {
    return false;
  }
});

generateOrientationAfter('#instance3',nigeria,1,1,0,true,false);

let westafrica = orientationData.filter(function(d){
  if(['Guinea','Liberia','Sierra Leone'].indexOf(d['country name'])>-1){
    return true;
  } else {
    return false;
  }
});

generateOrientationAfter('#instance4',westafrica,2,2,1,true,false);

newData = filterForIDs(byIncomeGroup(orientationData,1),[66,41]);
generateOrientationAfter('#viz4afew',newData,1,2,3,false,true);
newData = filterForIDs(byIncomeGroup(orientationData,2),[183,10]);
generateOrientationAfter('#viz4bfew',newData,1,2,3,false,true);
newData = filterForIDs(byIncomeGroup(orientationData,3),[32,22]);
generateOrientationAfter('#viz4cfew',newData,1,2,3,false,true);
newData = filterForIDs(byIncomeGroup(orientationData,4),[18,12]);
generateOrientationAfter('#viz4dfew',newData,1,2,3,false,true);

newData = sortByAlpha(byIncomeGroup(orientationData,1),'country name');
generateOrientationAfter('#viz4a',newData,5,9,3,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,2),'country name');
generateOrientationAfter('#viz4b',newData,5,9,3,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,3),'country name');
generateOrientationAfter('#viz4c',newData,5,9,3,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,4),'country name');
generateOrientationAfter('#viz4d',newData,5,9,3,false,true);

$('#viz4all').hide();

$('#viz4switch').on('click',function(d){
  $('#viz4all').toggle();
  $('#viz4few').toggle();
});

generateOrientationAfter('#orientationviz6',religionData,3,2,1,true,true);

let wPlot = $('#orientationviz5').width();
let hPlot = $('#orientationviz5').width();
scatterplot('#orientationviz5',orientationData,'Q22','Q30-Religion',['Q22 Percent who said not much, or not at all'],['Q30 Percent who chose religion out of the whole population'],'WBI',wPlot,hPlot,0,50,0,50);

