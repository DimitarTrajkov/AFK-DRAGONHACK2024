import React, { useEffect, useRef, memo } from 'react';
//import { createChart } from 'lightweight-charts';

// TradingViewWidget.jsx


// TradingViewWidget.jsx

function ChartElement() {
  const container = useRef();
  let flag = 1;
  useEffect(
    () => {
      if(flag != 0) {
        flag=0;
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "width": 1000,
          "height": 600,  
          "autosize": true,
          "symbol": "TVC:USOIL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
      }
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ margin: "auto",  width: "80%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default memo(ChartElement);

// const Graph = () => {
//   const container = useRef();
//   let flag = 1;
//   useEffect(
//     () => {
//       if(flag != 0) {
//       flag=0;
//       const script = document.createElement("script");
//       script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
//       script.type = "text/javascript";
//       script.async = true;
//       script.innerHTML = `
//       {
//           "symbols": [
//             [
//               "TVC:USOIL|1D"
//             ],
//             [
//               "FRED:NDQ100|1D"
//             ],
//             [
//               "BLACKBULL:US30|1D"
//             ]
//           ],
//           "chartOnly": false,
//           "width": 800,
//           "height": 400,
//           "locale": "en",
//           "colorTheme": "light",
//           "autosize": false,
//           "showVolume": false,
//           "showMA": false,
//           "hideDateRanges": false,
//           "hideMarketStatus": true,
//           "hideSymbolLogo": false,
//           "scalePosition": "right",
//           "scaleMode": "Normal",
//           "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
//           "fontSize": "10",
//           "noTimeScale": false,
//           "valuesTracking": "1",
//           "changeMode": "price-and-percent",
//           "chartType": "area",
//           "lineWidth": 2,
//           "lineType": 0,
//           "dateRanges": [
//             "1d|1",
//             "1m|1D",
//             "3m|60",
//             "12m|1D",
//             "60m|1W",
//             "all|1M"
//           ]
//         } `;
//       container.current.appendChild(script);
//     }
//     },
//     []
//   );

//   return (
//     <div className="tradingview-widget-container" ref={container} style={{ margin: "auto",  width: "80%" }}>
//       <div className="tradingview-widget-container__widget"></div>
//       <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
//     </div>
//   );
// }

// export default memo(Graph);

// const Graph = () => {

//     const [data, setData] = useState([]);
//     useEffect(() => {
//       // Fetch data from the JSON file
//       fetch("/data.json")
//         .then((response) => response.json())
//         .then((data) => setData(data));
//     }, []);

//     useEffect(() => {
//         const chartOptions = { layout: { textColor: 'white', background: { type: 'solid', color: 'black' } } };
//         const chart = createChart(document.getElementById('chart-container'), chartOptions);
        
//         const areaSeries = chart.addAreaSeries({
//             lineColor: '#2962FF', topColor: '#2962FF',
//             bottomColor: 'rgba(41, 98, 255, 0.28)',
//         });
//         areaSeries.setData([
//             { time: '2018-12-22', value: 32.51 },
//             { time: '2018-12-23', value: 31.11 },
//             { time: '2018-12-24', value: 27.02 },
//             { time: '2018-12-25', value: 27.32 },
//             { time: '2018-12-26', value: 25.17 },
//             { time: '2018-12-27', value: 28.89 },
//             { time: '2018-12-28', value: 25.46 },
//             { time: '2018-12-29', value: 23.92 },
//             { time: '2018-12-30', value: 22.68 },
//             { time: '2018-12-31', value: 22.67 },
//         ]);

//         const candlestickSeries = chart.addCandlestickSeries({
//             upColor: '#26a69a', downColor: '#ef5350', borderVisible: false,
//             wickUpColor: '#26a69a', wickDownColor: '#ef5350',
//         });
//         candlestickSeries.setData([
//             { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
//             { time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },
//             { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
//             { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },
//             { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
//             { time: '2018-12-27', open: 91.04, high: 121.40, low: 82.70, close: 111.40 },
//             { time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },
//             { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },
//             { time: '2018-12-30', open: 106.33, high: 110.20, low: 90.39, close: 98.10 },
//             { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },
//         ]);

//         chart.timeScale().fitContent();
        
//         // Clean up the chart when the component unmounts
//         return () => chart.remove();
//     }, []);

//     return <div id="chart-container" style={{ width: "80%", height: "400px", margin:"auto" }}></div>;
// };

// export default Graph;
