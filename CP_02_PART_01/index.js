const Button = props => {
  const {className, buttonText} = props
  return <button className={`button ${className}`}>{buttonText}</button>
}

const element = (
  <div className='bg-Container'>
    <div className='context-container'>
      <h1 className='heading'> Social Buttons </h1>
      <div className='button-container'>
        <Button buttonText='Like' className='button-1' />
        <Button buttonText='Share' className='button-2' />
        <Button buttonText='Comment' className='button-3' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
