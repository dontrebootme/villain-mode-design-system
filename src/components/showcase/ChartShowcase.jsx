import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import Card from '../ui/Card';

const powerData = [
  { name: 'Mon', power: 4000, chaos: 2400 },
  { name: 'Tue', power: 3000, chaos: 1398 },
  { name: 'Wed', power: 2000, chaos: 9800 },
  { name: 'Thu', power: 2780, chaos: 3908 },
  { name: 'Fri', power: 1890, chaos: 4800 },
  { name: 'Sat', power: 2390, chaos: 3800 },
  { name: 'Sun', power: 3490, chaos: 4300 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-abyssal-purple border border-infinity-gold p-3">
        <p className="text-sm text-starlight-white mb-1">{payload[0].payload.name}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-xs" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const ChartShowcase = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl mb-4 text-center">Data Visualization</h2>
        <p className="text-center text-faded-silver mb-12 max-w-2xl mx-auto">
          Charts and graphs styled with the cosmic color palette. Infinity Gold and Ultron Cyan bring energy to data presentation.
        </p>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Bar Chart */}
          <div>
            <h3 className="text-2xl mb-6 text-ultron-cyan">Bar Chart Example</h3>
            <Card>
              <h4 className="text-lg mb-4 text-infinity-gold">Weekly Power Levels</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={powerData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#3E4259" />
                  <XAxis dataKey="name" stroke="#A0A8B8" />
                  <YAxis stroke="#A0A8B8" />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="power" fill="#FF9D00" />
                  <Bar dataKey="chaos" fill="#00FFFF" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 flex gap-6 justify-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-infinity-gold"></div>
                  <span className="text-faded-silver">Power</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-ultron-cyan"></div>
                  <span className="text-faded-silver">Chaos</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Line Chart */}
          <div>
            <h3 className="text-2xl mb-6 text-ultron-cyan">Line Chart Example</h3>
            <Card hover>
              <h4 className="text-lg mb-4 text-ultron-cyan">Chaos Trajectory</h4>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={powerData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#3E4259" />
                  <XAxis dataKey="name" stroke="#A0A8B8" />
                  <YAxis stroke="#A0A8B8" />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="power"
                    stroke="#FF9D00"
                    strokeWidth={2}
                    dot={{ fill: '#FFD700', r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="chaos"
                    stroke="#00FFFF"
                    strokeWidth={2}
                    dot={{ fill: '#00C3E3', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Chart Styling Notes */}
          <div>
            <h3 className="text-2xl mb-6 text-ultron-cyan">Chart Styling Guidelines</h3>
            <Card>
              <ul className="space-y-3 text-faded-silver">
                <li className="flex items-start gap-3">
                  <span className="text-infinity-gold mt-1">▸</span>
                  <span>Primary data series in Infinity Gold (#FF9D00)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-infinity-gold mt-1">▸</span>
                  <span>Secondary data series in Ultron Cyan (#00FFFF)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-infinity-gold mt-1">▸</span>
                  <span>Grid lines in Facet Grey (#3E4259) for subtle structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-infinity-gold mt-1">▸</span>
                  <span>Axis labels in Faded Silver (#A0A8B8) for readability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-infinity-gold mt-1">▸</span>
                  <span>Custom tooltips with Abyssal Purple background and gold border</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-infinity-gold mt-1">▸</span>
                  <span>Maintain sharp, geometric aesthetic with minimal rounding</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartShowcase;
