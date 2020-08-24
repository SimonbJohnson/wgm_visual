function scatterplot(id,data,xKey,yKey,xTitle,yTitle,colorKey,w,h,xmin,xmax,ymin,ymax){
    
    console.log('Creating scatterplot in element '+id);

    labels = [{'id':31,'label':'India'},{'id':36,'label':'Kenya'},{'id':44,'label':'Malawi'},{'id':45,'label':'South Africa'},{'id':50,'label':'Vietnam'},{'id':51,'label':'Thailand'},{'id':12,'label':'United Kingdom'},{'id':11,'label':'Bangladesh'},{'id':60,'label':'Ethiopia'}]

    data.forEach(function(d){
        labels.forEach(function(l){
            if(d.country_id == l.id){
                l.x = d[xKey];
                l.y = d[yKey];
            }   
        });
    });
    console.log(labels);

    colors = ['#cccccc','#FF0000','#00B3CC','#FFC500','#3F1A13'];

    let padding = 60;

    var xScale = d3.scaleLinear()
        .domain([xmin, xmax])
        .range([padding, w - padding]);

    var yScale = d3.scaleLinear()
        .domain([ymin, ymax])
        .range([h-padding, 10]);
      
    var xAxis = d3.axisBottom().scale(xScale).ticks(5);
      
    var yAxis = d3.axisLeft().scale(yScale).ticks(5);

    var svg = d3.select(id)
               .append("svg")
               .attr("width", w)
               .attr("height", h);
               
    /*let circles = svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d) {
            return xScale(xmin);
        })
        .attr("cy", function(d) {
            return yScale(d[yKey]);
        })
        .attr("r", 3)
        .attr("fill", function(d){
            return colors[d[colorKey]];
        });*/

    let rects = svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function(d) {
            return xScale(xmin);
        })
        .attr("y", function(d) {
            return yScale(d[yKey]);
        })
        .attr("height", 5)
        .attr("width", 5)
        .attr("fill", function(d){
            return colors[d[colorKey]];
        });

    let init = false;
         
    svg.append("g")
        .attr("class", "x axis")   
        .attr("transform", "translate(0," + (h - padding) + ")")
        .call(xAxis);
      

    svg.append("g")
        .attr("class", "y axis")   
        .attr("transform", "translate(" + padding + ", 0)")
        .call(yAxis);

    svg.selectAll('xtext')
        .data(xTitle)
        .enter()
        .append("text")
        .attr("class","chartaxislabel")             
        .attr("transform",function(d,i){
            return "translate(" + (w/2) + " ," + 
                           (h-24+14*i) + ")"
        })
        .style("text-anchor", "middle")
        .text(function(d){
            return d;
        });

    svg.selectAll('xtext')
        .data(yTitle)
        .enter().
        append("text")
        .attr("class","chartaxislabel")
        .attr("transform", function(d,i){
            return "rotate(-90)"
        })
        .attr("y", 0)
        .attr("x",10 - (h / 2))
        .attr("dy", function(d,i){
            return (1*i+1)+"em";
        })
        .style("text-anchor", "middle")
        .text(function(d){
            return d;
        });

    let countrylabs = svg.selectAll('countrylabs')
        .data(labels)
        .enter()
        .append("text")
        .attr("class","countrylabs")
        .attr("x", function(d) {
            return xScale(d.x)+15;
        })
        .attr("y", function(d) {
            return yScale(d.y)+2;
        })
        .attr("dy",'0.5em')
        .style("text-anchor", "left")
        .text(function(d){
            return d.label;
        })
        .attr("opacity",0);

    let countrylines = svg.selectAll('labellines')
        .data(labels)
        .enter()
        .append("line")
        .attr("class","labslines")
        .attr("x1", function(d) {
            return xScale(d.x)+13;
        })
        .attr("y1", function(d) {
            return yScale(d.y)+2.5;
        })
        .attr("x2", function(d) {
            return xScale(d.x)+2.5;
        })
        .attr("y2", function(d) {
            return yScale(d.y)+2.5;
        })
        .attr("stroke","#3F1A13")
        .attr("stroke-width",1)
        .attr("opacity",0);

    $(window).scroll(function(){
        if(!init){
            let topWin = $(window).scrollTop();
            let topElement = $(id).offset().top;
            if(topWin>topElement-250){
                rects.transition().ease(d3.easeCubic).duration(function(d){
                    let distance = d[xKey]-20;
                    return distance*25;
                }).attr('x', function(d) {
                    return xScale(d[xKey]);
                });
                init=true;

                countrylines.transition().delay(1000)
                .attr("opacity",1);

                countrylabs.transition().delay(1000)
                .attr("opacity",1);
            }          
        }
    });

    return svg;
}


function donutGraph(id,data){

    
    let width = $(id).width();
    let height = $(id).width();
    let margin = 80;

    var radius = width / 2 - margin

    var svg = d3.select(id)
      .append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var color = d3.scaleOrdinal()
      .domain(data)
      .range(['#D1AB39','#CC3333','#29A78A'])

    var pie = d3.pie()
      .value(function(d) {return d.value; })
    var data_ready = pie(d3.entries(data))

    svg
      .selectAll('pies')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(radius/3*2)
        .outerRadius(radius)
      )
      .attr('fill', function(d){ return(color(d.data.key)) })
      .attr("stroke", "black")
      .style("stroke-width", "1px")
      .style("opacity", 0.7);

    var outerArc = d3.arc()
        .innerRadius(radius * 0.9)
        .outerRadius(radius * 0.9);

    svg
      .selectAll('allLabels')
      .data(data_ready)
      .enter()
      .append('text')
        .attr("class",'keylabel')
        .text( function(d) { console.log(d.data.key) ; return d.data.key } )
        .attr('transform', function(d) {
            var pos = outerArc.centroid(d);
            var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
            pos[0] = radius * 1.01 * (midangle < Math.PI ? 1 : -1);
            return 'translate(' + pos + ')';
        })
        .style('text-anchor', function(d) {
            var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
            return (midangle < Math.PI ? 'start' : 'end')
        })

}

function circleToDots(svg,cx,cy,value,scale,color,includeGrey=false){
    let radius = scale/100;
    let padding = 0;
    /*const circleData = d3.packSiblings(d3.range(value).map(() => ({r: radius + padding})));*/
    const angle = Math.PI * (3 - Math.sqrt(5));
    let circleData = []
    for (let i = 1; i <= value; ++i) {
        const r = (radius + padding) * 1.2 * Math.sqrt(i);
        const a = i * angle;
        const x = r * Math.cos(a);
        const y = r * Math.sin(a);
        circleData.push({'x':x,'y':y,'r':radius});
    }


    let circles = svg.selectAll("circledots")
        .data(circleData)
        .enter()
        .append("circle")
        .attr("cx", function(d) {
            return d.x+cx;
        })
        .attr("cy", function(d) {
            return d.y+cy;
        })
        .attr("r", function(d) {
            return d.r-padding;
        })
        .attr("fill",color);
}

function byIncomeGroup(data,ig){
    let newData = data.filter(function(d){
        if(d['WBI']==ig){
            return true;
        } else {
            return false;
        }
    })
    return newData;
}

function sortByAlpha(data,key){
    let newData = data.sort(function(a,b){
        return (a[key] < b[key]) ? -1 : (a[key] > b[key]) ? 1 : 0;
    });
    return newData
}

function generateScaleArrow(id,lefttext,righttext){
    
    let width = $(id).width();
    let height = 50

    let svg = d3.select(id)
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    let aSize = 5

    svg
      .append('defs')
      .append('marker')
      .attr('id', 'arrow')
      .attr('viewBox', [0, 0, aSize, aSize])
      .attr('refX', aSize/2)
      .attr('refY', aSize/2)
      .attr('markerWidth', aSize)
      .attr('markerHeight', aSize)
      .attr('orient', 'auto-start-reverse')
      .append('path')
      .attr('d', d3.line()([[0, 0], [0, aSize], [aSize, aSize*0.5]]))
      .attr('stroke', 'black');

    let line = svg.append('line')
        .attr('x1',200)
        .attr('x2',width-200)
        .attr('y1',height/2)
        .attr('y2',height/2)
        .attr('marker-end', 'url(#arrow)')
        .attr('marker-start', 'url(#arrow)')
        .style('stroke','black')
        .style('stroke-width',2);

    svg.append("text")
      .attr("x",180)
      .attr("y",height/2)
      .attr("dy","0.5rem")
      .style("text-anchor", "end")
      .text(lefttext);

    svg.append("text")
      .attr("x",width-180)
      .attr("y",height/2)
      .attr("dy","0.5rem")
      .style("text-anchor", "start")
      .text(righttext);

}

function example3(list){
  return list.splice(0,3)
}

function filterForIDs(list,IDs){
    list = list.filter(function(d){
        if(IDs.indexOf(d.country_id)>-1){
            return true;
        } else {
            return false;
        }
    });
    return list;
}

/*function getMedian(n,key,list){

    list = list.sort(function(a,b){
        return a[key] - b[key];
    });


}*/

function decimate(list){
    newList = list.filter(function(d,i){
        if(i % 10  ==0){
            return true;
        } else {
            return false;
        }
    });
    return newList;
}
