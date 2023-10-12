import Banner from '../../components/Banner'
import '../../styles/About.css'
import Cover from '../../assets/background-about.png'

function About() {
  document.title = 'A Propos - Kasa'
  return (
    <div className='about'>
      <Banner cover={Cover} altTextCover={'Cover A Propos'} />
    </div>
  )
}
export default About
