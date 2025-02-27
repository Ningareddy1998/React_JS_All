import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props

  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const buttonStyle = isActive ? 'active-tab-btn' : null
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${buttonStyle}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
