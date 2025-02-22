const Box = props => {
  const {className, text} = props
  return (
    <div className='box'>
      <div className={className}>
        <p className='paragraph'>{text}</p>
      </div>
    </div>
  )
}

const element = (
  <div className='bg-container'>
    <div className='top-container'>
      <h1 className='heading'>Boxes</h1>
    </div>
    <div className='bottom-container'>
      <Box className='box-1' text='small' />
      <Box className='box-2' text='medium' />
      <Box className='box-3' text='large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
