import './index.css'

const LanguageFilterItem = ({
  languageFilterDetails,
  isActive,
  setActiveLanguageFilterId,
}) => {
  const {id, language} = languageFilterDetails

  return (
    <li className="language-item">
      <button
        className={`language-button ${
          isActive ? 'active-language-button' : ''
        }`}
        onClick={() => setActiveLanguageFilterId(id)}
        type="button"
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
