import './index.css'

const TabItem = ({tab, isActive, onTabClick}) => (
  <li className={`tab-item ${isActive ? 'active' : ''}`}>
    <button
      type="button"
      className="tab-btn"
      onClick={() => onTabClick(tab.tabId)}
    >
      {tab.displayText}
    </button>
  </li>
)

export default TabItem
