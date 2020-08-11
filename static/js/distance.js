console.log(distanceData);

let wPlot = $('#viz1').width();
let hPlot = $('#viz1').width();
scatterplot('#viz1',distanceData,'Q12-neg','Q16-few',['Q16. In general, do you think the work that scientists do benefits','most, some, or very few people in this country? Percent that answered Few.'],['Q12 In general, would you say that you trust science a lot, some,','not much, or not at all? Percent who said not much, or not at all.'],'WBI',wPlot,hPlot,0,50,0,50);

newData = sortByAlpha(byIncomeGroup(distanceData,1));
generateDistance('#viz2a',newData,9,5,1);
newData = sortByAlpha(byIncomeGroup(distanceData,2));
generateDistance('#viz2b',newData,9,5,1);
newData = sortByAlpha(byIncomeGroup(distanceData,3));
generateDistance('#viz2c',newData,9,5,1);
newData = sortByAlpha(byIncomeGroup(distanceData,4));
generateDistance('#viz2d',newData,9,5,1);

newData = sortByAlpha(byIncomeGroup(distanceData,1));
generateDistance('#viz3a',newData,6,8,2);
newData = sortByAlpha(byIncomeGroup(distanceData,4));
generateDistance('#viz3b',newData,6,8,2);

newData = sortByAlpha(byIncomeGroup(distanceData,1));
generateDistance('#viz4a',newData,6,8,3);
newData = sortByAlpha(byIncomeGroup(distanceData,4));
generateDistance('#viz4b',newData,6,8,3);