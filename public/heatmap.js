
function drawCircos(error, months, Circle2014, Circle2015, Circle2016, Circle2017) {
  var width = "800";
  var circosHeatmap = new Circos({
        container: '#heatmapChart',
        width: width,
        height: width
    });

    Circle2014 = Circle2014.map(function(d) {
      return {
        block_id: d.month,
        start: parseInt(d.start),
        end: parseInt(d.end),
        value: parseFloat(d.value)
      };
    })
    Circle2015 = Circle2015.map(function(d) {
      return {
        block_id: d.month,
        start: parseInt(d.start),
        end: parseInt(d.end),
        value: parseFloat(d.value)
      };
    })
    Circle2016 = Circle2016.map(function(d) {
      return {
        block_id: d.month,
        start: parseInt(d.start),
        end: parseInt(d.end),
        value: parseFloat(d.value)
      };
    })
    Circle2017 = Circle2017.map(function(d) {
      return {
        block_id: d.month,
        start: parseInt(d.start),
        end: parseInt(d.end),
        value: parseFloat(d.value)
      };
    })
    circosHeatmap
      .layout(
        months,
        {
          innerRadius: width / 2 - 80,
          outerRadius: width / 2 - 30,
          ticks: {display: false},
          labels: {
            position: 'center',
            display: true,
            size: 14,
            color: '#000',
            radialOffset: 15
          }
        }
      )
      .heatmap('Circle2014', Circle2014, {
        innerRadius: 0.90,
        outerRadius: 0.98,
        logScale: false,
        color: 'RdYlGn',
        events: {
          'mouseover.demo': function (d, i, nodes, event) {
            console.log(d, i, nodes, event)
          }
        }
      })
      .heatmap('Circle2015', Circle2015, {
        innerRadius: 0.82,
        outerRadius: 0.90,
        logScale: false,
        color: 'RdYlGn'
      })
      .heatmap('Circle2016', Circle2016, {
        innerRadius: 0.74,
        outerRadius: 0.82,
        logScale: false,
        color: 'RdYlGn'
      })
      .heatmap('Circle2017', Circle2017, {
        innerRadius: 0.66,
        outerRadius: 0.74,
        logScale: false,
        color: 'RdYlGn'
      })
      .render()
}

d3.queue()
  .defer(d3.json, './months.json?')
  .defer(d3.csv, './circle2014.csv')
  .defer(d3.csv, './circle2015.csv')
  .defer(d3.csv, './circle2016.csv')
  .defer(d3.csv, './circle2017.csv')
  .await(drawCircos)
