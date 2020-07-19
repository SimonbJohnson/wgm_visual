console.log('orientation draft');
console.log(data);
byIncomeGroup(data,1);
byIncomeGroup(data,2);
byIncomeGroup(data,3);
byIncomeGroup(data,4);



function generateVisual(data) {

    let svg = d3.select('#orientation1')
            .append("svg")
            .attr("width", 1200)
            .attr("height", 600);

    svg.selectAll(".bar1")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d,i) { return (i % 10) * 110 })
      .attr("width", 20)
      .attr("y", function(d,i) { return Math.floor(i/10)*110; })
      .attr("height", function(d){ return 100})
      .attr("fill","grey");

    svg.selectAll(".bar2")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d,i) { return (i % 10) * 110 +30})
      .attr("width", 60)
      .attr("y", function(d,i) { return Math.floor(i/10)*110; })
      .attr("height", function(d){ return 100})
      .attr("fill","grey");            

    svg.selectAll(".bar3")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d,i) { return (i % 10) * 110 })
      .attr("width", 20)
      .attr("y", function(d,i) { return Math.floor(i/10)*110+(100-d['Q12-alotsome']); })
      .attr("height", function(d){ return d['Q12-alotsome']})
      .attr("fill","red");

    svg.selectAll(".bar4")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d,i) { return (i % 10) * 110 +30})
      .attr("width", 60)
      .attr("y", function(d,i) { return Math.floor(i/10)*110+(100-d['D1']); })
      .attr("height", function(d){ return d['D1']})
      .attr("fill","orange");

    svg.selectAll(".bar5")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d,i) { return (i % 10) * 110 +30})
      .attr("width", 60)
      .attr("y", function(d,i) { return Math.floor(i/10)*110+(100-d['Q29-No']); })
      .attr("height", function(d){ return d['Q29-No']})
      .attr("fill","blue");

    svg.selectAll(".bar6")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d,i) { return (i % 10) * 110 +30})
      .attr("width", 60)
      .attr("y", function(d,i) { return Math.floor(i/10)*110+(100-d['Q29-No']-d['Q30-Religion']); })
      .attr("height", function(d){ return d['Q30-Religion']})
      .attr("fill","green");

    /*
    svg.selectAll("text")
      .data(data)
    .enter().append("text")
      .attr("x",function(d,i) { return (i % 10) * 110 })
      .attr("y",function(d,i) { return Math.floor(i/10)*110+105; })
      .text(function(d){
        return d['country name'];
      });*/
      
    svg.selectAll(".bar3")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d,i) { return (i % 10) * 110 })
      .attr("width", 20)
      .attr("y", function(d,i) { return Math.floor(i/10)*110+(100-d['Q12-alotsome']); })
      .attr("height", function(d){ return d['Q30+Q12-reversible']})
      .attr("fill","#ff9999");



}

function byIncomeGroup(data,ig){
    let newData = data.filter(function(d){
        if(d['WBI']==ig){
            return true;
        } else {
            return false;
        }
    });
    generateVisual(newData);
}