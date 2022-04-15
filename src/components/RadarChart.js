import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5radar from "@amcharts/amcharts5/radar";
import React, { useEffect } from "react";


const RadarChart = ({player}) => {
    useEffect(() => {
        let root = am5.Root.new("chartdiv");
    
        root.setThemes([am5themes_Animated.new(root)]);
    
        let chart = root.container.children.push(
          am5radar.RadarChart.new(root, {
            panX: false,
            panY: false,
          })
        );
        let xRenderer = am5radar.AxisRendererCircular.new(root, {});
        xRenderer.labels.template.setAll({
          radius: 10,
        });
    
        let data = [
          {
            playerDetail: "SHO",
            numberOfDetail: player.playerKickingPower,
          },
          {
            playerDetail: "DRI",
            numberOfDetail: player.playerDribbling,
          },
          {
            playerDetail: "SPD",
            numberOfDetail: player.playerSpeed,
          },
          {
            playerDetail: "DEF",
            numberOfDetail: player.playerOffensiveAwareness,
          },
          {
            playerDetail: "STR",
            numberOfDetail: player.playerStamina,
          },
          {
            playerDetail: "PAS",
            numberOfDetail: (player.playerLowPass + player.playerLoftedPass) / 2,
          },
        ];

        console.log(data);
    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5radar.AxisRendererRadial.new(root, {}),
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0,
        categoryField: "playerDetail",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let series = chart.series.push(
      am5radar.RadarLineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "numberOfDetail",
        categoryXField: "playerDetail",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    series.strokes.template.setAll({
      strokeWidth: 2,
    });

    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: series.get("fill"),
        }),
      });
    });

    xAxis.set(
      "tooltip",
      am5.Tooltip.new(root, {
        themeTags: ["axis"],
      })
    );

    yAxis.set(
      "tooltip",

      am5.Tooltip.new(root, {
        themeTags: ["axis"],
      })
    );

    series.data.setAll(data);
    xAxis.data.setAll(data);

    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  const playerAvg =
    (player.playerAcceleration +
      player.playerBalance +
      player.playerBallControl +
      player.playerCurl +
      player.playerDribbling +
      player.playerFinishing +
      player.playerHeading +
      player.playerJump +
      player.playerKickingPower +
      player.playerLoftedPass +
      player.playerLowPass +
      player.playerOffensiveAwareness +
      player.playerPhysicalContact +
      player.playerSetPieceTaking +
      player.playerSpeed +
      player.playerStamina +
      player.playerTightPossession) /
    17;
    return (
        <div>

        </div>
    )
}

export default RadarChart