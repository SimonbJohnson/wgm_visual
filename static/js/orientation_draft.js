console.log(orientationData);

let newData = example3(sortByAlpha(byIncomeGroup(orientationData,1),'country name'));
generateOrientationBefore('#orientationviz1L',newData,2,3,1,true,false,false);
newData = example3(sortByAlpha(byIncomeGroup(orientationData,2),'country name'));
generateOrientationBefore('#orientationviz1LM',newData,2,3,1,true,false,false);
newData = example3(sortByAlpha(byIncomeGroup(orientationData,3),'country name'));
generateOrientationBefore('#orientationviz1UM',newData,2,3,1,true,false,false);
newData = example3(sortByAlpha(byIncomeGroup(orientationData,4),'country name'));
generateOrientationBefore('#orientationviz1H',newData,2,3,1,true,false,false);

initTrans1A = false;
$(window).scroll(function(){
  if(initTrans1A==false){
      let topWin = $(window).scrollTop();
      let topElement = $('#state1a').offset().top;
      if(topWin>topElement-500){
        newData = sortByAlpha(byIncomeGroup(orientationData,1),'country name');
        $('#orientationviz1L').html('');
        generateOrientationBefore('#orientationviz1L',newData,5,9,1,true,false,false);
        newData = sortByAlpha(byIncomeGroup(orientationData,2),'country name');
        $('#orientationviz1LM').html('');
        generateOrientationBefore('#orientationviz1LM',newData,5,9,1,true,false,false);
        newData = sortByAlpha(byIncomeGroup(orientationData,3),'country name');
        $('#orientationviz1UM').html('');
        generateOrientationBefore('#orientationviz1UM',newData,5,9,1,true,false,false);
        newData = sortByAlpha(byIncomeGroup(orientationData,4),'country name');
        $('#orientationviz1H').html('');
        generateOrientationBefore('#orientationviz1H',newData,5,9,1,true,false,false);
        initTrans1A = true;
      }
  }
});

initTrans2 = false;
$(window).scroll(function(){
  if(initTrans2==false){
      let topWin = $(window).scrollTop();
      let topElement = $('#state2').offset().top;
      if(topWin>topElement-500){
        $('#state1').addClass('disappear');
        newData = example3(sortByAlpha(byIncomeGroup(orientationData,1),'country name'));
        $('#orientationviz1L').html('');
        generateOrientationBefore('#orientationviz1L',newData,2,3,2,true,false,false);
        newData = example3(sortByAlpha(byIncomeGroup(orientationData,2),'country name'));
        $('#orientationviz1LM').html('');
        generateOrientationBefore('#orientationviz1LM',newData,2,3,2,true,false,false);
        newData = example3(sortByAlpha(byIncomeGroup(orientationData,3),'country name'));
        $('#orientationviz1UM').html('');
        generateOrientationBefore('#orientationviz1UM',newData,2,3,2,true,false,false);
        newData = example3(sortByAlpha(byIncomeGroup(orientationData,4),'country name'));
        $('#orientationviz1H').html('');
        generateOrientationBefore('#orientationviz1H',newData,2,3,2,true,false);
        initTrans2 = true;
      }
  }
});

initTrans3 = false;
$(window).scroll(function(){
  if(initTrans3==false){
      let topWin = $(window).scrollTop();
      let topElement = $('#state3').offset().top;
      if(topWin>topElement-500){
        $('#state2').addClass('disappear');
        /*newData = sortByAlpha(byIncomeGroup(orientationData,1),'country name');
        $('#orientationviz1L').html('<p class="keylabel"><i class="key lowincome"></i>Low Income</p>');
        generateOrientationBefore('#orientationviz1L',newData,5,9,3,false,true);
        newData = sortByAlpha(byIncomeGroup(orientationData,2),'country name');
        $('#orientationviz1LM').html('<p class="keylabel"><i class="key lowermiddleincome"></i>Lower Middle Income</p>');
        generateOrientationBefore('#orientationviz1LM',newData,5,9,3,false,true);
        newData = sortByAlpha(byIncomeGroup(orientationData,3),'country name');
        $('#orientationviz1UM').html('<p class="keylabel"><i class="key uppermiddleincome"></i>Upper Middle Income</p>');
        generateOrientationBefore('#orientationviz1UM',newData,5,9,3,false,true);
        newData = sortByAlpha(byIncomeGroup(orientationData,4),'country name');
        $('#orientationviz1H').html('<p class="keylabel"><i class="key highincome"></i>High Income</p>');
        generateOrientationBefore('#orientationviz1H',newData,5,9,3,false,true);*/
        newData = example3(sortByAlpha(byIncomeGroup(orientationData,1),'country name'));
        $('#orientationviz1L').html('');
        generateOrientationBefore('#orientationviz1L',newData,2,3,3,true,false);
        newData = example3(sortByAlpha(byIncomeGroup(orientationData,2),'country name'));
        $('#orientationviz1LM').html('');
        generateOrientationBefore('#orientationviz1LM',newData,2,3,3,true,false);
        newData = example3(sortByAlpha(byIncomeGroup(orientationData,3),'country name'));
        $('#orientationviz1UM').html('');
        generateOrientationBefore('#orientationviz1UM',newData,2,3,3,true,false);
        newData = example3(sortByAlpha(byIncomeGroup(orientationData,4),'country name'));
        $('#orientationviz1H').html('');
        generateOrientationBefore('#orientationviz1H',newData,2,3,3,true,false);
        initTrans3=true;
      }
    
  }
});

initTrans4 = false;
$(window).scroll(function(){
  if(initTrans4==false){
      let topWin = $(window).scrollTop();
      let topElement = $('#state4').offset().top;
      if(topWin>topElement-500){
        $('#state3').addClass('disappear');
        /*newData = sortByAlpha(byIncomeGroup(orientationData,1),'country name');
        $('#orientationviz1L').html('<p class="keylabel"><i class="key lowincome"></i>Low Income</p>');
        generateOrientationAfter('#orientationviz1L',newData,5,9,3,false,true);
        newData = sortByAlpha(byIncomeGroup(orientationData,2),'country name');
        $('#orientationviz1LM').html('<p class="keylabel"><i class="key lowermiddleincome"></i>Lower Middle Income</p>');
        generateOrientationAfter('#orientationviz1LM',newData,5,9,3,false,true);
        newData = sortByAlpha(byIncomeGroup(orientationData,3),'country name');
        $('#orientationviz1UM').html('<p class="keylabel"><i class="key uppermiddleincome"></i>Upper Middle Income</p>');
        generateOrientationAfter('#orientationviz1UM',newData,5,9,3,false,true);
        newData = sortByAlpha(byIncomeGroup(orientationData,4),'country name');
        $('#orientationviz1H').html('<p class="keylabel"><i class="key highincome"></i>High Income</p>');
        generateOrientationAfter('#orientationviz1H',newData,5,9,3,false,true);*/
        newData = sortByAlpha(byIncomeGroup(orientationData,1),'country name');
        $('#orientationviz1L').html('');
        generateOrientationAfter('#orientationviz1L',newData,2,3,3,false,true);
        newData = sortByAlpha(byIncomeGroup(orientationData,2),'country name');
        $('#orientationviz1LM').html('');
        generateOrientationAfter('#orientationviz1LM',newData,2,3,3,false,true);
        newData = sortByAlpha(byIncomeGroup(orientationData,3),'country name');
        $('#orientationviz1UM').html('');
        generateOrientationAfter('#orientationviz1UM',newData,2,3,3,false,true);
        newData = sortByAlpha(byIncomeGroup(orientationData,4),'country name');
        $('#orientationviz1H').html('');
        generateOrientationAfter('#orientationviz1H',newData,2,3,3,false,true);
        initTrans4=true;
      }
  }
});

initTrans5 = false;
$(window).scroll(function(){
  if(initTrans5==false){
      let topWin = $(window).scrollTop();
      let topElement = $('#state5').offset().top;
      if(topWin>topElement-500){
        $('#state4').fadeOut();
        $('#state0').addClass('disappear');
      }
  }
});

let india = orientationData.filter(function(d){
  if(d['country name']=='India'){
    return true;
  } else {
    return false;
  }
});
generateOrientationAfter('#instance1',india,1,1,0,true,false);

let ghana = orientationData.filter(function(d){
  if(d['country name']=='Ghana'){
    return true;
  } else {
    return false;
  }
});

generateOrientationAfter('#instance2',ghana,1,1,0,true,false);

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

/*newData = sortByAlpha(byIncomeGroup(orientationData,1),'country name');
generateOrientationAfter('#orientationviz4L',newData,5,9,3,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,2),'country name');
generateOrientationAfter('#orientationviz4LM',newData,5,9,3,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,3),'country name');
generateOrientationAfter('#orientationviz4UM',newData,5,9,3,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,4),'country name');
generateOrientationAfter('#orientationviz4H',newData,5,9,3,false,true);*/

generateOrientationAfter('#orientationviz6',religionData,3,2,1,true,true);

let wPlot = $('#orientationviz5').width();
let hPlot = $('#orientationviz5').width();
scatterplot('#orientationviz5',orientationData,'Q22','Q30-Religion',['Q22 Percent who said not much, or not at all'],['Q30 Percent who chose religion out of the whole population'],'WBI',wPlot,hPlot,0,50,0,50);

function example3(list){
  return list.splice(0,3)
}
