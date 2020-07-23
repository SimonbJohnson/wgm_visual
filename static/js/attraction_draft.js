console.log('attractions draft');
console.log(data);


let visual = 1;

/*let newData = data.sort(function(a,b){
  return a['HDI'] - b['HDI'];
});*/

data.forEach(function(d){
  d.position = d['industry']*1+d['services']*2
});

let newData = data.sort(function(a,b){
  return a.position - b.position;
});

//byIncomeGroup(data,1);
//byIncomeGroup(data,2);
//byIncomeGroup(data,3);
//byIncomeGroup(data,4);

generateVisual(newData);

function generateVisual(data) {
    console.log('here');
    let svg = d3.select('#viz')
            .append("svg")
            .attr("width", 1400)
            .attr("height", 5000);

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx", function(d,i) { return (i % 10) * 140 + 40 })
      .attr("cy", function(d,i) { return Math.floor(i/10)*140+60; })
      .attr("r", function(d){ return d['q13 - A lot, Some']/4})
      .attr("fill","steelblue");


    svg.selectAll(".circle2")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx", function(d,i) { return (i % 10) * 140 + 70 })
      .attr("cy", function(d,i) { return Math.floor(i/10)*140+60; })
      .attr("r", function(d){ return d['Increase']/4})
      .attr("fill","blue");

    /*svg.selectAll(".circle2")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx", function(d,i) { return (i % 10) * 140 + 70 })
      .attr("cy", function(d,i) { return Math.floor(i/10)*140+60; })
      .attr("r", function(d){ return d['Q19 - Decrease']/4})
      .attr("fill","red");*/

    svg.selectAll(".circle3")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx", function(d,i) { return (i % 10) * 140 + 100 })
      .attr("cy", function(d,i) { return Math.floor(i/10)*140+60; })
      .attr("r", function(d){ return d['Yes']/4})
      .attr("fill","steelblue");



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

    svg.selectAll("text")
      .data(data)
    .enter().append("text")
      .attr("x",function(d,i) { return (i % 10) * 140 +20})
      .attr("y",function(d,i) { return Math.floor(i/10)*140+105; })
      .text(function(d){
        return d['country_name'];
      });
}

function byIndustryGroup(data,group){
    let newData = data.filter(function(d){
        if(d[group]>=d['industry'] && d[group]>=d['services'] && d[group]>=d['agriculture']){
            return true;
        } else {
            return false;
        }
    });

    if(visual==1){
      generateVisual(newData);
    }
    if(visual==2){
      generateVisual2(newData);
    }
}

function generateVisual2(){

}


function byIncomeGroup(data,ig){
    let newData = data.filter(function(d){
        if(d['WBI']==ig){
            return true;
        } else {
            return false;
        }
    });
    if(visual==1){
      $('#viz').append('<p>Income Group '+ig+'</p>')
      generateVisual(newData);
    }
    if(visual==2){
      generateVisual2(newData);
    }
}