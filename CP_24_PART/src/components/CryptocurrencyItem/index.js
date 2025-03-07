import './index.css'

const CryptocurrencyItem = ({currency}) => {
  const {currencyLogo, currencyName, usdValue, euroValue} = currency

  return (
    <li className="cryptocurrency-item">
      <div className="currency-name-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>{' '}
      </div>
      <div className="currency-values-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
