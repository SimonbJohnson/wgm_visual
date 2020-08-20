console.log(diffusionData);

let graphWidth = $('#scatterplot1').width();
let graphHeight = $('#scatterplot1').width();

let scatterplot1 = scatterplot('#scatterplot1',diffusionData,'distrust_society_nogov','distrust_scientists',['Distrust in Society'],["Percent answering 'A lot' or 'Some' to trusting scientist in their country"],'WBI',graphWidth,graphHeight,0,60,0,60);

$('.proportional').each(function() {
  let width = $(this).width();
    $(this).height(width);
});

let legenddata =  [{
   "country_id": 1,
   "country_name": "Low distrust in society and scientists",
   "distrust_neighbours": 20,
   "distrust_government": 20,
   "distrust_scientists": 20,
   "distrust_journalists": 20,
   "distrust_doctors": 20,
   "distrust_ngos": 20,
   "distrust_society": 25.848,
   "distrust_society_nogov": 20.0775,
   "key_indicator_score": -0.11456,
   "key_indicator_rank": 111,
   "WBI": 4
 },{
   "country_id": 1,
   "country_name": "Low distrust in scientists and high distrust in society",
   "distrust_neighbours": 50,
   "distrust_government": 50,
   "distrust_scientists": 10,
   "distrust_journalists": 50,
   "distrust_doctors": 50,
   "distrust_ngos": 50,
   "distrust_society": 25.848,
   "distrust_society_nogov": 20.0775,
   "key_indicator_score": -0.11456,
   "key_indicator_rank": 111,
   "WBI": 4
 },{
   "country_id": 1,
   "country_name": "High distrust in scientists and low distrust in society",
   "distrust_neighbours": 20,
   "distrust_government": 20,
   "distrust_scientists": 50,
   "distrust_journalists": 20,
   "distrust_doctors": 20,
   "distrust_ngos": 20,
   "distrust_society": 25.848,
   "distrust_society_nogov": 20.0775,
   "key_indicator_score": -0.11456,
   "key_indicator_rank": 111,
   "WBI": 4
 },{
   "country_id": 1,
   "country_name": "High distrust in scientists and high distrust in society",
   "distrust_neighbours": 50,
   "distrust_government": 50,
   "distrust_scientists": 50,
   "distrust_journalists": 50,
   "distrust_doctors": 50,
   "distrust_ngos": 50,
   "distrust_society": 25.848,
   "distrust_society_nogov": 20.0775,
   "key_indicator_score": -0.11456,
   "key_indicator_rank": 111,
   "WBI": 4
 }];

 generateDiffusionIcons(diffusionData);


function generateDiffusionIcons(data){
  generateScaleArrow('#viz1scale');
  //generateDiffusion('#viz1legend',legenddata,400,100,4,1,false,true,0);

  let newData = diffusionData.sort(function(a,b){
    return parseFloat(a['distrust_scientists']) - parseFloat(b['distrust_scientists']);
  });

  decData = decimate(newData);
  decData.shift();

  generateDiffusion('#viz1few',decData,7,2,false,true,0);
	generateDiffusion('#viz1',newData,16,9,false,false,0);

  $('#viz1').hide();

  $('#viz1switch').on('click',function(d){
    $('#viz1').toggle();
    $('#viz1few').toggle();
  });

  generateDiffusion('#viz1bfew',decData,7,2,false,true,1);
  generateDiffusion('#viz1b',newData,16,9,false,false,1);

  $('#viz1b').hide();

  $('#viz1bswitch').on('click',function(d){
    $('#viz1b').toggle();
    $('#viz1bfew').toggle();
  });



  generateDiffusion('#viz1cfew',decData,7,2,false,true,2);
  generateDiffusion('#viz1c',newData,16,9,false,false,2);

  $('#viz1c').hide();

  $('#viz1cswitch').on('click',function(d){
    $('#viz1c').toggle();
    $('#viz1cfew').toggle();
  });

  generateDiffusion('#viz1dfew',decData,7,2,false,true,3);
  generateDiffusion('#viz1d',newData,16,9,false,false,3);

  $('#viz1d').hide();

  $('#viz1dswitch').on('click',function(d){
    $('#viz1d').toggle();
    $('#viz1dfew').toggle();
  });

	let width2 = $('#viz2').width();
	let height2 = $('#viz2').width();
	let southAfrica = diffusionData.filter(function(d){
		if(d['country_name']=='South Africa'){
			return true;
		} else {
			return false;
		}
	});
	generateDiffusion('#viz2',southAfrica,1,1,true,false,4);

  /*let width3 = $('#viz3').width();
  let height3 = width/16*9;
  generateDiffusion('#viz3',data,width,height,16,9,false,false,3);	*/

  let width4 = $('#viz2').width();
  let height4 = $('#viz2').width();
  let vietnam = diffusionData.filter(function(d){
    if(d['country_name']=='Vietnam'){
      return true;
    } else {
      return false;
    }
  });
  generateDiffusion('#viz4',vietnam,1,1,true,false,4);
}

function generateScaleArrow(id){
    
    let width = $(id).width();
    let height = width/20;

    let scale = width/16

    let svg = d3.select(id)
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    let aSize = scale/5

    svg
      .append('defs')
      .append('marker')
      .attr('id', 'arrow')
      .attr('viewBox', [0, 0, 20, 20])
      .attr('refX', 10)
      .attr('refY', 10)
      .attr('markerWidth', 10)
      .attr('markerHeight', 10)
      .attr('orient', 'auto-start-reverse')
      .append('path')
      .attr('d', d3.line()([[0, 0], [0, 20], [20, 10]]))
      .attr('stroke', 'black');

    let line = svg.append('line')
        .attr('x1',200)
        .attr('x2',200)
        .attr('y1',height/4*3)
        .attr('y2',height/4*3)
        .attr('marker-end', 'url(#arrow)')
        .style('stroke','black')
        .style('stroke-width',1);

    line.transition().duration(1500)
      .attr('x2',width-200)

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
          return (width-200)/6*(i+1)+100
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

}