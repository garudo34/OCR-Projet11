import Banner from '../../components/Banner'
import Cards from '../../components/Cards'
import '../../styles/Home.css'
import { logements } from '../../data/logements'
import Cover from '../../assets/background-home.png'

function Home() {
  document.title = 'Accueil - Kasa'

  return (
    <div className='home'>
      <Banner
        cover={Cover}
        altTextCover={'Cover Home'}
        mainText={'Chez vous, partout et ailleurs'}
      />

      <div className='logements-list'>
        {logements.map(({ id, title, cover }) => (
          <Cards key={id} id={id} title={title} cover={cover} />
        ))}
      </div>
    </div>
  )
}
export default Home
