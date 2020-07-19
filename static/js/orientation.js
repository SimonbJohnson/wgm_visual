console.log(data);
let width = $('#scatterplot1').width();
let height = 400;
let scatterplot1 = scatterplot('#scatterplot1',data,'D1','Q12-alotsome','Percent who named a religion',"Percent said they trust science 'A lot' or 'Some'",'WBI',width,height);
let scatterplot2 = scatterplot('#scatterplot2',data,'D1','Q12-alotsome','Percent who named a religion',"Percent said they trust science 'A lot' or 'Some'",'WBI',width,height);

function scatterplot(id,data,xKey,yKey,xTitle,yTitle,colorKey,w,h){
    
    console.log('Creating scatterplot in element '+id);
    colors = ['#cccccc','#E25538','#9CAF57','#FEC73C','#7895D4'];

    let padding = 50;

    var xScale = d3.scaleLinear()
        .domain([20, d3.max(data, function(d) { return d[xKey]; })])
        .range([padding, w - padding]);

    var yScale = d3.scaleLinear()
        .domain([20, d3.max(data, function(d) { return d[yKey]; })])
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
            return xScale(20);
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
                    return distance*15;
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

    svg.append("text")             
        .attr("transform",
            "translate(" + (w/2) + " ," + 
                           (h-10) + ")")
        .style("text-anchor", "middle")
        .text(xTitle);

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0)
        .attr("x",10 - (h / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text(yTitle);  

    return svg;   
}
