// import React, { PureComponent } from 'react'
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts'

// export default class CovidDataChart extends PureComponent {
// 	getData = () => {
// 		console.log('get data')
// 	}
// 	render() {
// 		const data = [
// 			{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400, },
// 			{ name: 'Page B', uv: 3000, pv: 1398, amt: 2210, },
// 			{ name: 'Page C', uv: 2000, pv: 9800, amt: 2290, },
// 			{ name: 'Page D', uv: 2780, pv: 3908, amt: 2000, },
// 			{ name: 'Page E', uv: 1890, pv: 4800, amt: 2181, },
// 			{ name: 'Page F', uv: 2390, pv: 3800, amt: 2500, },
// 			{ name: 'Page G', uv: 3490, pv: 4300, amt: 2100, },
// 		]
// 		const { confirmed, recovered, critical, deaths } = this.props.latestTotals
// 		console.log(this.props)

// 		return (
// 			<BarChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
// 				<CartesianGrid strokeDasharray="3 3" />
// 				<XAxis dataKey="name" />
// 				<YAxis />
// 				<Tooltip />
// 				<Legend />
// 				<Bar dataKey="pv" fill="#8884d8" />
// 				<Bar dataKey="uv" fill="#82ca9d" />
// 			</BarChart>
// 		)
// 	}
// }

import React, { PureComponent } from 'react'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, } from 'recharts'

const data = [
	{ subject: 'Math', A: 120, B: 110, fullMark: 150, },
	{ subject: 'Chinese', A: 98, B: 130, fullMark: 150, },
	{ subject: 'English', A: 86, B: 130, fullMark: 150, },
	{ subject: 'Geography', A: 99, B: 100, fullMark: 150, },
	{ subject: 'Physics', A: 85, B: 90, fullMark: 150, },
	{ subject: 'History', A: 65, B: 85, fullMark: 150, },
]

export default class Example extends PureComponent {
	static jsfiddleUrl = 'https://jsfiddle.net/alidingling/dpgb3xjq/'

	render() {
		return (
			<RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
				<PolarGrid />
				<PolarAngleAxis dataKey="subject" />
				<PolarRadiusAxis angle={30} domain={[0, 150]} />
				<Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
				<Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
				<Legend />
			</RadarChart>
		)
	}
}