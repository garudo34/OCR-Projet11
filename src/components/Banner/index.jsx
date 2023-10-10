import '../../styles/Banner.css'
import Cover from '../../assets/background-home.png'

function Banner() {
  return (
    <section className='banner'>
      <img src={Cover} alt='Cover Home' />
      <div className='opaciter'></div>
      <h1>Chez vous, partout et ailleurs</h1>
    </section>
  )
}

export default Banner
