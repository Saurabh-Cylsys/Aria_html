anychart.onDocumentReady(function () {
  var colors = [
    "#0072A5",
    "#3BBA7B",
    "#FFCD61",
    "#FA5446",
    "#7D58BD",
    "#29D8D5",
  ];

  // create map
  var map = anychart.map();
  // sets geodata using https://cdn.anychart.com/geodata/latest/countries/united_states_of_america/united_states_of_america.js
  map.geoData("anychart.maps.united_states_of_america");
  // set map padding and margin
  map.padding(0).margin(0);

  // create first label for map and set settings it
  map
    .label(0)
    .enabled(true)
    .text("SALES")
    .adjustFontSize(true, false)
    .maxFontSize(30)
    .minFontSize(5)
    .width("30%")
    .fontColor("black")
    .position("center")
    .anchor("center")
    .hAlign("center")
    .offsetY("-40%");

  // create second label for map and set settings it
  map
    .label(1)
    .enabled(true)
    .text("$212,600,000")
    .adjustFontSize(true, false)
    .maxFontSize(35)
    .minFontSize(5)
    .width("80%")
    .fontColor("black")
    .position("center")
    .anchor("center")
    .hAlign("center")
    .offsetY("40%");

  // create choropleth series with generated data
  var choropleth = map.choropleth(generateData(map));
  // set stroke
  choropleth.stroke("1.5 #fff");

  // create ordinal color scale
  var colorScale = anychart.scales.ordinalColor([
    { equal: "Northeast", color: colors[0] },
    { equal: "Midatlantic", color: colors[1] },
    { equal: "Southeast", color: colors[2] },
    { equal: "Midwest", color: colors[3] },
    { equal: "West", color: colors[4] },
    { equal: "Great Lakes", color: colors[5] },
  ]);
  // set color scale
  choropleth.colorScale(colorScale);

  var data = [
    { x: "Northeast", value: 50 },
    { x: "Midatlantic", value: 80 },
    { x: "Southeast", value: 50 },
    { x: "Midwest", value: 30 },
    { x: "West", value: 45 },
    { x: "Great Lakes", value: 40 },
  ];

  // create pie chart with passed data
  var pie = anychart.pie(data);
  pie
    .stroke("2 #fff")
    // create empty area in pie chart
    .innerRadius("80%")
    // disabled labels
    .labels(false);

  // set map to center content of chart
  pie.center().content(map);

  // set palette
  pie.palette().items(colors);
  // set legend settings
  pie.legend().position("right").itemsLayout("vertical");

  // set container id for the chart
  pie.container("container");
  // initiate chart drawing
  pie.draw();
});

function generateData(chart) {
  var data = [];
  var features = chart.geoData().features;

  for (var i = 0; i < features.length; i++) {
    var feature = features[i];

    if (feature.properties) {
      var id = feature.properties[chart.geoIdField()];
      var value;

      switch (id) {
        case "US.WA":
        case "US.OR":
        case "US.CA":
        case "US.NV":
        case "US.AZ":
        case "US.AK":
        case "US.HI":
          value = "West";
          break;
        case "US.ID":
        case "US.MT":
        case "US.ND":
        case "US.SD":
        case "US.NE":
        case "US.KS":
        case "US.OK":
        case "US.TX":
        case "US.NM":
        case "US.CO":
        case "US.UT":
        case "US.WY":
          value = "Midwest";
          break;
        case "US.AR":
        case "US.TN":
        case "US.NC":
        case "US.SC":
        case "US.GA":
        case "US.LA":
        case "US.MS":
        case "US.AL":
        case "US.FL":
          value = "Southeast";
          break;
        case "US.MN":
        case "US.WI":
        case "US.MI":
        case "US.IA":
        case "US.MO":
        case "US.IL":
        case "US.IN":
        case "US.KY":
        case "US.OH":
          value = "Great Lakes";
          break;
        case "US.PA":
        case "US.WV":
        case "US.VA":
        case "US.MD":
        case "US.DE":
        case "US.NJ":
          value = "Midatlantic";
          break;
        default:
          value = "Northeast";
      }

      data.push({ id: id, value: value });
    }
  }

  return data;
}
