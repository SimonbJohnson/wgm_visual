function generateOrientationBefore(id,data,columns,rows,state,details,animate,all){

    let width = $(id).width();
    let scale = width/columns;

    if(all==true){
      id = id+'all';
    }

    let svg = d3.select(id)
            .append("svg")
            .attr("width", scale*columns)
            .attr("height", scale*rows);

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx",function(d,i) { return Math.floor(i / rows) * scale + scale*0.2 })
      .attr("cy",function(d,i) { return (i % rows)*scale + scale*0.5; })
      .attr("r", function(d){ return scale/75*Math.sqrt(d['A-D1-Yes-Q12-low']*100) })
      //.attr("r", function(d){ return scale/5*d['A-D1-Yes-Q12-low'] })
      .attr("fill",'#C66257');



    let circles = svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx",function(d,i) { return Math.floor(i / rows) * scale + scale*0.5 })
      .attr("cy",function(d,i) { return (i % rows)*scale + scale*0.5; })
      //.attr("r", function(d){ return scale/5*(d['B-Q30-religion-Q12 high']+d['C-D1-rest']) })
      .attr("r", function(d){ return scale/75*Math.sqrt(d['B-Q30-religion-Q12 high']*100+d['C-D1-rest']*100) })
      .attr("fill",'#009EE2');

    if(state==1){
        /*repeat();

        function repeat() {
          circles
            .transition()
            .duration(2000)
            .attr("fill",'#009EE2')
            .transition()
            .duration(2000)
            .attr("fill",'#33c2ff')
            .on("end", repeat);
        };*/          
    }

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx",function(d,i) { return Math.floor(i / rows) * scale + scale*0.8 })
      .attr("cy",function(d,i) { return (i % rows)*scale + scale*0.5; })
      //.attr("r", function(d){ return scale/5*d['D-D1-No-Q12-High'] })
      .attr("r", function(d){ return scale/75*Math.sqrt(d['D-D1-No-Q12-High']*100) })
      .attr("fill",'#193C78');

    svg.selectAll("text")
      .data(data)
    .enter().append("text")
      .attr("fill","#aaaaaa")
      .attr('class','countrylabel')
      .attr("x",function(d,i) { return Math.floor(i / rows) * scale + scale*0.5 })
      .attr("y",function(d,i) { return (i % rows)*scale + scale; })
      .style("text-anchor", "middle")
      .text(function(d){
        return d['country name'];
      });

    if(state==2){

        let PI = Math.PI;

        let drawArc1 = d3.arc()
            .innerRadius(function(d, i) {
                return  0;
            })
            .outerRadius(function(d){
                return scale/75*Math.sqrt(d['A-D1-Yes-Q12-low']*100)
            })
            .startAngle(0 * (PI/180))
            .endAngle(function(d, i) {
                let percent = d['subAagree'] / d['A-D1-Yes-Q12-low'];
                return percent * PI*2;
            });
            

        svg.selectAll("paths")
            .data(data)
            .enter().append("path")
            .attr("d", drawArc1)
            .attr("transform", function(d,i){
                let cx = Math.floor(i / rows) * scale + scale*0.2;
                let cy = (i % rows)*scale + scale*0.5;
                return "translate("+cx+","+cy+")";
            })
            .attr("fill","#951B81");

        let drawArc2 = d3.arc()
            .innerRadius(function(d, i) {
                return  0;
            })
            .outerRadius(function(d){
                return scale/75*Math.sqrt(d['B-Q30-religion-Q12 high']*100+d['C-D1-rest']*100)
            })
            .startAngle(0 * (PI/180))
            .endAngle(function(d, i) {
                let percent = d['subBagree'] / (d['B-Q30-religion-Q12 high']+d['C-D1-rest']);
                return percent * PI*2;
            });

        svg.selectAll("paths")
            .data(data)
            .enter().append("path")
            .attr("d", drawArc2)
            .attr("transform", function(d,i){
                let cx = Math.floor(i / rows) * scale + scale*0.5;
                let cy = (i % rows)*scale + scale*0.5;
                return "translate("+cx+","+cy+")";
            })
            .attr("fill","#951B81");

    }

    if(state==3){

        let PI = Math.PI;

        let drawArc1 = d3.arc()
            .innerRadius(function(d, i) {
                return  0;
            })
            .outerRadius(function(d){
                return scale/75*Math.sqrt(d['A-D1-Yes-Q12-low']*100)
            })
            .startAngle(0 * (PI/180))
            .endAngle(function(d, i) {
                let percent = d['subADisagreeReligion'] / d['A-D1-Yes-Q12-low'];
                return percent * PI*2;
            });
            

        svg.selectAll("paths")
            .data(data)
            .enter().append("path")
            .attr("d", drawArc1)
            .attr("transform", function(d,i){
                let cx = Math.floor(i / rows) * scale + scale*0.2;
                let cy = (i % rows)*scale + scale*0.5;
                return "translate("+cx+","+cy+")";
            })
            .attr("fill","#F9B233");

        let drawArc2 = d3.arc()
            .innerRadius(function(d, i) {
                return  0;
            })
            .outerRadius(function(d){
                return scale/75*Math.sqrt(d['B-Q30-religion-Q12 high']*100+d['C-D1-rest']*100)
            })
            .startAngle(0 * (PI/180))
            .endAngle(function(d, i) {
                let percent = d['B-Q30-religion-Q12 high'] / (d['B-Q30-religion-Q12 high']+d['C-D1-rest']);
                //return 0;
                return percent * PI*2;
            });


        let arcs2 = svg.selectAll("paths")
            .data(data)
            .enter().append("path")
            .attr("d", drawArc2)
            .attr("transform", function(d,i){
                let cx = Math.floor(i / rows) * scale + scale*0.5;
                let cy = (i % rows)*scale + scale*0.5;
                return "translate("+cx+","+cy+")";
            })
            .attr("fill","#F9B233");

        /*arcs2.transition()
            .duration(750)
            .attrTween("d", function(d){
                let percent = d['B-Q30-religion-Q12 high'] / (d['B-Q30-religion-Q12 high']+d['C-D1-rest']);
                return arcTween2(percent * PI*2);
            });*/       
    }

    function arcTween2(newAngle) {

        return function(d) {
            var interpolate = d3.interpolate(d.endAngle, newAngle);
            return function(t) {
                d.endAngle = interpolate(t);
                return drawArc2(d);
            };
        };
    }
}

function generateOrientationAfter(id,data,columns,rows,state,details,animate){

    let width = $(id).width();
    console.log(data);
    console.log(width);
    let scale = width/columns;

    let svg = d3.select(id)
            .append("svg")
            .attr("width", scale*columns)
            .attr("height", scale*rows);

    let plungeLines1 = svg.selectAll(".linesgrey1")
          .data(data)
        .enter().append("line")
          .attr("class", "line")
          .attr("x1",function(d,i) { return Math.floor(i / rows) * scale + scale*0.2 })
          .attr("y1",function(d,i) { return (i % rows)*scale + scale*0.4; })
          .attr("x2",function(d,i) { return Math.floor(i / rows) * scale + scale*0.4 })
          .attr("y2",function(d,i) { 
            if(animate){
              return (i % rows)*scale + scale*0.4;
            } else {
              return (i % rows)*scale + scale*0.4 + d['B-Q30-religion-Q12 high']*scale;
            }
          })
          //.attr("y2",function(d,i) { return (i % 9)*scale + scale*0.5 + d['B-Q30-religion-Q12 high']*scale; })
          .attr("stroke","#3F1A13")
          .attr("stroke-width",1*scale/100);

    let plungeLines2 = svg.selectAll(".linesgrey2")
          .data(data)
        .enter().append("line")
          .attr("class", "line")
          .attr("x1",function(d,i) { return Math.floor(i / rows) * scale + scale*0.6 })
          .attr("y1",function(d,i) { return (i % rows)*scale + scale*0.4; })
          .attr("x2",function(d,i) { return Math.floor(i / rows) * scale + scale*0.4 })
          .attr("y2",function(d,i) { 
            if(animate){
              return (i % rows)*scale + scale*0.4;
            } else {
              return (i % rows)*scale + scale*0.4 + d['B-Q30-religion-Q12 high']*scale;
            }
          })
          //.attr("y2",function(d,i) { return (i % 9)*scale + scale*0.5 + d['B-Q30-religion-Q12 high']*scale; })
          .attr("stroke","#f8b233")
          .attr("stroke-width",2*scale/100);

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx",function(d,i) { return Math.floor(i / rows) * scale + scale*0.2 })
      .attr("cy",function(d,i) { return (i % rows)*scale + scale*0.4; })
      .attr("r", function(d){ return scale/75*Math.sqrt(d['A-D1-Yes-Q12-low']*100) })
      .attr("fill",'#C66257');

    let plungeCircles = svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx",function(d,i) { return Math.floor(i / rows) * scale + scale*0.4 })
      .attr("cy",function(d,i) {
        if(animate){
              return (i % rows)*scale + scale*0.4;
            } else {
              return (i % rows)*scale + scale*0.4 + d['B-Q30-religion-Q12 high']*scale;
            }
      })
      //.attr("cy",function(d,i) { return (i % 9)*scale + scale*0.5 + d['B-Q30-religion-Q12 high']*scale; })
      .attr("r", function(d){ return scale/75*Math.sqrt(d['B-Q30-religion-Q12 high']*100) })
      .attr("fill",'#f8b233');

    if(details==true){
      svg.selectAll("text")
        .data(data)
      .enter().append("text")
        .attr('class',function(d){
              return 'percentlabel'
        })
        .attr("x",function(d,i) { return Math.floor(i / rows) * scale + scale*0.4; })
        .attr("y",function(d,i) { return (i % rows)*scale + scale*0.4 + d['B-Q30-religion-Q12 high']*scale+scale/75*Math.sqrt(d['B-Q30-religion-Q12 high']*100); })
        .attr("dy","1rem")
        .style("text-anchor", "middle")
        .attr("fill",'#000000')
        .text(function(d){
          return parseInt(d['B-Q30-religion-Q12 high']*100)+'%';
        });
    }

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx",function(d,i) { return Math.floor(i / rows) * scale + scale*0.6 })
      .attr("cy",function(d,i) { return (i % rows)*scale + scale*0.4; })
      .attr("r", function(d){ return scale/75*Math.sqrt(d['C-D1-rest']*100) })
      .attr("fill",'#009EE2');

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx",function(d,i) { return Math.floor(i / rows) * scale + scale*0.8 })
      .attr("cy",function(d,i) { return (i % rows)*scale + scale*0.4; })
      .attr("r", function(d){ return scale/75*Math.sqrt(d['D-D1-No-Q12-High']*100) })
      .attr("fill",'#193C78');

    svg.selectAll("text1")
      .data(data)
    .enter().append("text")
      .attr('class',function(d){
        if(details==true){
            return 'countrylabellarge'
        } else {
            return 'countrylabel'
        }
      })
      .attr("x",function(d,i) { return Math.floor(i / rows) * scale + scale*0.5 })
      .attr("y",function(d,i) { return (i % rows)*scale + scale*0.9; })
      .style("text-anchor", "middle")
      .attr("fill",function(d){
        if(details==true){
            return '#000000'
        } else {
            return '#aaaaaa'
        }
      })
      .text(function(d){
        return d['country name'];
      });

    /*let initPlunge = false;
    $(window).scroll(function(){
        if(!initPlunge){
            let topWin = $(window).scrollTop();
            let topElement = $(id).offset().top;
            if(topWin>topElement-100){*/
                plungeCircles
                    .transition()
                    .delay(1000)
                    .ease(d3.easeCubic)
                    .duration(500)
                    .attr("cy",function(d,i) { return (i % rows)*scale + scale*0.4 + d['B-Q30-religion-Q12 high']*scale; });

                plungeLines1
                    .transition()
                    .delay(1000)
                    .ease(d3.easeCubic)
                    .duration(500)
                    .attr("y2",function(d,i) { return (i % rows)*scale + scale*0.4 + d['B-Q30-religion-Q12 high']*scale; });

                plungeLines2
                    .transition()
                    .delay(1000)
                    .ease(d3.easeCubic)
                    .duration(500)
                    .attr("y2",function(d,i) { return (i % rows)*scale + scale*0.4 + d['B-Q30-religion-Q12 high']*scale; });
  /*          }          
        }
    });*/
}

