console.log(distanceData);

let wPlot = $('#viz1').width();
let hPlot = $('#viz1').width();
scatterplot('#viz1',distanceData,'Q12-neg','Q16-few',['Q16. In general, do you think the work that scientists do benefits','most, some, or very few people in this country? Percent that answered Few.'],['Q12 In general, would you say that you trust science a lot, some,','not much, or not at all? Percent who said not much, or not at all.'],'WBI',wPlot,hPlot,0,50,0,50);

newData = filterForIDs(byIncomeGroup(distanceData,1),[66,125]);
generateDistance('#viz2afew',newData,2,1,1,false,true);
newData = filterForIDs(byIncomeGroup(distanceData,2),[10,158]);
generateDistance('#viz2bfew',newData,2,1,1,false,true);
newData = filterForIDs(byIncomeGroup(distanceData,3),[22,4]);
generateDistance('#viz2cfew',newData,2,1,1,false,true);
newData = filterForIDs(byIncomeGroup(distanceData,4),[89,55]);
generateDistance('#viz2dfew',newData,2,1,1,false,true);


newData = sortByAlpha(byIncomeGroup(distanceData,1));
generateDistance('#viz2a',newData,9,5,1,false,false);
newData = sortByAlpha(byIncomeGroup(distanceData,2));
generateDistance('#viz2b',newData,9,5,1,false,false);
newData = sortByAlpha(byIncomeGroup(distanceData,3));
generateDistance('#viz2c',newData,9,5,1,false,false);
newData = sortByAlpha(byIncomeGroup(distanceData,4));
generateDistance('#viz2d',newData,9,5,1,false,false);

$('#viz2all').hide();

$('#viz2switch').on('click',function(d){
	$('#viz2all').toggle();
	$('#viz2few').toggle();
});

newData = sortByAlpha(byIncomeGroup(distanceData,1));
generateDistance('#viz3a',newData,6,8,2,false,true);
newData = sortByAlpha(byIncomeGroup(distanceData,4));
generateDistance('#viz3b',newData,6,8,2,false,true);

newData = sortByAlpha(byIncomeGroup(distanceData,1));
generateDistance('#viz4a',newData,6,8,3,false,true);
newData = sortByAlpha(byIncomeGroup(distanceData,4));
generateDistance('#viz4b',newData,6,8,3,false,true);

malawi = distanceData.filter(function(d){
	if(d.country_id==44){
		return true;
	} else {
		return false;
	}
});

generateDistance('#viz5',malawi,1,1,2,true);

leftData = filterForIDs(distanceData,[36,44,45]);
rightData = filterForIDs(distanceData,[11,12,31,50,51,60]);

generateDistance('#viz6a',leftData,1,6,4,false,true);
generateDistance('#viz6b',rightData,1,6,4,false,true);

southAfrica =  filterForIDs(distanceData,[45]);
generateDistance('#viz7',southAfrica,1,1,4,true,false);

kenya =  filterForIDs(distanceData,[36]);
generateDistance('#viz8',kenya,1,1,4,true,false);

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
/*
sticky1 = false
$(window).scroll(function(){
    if(!sticky1){
        let topWin = $(window).scrollTop();
        let topElement = $('#sticky1end').offset().top;
        let height = $(window).height();
        if(topWin>topElement-height){
        	$('#bangladesh2').fadeOut();
        	sticky1=true;
        }
    }
    if(sticky1){
        let topWin = $(window).scrollTop();
        let topElement = $('#sticky1end').offset().top;
        let height = $(window).height();
        if(topWin<topElement-height){
        	$('#bangladesh2').fadeIn();
        	sticky1=false;
        }
    }
});

sticky2 = false
$(window).scroll(function(){
    if(!sticky2){
        let topWin = $(window).scrollTop();
        let topElement = $('#sticky2end').offset().top;
        let height = $(window).height();
        if(topWin>topElement-height){
        	$('#benefits3').fadeOut();
        	sticky2=true;
        }
    }
    if(sticky2){
        let topWin = $(window).scrollTop();
        let topElement = $('#sticky2end').offset().top;
        let height = $(window).height();
        if(topWin<topElement-height){
        	$('#benefits3').fadeIn();
        	sticky2=false;
        }
    }
});


sticky3 = false
$(window).scroll(function(){
    if(!sticky3){
        let topWin = $(window).scrollTop();
        let topElement = $('#sticky3end').offset().top;
        let height = $(window).height();
        if(topWin>topElement-height){
        	$('#benefits4').fadeOut();
        	sticky3=true;
        }
    }
    if(sticky3){
        let topWin = $(window).scrollTop();
        let topElement = $('#sticky3end').offset().top;
        let height = $(window).height();
        if(topWin<topElement-height){
        	$('#benefits4').fadeIn();
        	sticky3=false;
        }
    }
});

sticky4 = false
$(window).scroll(function(){
    if(!sticky4){
        let topWin = $(window).scrollTop();
        let topElement = $('#sticky4end').offset().top;
        let height = $(window).height();
        if(topWin>topElement-height){
        	$('#benefits5').fadeOut();
        	sticky4=true;
        }
    }
    if(sticky4){
        let topWin = $(window).scrollTop();
        let topElement = $('#sticky4end').offset().top;
        let height = $(window).height();
        if(topWin<topElement-height){
        	$('#benefits5').fadeIn();
        	sticky4=false;
        }
    }
});

sticky5 = false
$(window).scroll(function(){
    if(!sticky5){
        let topWin = $(window).scrollTop();
        let topElement = $('#sticky5end').offset().top;
        let height = $(window).height();
        if(topWin>topElement-height){
        	$('#benefits4').fadeOut();
        	$('#benefits5').fadeOut();
        	$('#benefits6').fadeOut();
        	sticky5=true;
        }
    }
    if(sticky5){
        let topWin = $(window).scrollTop();
        let topElement = $('#sticky5end').offset().top;
        let height = $(window).height();
        if(topWin<topElement-height){
        	$('#benefits4').fadeIn();
        	$('#benefits5').fadeIn();
        	$('#benefits6').fadeIn();
        	
        	sticky5=false;
        }
    }
});
*/