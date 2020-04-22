// covid19 base url and api data fro fetching from covid19 api with rapidapi
export const rapidApiHost = 'covid-19-data.p.rapidapi.com'

export const covid19Key = '1b3d9e46b6mshfee9751b44509ebp1b904djsn5e5d468a0778'

export const covidRoutes = {
	getLatestTotals: 'https://covid-19-data.p.rapidapi.com/totals?format=json',
	getDailyReportTotals: 'https://covid-19-data.p.rapidapi.com/report/totals?date-format=YYYY-MM-DD&format=json&date=2020-04-01',
	getListOfCountries: 'https://covid-19-data.p.rapidapi.com/help/countries?format=json'
}

//* By Country
// fetch("https://covid-19-data.p.rapidapi.com/country?format=json&name=italy", {
//   "method": "GET",
//   "headers": {
//     "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
//     "x-rapidapi-key": "1b3d9e46b6mshfee9751b44509ebp1b904djsn5e5d468a0778"
//   }
// })
//   .then(response => {
//     console.log(response.json());
//   })
//   .catch(err => {
//     console.log(err);
//   });

//* get list of countries
// fetch("https://covid-19-data.p.rapidapi.com/help/countries?format=json", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
// 		"x-rapidapi-key": "1b3d9e46b6mshfee9751b44509ebp1b904djsn5e5d468a0778"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });