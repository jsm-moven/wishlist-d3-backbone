let svgDimensions = [600, 100];
let svg = d3.select('#wishlist-chart')
  .append('svg')
    .attr('width', `${svgDimensions[0]}`)
    .attr('height', `${svgDimensions[1]}`);

const files = ["./data/sampleWishlistResponse.json", "./data/sampleStashResponse.json"];
Promise.all(files.map(url => d3.json(url))).then(function(values) {
  let currentBalance = values[1].currentStashBalance;
  let wishlist = {};
  let headers = [];
  let totalWishlistCost = 0;

  values[0].active.map((item) => {
    headers.push('item-'+item.order);
    wishlist['item-'+item.order] = item.price;
    totalWishlistCost += item.price;
  })

  let stack = d3.stack()
    .keys(headers);
  let stackedSeries = stack([wishlist]);

  console.log('wishlist: ', wishlist);

  let colors = d3.schemeRdYlGn[headers.length];
  let x = d3.scaleLinear()
    .domain([0, Math.max(currentBalance, totalWishlistCost)])
    .range([0, svgDimensions[0]]);

  const animationTime = 150;
  let t = d3.transition().duration(animationTime);

  let rects = svg.selectAll('rect')
    .data(stackedSeries)
    .enter()
    .append('rect')
    .attr('y', 20)
    .attr('x', (d) => {
      return x(d[0][0]);
    })
    .attr('width', 0)
    .attr('height', 40)
    .attr('fill', (d, i) => {
      return colors[i];
    })
    .attr('fill-opacity', 0)
    .transition(t)
      .delay((d, i) => {
        return i*animationTime;
      })
      .attr('width', (d) => {
        return x(d[0].data[d.key]);
      })
      .attr('fill-opacity', 1);

  let list = d3.select('#wishlist-list')
    .selectAll('li')
    .data(values[0].active)
    .enter()
    .append('li')
    .text((d) => {
      return `${d.name} ($${d.price})`;
    })
    .style('color', (d, i) => {
      return `${colors[i]}`;
    })
    .style('opacity', 0)
    .transition(t)
      .delay((d, i) => {
        return i*animationTime;
      })
      .style('opacity', 1);

    let info = d3.select('#wishlist-info')
      .append('h4')
      .text(`Your current balance is $${currentBalance}`);
    info.append('h4')
      .text(`Your wishlist's total cost is $${totalWishlistCost}`);
});
