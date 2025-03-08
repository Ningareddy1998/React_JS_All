import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchData

  return (
    <div className="latest-match-card">
      <div className="latest-match-left-part">
        <p className="latest-match-team-name">{competingTeam}</p>
        <p className="latest-match-date">{date}</p>
        <p className="latest-match-venue">{venue}</p>
        <p className="latest-match-result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        className="latest-match-team-logo"
        alt={`latest match ${competingTeam}`}
      />
      <div className="latest-match-right-part">
        <p className="latest-match-details-heading">First Innings</p>
        <p className="latest-match-details-value">{firstInnings}</p>
        <p className="latest-match-details-heading">Second Innings</p>
        <p className="latest-match-details-value">{secondInnings}</p>
        <p className="latest-match-details-heading">Man Of The Match</p>
        <p className="latest-match-details-value">{manOfTheMatch}</p>
        <p className="latest-match-details-heading">Umpires</p>
        <p className="latest-match-details-value">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
