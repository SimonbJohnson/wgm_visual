function generateDiffusion(id,data,columns,lines,details,animate,state){

  let width = $(id).width();

	let scale = width/columns;



  let svg = d3.select(id)
          .append("svg")
          .attr("width", width)
          .attr("height", lines*scale);


    colors = ['#D1AB39','#193C78','#CC3333','#29A78A','#F28000'];
    variables = ['distrust_neighbours','distrust_government', 'distrust_journalists','distrust_doctors','distrust_ngos'];
    var g = svg.append("g").style("filter", "url(#gooey)");
  
    if(details==true){
      svg.selectAll(".circletrust")
          .data(data)
        .enter().append("circle")
          .attr("class", "circle")
          .attr("cx", function(d,i) {
            return Math.floor(i / lines) * scale + scale*0.5
          })
          .attr("cy", function(d,i) {
            return (i % lines)*scale + scale*0.5
          })
          .attr("r",function(d){
            return scale*0.12*10/15
          })
          .attr("fill","#ffffff")
          .style("stroke",'#999999')
          .style("stroke-width",1)
          .attr("opacity",1);
    }

    var trustlines = [];
    var societycircles = [];
    for(j=0;j<5;j++){

        let angle = j*72/ 180 * Math.PI;  

      let newtrustlines = svg.selectAll(".linesgrey"+j)
          .data(data)
        .enter().append("line")
          .attr("class", "line")
          .attr("x1", function(d,i) {
            return Math.floor(i / lines) * scale + scale*0.5
          })
          .attr("y1", function(d,i) {
            return (i % lines)*scale + scale*0.5
          })
          .attr("x2", function(d,i) {
              let value = d[variables[j]];
              if(state==0){
                value=0;
              }
              if(value=='None'){
                return Math.floor(i / lines) * scale + scale*0.5;
              }
              return Math.floor(i / lines) * scale + scale*0.5 + Math.sin(angle)*(scale*0.06+scale*0.4*value/100);
          }).attr("y2", function(d,i) {
              let value = d[variables[j]]; 
              if(state==0){
                value=0;
              }
              if(value=='None'){
                return (i % lines)*scale + scale*0.5
              } else {
                return (i % lines)*scale + scale*0.5 - Math.cos(angle)*(scale*0.06+scale*0.4*value/100);
              }
          })
          .attr("stroke","#3F1A13")
          .attr("opacity",function(d){
              let value = d[variables[j]];
              if(value == 'None'){
                return 0
              } else {
                if(state==0){
                  return 0;
                } else {
                  return 1;
                }
              }
            })
            .attr("stroke-width",function(d){
              let value = d['distrust_scientists'];
              return value*scale/1500;
            });

        trustlines.push(newtrustlines);

        let newsocietycircles = svg.selectAll(".circlecolor"+j)
          .data(data)
        .enter().append("circle")
          .attr("class", "circle")
          .attr("cx", function(d,i) {
            let value = d[variables[j]];
            if(value=="None"){
              return 0;
            }
            return Math.floor(i / lines) * scale + scale*0.5 + Math.sin(angle)*(scale*0.06+scale*0.4*value/100)
          })
          .attr("cy", function(d,i) {
            let value = d[variables[j]];
            if(value=="None"){
              return 0;
            } 
            return (i % lines)*scale + scale*0.5 - Math.cos(angle)*(scale*0.06+scale*0.4*value/100) 
          })
          .attr("r", function(d,i){
          	//let value = d[variables[j]];
          	//return scale*0.12*Math.sqrt(value)/15
            if(state==0){
              return 0;
            }
            if(state>0){
              if(j==2 || j==4){
                return scale/30;
              }
            }
            if(state>1){
              if(j==3){
                return scale/30;
              }              
            }
            if(state>2){
                return scale/30;           
            }            
          })
          .attr("fill",colors[j])
          .attr("opacity",function(d,i){
            let value = d[variables[j]];
            if(value == 'None'){
              return 0
            }
            if(state>1 && (j==2 || j==4)){
              return 1
            }
            if(state>2 && (j==3)){
              return 1
            }
            if(state>3){
              return 1
            }
            return 0 
          });

        societycircles.push(newsocietycircles);

      if(details==true){
        svg.selectAll("textpercent")
          .data(data)
        .enter().append("text")
          .attr('class',function(d){
                return 'percentlabel'
          })
          .attr("x", function(d,i) {
            let value = d[variables[j]];
            if(value=="None"){
              return 0;
            }
            return Math.floor(i / lines) * scale + scale*0.5 + Math.sin(angle)*(scale*0.16+scale*0.4*value/100)
          })
          .attr("y", function(d,i) {
            let value = d[variables[j]];
            if(value=="None"){
              return 0;
            } 
            return (i % lines)*scale + scale*0.5 - Math.cos(angle)*(scale*0.16+scale*0.4*value/100) 
          })
          .attr("dy","0.5rem")
          .style("text-anchor", "middle")
          .attr("fill",'#000000')
          .text(function(d){
            let value = d[variables[j]];
            if(value=="None"){
              return ''
            } else {
              return parseInt(value)+'%';
            }
          });
      }
    }

    let sciencetrust = svg.selectAll(".circletrust")
        .data(data)
      .enter().append("circle")
        .attr("class", "circle")
        .attr("cx", function(d,i) {
          return Math.floor(i / lines) * scale + scale*0.5
        })
        .attr("cy", function(d,i) {
          return (i % lines)*scale + scale*0.5
        })
        .attr("r", function(d){
        	let value = Math.sqrt(d['distrust_scientists']);
          	return scale*0.12*value/15
        })
        .attr("fill","#009EE2")
        .attr("opacity",function(d){
          if(state==0){
            return 0;
          } else {
            return 1;
          }
        });
    console.log(id);
    console.log(animate);
    if(animate==true){
      let initTrans = false;
      $(window).scroll(function(){
          if(!initTrans){
              let topWin = $(window).scrollTop();
              let topElement = $(id).offset().top;
              if(topWin>topElement-250){
                if(state==0){
                  sciencetrust.transition()
                    .delay(function(d,i){
                      let value = d['distrust_scientists'];
                          return value*30;
                    })
                    .attr("opacity",1);
                  
                  trustlines.forEach(function(tlines,j){

                    let angle = j*72/ 180 * Math.PI; 
                    
                    tlines.transition().delay(2000).duration(0).attr("opacity",function(d,i){
                          return 1;
                        });

                    tlines.transition().delay(2000)
                        .duration(function(d){
                          return 1000
                        })
                        .attr("x2", function(d,i) {
                          let value = d[variables[j]];
                          if(value=='None'){
                            return Math.floor(i / lines) * scale + scale*0.5;
                          }
                          return Math.floor(i / lines) * scale + scale*0.5 + Math.sin(angle)*(scale*0.06+scale*0.4*value/100);
                        })
                        .attr("y2", function(d,i) {
                          let value = d[variables[j]];
                          if(value=='None'){
                            return (i % lines)*scale + scale*0.5
                          } else {
                            return (i % lines)*scale + scale*0.5 - Math.cos(angle)*(scale*0.06+scale*0.4*value/100);
                          }
                          
                        });
                  });
                }
                console.log(id+'animate');
                societycircles.forEach(function(scircles,j){
                  scircles.transition()
                      .duration(1000)
                      .attr("opacity",function(d,i){
                        let value = d[variables[j]];
                        if(value == 'None'){
                          return 0
                        }
                        if(state>0 && (j==2 || j==4)){
                          return 1
                        }
                        if(state>1 && (j==3)){
                          return 1
                        }
                        if(state>2){
                          return 1
                        }
                        return 0 
                      });
                });
                initTrans = true;            
              }
            }
          });
    }
    
    svg.selectAll("textcountry")
      .data(data)
    .enter().append("text")
    	.attr('class',function(d){
        if(details==true){
          return 'countrylargelabel'
        } else {
          return 'countrylabel'
        }
      })
      .attr("x",function(d,i) { return Math.floor(i / lines) * scale + scale*0.5 })
      .attr("y",function(d,i) { return (i % lines)*scale + scale*0.9; })
      .style("text-anchor", "middle")
      .attr("fill", function(d){
        if(details==true){
          return '#000000'
        } else {
          return '#aaaaaa'
        }
      })
      .text(function(d){
        return d['country_name'];
      });
}