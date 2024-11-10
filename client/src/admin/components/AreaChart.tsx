import React from "react";
import "./AreaChart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
  DotProps,
} from "recharts";

const data = [
  { name: "Mon", value: 8053 },
  { name: "Tue", value: 4200 },
  { name: "Wed", value: 6505 },
  { name: "Thu", value: 5020 },
  { name: "Fri", value: 8560 },
  { name: "Sat", value: 3290 },
  { name: "Sun", value: 9840 },
];

const CustomTooltip = ({ active, payload, label }: TooltipProps<any, any>) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : $${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const CustomActiveDot = (props: DotProps & { chartHeight: number }) => {
  const { cx, cy, strokeWidth, chartHeight } = props;
  const adjustedChartHeight = chartHeight - 20; // Adjust for the bottom margin

  return (
    <svg>
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#a8a8a8", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#8a8a8a", stopOpacity: 0 }}
          />
        </linearGradient>
      </defs>
      <g>
        {cy !== undefined && (
          <rect
            x={cx !== undefined ? cx - 7.5 : 0} // Center the rect horizontally
            y={cy}
            width={15} // Set width to 15px
            height={adjustedChartHeight - cy} // Set height to chartHeight
            fill="url(#lineGradient)" // Set background color to red
          />
        )}
        <circle
          cx={cx}
          cy={cy}
          r={6}
          stroke="#d9d9d9"
          strokeWidth={strokeWidth}
          fill="#E27458"
        />
      </g>
    </svg>
  );
};

interface CustomAreaChartProps {
  setTotalValue: (value: number) => void;
}

const CustomAreaChart: React.FC<CustomAreaChartProps> = ({ setTotalValue }) => {
  const chartHeight = 245; // Define the chart height
  const margin = { top: 10, right: 10, left: 0, bottom: -10 }; // Define the chart margins

  // Calculate the total value
  const totalValue = data.reduce((acc, curr) => acc + curr.value, 0);

  // Pass the total value to the parent component
  React.useEffect(() => {
    setTotalValue(totalValue);
  }, [totalValue, setTotalValue]);

  const renderCustomYAxisTick = (props: any) => {
    const { y, payload } = props;
    return (
      <text x={40} y={y} dy="0.335em" fill="#fff" textAnchor="end">
        {payload.value}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <AreaChart data={data} margin={margin}>
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#A6ABFF", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#A6ABFF", stopOpacity: 0.7 }}
            />
            <stop
              offset="70%"
              style={{ stopColor: "#A6ABFF", stopOpacity: 0.4 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#1a1a1a", stopOpacity: 0.4 }}
            />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#2a2a2a"
          vertical={false}
          horizontal={true}
        />
        <XAxis dataKey="name" tick={{ fill: "#fff" }} axisLine={false} />
        <YAxis
          tickFormatter={(value) => `${value}`}
          ticks={[2500, 5000, 7500, 10000]}
          domain={[0, 10000]}
          tick={renderCustomYAxisTick}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#a6abff"
          strokeWidth={2}
          fill="url(#areaGradient)"
          activeDot={
            <CustomActiveDot chartHeight={chartHeight} strokeWidth={3} />
          }
          isAnimationActive={true}
          animationDuration={500}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomAreaChart;
