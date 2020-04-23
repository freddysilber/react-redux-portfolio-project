import React, { PureComponent } from 'react'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts'

export default class Example extends PureComponent {
	getDataFromProps = () => {
		const { confirmed, recovered, critical, deaths } = this.props.latestTotals
		let data = [
			{ subject: 'Deaths', Global: deaths },
			{ subject: 'Confirmed', Global: confirmed },
			{ subject: 'Recovered', Global: recovered },
			{ subject: 'Critical', Global: critical }
		]
		if (this.props.dataByCountry !== null) {
			data = [
				{ subject: 'Deaths', Global: deaths, Country: this.props.dataByCountry.deaths },
				{ subject: 'Confirmed', Global: confirmed, Country: this.props.dataByCountry.confirmed },
				{ subject: 'Recovered', Global: recovered, Country: this.props.dataByCountry.recovered },
				{ subject: 'Critical', Global: critical, Country: this.props.dataByCountry.critical }
			]
		}
		return data
	}

	getCountryName = () => {
		return this.props.dataByCountry !== null ? this.props.dataByCountry.country : 'No Country Selected'
	}

	render() {
		return (
			<RadarChart cx={400} cy={250} outerRadius={200} width={800} height={500} data={this.getDataFromProps()}>
				<PolarGrid />
				<PolarAngleAxis dataKey="subject" />
				<PolarRadiusAxis angle={135} domain={[50, 250]} />
				<Radar name="World Wide" dataKey="Global" stroke="#FF6200" fill="#FFC5A1" fillOpacity={0.6} />
				<Radar name={this.getCountryName()} dataKey="Country" stroke="#0A7FD2" fill="#90BDDC" fillOpacity={0.6} />
				<Legend />
			</RadarChart>
		)
	}
}