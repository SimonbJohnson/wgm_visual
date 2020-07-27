console.log('orientation draft');
console.log(data);


let visual = 4;


byIncomeGroup(data,1);
byIncomeGroup(data,2);
byIncomeGroup(data,3);
byIncomeGroup(data,4);
//generateVisual4(data);

function generateVisual(data) {

    let svg = d3.select('#orientation1')
            .append("svg")
            .attr("width", 1200)
            .attr("height", 3000);

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
      console.log(d['WBI']==ig);
        if(d['WBI']==ig){
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

    if(visual==4){
      generateVisual4(newData);
    }
}

//visual2

function generateVisual2(data) {


  let svg = d3.select('#orientation1')
            .append("svg")
            .attr("width", 1200)
            .attr("height", 600);
  circle3 = [];
  for(r=0;r<100;r++){


    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx", function(d,i) { return (i % 10) * 120 + (r % 10) * 5+5 })
      .attr("cy", function(d,i) { return Math.floor(i/10)*120 + Math.floor(r/10)*5+5 ; })
      .attr("r", function(d){ return 2})
      .attr("fill",function(d,i){
        if((100-r)<d['Q12-alotsome']){
          return "red";
        } else {
          return "grey";
        }    
      });

    let circles = svg.selectAll(".circle3")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx", function(d,i) { return (i % 10) * 120 + (r % 10) * 5 + 60 })
      .attr("cy", function(d,i) { return Math.floor(i/10)*120 + Math.floor(r/10)*5 +5; })
      .attr("r", function(d){ return 2})
      .attr("fill","grey")
    circle3.push(circles);

    svg.on('click',function(){
      for(r=0;r<100;r++){
        trans(circle3[r],r);
      }
    });
  }
}

function trans(circles,r){
    circles.transition().delay(function(d){
        return (100-r)*10
      }).duration(0).attr("fill",function(d,i){
          if((100-r)<d['D1']){
            return "orange";
          } else {
            return "grey";
          }    
      });

    circles.transition().delay(3000)
      .duration(1000)
      .attr("cx", function(d){
        return Math.random()*1200
      })
      .attr("cy", function(d){
        return Math.random()*600
      });        
};

function generateVisual3(data) {


  let svg = d3.select('#orientation1')
            .append("svg")
            .attr("width", 1200)
            .attr("height", 3000);

  pebblesAll = [];
  let organgePebblesData = []
  data.forEach(function(d,i){
    for(r=0;r<100;r++){
      let pebble = {}
      pebble.cx = (i % 10) * 120 + (r % 10) * 5+5+Math.random()*1.5;
      pebble.cy = Math.floor(i/10)*120 + Math.floor(r/10)*5+5+Math.random()*1.5;
      pebble.points = [];
      pebble.r = r;
      for(j=0;j<8;j++){
          let angle = j*45/ 180 * Math.PI;
          let x = Math.sin(angle)*2.5+Math.random()*0.5;
          let y = Math.cos(angle)*2.5+Math.random()*0.5;
          pebble.points.push([x,y]);
          if((100-r)<d['D1']){
            pebble.color = "orange";
          } else {
            pebble.color = "grey";
          }
      }
      organgePebblesData.push(pebble);
    }    
  });


  let lineGenerator = d3.line().curve(d3.curveBasis);

  let pebbles = svg.selectAll(".path3")
    .data(organgePebblesData)
  .enter().append("path")
    .attr("class", "pebble")
    .attr("d",function(d,i){
        let pathData = [];
        d.points.forEach(function(point){
          pathData.push([point[0]+d.cx,point[1]+d.cy]);
        });
        let path = lineGenerator(pathData);
        return path
    })
    .attr("fill",function(d,i){
        return "grey"
    });



    svg.on('click',function(){
        transPebbles(pebbles);
    });
}

function transPebbles(pebbles){
    pebbles.transition().delay(function(d){
        return (100-d.r)*10
      }).duration(0).attr("fill",function(d,i){
          return d.color; 
      });

    let lineGenerator = d3.line().curve(d3.curveBasis);

    pebbles
      .transition().delay(1000)
      .duration(2000)
      .attr("d",function(d,i){
        let pathData = [];
        let cx = Math.random()*1200;
        let cy = Math.random()*3000;
        d.points.forEach(function(point){
          pathData.push([point[0]+cx,point[1]+cy]);
        });
        //pathData = [[1,1],[2,2],[3,3]]
        let path = lineGenerator(pathData);
        return path
      }); 
};

function generateVisual4(data){

    let width = 1200;
    let scale = width/16;

    let svg = d3.select('#viz')
            .append("svg")
            .attr("width", 380)
            .attr("height", width/16*9);

    svg.selectAll(".linesgrey1")
          .data(data)
        .enter().append("line")
          .attr("class", "line")
          .attr("x1",function(d,i) { return Math.floor(i / 9) * scale + scale*0.2 })
          .attr("y1",function(d,i) { return (i % 9)*scale + scale*0.5; })
          .attr("x2",function(d,i) { return Math.floor(i / 9) * scale + scale*0.4 })
          .attr("y2",function(d,i) { return (i % 9)*scale + scale*0.5 + d['B-Q30-religion-Q12 high']*scale; })
          .attr("stroke","#3F1A13")
          .attr("stroke-width",1.5);

    svg.selectAll(".linesgrey2")
          .data(data)
        .enter().append("line")
          .attr("class", "line")
          .attr("x1",function(d,i) { return Math.floor(i / 9) * scale + scale*0.6 })
          .attr("y1",function(d,i) { return (i % 9)*scale + scale*0.5; })
          .attr("x2",function(d,i) { return Math.floor(i / 9) * scale + scale*0.4 })
          .attr("y2",function(d,i) { return (i % 9)*scale + scale*0.5 + d['B-Q30-religion-Q12 high']*scale; })
          .attr("stroke","#3F1A13")
          .attr("stroke-width",1.5);

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx",function(d,i) { return Math.floor(i / 9) * scale + scale*0.2 })
      .attr("cy",function(d,i) { return (i % 9)*scale + scale*0.5; })
      .attr("r", function(d){ return scale/75*Math.sqrt(d['A-D1-Yes-Q12-low']*100) })
      .attr("fill",'#C66257');

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx",function(d,i) { return Math.floor(i / 9) * scale + scale*0.4 })
      .attr("cy",function(d,i) { return (i % 9)*scale + scale*0.5 + d['B-Q30-religion-Q12 high']*scale; })
      .attr("r", function(d){ return scale/75*Math.sqrt(d['B-Q30-religion-Q12 high']*100) })
      .attr("fill",'#E95A0C');

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx",function(d,i) { return Math.floor(i / 9) * scale + scale*0.6 })
      .attr("cy",function(d,i) { return (i % 9)*scale + scale*0.5; })
      .attr("r", function(d){ return scale/75*Math.sqrt(d['C-D1-rest']*100) })
      .attr("fill",'#009EE2');

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx",function(d,i) { return Math.floor(i / 9) * scale + scale*0.8 })
      .attr("cy",function(d,i) { return (i % 9)*scale + scale*0.5; })
      .attr("r", function(d){ return scale/75*Math.sqrt(d['D-D1-No-Q12-High']*100) })
      .attr("fill",'#193C78');

    svg.selectAll("text")
      .data(data)
    .enter().append("text")
      .attr('class','country_label')
      .attr("x",function(d,i) { return Math.floor(i / 9) * scale + scale*0.5 })
      .attr("y",function(d,i) { return (i % 9)*scale + scale; })
      .style("text-anchor", "middle")
      .text(function(d){
        return d['country name'];
      });
}