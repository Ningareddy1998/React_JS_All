import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'

import './index.css'

const Rules = () => (
  <Popup
    className="pop"
    trigger={
      <button type="button" className="rules-button">
        RULES
      </button>
    }
    modal
    closeOnDocumentClick
  >
    {close => (
      <div className="popup-container">
        <button type="button" className="close-button" onClick={close}>
          <RiCloseLine />
        </button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
          className="rules-image"
        />
      </div>
    )}
  </Popup>
)
export default Rules
