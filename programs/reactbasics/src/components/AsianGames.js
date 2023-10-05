import React from 'react'
const AsianGames = () => {
    const medals2023=[
        {
            "rank":1,
            "country":"China",
            "gold":26,
            "silver":11,
            "bronze":5,
            "total":42
        },
        {
            "rank":2,
            "country":"Korea",
            "gold":5,
            "silver":5,
            "bronze":6,
            "total":16
        },
        {
            "rank":3,
            "country":"Japan",
            "gold":3,
            "silver":3,
            "bronze":3,
            "total":9
        }


    ]

    const topcountries = medals2023.filter((medal)=>medal.total>15)
  return (
    <div>
        <h1>AsianGames 2023 - Medal Tally</h1>        
        <table>
            <tr>
                <th>Rank</th>
                <th>Country</th>
                <th>Gold</th>
                <th>Silver</th>
                <th>Bronze</th>
                <th>Total</th>
            </tr>
            {medals2023.map((medal)=>
                <tr key={medal.country}>
                    <td>{medal.rank}</td>
                    <td>{medal.country}</td>
                    <td>{medal.gold}</td>
                    <td>{medal.silver}</td>
                    <td>{medal.bronze}</td>
                    <td>{medal.total}</td>
                </tr>
            )}
        </table>   

        <h1>AsianGames 2023 - Top Countries with total Tally gtr 15</h1>        
        <table>
            <tr>
                <th>Rank</th>
                <th>Country</th>
                <th>Gold</th>
                <th>Silver</th>
                <th>Bronze</th>
                <th>Total</th>
            </tr>
            {topcountries.map((medal)=>
                <tr key={medal.country}>
                    <td>{medal.rank}</td>
                    <td>{medal.country}</td>
                    <td>{medal.gold}</td>
                    <td>{medal.silver}</td>
                    <td>{medal.bronze}</td>
                    <td>{medal.total}</td>
                </tr>
            )}
        </table>     
        </div>
  )
}

export default AsianGames