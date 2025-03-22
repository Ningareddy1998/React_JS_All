import './index.css'

const PlanetItem = ({planet}) => {
  const {name, imageUrl, description} = planet

  return (
    <div className="planet-item-container">
      <img className="planet-image" src={imageUrl} alt={`planet ${name}`} />
      <h2 className="planet-name">{name}</h2>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
