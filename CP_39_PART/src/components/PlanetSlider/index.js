import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = ({planetsList}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container" data-testid="planets">
      <h1 className="app-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(planet => (
          <PlanetItem planet={planet} key={planet.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
