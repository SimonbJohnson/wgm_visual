console.log(data);

byIncomeGroup(data,1);
byIncomeGroup(data,2);
byIncomeGroup(data,3);
byIncomeGroup(data,4);

function generateVisual(data) {

    let svg = d3.select('#viz')
            .append("svg")
            .attr("width", 1200)
            .attr("height", 600);

    let layerSize = [1,5,9,13,17]

    data.forEach(function(d){
        let circleWeight1 = d['Q16-most'];
        let circleWeight2 = d['Q16-few'];
        let circleWeight3 = d['Q17'];
        d.circle1Y = Math.min(d['Q16-most']/d['Q16-few']*20,40);
        d.circle2Y = Math.min(d['Q16-few']/d['Q16-most']*20,40);
        d.circle3X = d['Q17'];
    });

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx", function(d,i) { return (i % 10) * 120 + 20 })
      .attr("cy", function(d,i) { return Math.floor(i/10)*120+d.circle1Y; })
      .attr("r", function(d){ return d['Q16-most']/4})
      .attr("fill","steelblue");

    svg.selectAll(".circle2")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx", function(d,i) { return (i % 10) * 120 + 80 })
      .attr("cy", function(d,i) { return Math.floor(i/10)*120+d.circle2Y; })
      .attr("r", function(d){ return d['Q16-few']/4})
      .attr("fill","steelblue");

    svg.selectAll("text")
      .data(data)
    .enter().append("text")
      .attr("x",function(d,i) { return (i % 10) * 120 })
      .attr("y",function(d,i) { return Math.floor(i/10)*120+105; })
      .text(function(d){
        return d['country name'];
      });

    svg.selectAll(".line")
      .data(data)
    .enter().append("line")
      .attr("class", "line")
      .attr("x1", function(d,i) { return (i % 10) * 120 + 20 })
      .attr("y1", function(d,i) { return Math.floor(i/10)*120+d.circle1Y+d['Q16-most']/4; })
      .attr("x2", function(d,i) { return (i % 10) * 120 + 80 })
      .attr("y2", function(d,i) { return Math.floor(i/10)*120+d.circle2Y+d['Q16-few']/4; })
      .attr("stroke", "black");

    svg.selectAll(".circle3")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx", function(d,i) { 
        let px = 60-60*d.circle3X/100;
        return (i % 10) * 120 + 20 + px })
      .attr("cy", function(d,i) {
        let px = d.circle3X/100;
        let py1 = d.circle1Y+d['Q16-most']/4
        let py2 = d.circle2Y+d['Q16-few']/4
        let py = py1*px+py2*(1-px)+d['Q17']/4;
        return Math.floor(i/10)*120+py; })
      .attr("r", function(d){ return d['Q17']/4})
      .attr("fill","steelblue");
}

function byIncomeGroup(data,ig){
    let newData = data.filter(function(d){
        if(d['WBI']==ig){
            return true;
        } else {
            return false;
        }
    });
    $('#viz').append('<p>Income Group '+ig+'</p>')
    generateVisual(newData);
}