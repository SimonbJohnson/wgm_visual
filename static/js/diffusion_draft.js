console.log('diffusion draft');
console.log(data);
console.log(data2)

data = data.sort(function(a,b){
  return b['key_indicator_rank'] - a['key_indicator_rank'];
});

data2 = data2.sort(function(a,b){
  return b['key_indicator_rank_no_gov'] - a['key_indicator_rank_no_gov'];
});

/*generateVisual(data2);

function generateVisual(data) {
    console.log(data);
    let svg = d3.select('#viz')
            .append("svg")
            .attr("width", 2000)
            .attr("height", 3000);
//

    colors = ['#E53935','#673AB7','#4CAF50','#FFEB3B','#FF9800'];
    variables = ['distrust_neighbours','distrust_government', 'distrust_journalists','distrust_doctors','distrust_ngos'];


    for(j=0;j<5;j++){
      //if(j!=1){
        let angle = j*72/ 180 * Math.PI;

        svg.selectAll(".rectgrey"+j)
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
            return Math.floor(i/10)*150 + 50 - Math.cos(angle)*(5+80*value/100) 
          })
          .attr("height", 20)
          .attr("fill","#dddddd")
          .attr("opacity",0.5);
        //}
      }



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
      });


}

function byIncomeGroup(data,ig){
    let newData = data.filter(function(d){
        if(d['WBI']==ig){
            return true;
        } else {
            return false;
        }
    });
    $('#viz').append('<p>Income Group '+ig+'</p>')
    generateVisual(newData);
}*/