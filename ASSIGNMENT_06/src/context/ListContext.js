import React from 'react'

const ListContext = React.createContext({
  score: 0,
  onButtonClicked: () => {},
  resetGame: () => {},
  userChoice: null,
  opponentChoice: null,
  isGameResultView: false,
  resultText: '',
})

export default ListContext
