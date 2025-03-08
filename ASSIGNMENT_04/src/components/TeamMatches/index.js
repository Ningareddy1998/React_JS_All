import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamMatchesData: null,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        id: data.latest_match_details.id,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(matchItem => ({
        id: matchItem.id,
        competingTeam: matchItem.competing_team,
        competingTeamLogo: matchItem.competing_team_logo,
        date: matchItem.date,
        firstInnings: matchItem.first_innings,
        manOfTheMatch: matchItem.man_of_the_match,
        matchStatus: matchItem.match_status,
        result: matchItem.result,
        secondInnings: matchItem.second_innings,
        umpires: matchItem.umpires,
        venue: matchItem.venue,
      })),
    }

    this.setState({teamMatchesData: formattedData, isLoading: false})
  }

  renderTeamMatches = () => {
    const {teamMatchesData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchesData

    return (
      <div className="team-matches-container">
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-image"
        />
        <p className="latest-matches-heading">Latest Matches</p>
        <LatestMatch latestMatchData={latestMatchDetails} />
        <ul className="recent-matches-list">
          {recentMatches.map(match => (
            <MatchCard matchData={match} key={match.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    const teamBackgroundColor = {
      RCB: 'rcb-bg-container',
      KKR: 'kkr-bg-container',
      KXP: 'kxp-bg-container',
      CSK: 'csk-bg-container',
      RR: 'rr-bg-container',
      MI: 'mi-bg-container',
      SH: 'srh-bg-container',
      DC: 'dc-bg-container',
    }

    const bgColorClass = teamBackgroundColor[id] || ''

    return (
      <div className={`team-matches-route ${bgColorClass}`}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
