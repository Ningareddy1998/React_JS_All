import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchData

  const getMatchStatusClassName = () =>
    matchStatus === 'Won' ? 'match-won' : 'match-lost'

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        className="match-card-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-name">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={`match-card-status ${getMatchStatusClassName()}`}>
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
