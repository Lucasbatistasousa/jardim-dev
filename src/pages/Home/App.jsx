import { useState } from 'react'

import './App.css'
import ContactButton from '../../components/ContactButton'
import HeaderLi from '../../components/Header'
import Card from '../../components/Cards'
import PlantCard from '../../components/PlantCards'

import { cactocandelabro, cactusrabodemacaco, ericajaponica, violetapendente } from '../../assets/images/index'
import fundo from '../../assets/fundo.jpg'
import casa from '../../assets/casa.jpg'
import tagdesconto from '../../assets/tagdesconto.png'
import mesa from '../../assets/mesa.png'
import megafone from '../../assets/megafone.png'

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


        <div className='flex gap-10 mt-8 mb-8 justify-center'>
          <Card imagem={tagdesconto} titulo="Promoções" paragrafo="Surpreenda-se com as promoções do Espaço Botânico!" />
          <Card imagem={mesa} titulo="Espaço e Lazer" paragrafo="Onde você pode passear, se inspirar, relaxar, contemplar a natureza."/>
          <Card imagem={megafone} titulo="Dicas do Espaço" paragrafo="O Viveiro Espaço Botânico tem as melhores dicas para o seu jardim!"/>
        </div>

        <div className='flex justify-center p-5 mb-5'>
          <h3 className='font-bold text-4xl'>PLANTAS EM DESTAQUE</h3>
        </div>

        <div className='flex gap-5 justify-center text-center'>
          <PlantCard imagem={cactusrabodemacaco} nome="CACTUS RABO-DE-MACACO" descricao="Tem caules longos e peludos que lembram um rabo de macaco. É ideal para vasos pendentes, gosta de luz indireta e floresce com cores vibrantes. Fácil de cuidar e muito ornamental."/>
          <PlantCard imagem={cactocandelabro} nome="CACTUS CANDELABRO" descricao="Tem formato ereto e ramificado, lembrando um candelabro. É resistente, cresce bem em sol pleno ou meia-sombra, e precisa de pouca água. Ideal para decorar ambientes com estilo."/>
          <PlantCard imagem={ericajaponica} nome="ERICA JAPONICA" descricao="É um arbusto delicado com flores pequenas e coloridas, que surgem no inverno e primavera. Gosta de clima ameno, solo bem drenado e luz indireta. Perfeita para jardins ou vasos decorativos."/>
          <PlantCard imagem={violetapendente} nome="VIOLETA PENDENTE" descricao="É uma planta de folhas aveludadas e flores vibrantes, ideal para vasos suspensos. Prefere luz indireta, solo úmido e bem drenado. Charmosa e fácil de cuidar."/>
        </div>
      </section>

      <section className='p-10 bg-green-900'>
        <h3 className='text-3xl text-white'>Notícias</h3>
        <div className='flex gap-10'>
          <div className='w-60 p-6'>
            <img src="" alt="" />
            <h4>Novidades sobre a vendas de plantas</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum debitis esse eum repellat doloremque. Quas sit, magnam cum debitis corrupti maiores unde atque dolor nostrum itaque, cumque labore iste?</p>
            <button>LER MAIS</button>
          </div>
          <div>
            <h4>Plantas que foram proibidas de vender</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe maxime dolore quas ab obcaecati. Cum consequuntur expedita officia velit repellendus dignissimos. Atque minus perspiciatis odio quaerat laboriosam sunt ea.</p>
            <button>LER MAIS</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
