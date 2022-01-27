import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface GTDGL {
  list: string;
  more: number;
  less: number;
  missing: number;
}
interface Props {
  data: GTDGL[];
  dataKeyBar0: string;
  dataKeyBar1: string | undefined;
  dataKeyBar2: string | undefined;
  dataKeyBar3: string | undefined;
  dataKeyX: string;
  fill0: string;
  fill1: string | undefined;
  fill2: string | undefined;
  fill3: string | undefined;
  nameBar0: string;
  nameBar1: string | undefined;
  nameBar2: string | undefined;
  nameBar3: string | undefined;
  yUnit: string | undefined;
}
const App: React.FC<Props> = ({
  data,
  dataKeyBar0,
  dataKeyBar1,
  dataKeyBar2,
  dataKeyBar3,
  dataKeyX,
  fill0,
  fill1,
  fill2,
  fill3,
  nameBar0,
  nameBar1,
  nameBar2,
  nameBar3,
  yUnit,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label}`}</p>
          <p>{`${payload[0].payload.list}`}</p>
          <p>{`${payload[0].name}: ${payload[0].value}`}</p>
          <p>{`${payload[1].name}: ${payload[1].value}`}</p>
          <p>{`${payload[2].name}: ${payload[2].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="90%" height="75%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 0,
        }}
      >
        <XAxis dataKey={dataKeyX} />
        <YAxis
          unit={yUnit || ''}
          label={{
            value: 'Quantidade de alunos',
            angle: -90,
            viewBox: { x: 20, y: 100, width: 50, height: 50 },
          }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend verticalAlign="bottom" />
        <Bar dataKey={dataKeyBar0} fill={fill0} name={nameBar0} />
        {dataKeyBar1 ? (
          <Bar dataKey={dataKeyBar1} fill={fill1} name={nameBar1} />
        ) : (
          ''
        )}
        {dataKeyBar2 ? (
          <Bar dataKey={dataKeyBar2} fill={fill2} name={nameBar2} />
        ) : (
          ''
        )}
        {dataKeyBar3 ? (
          <Bar dataKey={dataKeyBar3} fill={fill3} name={nameBar3} />
        ) : (
          ''
        )}
      </BarChart>
    </ResponsiveContainer>
  );
};
export default App;
