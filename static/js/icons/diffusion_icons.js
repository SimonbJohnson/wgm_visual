function generateDiffusion(id,data,width,height,columns,lines,details,animate,state){

	/*let count = data.length;

	let columns = Math.ceil(16*Math.sqrt(count)/12)+1;
	let lines = Math.max(Math.floor(9*Math.sqrt(count)/12),1);
	console.log(id);
	console.log(columns);

	if((columns-1)*lines<=count){
		columns=columns-1;
	}*/

	let scale = width/columns;


	/*data = data.sort(function(a,b){
		return a.distrust_scientists - b.distrust_scientists;
	});*/

    let svg = d3.select(id)
            .append("svg")
            .attr("width", width)
            .attr("height", height);

	/*var defs = svg.append('defs');

	var filter = defs.append('filter').attr('id','gooey');
	
	filter.append('feGaussianBlur')
		.attr('in','SourceGraphic')
		.attr('stdDeviation','10')
		.attr('result','blur');
	filter.append('feColorMatrix')
		.attr('in','blur')
		.attr('mode','matrix')
		.attr('values','1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7')
		.attr('result','gooey');
	filter.append('feComposite')
		.attr('in','SourceGraphic')
		.attr('in2','gooey')
		.attr('operator','atop');*/


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
            return (i % lines)*scale + scale*0.4
          })
          .attr("r",function(d){
            return scale*0.12*10/15
          })
          .attr("fill","#F2EADF00")
          .style("stroke",'#999999')
          .style("stroke-width",1)
          .attr("opacity",1);
    }

    for(j=0;j<5;j++){

        let angle = j*72/ 180 * Math.PI;

        if(details==true){
          svg.selectAll(".circlecolor"+j)
            .data(data)
          .enter().append("circle")
            .attr("class", "circle")
            .attr("cx", function(d,i) {
              let value = d[variables[j]];
              return Math.floor(i / 9) * scale + scale*0.5 + Math.sin(angle)*(scale*0.06+scale*0.4*value/100)
            })
            .attr("cy", function(d,i) {
              let value = d[variables[j]]; 
              return (i % 9)*scale + scale*0.4 - Math.cos(angle)*(scale*0.06+scale*0.4*value/100) 
            })
            .attr("r", function(d,i){
              let value = d[variables[j]];
              return scale*0.12*Math.sqrt(100)/15
            })
            .attr("fill",'#00000000')
            .style("stroke",'#999999')
            .style("stroke-width",1)
            .attr("opacity",1);
        }     

      let trustlines = svg.selectAll(".linesgrey"+j)
          .data(data)
        .enter().append("line")
          .attr("class", "line")
          .attr("x1", function(d,i) {
            return Math.floor(i / lines) * scale + scale*0.5
          })
          .attr("y1", function(d,i) {
            return (i % lines)*scale + scale*0.4
          })
          /*.attr("x2", function(d,i) {
              let value = d[variables[j]];
              if(animate==true){
                value=0;
              }
              return Math.floor(i / lines) * scale + scale*0.5 + Math.sin(angle)*(scale*0.4*value/100)
          })*/
          /*    let value = d[variables[j]]; 
              if(animate==true){
                value=0;
              }
              return (i % lines)*scale + scale*0.4 - Math.cos(angle)*(scale*0.4*value/100)
          })*/
          .attr("x2", function(d,i) {
              let value = d[variables[j]];
              if(value=='None'){
                return Math.floor(i / lines) * scale + scale*0.5;
              }
              return Math.floor(i / lines) * scale + scale*0.5 + Math.sin(angle)*(scale*0.06+scale*0.4*value/100)
            })
            .attr("y2", function(d,i) {
              let value = d[variables[j]];
              if(value=='None'){
                return (i % lines)*scale + scale*0.4
              } else {
                return (i % lines)*scale + scale*0.4 - Math.cos(angle)*(scale*0.06+scale*0.4*value/100);
              }
              
            })
          .attr("stroke","#3F1A13")
          .attr("opacity",function(d){
              let value = d[variables[j]];
              if(value == 'None'){
                return 0
              } else {
                if(animate==true){
                  return 0;
                } else {
                  return 1;
                }
              }
            })
            .attr("stroke-width",function(d){
              //let value = d[variables[j]];
              let value = d['distrust_scientists'];
              return value*scale/1500;
              //return 2*scale/100
            });

        
        let societycircles = svg.selectAll(".circlecolor"+j)
          .data(data)
        .enter().append("circle")
          .attr("class", "circle")
          .attr("cx", function(d,i) {
            let value = d[variables[j]];
            return Math.floor(i / lines) * scale + scale*0.5 + Math.sin(angle)*(scale*0.06+scale*0.4*value/100)
          })
          .attr("cy", function(d,i) {
            let value = d[variables[j]]; 
            return (i % lines)*scale + scale*0.4 - Math.cos(angle)*(scale*0.06+scale*0.4*value/100) 
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
            } else {
              if(animate==true){
                return 0;
              } else {
                return 1;
              }
            }
          });

      if(animate==true){
        initTrans2 = false;
        $(window).scroll(function(){
          if(!initTrans2[j]){
              let topWin = $(window).scrollTop();
              let topElement = $(id).offset().top;
              if(topWin>topElement-100){

                societycircles.transition()
                  .delay(function(d,i){
                    return 3000
                  })
                  .attr("opacity",function(d,i){
                    return 1;
                  });

                    trustlines.transition().delay(2000)
                      .duration(function(d){
                        return 1000
                      })
                      .attr("opacity",function(d,i){
                        return 1;
                      });

                  initTrans2=true
              }
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
          return (i % lines)*scale + scale*0.4
        })
        .attr("r", function(d){
        	let value = Math.sqrt(d['distrust_scientists']);
          	return scale*0.12*value/15
        })
        .attr("fill","#009EE2")
        .attr("opacity",function(d){
          if(animate==true){
            return 0;
          } else {
            return 1;
          }
        });

    if(animate==true){
      let initTrans = false;
      $(window).scroll(function(){
          if(!initTrans){
              let topWin = $(window).scrollTop();
              let topElement = $(id).offset().top;
              if(topWin>topElement-100){
                sciencetrust.transition()
                  .delay(function(d,i){
                    let value = d['distrust_scientists'];
                        return value*30;
                  })
                  .attr("opacity",1);

                  initTrans = true;            
              }
            }
          });
    }

    /*svg.selectAll(".circletrust")
        .data(data)
      .enter().append("rect")
        .attr("x", function(d,i) {
          let value = Math.sqrt(d['distrust_scientists']);
          return Math.floor(i / 9) * scale + scale*0.5-scale*0.12*value/15*1.5
        })
        .attr("y", function(d,i) {
          let value = Math.sqrt(d['distrust_scientists']);
          return (i % 9)*scale + scale*0.4 -scale*0.12*value/15*1.5
        })
        .attr("width", function(d){
          let value = Math.sqrt(d['distrust_scientists']);
            return scale*0.12*value/15*3
        })
        .attr("height", function(d){
          let value = Math.sqrt(d['distrust_scientists']);
            return scale*0.12*value/15*3
        })
        .attr("fill","#009EE2");*/
    
    
    svg.selectAll("text")
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

/*function getHex(value){
  let upper = [63, 26, 19];
  let lower = [185, 178, 164];
  value = Math.max(value - 50,0);
  let r = Math.floor(upper[0]*value/50 + lower[0]*(1-value/50));
  let g = Math.floor(upper[1]*value/50 + lower[1]*(1-value/50));
  let b = Math.floor(upper[2]*value/50 + lower[2]*(1-value/50));
  return "rgb("+r+","+g+","+b+")";
}*/