import { ResponsiveContainer, Bar, BarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts"

const DesktopChart = ({ filterByDate, date, situation }) => {
    return (
        <>
            <ResponsiveContainer width="100%" aspect={4}>
                <BarChart
                    data={filterByDate}
                    margin={{
                        top: 0,
                        right: 30,
                        left: 30,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="dateFormat"
                        tick={false}
                        label={{ value: date, position: 'center', offset: 0 }}
                        scale="band" />
                    <YAxis
                        tickCount={3}
                        type="number"
                        tick={{ fontSize: 14, width: 250 }}
                        domain={['auto', 'auto']}
                    />
                    <Tooltip
                        formatter={(value) => new Intl.NumberFormat('en').format(value)}
                        cursor={{ display: 'none' }}
                    />
                    <Legend />
                    {situation === 'cases'
                        ?
                        <Bar dataKey='cases' fill="#7FB5FF" />
                        :
                        situation === 'deaths'
                            ?
                            <Bar dataKey='deaths' fill="#001D6E" />
                            :
                            <Bar dataKey='recovered' fill="#001D6E" />}
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}

export default DesktopChart