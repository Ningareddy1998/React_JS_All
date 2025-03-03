import './index.css'

const FaqItem = props => {
  const {answerText} = props
  return (
    <div className="answer-container">
      <p className="answer-text">{answerText}</p>
    </div>
  )
}

export default FaqItem
