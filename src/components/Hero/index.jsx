import '../../styles/Hero.css'

function Hero(props) {
  return (
    <section className='hero'>
      <img src={props.cover} alt={props.altTextCover} />
      <div className='opaciter'></div>
      {props.mainText && <h1>{props.mainText && props.mainText}</h1>}
    </section>
  )
}

export default Hero
