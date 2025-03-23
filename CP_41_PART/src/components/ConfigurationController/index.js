import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const handleContentChange = event => {
        onToggleShowContent(event.target.checked)
      }

      const handleLeftNavbarChange = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const handleRightNavbarChange = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="controller">
          <h1>Layout</h1>
          <input
            type="checkbox"
            id="content"
            checked={showContent}
            onChange={handleContentChange}
          />
          <label htmlFor="content">Content</label>
          <br />
          <input
            type="checkbox"
            id="leftnavbar"
            checked={showLeftNavbar}
            onChange={handleLeftNavbarChange}
          />
          <label htmlFor="leftnavbar">Left Navbar</label>
          <br />
          <input
            type="checkbox"
            id="rightnavbar"
            checked={showRightNavbar}
            onChange={handleRightNavbarChange}
          />
          <label htmlFor="rightnavbar">Right Navbar</label>
          <br />
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
