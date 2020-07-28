console.log(data);

let newData = sortByAlpha(byIncomeGroup(data,1),'country name');
generateOrientationBefore('#orientationviz1L',newData,3);
newData = sortByAlpha(byIncomeGroup(data,2),'country name');
generateOrientationBefore('#orientationviz1LM',newData,4);
newData = sortByAlpha(byIncomeGroup(data,3),'country name');
generateOrientationBefore('#orientationviz1UM',newData,5);
newData = sortByAlpha(byIncomeGroup(data,4),'country name');
generateOrientationBefore('#orientationviz1H',newData,5);

newData = sortByAlpha(byIncomeGroup(data,1),'country name');
generateOrientationBefore('#orientationviz2L',newData,3);
newData = sortByAlpha(byIncomeGroup(data,2),'country name');
generateOrientationBefore('#orientationviz2LM',newData,4);
newData = sortByAlpha(byIncomeGroup(data,3),'country name');
generateOrientationBefore('#orientationviz2UM',newData,5);
newData = sortByAlpha(byIncomeGroup(data,4),'country name');
generateOrientationBefore('#orientationviz2H',newData,5);

function generateOrientationBefore(id,data,columns){

    let width = $(id).width();
    let scale = width/5;
    let rows = 9;

    let svg = d3.select(id)
            .append("svg")
            .attr("width", scale*columns)
            .attr("height", scale*9);

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx",function(d,i) { return Math.floor(i / rows) * scale + scale*0.2 })
      .attr("cy",function(d,i) { return (i % rows)*scale + scale*0.5; })
      .attr("r", function(d){ return scale/75*Math.sqrt(d['A-D1-Yes-Q12-low']*100) })
      .attr("fill",'#C66257');

    let circles = svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx",function(d,i) { return Math.floor(i / rows) * scale + scale*0.5 })
      .attr("cy",function(d,i) { return (i % rows)*scale + scale*0.5; })
      .attr("r", function(d){ return scale/75*Math.sqrt(d['B-Q30-religion-Q12 high']*100+d['C-D1-rest']*100) })
      .attr("fill",'#E95A0C');

    repeat();

    function repeat() {
      circles
        .transition()
        .duration(2000)
        .attr("fill",'#fabe9e')
        .transition()
        .duration(2000)
        .attr("fill",'#E95A0C')
        .on("end", repeat);
    };

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx",function(d,i) { return Math.floor(i / rows) * scale + scale*0.8 })
      .attr("cy",function(d,i) { return (i % rows)*scale + scale*0.5; })
      .attr("r", function(d){ return scale/75*Math.sqrt(d['D-D1-No-Q12-High']*100) })
      .attr("fill",'#193C78');

    svg.selectAll("text")
      .data(data)
    .enter().append("text")
      .attr('class','countrylabel')
      .attr("x",function(d,i) { return Math.floor(i / rows) * scale + scale*0.5 })
      .attr("y",function(d,i) { return (i % rows)*scale + scale; })
      .style("text-anchor", "middle")
      .text(function(d){
        return d['country name'];
      });
}

function generateOrientationAfter(id,data){

    let width = $('#orientation1viz');
    let scale = width/16;

    let svg = d3.select('#viz')
            .append("svg")
            .attr("width", 380)
            .attr("height", width/16*9);

    svg.selectAll(".linesgrey1")
          .data(data)
        .enter().append("line")
          .attr("class", "line")
          .attr("x1",function(d,i) { return Math.floor(i / 9) * scale + scale*0.2 })
          .attr("y1",function(d,i) { return (i % 9)*scale + scale*0.5; })
          .attr("x2",function(d,i) { return Math.floor(i / 9) * scale + scale*0.4 })
          .attr("y2",function(d,i) { return (i % 9)*scale + scale*0.5 + d['B-Q30-religion-Q12 high']*scale; })
          .attr("stroke","#3F1A13")
          .attr("stroke-width",1.5);

    svg.selectAll(".linesgrey2")
          .data(data)
        .enter().append("line")
          .attr("class", "line")
          .attr("x1",function(d,i) { return Math.floor(i / 9) * scale + scale*0.6 })
          .attr("y1",function(d,i) { return (i % 9)*scale + scale*0.5; })
          .attr("x2",function(d,i) { return Math.floor(i / 9) * scale + scale*0.4 })
          .attr("y2",function(d,i) { return (i % 9)*scale + scale*0.5 + d['B-Q30-religion-Q12 high']*scale; })
          .attr("stroke","#3F1A13")
          .attr("stroke-width",1.5);

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx",function(d,i) { return Math.floor(i / 9) * scale + scale*0.2 })
      .attr("cy",function(d,i) { return (i % 9)*scale + scale*0.5; })
      .attr("r", function(d){ return scale/75*Math.sqrt(d['A-D1-Yes-Q12-low']*100) })
      .attr("fill",'#C66257');

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx",function(d,i) { return Math.floor(i / 9) * scale + scale*0.4 })
      .attr("cy",function(d,i) { return (i % 9)*scale + scale*0.5 + d['B-Q30-religion-Q12 high']*scale; })
      .attr("r", function(d){ return scale/75*Math.sqrt(d['B-Q30-religion-Q12 high']*100) })
      .attr("fill",'#E95A0C');

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx",function(d,i) { return Math.floor(i / 9) * scale + scale*0.6 })
      .attr("cy",function(d,i) { return (i % 9)*scale + scale*0.5; })
      .attr("r", function(d){ return scale/75*Math.sqrt(d['C-D1-rest']*100) })
      .attr("fill",'#009EE2');

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx",function(d,i) { return Math.floor(i / 9) * scale + scale*0.8 })
      .attr("cy",function(d,i) { return (i % 9)*scale + scale*0.5; })
      .attr("r", function(d){ return scale/75*Math.sqrt(d['D-D1-No-Q12-High']*100) })
      .attr("fill",'#193C78');

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
}

