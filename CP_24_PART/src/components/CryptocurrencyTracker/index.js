import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const CryptocurrencyTracker = () => {
  const [loading, setLoading] = useState(true)
  const [currencyList, setCurrencyList] = useState([])

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const response = await fetch(
          'https://apis.ccbp.in/crypto-currency-converter',
        )

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        console.log('API Response:', data)

        const formattedData = data.map(item => ({
          id: item.id,
          currencyLogo: item.currency_logo,
          currencyName: item.currency_name,
          usdValue: item.usd_value,
          euroValue: item.euro_value,
        }))

        setCurrencyList(formattedData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCurrency()
  }, [])

  return (
    <div className="cryptocurrency-tracker-container">
      <div className="top-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-image"
        />
      </div>
      {loading ? (
        <div data-testid="loader" className="loader-container">
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        </div>
      ) : (
        <CryptocurrenciesList currencyList={currencyList} />
      )}
    </div>
  )
}

export default CryptocurrencyTracker
