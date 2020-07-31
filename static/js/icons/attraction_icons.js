function generateAttraction(id,data,rows,columns,state) {
    console.log('attraction')
    let width = $(id).width();
    let scale = width/columns;

    let svg = d3.select(id)
            .append("svg")
            .attr("width", width)
            .attr("height", rows*scale);
    if(state>0){
      /*svg.selectAll(".circle1a")
        .data(data)
      .enter().append("circle")
        .attr("class", "circle")
        .attr("cx", function(d,i) { return Math.floor(i/rows)*scale +scale*0.4; })
        .attr("cy", function(d,i) { return (i % rows) * scale + scale*0.5 })
        .attr("r", function(d){ return Math.sqrt(100)/100*scale})
        .attr("fill","orange")
        .style("stroke","orange")
        .attr("stroke-width","1px");*/

      svg.selectAll(".linesgrey2")
        .data(data)
      .enter().append("line")
        .attr("class", "line")
        .attr("x1",function(d,i) { return Math.floor(i / rows) * scale + scale*0.4 })
        .attr("y1",function(d,i) { return (i % rows) * scale + scale*0.8-d['q13 - A lot, Some']*scale/200})
        .attr("x2",function(d,i) { return Math.floor(i / rows) * scale + scale*0.4 })
        .attr("y2",function(d,i) { return (i % rows)*scale + scale*0.7; })
        .attr("stroke","#3F1A13")
        .attr("stroke-width",1.5);
    }

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx", function(d,i) { return Math.floor(i/rows)*scale +scale*0.4; })
      //.attr("cy", function(d,i) { return (i % 9) * scale + scale*0.5 })
      .attr("cy", function(d,i) { return (i % rows) * scale + scale*0.8-d['q13 - A lot, Some']*scale/200 })
      .attr("r", function(d){ return Math.sqrt(d['q13 - A lot, Some'])/100*scale})
      .attr("fill","#1D70B7");
  
    if(state>1){

      /*if(state==2){
        svg.selectAll(".circle2")
          .data(data)
        .enter().append("circle")
          .attr("class", "circle")
          .attr("cx", function(d,i) { return Math.floor(i/rows)*scale +scale*0.6; })
          .attr("cy", function(d,i) { return (i % rows) * scale + scale*0.5 })
          .attr("r", function(d){ return Math.sqrt(100)/100*scale})
          .attr("fill","orange")
          .style("stroke","orange")
          .attr("stroke-width","1px");      
      }*/
      if(state>1){
        svg.selectAll(".linesgrey2")
          .data(data)
        .enter().append("line")
          .attr("class", "line")
          .attr("x1",function(d,i) { return Math.floor(i / rows) * scale + scale*0.4 })
          .attr("y1",function(d,i) { return (i % rows)*scale + scale*0.6 - d['q13 - A lot, Some']/200*scale})
          .attr("x2",function(d,i) { return Math.floor(i / rows) * scale + scale*0.6 })
          .attr("y2",function(d,i) { return (i % rows)*scale + scale*0.6 - d['Increase']/200*scale; })
          .attr("stroke","#3F1A13")
          .attr("stroke-width",1.5);
        }


      if(state!=3){
        svg.selectAll(".circle2")
          .data(data)
        .enter().append("circle")
          .attr("class", "circle")
          .attr("cx", function(d,i) { return Math.floor(i/rows)*scale +scale*0.6; })
          //.attr("cy", function(d,i) { return (i % rows) * scale + scale*0.5 })
          .attr("cy", function(d,i) { return (i % rows) * scale + scale*0.8-d['Increase']*scale/200 })
          .attr("r", function(d){ return Math.sqrt(d['Increase'])/100*scale})
          .attr("fill","#00A0AD");
        }
    
    if(state>2){

      if(state==3 || state==4){
        svg.selectAll(".circle2")
          .data(data)
        .enter().append("circle")
          .attr("class", "circle")
          .attr("cx", function(d,i) { return Math.floor(i/rows)*scale +scale*0.6; })
          .attr("cy", function(d,i) { return (i % rows) * scale + scale*0.8-d['Q19 - Decrease']*scale/200 })
          .attr("r", function(d){ return Math.sqrt(d['Q19 - Decrease'])/100*scale})
          .attr("fill","#BD1622");

      }

      if(state>4){
        
          /*svg.selectAll(".circleA")
            .data(data)
          .enter().append("circle")
            .attr("class", "circle")
            .attr("cx", function(d,i) { return Math.floor(i / rows) * scale + scale*0.15 })
            .attr("cy", function(d,i) { return (i % 9)*scale + scale*0.6 })
            .attr("r", function(d){ return Math.sqrt(d['agriculture'])/100*scale})
            .attr("fill","#B0CD8F");

          svg.selectAll(".circleI")
            .data(data)
          .enter().append("circle")
            .attr("class", "circle")
            .attr("cx", function(d,i) { return Math.floor(i / rows) * scale + scale*0.15 })
            .attr("cy", function(d,i) { return (i % 9)*scale + scale*0.5 })
            .attr("r", function(d){ return Math.sqrt(d['industry'])/100*scale})
            .attr("fill","#575856");

          svg.selectAll(".circleS")
            .data(data)
          .enter().append("circle")
            .attr("class", "circle")
            .attr("cx", function(d,i) { return Math.floor(i / rows) * scale + scale*0.15 })
            .attr("cy", function(d,i) { return (i % 9)*scale + scale*0.3 })
            .attr("r", function(d){ return Math.sqrt(d['services'])/100*scale})
            .attr("fill","#b7dade");*/
        if(state>5){

          svg.selectAll(".circle3")
            .data(data)
          .enter().append("circle")
            .attr("class", "circle")
            .attr("cx", function(d,i) { return Math.floor(i/rows)*scale +scale*0.8; })
            //.attr("cy", function(d,i) { return (i % rows) * scale + scale*0.5 })
            .attr("cy", function(d,i) { return (i % rows) * scale + scale*0.8 - d['Yes']*scale/200 })
            .attr("r", function(d){ return Math.sqrt(d['Yes'])/100*scale})
            .attr("fill","#E69534");

          /*svg.selectAll(".linesgrey1")
                .data(data)
              .enter().append("line")
                .attr("class", "line")
                .attr("x1",function(d,i) { return Math.floor(i / 9) * scale + scale*0.4 })
                .attr("y1",function(d,i) { return (i % 9)*scale + scale*0.5 + d['q13 - A lot, Some']/500*scale})
                .attr("x2",function(d,i) { return Math.floor(i / 9) * scale + scale*0.6 })
                .attr("y2",function(d,i) { return (i % 9)*scale + scale*0.5 + d['Increase']/500*scale; })
                .attr("stroke","#3F1A13")
                .attr("stroke-width",1.5);

          svg.selectAll(".linesgrey2")
                .data(data)
              .enter().append("line")
                .attr("class", "line")
                .attr("x1",function(d,i) { return Math.floor(i / rows) * scale + scale*0.4 })
                .attr("y1",function(d,i) { return (i % rows)*scale + scale*0.4 - d['q13 - A lot, Some']/500*scale})
                .attr("x2",function(d,i) { return Math.floor(i / rows) * scale + scale*0.6 })
                .attr("y2",function(d,i) { return (i % rows)*scale + scale*0.4 - d['Increase']/500*scale; })
                .attr("stroke","#3F1A13")
                .attr("stroke-width",1.5);

          /*svg.selectAll(".linesgrey3")
                .data(data)
              .enter().append("line")
                .attr("class", "line")
                .attr("x1",function(d,i) { return Math.floor(i / rows) * scale + scale*0.8 })
                .attr("y1",function(d,i) { return (i % rows)*scale + scale*0.5 + d['Yes']/500*scale})
                .attr("x2",function(d,i) { return Math.floor(i / rows) * scale + scale*0.6 })
                .attr("y2",function(d,i) { return (i % rows)*scale + scale*0.5 + d['Increase']/500*scale; })
                .attr("stroke","#3F1A13")
                .attr("stroke-width",1.5);

          svg.selectAll(".linesgrey4")
                .data(data)
              .enter().append("line")
                .attr("class", "line")
                .attr("x1",function(d,i) { return Math.floor(i / rows) * scale + scale*0.8 })
                .attr("y1",function(d,i) { return (i % rows)*scale + scale*0.4 - d['Yes']/500*scale})
                .attr("x2",function(d,i) { return Math.floor(i / rows) * scale + scale*0.6 })
                .attr("y2",function(d,i) { return (i % rows)*scale + scale*0.4 - d['Increase']/500*scale; })
                .attr("stroke","#3F1A13")
                .attr("stroke-width",1.5);*/
          }
        }
      }
    }

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