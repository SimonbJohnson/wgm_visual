console.log(data);

let graphWidth = $('#scatterplot1').width();
let graphHeight = $('#scatterplot1').width();

let scatterplot1 = scatterplot('#scatterplot1',data,'distrust_society_nogov','distrust_scientists',['Trust in Society'],["Percent answering 'A lot' or 'Some' to trusting scientist in their country"],'WBI',graphWidth,graphHeight,0,60,0,60);
generateDiffusionIcons(data);

function generateDiffusionIcons(data){
	let width = $('#viz1').width();
	let height = width/16*9;
	generateDiffusion('#viz1',data,width,height,16,9,false);

	let width2 = $('#viz2').width();
	let height2 = $('#viz2').width();
	let southAfrica = data.filter(function(d){
		if(d['country_name']=='South Africa'){
			return true;
		} else {
			return false;
		}
	});
	generateDiffusion('#viz2',southAfrica,width2,height2,1,1,true);

  let width3 = $('#viz3').width();
  let height3 = width/16*9;
  generateDiffusion('#viz3',data,width,height,16,9,false);	

  let width4 = $('#viz2').width();
  let height4 = $('#viz2').width();
  let vietnam = data.filter(function(d){
    if(d['country_name']=='Vietnam'){
      return true;
    } else {
      return false;
    }
  });
  generateDiffusion('#viz4',vietnam,width4,height4,1,1,true);

  let pieData = {"Don't Know":50,"Distrust":30,"Trust":20};
  donutGraph('#viz5',pieData);
}

/*function generateDiffusion(id,data,width,height,columns,lines){

	//let count = data.length;

	//let columns = Math.ceil(16*Math.sqrt(count)/12)+1;
	//let lines = Math.max(Math.floor(9*Math.sqrt(count)/12),1);
	//console.log(id);
	//console.log(columns);

	//if((columns-1)*lines<=count){
	//	columns=columns-1;
	//}

	let scale = width/columns;


	data = data.sort(function(a,b){
		return a.distrust_scientists - b.distrust_scientists;
	});

    let svg = d3.select(id)
            .append("svg")
            .attr("width", width)
            .attr("height", height);

	var defs = svg.append('defs');

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
		.attr('operator','atop');


    colors = ['#D1AB39','#193C78','#CC3333','#29A78A','#F28000'];
    variables = ['distrust_neighbours','distrust_government', 'distrust_journalists','distrust_doctors','distrust_ngos'];
    var g = svg.append("g").style("filter", "url(#gooey)");
  



    for(j=0;j<5;j++){

        let angle = j*72/ 180 * Math.PI;

        svg.selectAll(".circlegrey"+j)
          .data(data)
        .enter().append("circle")
          .attr("class", "backcircle")
          .attr("cx", function(d,i) {
            let value = d[variables[j]];
            return Math.floor(i / lines) * scale + scale*0.5 + Math.sin(angle)*(scale*0.06+scale*0.4*value/100)
          })
          .attr("cy", function(d,i) {
            let value = d[variables[j]]; 
            return (i % lines)*scale*0.9 + scale*0.5 - Math.cos(angle)*(scale*0.06+scale*0.4*value/100) 
          })
          .attr("r", scale*0.12)
          .attr("fill","#FFFFFF00")
          .attr("opacity",function(d){
          	let value = d[variables[j]];
          	if(value == 'None'){
          		return 0
          	} else {
          		return 1;
          	}
          });
    }

    for(j=0;j<5;j++){

        let angle = j*72/ 180 * Math.PI;

      //for(k=0;k<data.length;k++){
      //  	let value = data[k][variables[j]];
	    //	let cx = Math.floor(k / lines) * scale + scale*0.5 + Math.sin(angle)*(scale/7+scale*0.4*value/100);
	    //	let cy = (k % lines)*scale*0.9 + scale*0.5 - Math.cos(angle)*(scale/7+scale*0.4*value/100); 
	    //	circleToDots(svg,cx,cy,value,scale,colors[j]);
    	//}

      svg.selectAll(".linesgrey"+j)
          .data(data)
        .enter().append("line")
          .attr("class", "line")
          .attr("x1", function(d,i) {
            return Math.floor(i / lines) * scale + scale*0.5
          })
          .attr("y1", function(d,i) {
            return (i % lines)*scale*0.9 + scale*0.5
          })
            .attr("x2", function(d,i) {
              let value = d[variables[j]];
              return Math.floor(i / lines) * scale + scale*0.5 + Math.sin(angle)*(scale*0.06+scale*0.4*value/100)
            })
            .attr("y2", function(d,i) {
              let value = d[variables[j]]; 
              return (i % lines)*scale*0.9 + scale*0.5 - Math.cos(angle)*(scale*0.06+scale*0.4*value/100) 
            })
          .attr("stroke","#3F1A13")
          .attr("opacity",function(d){
              let value = d[variables[j]];
              if(value == 'None'){
                return 0
              } else {
                return 1;
              }
            })
            .attr("stroke-width",function(d){
              let value = d[variables[j]];
              //return value*scale/1500;
              return 1.5;
            })      

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
            return (i % 9)*scale*0.9 + scale*0.5 - Math.cos(angle)*(scale*0.06+scale*0.4*value/100) 
          })
          .attr("r", function(d,i){
          	let value = d[variables[j]];
          	return scale*0.12*Math.sqrt(value)/15
          })
          .attr("fill",colors[j])
          .attr("opacity",1);
    }

    svg.selectAll(".circletrust")
        .data(data)
      .enter().append("circle")
        .attr("class", "circle")
        .attr("cx", function(d,i) {
          return Math.floor(i / lines) * scale + scale*0.5
        })
        .attr("cy", function(d,i) {
          return (i % lines)*scale*0.9 + scale*0.5
        })
        .attr("r", scale*0.06)
        .attr("fill","#F2EADF00");

    svg.selectAll(".circletrust")
        .data(data)
      .enter().append("circle")
        .attr("class", "circle")
        .attr("cx", function(d,i) {
          return Math.floor(i / 9) * scale + scale*0.5
        })
        .attr("cy", function(d,i) {
          return (i % 9)*scale*0.9 + scale*0.5
        })
        .attr("r", function(d){
        	let value = Math.sqrt(d['distrust_scientists']);
          	return scale*0.12*value/15
        })
        .attr("fill","#009EE2");

    //for(j=0;j<data.length;j++){
    //	let cx = Math.floor(j / lines) * scale + scale*0.5;
    //	let cy = (j % lines)*scale*0.9 + scale*0.5;
    //	let value = data[j]['distrust_scientists'];
    //	circleToDots(svg,cx,cy,value,scale,'#2196F3');
    //}
    
    
    svg.selectAll("text")
      .data(data)
    .enter().append("text")
    	.attr('class','country_label')
      .attr("x",function(d,i) { return Math.floor(i / lines) * scale + scale*0.5 })
      .attr("y",function(d,i) { return (i % lines)*scale*0.9 + scale*0.9; })
      .style("text-anchor", "middle")
      .text(function(d){
        return d['country_name'];
      });
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