//  from the json

d3.json("owid-covid-2020-11-19-usa.json").then(
    data => {
        let trace1 = {
            x: data.map(d => d.date),
            y: data.map(d => d.total_tests),
            name: "Total Tests"
        }

        let trace2 = {
            x: data.map(d => d.date),
            y: data.map(d => d.total_cases),
            name: "Total Cases"
        }

        let trace3 = {
            x: data.map(d => d.date),
            y: data.map(d => d.total_deaths),
            name: "Total Deaths"
        }

        let plotData = [trace1, trace2, trace3]

        let plotLayout = {
            title: "USA COVID"
        }

        Plotly.newPlot("myPlot", plotData, plotLayout)
    }
)

// from csv (d3.csv translates the csv into a json for us!)

// d3.csv("owid-covid-2020-11-19-usa.csv").then(
//     data => {
//         let trace1 = {
//             x: data.map(d => d.date),
//             y: data.map(d => d.total_tests),
//             name: "Total Tests"
//         }

//         let trace2 = {
//             x: data.map(d => d.date),
//             y: data.map(d => d.total_cases),
//             name: "Total Cases"
//         }

//         let trace3 = {
//             x: data.map(d => d.date),
//             y: data.map(d => d.total_deaths),
//             name: "Total Deaths"
//         }

//         let plotData = [trace1, trace2, trace3]

//         let plotLayout = {
//             title: "USA COVID"
//         }

//         Plotly.newPlot("myPlot", plotData, plotLayout)
//     }
// )