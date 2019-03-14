
function drawCircos(error, months, electricalConsumption, daysOff, daysOffneu, daysOffend) {
  var width = "800";
  var circosHeatmap = new Circos({
        container: '#heatmapChart',
        width: width,
        height: width
    });

    electricalConsumption = electricalConsumption.map(function(d) {
      return {
        block_id: d.month,
        start: parseInt(d.start),
        end: parseInt(d.end),
        value: parseFloat(d.value)
      };
    })
    daysOff = daysOff.map(function(d) {
      return {
        block_id: d.month,
        start: parseInt(d.start),
        end: parseInt(d.end),
        value: parseFloat(d.value)
      };
    })
    daysOffneu = daysOffneu.map(function(d) {
      return {
        block_id: d.month,
        start: parseInt(d.start),
        end: parseInt(d.end),
        value: parseFloat(d.value)
      };
    })
    daysOffend = daysOffend.map(function(d) {
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
      .heatmap('electricalConsumption', electricalConsumption, {
        innerRadius: 0.8,
        outerRadius: 0.98,
        logScale: false,
        color: 'YlOrRd',
        events: {
          'mouseover.demo': function (d, i, nodes, event) {
            console.log(d, i, nodes, event)
          }
        }
      })
      .heatmap('days-off', daysOff, {
        innerRadius: 0.55,
        outerRadius: 0.75,
        logScale: false,
        color: 'Blues'
      })
      .heatmap('days-off-neu', daysOffneu, {
        innerRadius: 0.35,
        outerRadius: 0.5,
        logScale: false,
        color: 'Reds'
      })
      .heatmap('days-off-end', daysOffend, {
        innerRadius: 0.15,
        outerRadius: 0.3,
        logScale: false,
        color: 'Blues'
      })
      .render()
}

d3.queue()
  .defer(d3.json, './months.json')
  .defer(d3.csv, './circle_1_ersatz.csv')
  .defer(d3.csv, './circle_3_ersatz.csv')
  .defer(d3.csv, './circle_4_ersatz.csv')
  .defer(d3.csv, './circle_5_ersatz.csv?ts=<?= time()')
  .await(drawCircos)
