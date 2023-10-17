import Hero from '../../components/Hero'
import Cards from '../../components/Cards'
import '../../styles/Home.css'
import { useState, useEffect } from 'react'
import Cover from '../../assets/background-home.png'

function Home() {
  document.title = 'Accueil - Kasa'

  const [logements, setLogements] = useState([])

  const handleFetchData = async () => {
    const response = await fetch('data/logements.json')
    const data = await response.json()
    setLogements(data)
  }
  useEffect(() => {
    handleFetchData()
  }, [])

  return (
    <div className='home'>
      <Hero
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
