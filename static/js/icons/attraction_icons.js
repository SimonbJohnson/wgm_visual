function generateAttraction(id,data,rows,columns,state,details,animate) {
    let width = $(id).width();
    let scale = width/columns;

    let svg = d3.select(id)
            .append("svg")
            .attr("width", width)
            .attr("height", rows*scale);

    let aSize = scale/15
    let shortid = id.substr(1);
    let markerend = svg
      .append('defs')
      .append('marker')
      .attr('id', 'arrowsmall'+shortid)
      .attr('viewBox', [0, 0, aSize, aSize])
      .attr('refX', aSize/2)
      .attr('refY', aSize/2)
      .attr('markerWidth', aSize)
      .attr('markerHeight', aSize)
      .attr('orient', 'auto-start-reverse')
      .append('path')
      .attr('d', d3.line()([[0, 0], [0, aSize], [aSize, aSize*0.5]]))
      .attr('fill', 'black')
      .attr('stroke', 'black');

      let lines1 = svg.selectAll(".linesgrey2")
        .data(data)
      .enter().append("line")
        .attr("class", "line")
        .attr("x1",function(d,i) { return Math.floor(i / rows) * scale + scale*0.4 })
        .attr("y1",function(d,i) {
          if(state==1){
            return (i % rows) * scale + scale*0.7
          } else {
            return (i % rows) * scale + scale*0.8-d['q13 - A lot, Some']*scale/200
          }
        })
        .attr("x2",function(d,i) { return Math.floor(i / rows) * scale + scale*0.4 })
        .attr("y2",function(d,i) { return (i % rows)*scale + scale*0.7; })
        .attr("stroke","#3F1A13")
        .attr("stroke-width",1.5);

    if(details==true){
      svg.selectAll(".circle1")
        .data(data)
      .enter().append("circle")
        .attr("class", "circle")
        .attr("cx", function(d,i) { return Math.floor(i/rows)*scale +scale*0.4; })
        .attr("cy", function(d,i) {
          return (i % rows) * scale + scale*0.8-d['q13 - A lot, Some']*scale/200
        })
        .attr("r", function(d){ return Math.sqrt(100)/100*scale})
        .attr("fill","#FFFFFF")
        .style("stroke","#999999");
    }

    let circles1 = svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx", function(d,i) { return Math.floor(i/rows)*scale +scale*0.4; })
      .attr("cy", function(d,i) {
        if(state==1){
          return (i % rows) * scale + scale*0.8
        } else {
          return (i % rows) * scale + scale*0.8-d['q13 - A lot, Some']*scale/200
        }
      })
      .attr("r", function(d){ return Math.sqrt(d['q13 - A lot, Some'])/100*scale})
      .attr("fill","#1D70B7");

    if(state>1){

      var lines2 = svg.selectAll(".linesgrey2")
        .data(data)
      .enter().append("line")
        .attr("class", "line")
        .attr("x1",function(d,i) { return Math.floor(i / rows) * scale + scale*0.4 })
        .attr("y1",function(d,i) { 
            return (i % rows)*scale + scale*0.6 - d['q13 - A lot, Some']/200*scale})
        .attr("x2",function(d,i) { 
          if(state==2 || state==6){
            return Math.floor(i / rows) * scale + scale*0.4
          } else {
            return Math.floor(i / rows) * scale + scale*0.6
          }
        })
        .attr("y2",function(d,i) {
          if(state==2 || state==6){
            return (i % rows)*scale + scale*0.6 - d['q13 - A lot, Some']/200*scale;
          } else {
            return (i % rows)*scale + scale*0.6 - d['Increase']/200*scale;
          }
          
        })
        .attr('marker-end', function(d){
          if(state<6){
            return 'url(#arrowsmall'+shortid+')'
          } else {
            return ''
          }
          
        })
        .attr("stroke","#3F1A13")
        .attr("stroke-width",1.5);

    if(state>5){
      var lines6 = svg.selectAll(".linesgrey4")
          .data(data)
        .enter().append("line")
          .attr("class", "line")
          .attr("x2",function(d,i) { return Math.floor(i / rows) * scale + scale*0.6 })
          .attr("y2",function(d,i) { return (i % rows)*scale + scale*0.6 - d['Increase']/200*scale; })
          .attr("x1",function(d,i) { return Math.floor(i / rows) * scale + scale*0.6 })
          .attr("y1",function(d,i) { return (i % rows)*scale + scale*0.6 - d['Increase']/200*scale; })
          .attr("stroke","#3F1A13")
          .attr("stroke-width",1.5);
    }

      if(state!=3){

        if(details==true){
          svg.selectAll(".circle2")
            .data(data)
          .enter().append("circle")
            .attr("class", "circle")
            .attr("cx", function(d,i) { return Math.floor(i/rows)*scale +scale*0.6; })
            .attr("cy", function(d,i) { return (i % rows) * scale + scale*0.8-d['Increase']*scale/200 })
            .attr("r", function(d){ return Math.sqrt(100)/100*scale})
            .attr("fill","#FFFFFF")
            .style("stroke","#999999")
            .style("stroke-width","#999999");               
        }

      var circles2 = svg.selectAll(".circle2")
          .data(data)
        .enter().append("circle")
          .attr("class", "circle")
          .attr("cx", function(d,i) { return Math.floor(i/rows)*scale +scale*0.6; })
          .attr("cy", function(d,i) { return (i % rows) * scale + scale*0.8-d['Increase']*scale/200 })
          .attr("r", function(d){ return Math.sqrt(d['Increase'])/100*scale})
          .attr("fill","#338ceb")
          .attr("opacity",function(d){
            if(state==2){
              return 0 
            } else {
              return 1
            }
          });
      }
    
    if(state>2){

      if(state==5 || state==4){
        var decrease = svg.selectAll(".circle2")
          .data(data)
        .enter().append("circle")
          .attr("class", "circle")
          .attr("cx", function(d,i) { return Math.floor(i/rows)*scale +scale*0.6; })
          .attr("cy", function(d,i) { return (i % rows) * scale + scale*0.8-d['Q19 - Decrease']*scale/200 })
          .attr("r", function(d){ return Math.sqrt(d['Q19 - Decrease'])/100*scale})
          .attr("fill","#f3a1c0")
          .attr("opacity",function(d,i){
            if(state==4){
              return 0;
            } else {
              return 1;
            }
          });

      }

      if(state==5){
        
          var agricircle = svg.selectAll(".circleA")
            .data(data)
          .enter().append("circle")
            .attr("class", "circle")
            .attr("cx", function(d,i) { return Math.floor(i / rows) * scale + scale*0.15 })
            .attr("cy", function(d,i) { return (i % rows)*scale + scale*0.6 })
            .attr("r", function(d){ return Math.sqrt(d['agriculture'])/100*scale})
            .attr("fill","#b1cc92")
            .attr('opacity',0);

          /*svg.selectAll(".circleS")
            .data(data)
          .enter().append("circle")
            .attr("class", "circle")
            .attr("cx", function(d,i) { return Math.floor(i / rows) * scale + scale*0.15 })
            .attr("cy", function(d,i) { return (i % 9)*scale + scale*0.3 })
            .attr("r", function(d){ return Math.sqrt(d['services'])/100*scale})
            .attr("fill","#999999");*/
        }
        if(state>5){


          if(details==true){
            svg.selectAll(".circle3")
              .data(data)
            .enter().append("circle")
              .attr("class", "circle")
              .attr("cx", function(d,i) { return Math.floor(i/rows)*scale +scale*0.8; })
              //.attr("cy", function(d,i) { return (i % rows) * scale + scale*0.5 })
              .attr("cy", function(d,i) { return (i % rows) * scale + scale*0.8 - d['Yes']*scale/200 })
              .attr("r", function(d){ return Math.sqrt(100)/100*scale})
              .attr("fill","#FFFFFF")
              .style("stroke","#999999")
              .style("stroke-width","#999999");

            svg.selectAll("textlabel1")
              .data(data)
            .enter().append("text")
              .attr('class','percentlabel')
              .attr("x", function(d,i) { return Math.floor(i/rows)*scale +scale*0.4; })
              .attr("y", function(d,i) { return (i % rows) * scale + scale*0.8-d['q13 - A lot, Some']*scale/200 })
              .attr("dx","-2rem")
              .attr("dy","0.5rem")
              .style("text-anchor", "middle")
              .text(function(d){
                return parseInt(d['q13 - A lot, Some'])+'%';
              });

            svg.selectAll("textlabel2")
              .data(data)
            .enter().append("text")
              .attr('class','percentlabel')
              .attr("x", function(d,i) { return Math.floor(i/rows)*scale +scale*0.6; })
              .attr("y", function(d,i) { return (i % rows) * scale + scale*0.8-d['Increase']*scale/200 })     
              .attr("dy",parseInt(150*scale/750)+"px")
              .style("text-anchor", "middle")
              .text(function(d){
                return parseInt(d['Increase'])+'%';
              });

            svg.selectAll("textlabel3")
              .data(data)
            .enter().append("text")
              .attr('class','percentlabel')
              .attr("x", function(d,i) { return Math.floor(i/rows)*scale +scale*0.8; })
              .attr("y", function(d,i) { return (i % rows) * scale + scale*0.8 - d['Yes']*scale/200 })       
              .attr("dy",parseInt(150*scale/750)+"px")
              .style("text-anchor", "middle")
              .text(function(d){
                return parseInt(d['Yes'])+'%';
              });              
          }

          svg.selectAll(".circle3")
            .data(data)
          .enter().append("circle")
            .attr("class", "circle")
            .attr("cx", function(d,i) { return Math.floor(i/rows)*scale +scale*0.8; })
            .attr("cy", function(d,i) { return (i % rows) * scale + scale*0.8 - d['Yes']*scale/200 })
            .attr("r", function(d){ return Math.sqrt(d['Yes'])/100*scale})
            .attr("fill","#85baf3");
        }
      }
    }

    svg.selectAll("textlabels")
      .data(data)
    .enter().append("text")
      .attr('class',function(d){
        if(details==true){
          return 'countrylargelabel'
        } else {
          return 'countrylabel'
        }
      })
      .attr("x",function(d,i) { return Math.floor(i / rows) * scale + scale*0.5 })
      .attr("y",function(d,i) { return (i % rows)*scale + scale*0.9; })
      .style("text-anchor", "middle")
      .text(function(d){
        return d['country_name'];
      });

    //transitions
    let duration = 0;
    if(animate==true){
      duration = 750
    }
    let init=false;
    
    $(window).scroll(function(){
        if(!init){
            let topWin = $(window).scrollTop();
            let topElement = $(id).offset().top;
            if(topWin>topElement-250 || duration==0){
              init=true;
              if(state==1){
                circles1.transition().duration(duration).attr('cy',function(d,i){
                  return (i % rows) * scale + scale*0.8-d['q13 - A lot, Some']*scale/200;
                });
                lines1.transition().duration(duration).attr('y1',function(d,i){
                  return (i % rows) * scale + scale*0.8-d['q13 - A lot, Some']*scale/200;
                });
              }

              if(state==2 || state == 4 || state == 5){
                circles1.transition().duration(duration).attr('fill','#e0e0e0');
                lines1.transition().duration(duration).attr("stroke","#e0e0e0");
              }

              if(state==2){
                circles2.transition().delay(duration).duration(duration).attr("opacity",1);
                lines2.transition().delay(duration*2).duration(duration).attr('y2',function(d,i){
                  return (i % rows)*scale + scale*0.6 - d['Increase']/200*scale;
                })
                .attr('x2', function(d,i){
                  return Math.floor(i / rows) * scale + scale*0.6;
                })
              }

              if(state==4 || state==5){
                lines2.transition().duration(duration).attr("stroke","#e0e0e0");
                markerend.transition().duration(duration).attr("stroke","#e0e0e0").attr("fill","#e0e0e0");
                decrease.transition().delay(duration).duration(duration).attr("opacity",1);
              }

              if(state==5){
                agricircle.transition().delay(function(d,i){
                    let value = d['agriculture']
                    return 750+ (100-d['agriculture'])*10
                })
                .duration(duration)
                .attr('opacity',1);
                
              }

              if(state==6){
                lines2.transition().duration(duration).attr('y2',function(d,i){
                  return (i % rows)*scale + scale*0.6 - d['Increase']/200*scale;
                })
                .attr('x2', function(d,i){
                  return Math.floor(i / rows) * scale + scale*0.6;
                })

                lines6.transition().delay(duration).duration(duration).attr("y2",function(d,i) {
                  return (i % rows)*scale + scale*0.6 - d['Yes']/200*scale
                })
                .attr('x2',function(d,i){
                  return Math.floor(i / rows) * scale + scale*0.8;
                })
                .attr('marker-end', 'url(#arrowsmall'+shortid+')');
              }
            }
          }
        });
}