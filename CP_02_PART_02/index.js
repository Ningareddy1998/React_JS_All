const element = (
  <div className='bg-Container'>
    <h1 className='heading-1'>Congartulations</h1>
    <div className='gift-Container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='image-1'
      />
      <h2 className='heading-2'>Kiran V</h2>
      <p className='paragraph'>
        Vishnu institute of Computer Educational and Technology Bhimavaram
      </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='image-2'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
