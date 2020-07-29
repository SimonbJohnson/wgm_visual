function generateAttraction(id,data,rows,columns) {
    console.log('attraction')
    let width = $(id).width();
    let scale = width/columns;

    let svg = d3.select(id)
            .append("svg")
            .attr("width", width)
            .attr("height", columns*scale);

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx", function(d,i) { return Math.floor(i/rows)*scale +scale*0.2; })
      .attr("cy", function(d,i) { return (i % rows) * scale + scale*0.4 })
      .attr("r", function(d){ return Math.sqrt(d['q13 - A lot, Some'])/75*scale})
      .attr("fill","#1D70B7");


    svg.selectAll(".circle2")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx", function(d,i) { return Math.floor(i/rows)*scale +scale*0.5; })
      .attr("cy", function(d,i) { return (i % rows) * scale + scale*0.4 })
      .attr("r", function(d){ return Math.sqrt(d['Increase'])/75*scale})
      .attr("fill","#00A0AD");

    /*svg.selectAll(".circle2")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx", function(d,i) { return Math.floor(i/9)*scale +scale*0.5; })
      .attr("cy", function(d,i) { return (i % 9) * scale + scale*0.5 })
      .attr("r", function(d){ return Math.sqrt(d['Q19 - Decrease'])/75*scale})
      .attr("fill","red");*/

    svg.selectAll(".circle3")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx", function(d,i) { return Math.floor(i/rows)*scale +scale*0.8; })
      .attr("cy", function(d,i) { return (i % rows) * scale + scale*0.4 })
      .attr("r", function(d){ return Math.sqrt(d['Yes'])/75*scale})
      .attr("fill","#E69534");

    svg.selectAll(".linesgrey1")
          .data(data)
        .enter().append("line")
          .attr("class", "line")
          .attr("x1",function(d,i) { return Math.floor(i / rows) * scale + scale*0.2 })
          .attr("y1",function(d,i) { return (i % rows)*scale + scale*0.4 + d['q13 - A lot, Some']/500*scale})
          .attr("x2",function(d,i) { return Math.floor(i / rows) * scale + scale*0.5 })
          .attr("y2",function(d,i) { return (i % rows)*scale + scale*0.4 + d['Increase']/500*scale; })
          .attr("stroke","#3F1A13")
          .attr("stroke-width",2*scale/100);

    svg.selectAll(".linesgrey2")
          .data(data)
        .enter().append("line")
          .attr("class", "line")
          .attr("x1",function(d,i) { return Math.floor(i / rows) * scale + scale*0.2 })
          .attr("y1",function(d,i) { return (i % rows)*scale + scale*0.4 - d['q13 - A lot, Some']/500*scale})
          .attr("x2",function(d,i) { return Math.floor(i / rows) * scale + scale*0.5 })
          .attr("y2",function(d,i) { return (i % rows)*scale + scale*0.4 - d['Increase']/500*scale; })
          .attr("stroke","#3F1A13")
          .attr("stroke-width",2*scale/100);

    svg.selectAll(".linesgrey3")
          .data(data)
        .enter().append("line")
          .attr("class", "line")
          .attr("x1",function(d,i) { return Math.floor(i / rows) * scale + scale*0.8 })
          .attr("y1",function(d,i) { return (i % rows)*scale + scale*0.4 + d['Yes']/500*scale})
          .attr("x2",function(d,i) { return Math.floor(i / rows) * scale + scale*0.5 })
          .attr("y2",function(d,i) { return (i % rows)*scale + scale*0.4 + d['Increase']/500*scale; })
          .attr("stroke","#3F1A13")
          .attr("stroke-width",2*scale/100);

    svg.selectAll(".linesgrey4")
          .data(data)
        .enter().append("line")
          .attr("class", "line")
          .attr("x1",function(d,i) { return Math.floor(i / rows) * scale + scale*0.8 })
          .attr("y1",function(d,i) { return (i % rows)*scale + scale*0.4 - d['Yes']/500*scale})
          .attr("x2",function(d,i) { return Math.floor(i / rows) * scale + scale*0.5 })
          .attr("y2",function(d,i) { return (i % rows)*scale + scale*0.4 - d['Increase']/500*scale; })
          .attr("stroke","#3F1A13")
          .attr("stroke-width",2*scale/100);
/*


    svg.selectAll(".rectA")
      .data(data)
    .enter().append("rect")
      .attr("class", "rect")
      .attr("x", function(d,i) { return (i % 10) * 140 })
      .attr("y", function(d,i) { return Math.floor(i/10)*140+5; })
      .attr("width", function(d){ return 15})
      .attr("height", function(d){ return d['agriculture']})
      .attr("fill","green");

    svg.selectAll(".rectI")
      .data(data)
    .enter().append("rect")
      .attr("class", "rect")
      .attr("x", function(d,i) { return (i % 10) * 140 })
      .attr("y", function(d,i) { return Math.floor(i/10)*140+5 + Math.round(d['agriculture']); })
      .attr("width", function(d){ return 15})
      .attr("height", function(d){ return d['industry']})
      .attr("fill","orange");

    svg.selectAll(".rectS")
      .data(data)
    .enter().append("rect")
      .attr("class", "rect")
      .attr("x", function(d,i) { 
        return (i % 10) * 140
      })
      .attr("y", function(d,i) { return Math.floor(i/10)*140+5+ Math.round(d['agriculture']*1+d['industry']*1); })
      .attr("width", function(d){ return 15})
      .attr("height", function(d){ return d['services']})
      .attr("fill","steelblue");
*/
    svg.selectAll("text")
      .data(data)
    .enter().append("text")
      .attr('class','country_label')
      .attr("x",function(d,i) { return Math.floor(i / rows) * scale + scale*0.5 })
      .attr("y",function(d,i) { return (i % rows)*scale + scale*0.9; })
      .style("text-anchor", "middle")
      .text(function(d){
        return d['country_name'];
      });
}