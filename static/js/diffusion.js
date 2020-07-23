console.log(data);

let graphWidth = $('#scatterplot1').width();
let graphHeight = $('#scatterplot1').width();

let scatterplot1 = scatterplot('#scatterplot1',data,'distrust_society_nogov','distrust_scientists','Trust in Society',"Percent answering 'A lot' or 'Some' to trusting scientist in their country",'WBI',graphWidth,graphHeight,0,60,0,60);
generateDiffusionIcons(data);

function generateDiffusionIcons(data){
	let width = $('#viz1').width();
	let height = width/16*9;

	generateSmallMultiples(data,width,height)
}

function generateSmallMultiples(data,width,height){

	let scale = width/16;

	data = data.sort(function(a,b){
		return a.distrust_scientists - b.distrust_scientists;
	});

    let svg = d3.select('#viz1')
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
		.attr('values','1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -6')
		.attr('result','gooey');
	filter.append('feComposite')
		.attr('in','SourceGraphic')
		.attr('in2','gooey')
		.attr('operator','atop');

	var g = svg.append("g").style("filter", "url(#gooey)");

    colors = ['#E53935','#673AB7','#4CAF50','#FFEB3B','#FF9800'];
    variables = ['distrust_neighbours','distrust_government', 'distrust_journalists','distrust_doctors','distrust_ngos'];

    for(j=0;j<5;j++){

        let angle = j*72/ 180 * Math.PI;

        g.selectAll(".circlegrey"+j)
          .data(data)
        .enter().append("circle")
          .attr("class", "backcircle")
          .attr("cx", function(d,i) {
            let value = d[variables[j]];
            return Math.floor(i / 9) * scale + scale*0.5 + Math.sin(angle)*(10+scale*0.4*value/100)
          })
          .attr("cy", function(d,i) {
            let value = d[variables[j]]; 
            return (i % 9)*scale + scale*0.5 - Math.cos(angle)*(10+scale*0.4*value/100) 
          })
          .attr("r", scale*0.12)
          .attr("fill","#777777")
          .attr("opacity",1);
    }

    for(j=0;j<5;j++){

        let angle = j*72/ 180 * Math.PI;

        g.selectAll(".circlecolor"+j)
          .data(data)
        .enter().append("circle")
          .attr("class", "backcircle")
          .attr("cx", function(d,i) {
            let value = d[variables[j]];
            return Math.floor(i / 9) * scale + scale*0.5 + Math.sin(angle)*(10+scale*0.4*value/100)
          })
          .attr("cy", function(d,i) {
            let value = d[variables[j]]; 
            return (i % 9)*scale + scale*0.5 - Math.cos(angle)*(10+scale*0.4*value/100) 
          })
          .attr("r", scale*0.12)
          .attr("fill",colors[j])
          .attr("opacity",1);
    }


/*
    for(j=0;j<5;j++){
      //if(j!=1){
        let angle = j*72/ 180 * Math.PI;

        svg.selectAll(".rectcol"+j)
          .data(data)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d,i) { 
            let value = d[variables[j]];
            return (i % 10) * 150 + 50 + Math.sin(angle)*(5+80*value/100)
          })
          .attr("width", 20)
          .attr("y", function(d,i) { 
            let value = d[variables[j]];
            return Math.floor(i/10)*150 + 50 - Math.cos(angle)*(5+80*value/100)+(20-20*value/100);
          })
          .attr("height", function(d){
            let value = d[variables[j]];
            return 20*value/100;
          })
          .attr("fill",colors[j])
          .attr("opacity",1);
        //}
      }

    svg.selectAll(".recttrust")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d,i) {
          return (i % 10) * 150 + 50
        })
        .attr("width", 20)
        .attr("y", function(d,i) {
          return Math.floor(i/10)*150 + 50 
        })
        .attr("height", 20)
        .attr("fill","#dddddd");

    svg.selectAll(".recttrustfill")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d,i) {
          let value = d['distrust_scientists'];
          return (i % 10) * 150 + 50;
        })
        .attr("width", 20)
        .attr("y", function(d,i) {
          let value = d['distrust_scientists'];
          return Math.floor(i/10)*150 + 50  +(20-20*value/100);
        })
        .attr("height", function(d,i){
          let value = d['distrust_scientists'];
          return 20 * value/100;
        })
        .attr("fill","#2196F3");
    
    svg.selectAll("text")
      .data(data)
    .enter().append("text")
      .attr("x",function(d,i) { return (i % 10) * 150+50 })
      .attr("y",function(d,i) { return Math.floor(i/10)*150+125; })
      .style("text-anchor", "middle")
      .text(function(d){
        return d['country_name'];
      });*/
}