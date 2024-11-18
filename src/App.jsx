import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Card from './Components/Card/Card'
import Banner from './Components/Banner/Banner'
import './App.css'


function App() {

  return (
    <>
      <Header />
      <Banner />

      <Card
        imagem="./alunos.avif"
        obs="Blog da Julia Duailibi"
        titulo="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        li="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        autor="Há 41 minutos - Blog da Julia Duailibi"
      />

      <Card
        li="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        imagem="./policia.avif"
        obs="Lorem ipsum dolor sit amet"
        titulo="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        autor="Há 2 horas - Em G20"
      />

      <Card
        li="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        imagem="./tanque.webp"
        obs="Lorem ipsum dolor sit amet"
        titulo="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        autor="Há 15 minutos - Em Ucrânia e Rússia"
      />

      <Footer />
    </>
  )
}

export default App
