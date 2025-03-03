import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {hiddenFaqs: {}}

  onHide = id => {
    this.setState(prevState => ({
      hiddenFaqs: {
        ...prevState.hiddenFaqs,
        [id]: !prevState.hiddenFaqs[id],
      },
    }))
  }

  render() {
    const {faqsList} = this.props
    const {hiddenFaqs} = this.state
    return (
      <div className="bg-container">
        <div className="top-container">
          <h1 className="heading">FAQs</h1>
        </div>
        <div className="bottom-container">
          <ul>
            {faqsList.map(eachList => (
              <li key={eachList.id} className="faq-item-container">
                <div className="question-container">
                  <h1 className="question-text">{eachList.questionText}</h1>
                  <button
                    type="button"
                    onClick={() => this.onHide(eachList.id)}
                    className="button"
                  >
                    <img
                      src={
                        hiddenFaqs[eachList.id]
                          ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
                      }
                      alt={hiddenFaqs[eachList.id] ? 'minus' : 'plus'}
                      className="icon"
                    />
                  </button>
                </div>
                {hiddenFaqs[eachList.id] && (
                  <FaqItem answerText={eachList.answerText} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
