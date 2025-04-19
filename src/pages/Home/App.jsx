import { useState } from 'react'

import './App.css'
import ContactButton from '../../components/ContactButton'
import HeaderLi from '../../components/Header'

import fundo from '../../assets/fundo.jpg'
import casa from '../../assets/casa.jpg'
import PlantCard from '../../components/PlantCards'
import samambaia from '../../assets/samambaia.jpg'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>

      <section className="bg-cover bg-center h-screen flex flex-col items-center bg-green-900 gap-40" style={{ backgroundImage: `url(${fundo})` }}>
        <header className='w-full'>
          <ul className='flex gap- text-white p-8 justify-between items-center w-full'>
            <h1>Espaço Botanico Logo</h1>
            <div className='flex gap-16 items-center'>
              <HeaderLi titulo="HOME" />
              <HeaderLi titulo="PLANTAS E PRODUTOS" />
              <HeaderLi titulo="COMO COMPRAR" />
              <HeaderLi titulo="SERVIÇOS" />
              <HeaderLi titulo="NOTICIAS" />
              <HeaderLi titulo="DICAS" />
            </div>

            <ContactButton titulo="ENTRAR EM CONTATO" />
          </ul>
        </header>
        <div className='w-full h-64 flex items-center justify-center flex-col '>
          <h2 className='text-center text-6xl font-bold tex w-full text-amber-50'>Seja Bem vindo ao</h2>
          <h1 className='text-center text-8xl font-bold tex w-full text-green-600' style={{ textShadow: '1px 1px 10px rgba(0,0,0,0.4)' }}>Espaço Botânico</h1>

          <div className='mt-8'>
            <ContactButton titulo="ENTRAR EM CONTATO" />
          </div>
        </div>
      </section>

      <section className='pt-20 pb-20'>
        <h3 className='text-center text-5xl font-bold tex w-full text-green-600 mb-12'>Um Lugar Tranquilo para Estar com Quem Você Ama</h3>
        <div className='max-w-7xl flex gap-14 m-auto'>
          <p className='text-left w-xl'>O Espaço Botânico, Centro de Jardinagem, é uma empresa que se diferencia por adotar um conceito inovador no comércio de plantas ornamentais, produtos e acessórios para jardinagem e paisagismo em Uberlândia e região. Com uma estrutura diferenciada, a loja é rodeada por jardins, cafeteria e restaurante, parque infantil e amplo estacionamento.
          <br />
          <br />
            O espaço foi criado com a intenção de proporcionar aos clientes e visitantes uma sensação única de bem-estar, através de um ambiente confortável e convidativo para o descanso e contemplação.

            Nesta mesma área de 100.000 m² situa-se o viveiro de produção, onde as mudas são cultivadas em estufas e a campo aberto e inspecionadas por uma equipe de profissionais capacitados aliados à alta tecnologia, visando a produção de novas variedades que possam conquistar os mercados mais exigentes da atualidade.</p>
          <div>
            <img className='max-w-xl shadow-lg rounded-xl' src={casa} alt="imagem-casa" />
          </div>
        </div>


        <div>
          <PlantCard nome="Samambaia" descricao="Planta resistente, ideal para ambientes internos." imagem={samambaia}/>
        </div>
      </section>

    </>
  )
}

export default Home
