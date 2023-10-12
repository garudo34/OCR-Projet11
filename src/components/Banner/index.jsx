import '../../styles/Banner.css'

function Banner(props) {
  return (
    <section className='banner'>
      <img src={props.cover} alt={props.altTextCover} />
      <div className='opaciter'></div>
      <h1>{props.mainText}</h1>
    </section>
  )
}

export default Banner
