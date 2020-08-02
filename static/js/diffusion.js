console.log(data);

let graphWidth = $('#scatterplot1').width();
let graphHeight = $('#scatterplot1').width();

let scatterplot1 = scatterplot('#scatterplot1',data,'distrust_society_nogov','distrust_scientists',['Distrust in Society'],["Percent answering 'A lot' or 'Some' to trusting scientist in their country"],'WBI',graphWidth,graphHeight,0,60,0,60);


let legenddata =  [{
   "country_id": 1,
   "country_name": "Low Distrust in society",
   "distrust_neighbours": 10,
   "distrust_government": 10,
   "distrust_scientists": 20,
   "distrust_journalists": 10,
   "distrust_doctors": 10,
   "distrust_ngos": 10,
   "distrust_society": 25.848,
   "distrust_society_nogov": 20.0775,
   "key_indicator_score": -0.11456,
   "key_indicator_rank": 111,
   "WBI": 4
 },{
   "country_id": 1,
   "country_name": "High Distrust in society",
   "distrust_neighbours": 40,
   "distrust_government": 40,
   "distrust_scientists": 20,
   "distrust_journalists": 40,
   "distrust_doctors": 40,
   "distrust_ngos": 40,
   "distrust_society": 25.848,
   "distrust_society_nogov": 20.0775,
   "key_indicator_score": -0.11456,
   "key_indicator_rank": 111,
   "WBI": 4
 }];

 generateDiffusionIcons(data);


function generateDiffusionIcons(data){
	let width = $('#viz1').width();
	let height = width/16*9;
  generateScaleArrow('#viz1scale');
  generateDiffusion('#viz1legend',legenddata,200,100,2,1,false,true);
	generateDiffusion('#viz1',data,width,height,16,9,false,true);

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

function generateScaleArrow(id){
    
    let width = $(id).width();
    let height = width/20;

    let scale = width/16

    let svg = d3.select(id)
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    let line = svg.append('line')
        .attr('x1',100)
        .attr('x2',100)
        .attr('y1',height/4*3)
        .attr('y2',height/4*3)
        .style('stroke','black')
        .style('stroke-width',1);

    line.transition().duration(1500)
      .attr('x2',width-100)

    svg.append("text")
      .attr("x",0)
      .attr("y",height/4)
      .style("text-anchor", "start")
      .text('Low Distrust in Scientists');

    svg.append("text")
      .attr("x",width)
      .attr("y",height/4)
      .attr("dy","0.5rem")
      .style("text-anchor", "end")
      .text('High Distrust in Scientists');

    let data = [1,2,3,4,5]

    let circles = svg.selectAll(".circletrust1")
        .data(data)
      .enter().append("circle")
        .attr("class", "circle")
        .attr("cx", function(d,i) {
          return width/6*(i+1)
        })
        .attr("cy", height*1/4)
        .attr("r", function(d,i){
          let value = Math.sqrt(i*10+5);
            return scale*0.12*value/15
        })
        .attr("fill","#009EE2")
        .attr("opacity",0);

      circles
        .transition().delay(function(d,i){
          return i*250;
        })
        .attr("opacity",1);

    /*svg.selectAll(".circletrust")
        .data(data)
      .enter().append("rect")
        .attr("x", function(d,i) {
          return width/6*(i+1)
        })
        .attr("y", function(d,i) {
          let value = i*10+10;
          return height*1/4
        })
        .attr("width", function(d,i){
            let value = Math.sqrt(i*10+5);
            return scale*0.12*value/15*3
        })
        .attr("height", function(d,i){
            let value = Math.sqrt(i*10+5);
            return scale*0.12*value/15*3
        })
        .attr("fill","#009EE2");*/

}