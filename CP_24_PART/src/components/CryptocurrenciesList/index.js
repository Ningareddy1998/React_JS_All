import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = ({currencyList}) => {
  if (currencyList.length === 0) {
    return <p>Loading cryptocurrencies...</p>
  }

  return (
    <div className="cryptocurrencies-list-container">
      <div className="list-header">
        <h1 className="header-currency">Coin Type</h1>
        <div className="usd-euro-headers">
          <h1 className="header-value">USD</h1>
          <h1 className="header-value">EURO</h1>
        </div>
      </div>
      <ul className="cryptocurrencies-list">
        {currencyList.map(currency => (
          <CryptocurrencyItem key={currency.id} currency={currency} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
