import './index.css'

const TabItem = props => {
  const {eachTab, updateActiveId, isActive} = props
  const {tabId, displayText} = eachTab

  const onClick = () => {
    updateActiveId(tabId)
  }

  const className1 = isActive ? 'active-btn' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-btn ${className1}`}
        onClick={onClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
