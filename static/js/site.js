function scatterplot(id,data,xKey,yKey,xTitle,yTitle,colorKey,w,h,xmin,xmax,ymin,ymax){
    
    console.log('Creating scatterplot in element '+id);
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
               
    let circles = svg.selectAll("circle")
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
        });

    let init = false;

    $(window).scroll(function(){
        if(!init){
            let topWin = $(window).scrollTop();
            let topElement = $(id).offset().top;
            if(topWin>topElement-50){
                circles.transition().ease(d3.easeCubic).duration(function(d){
                    let distance = d[xKey]-20;
                    return distance*25;
                }).attr('cx', function(d) {
                    return xScale(d[xKey]);
                });
                init=true;
            }          
        }
    });
         
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

