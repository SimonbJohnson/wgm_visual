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

/*function generateVisual(data) {

    let width = 1200;
    let scale = width/16;

    let svg = d3.select('#viz')
            .append("svg")
            .attr("width", 380)
            .attr("height", width/16*9);

    let layerSize = [1,5,9,13,17]

    data.forEach(function(d){
        let circleWeight1 = d['Q16-most'];
        let circleWeight2 = d['Q16-few'];
        let circleWeight3 = d['Q17'];
        d.circle1Y = Math.min(d['Q16-most']/d['Q16-few']*20,40)+10;
        d.circle2Y = Math.min(d['Q16-few']/d['Q16-most']*20,40)+10;
        d.circle3X = d['Q17'];
    });


    svg.selectAll("text")
      .data(data)
    .enter().append("text")
      .attr('class','country_label')
      .attr("x",function(d,i) { return Math.floor(i / 9) * scale + scale*0.5 })
      .attr("y",function(d,i) { return (i % 9)*scale + scale; })
      .style("text-anchor", "middle")
      .text(function(d){
        return d['country name'];
      });

    svg.selectAll("line2")
      .data(data)
    .enter().append("line")
      .attr("class", "line")
      .attr("x1", function(d,i) { return Math.floor(i / 9) * scale + scale*0.5 })
      .attr("x2", function(d,i) { return Math.floor(i / 9) * scale + scale*0.5 })
      .attr("y1", function(d,i) {
        return (i % 9)*scale + scale * 0.25
      })
      .attr("y2", function(d,i) {
        return (i % 9)*scale + scale * 0.75
      })
      .attr("stroke","#ffffff00")
      .attr("stroke-width",scale*0.1)
      .attr("stroke-linecap","round");

    svg.selectAll("line3")
      .data(data)
    .enter().append("line")
      .attr("class", "line")
      .attr("x1", function(d,i) { return Math.floor(i / 9) * scale + scale*0.5 })
      .attr("x2", function(d,i) { return Math.floor(i / 9) * scale + scale*0.5 })
      .attr("y1", function(d,i) {
        return (i % 9)*scale + scale * 0.2+(1-d['Q17']/100.0)*0.6*scale
      })
      .attr("y2", function(d,i) {
        return (i % 9)*scale + scale * 0.8
      })
      .attr("stroke",function(d){
        return getHex(d['Q17']);
      })
      .attr("stroke-width",scale*0.1)
      .attr("stroke-linecap","round");

    svg.selectAll("line4")
      .data(data)
    .enter().append("line")
      .attr("class", "line")
      .attr("x1", function(d,i) { return Math.floor(i / 9) * scale + 0.25*scale })
      .attr("y1", function(d,i) { return (i % 9)*scale+d.circle1Y; })
      .attr("x2", function(d,i) { return Math.floor(i / 9) * scale + 0.75*scale })
      .attr("y2", function(d,i) { return (i % 9)*scale+d.circle2Y; })
      .attr("stroke", "#3F1A13")
      .attr("stroke-width", 2*scale/100);

  svg.selectAll(".whitecircle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx", function(d,i) { return Math.floor(i / 9) * scale + 0.25*scale })
      .attr("cy", function(d,i) { return (i % 9)*scale+d.circle1Y; })
      .attr("r", function(d){ return 100*scale/750})
      .attr("fill","#FFFFFF00");

    svg.selectAll(".whitecircle2")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx", function(d,i) { return Math.floor(i / 9) * scale + 0.75*scale })
      .attr("cy", function(d,i) { return (i % 9)*scale+d.circle2Y; })
      .attr("r", function(d){ return 100*scale/750})
      .attr("fill","#FFFFFF00");

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx", function(d,i) { return Math.floor(i / 9) * scale + 0.25*scale })
      .attr("cy", function(d,i) { return (i % 9)*scale+d.circle1Y; })
      .attr("r", function(d){ return Math.sqrt(d['Q16-most'])*scale/75})
      .attr("fill","#4DAFCE");

    svg.selectAll(".circle2")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx", function(d,i) { return Math.floor(i / 9) * scale + 0.75*scale })
      .attr("cy", function(d,i) { return (i % 9)*scale+d.circle2Y; })
      .attr("r", function(d){ return Math.sqrt(d['Q16-few']*scale/75)})
      .attr("fill","#F8B133");
}

function byIncomeGroup(data,ig){
    let newData = data.filter(function(d){
        if(d['WBI']==ig){
            return true;
        } else {
            return false;
        }
    });
    newData = newData.sort(function(a,b){
      return a['Q16-most'] - b['Q16-most']
    });
    //$('#viz').append('<p>Income Group '+ig+'</p>')
    generateVisual(newData);
}

function getHex(value){
  let upper = [63, 26, 19];
  let lower = [185, 178, 164];
  value = Math.max(value - 50,0);
  let r = Math.floor(upper[0]*value/50 + lower[0]*(1-value/50));
  let g = Math.floor(upper[1]*value/50 + lower[1]*(1-value/50));
  let b = Math.floor(upper[2]*value/50 + lower[2]*(1-value/50));
  return "rgb("+r+","+g+","+b+")";
}*/