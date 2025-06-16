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
import cuidadodeplantas from '../../assets/cuidadodeplantas.jpg'
import dicasparajardim from '../../assets/dicasparajardim.jpg'
import jardinagem from '../../assets/jardinagem.jpg'
import paisagismo from '../../assets/paisagismo.jpg'
import lucasdevlogo from '../../assets/lucasdevlogo.png'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>

      <section className="bg-cover bg-center h-screen flex flex-col items-center bg-green-900 gap-40" style={{ backgroundImage: `url(${fundo})` }}>
        <header className='w-full'>
          <ul className='flex gap- text-white p-8 justify-between items-center w-full'>
            <h1>Dev Garden Logo</h1>
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
          <h1 className='text-center text-8xl font-bold tex w-full text-green-600' style={{ textShadow: '1px 1px 10px rgba(0,0,0,0.4)' }}>Dev Garden</h1>

          <div className='mt-8'>
            <ContactButton titulo="ENTRAR EM CONTATO" />
          </div>
        </div>
      </section>

      <section className='pt-20 pb-20'>
        <h3 className='text-center text-5xl font-bold tex w-full text-green-600 mb-12'>Um Lugar Tranquilo para Estar com Quem Você Ama</h3>
        <div className='max-w-7xl flex gap-14 m-auto'>
          <p className='text-left w-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor aliquid recusandae alias suscipit corporis aperiam, sapiente fugit quae tenetur. Sint, error voluptate aut fugit unde fugiat? Voluptatibus, error numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officia aspernatur delectus, praesentium itaque obcaecati nihil iusto ab deserunt est fuga perferendis nulla, possimus magnam rem veniam, accusamus quibusdam numquam.
          <br />
          <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit itaque accusamus autem necessitatibus aspernatur maxime fugiat, repellendus sunt error! Esse obcaecati quae animi debitis sed voluptatibus similique reprehenderit incidunt id?

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur eaque tenetur facere nam placeat doloribus, provident, cupiditate voluptate, similique nulla saepe quas nobis! Consequuntur veniam dolores ducimus itaque est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum praesentium impedit maiores tempore voluptatum nam molestias corporis asperiores? Molestias magnam, corrupti perferendis a labore ipsa aliquam praesentium eum debitis minus!</p>
          <div>
            <img className='max-w-xl shadow-lg rounded-xl' src={casa} alt="imagem-casa" />
          </div>
        </div>


        <div className='flex gap-10 mt-8 mb-8 justify-center'>
          <Card imagem={tagdesconto} titulo="Promoções" paragrafo="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
          <Card imagem={mesa} titulo="Lazer" paragrafo="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
          <Card imagem={megafone} titulo="Dicas do Dev" paragrafo="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
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
        <h3 className='text-3xl text-white text-center font-bold mb-8'>DICAS PARA SEU JARDIM</h3>
        <div className='flex gap-10 justify-center'>
          <div className='flex flex-col w-2xl p-6 bg-neutral-900 rounded-2xl justify-center items-center text-center hover:scale-105 transition-transform'>
            <img className='w-96 rounded-3xl' src={cuidadodeplantas} alt="Cuidado de plantas" />
            <h4 className='font-bold text-3xl mt-3 mb-3 text-green-600'>Cuidados especiais para plantas</h4>
            <p className='text-white mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum debitis esse eum repellat doloremque. Quas sit, magnam cum debitis corrupti maiores unde atque dolor nostrum itaque, cumque labore iste?</p>
            <button className='bg-green-500 px-12 rounded-2xl hover:scale-105 transition-transform cursor-pointer'>LER MAIS</button>
          </div>
          <div className='flex flex-col w-2xl p-6 bg-neutral-900 rounded-2xl justify-center items-center text-center hover:scale-105 transition-transform'>
            <img className='w-96 rounded-3xl' src={dicasparajardim} alt="Dicas para seu jardim" />
            <h4 className='font-bold text-3xl mt-3 mb-3 text-green-600'>Dicas para Iniciantes em Jardinagem</h4>
            <p className='text-white mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe maxime dolore quas ab obcaecati. Cum consequuntur expedita officia velit repellendus dignissimos. Atque minus perspiciatis odio quaerat laboriosam sunt ea.</p>
            <button className='bg-green-500 px-12 rounded-2xl hover:scale-105 transition-transform cursor-pointer'>LER MAIS</button>
          </div>
        </div>
      </section>

      <section className='p-10'>
        <h3 className='text-3xl text-center font-bold mb-8'>SERVIÇOS</h3>
        <div className='flex gap-10 justify-center'>
          <Card imagem={jardinagem} titulo={"JARDINAGEM"} paragrafo={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur eaque tenetur facere nam placeat doloribus, provident, cupiditate voluptate, similique nulla saepe quas nobis!"} />
          <Card imagem={paisagismo} titulo={"PAISAGISMO"} paragrafo={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur eaque tenetur facere nam placeat doloribus, provident, cupiditate voluptate, similique nulla saepe quas nobis!"}/>
        </div>
      </section>

      <footer className=' flex p-10 bg-green-900 justify-around'>
        <div className='flex items-center'>
          <img className='w-24' src={lucasdevlogo} alt="" />
          <div>
            <h3 className='text-white'>©Copyright Lucas Dev</h3>
            <h4 className='text-white'>Desenvolvido por Lucas Dev | Front End Developer</h4>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-white'>EMAIL: lucasdev.desenvolvedorweb@gmail.com</p>
          <p className='text-white'>WhatsApp: (34) 99337-0334</p>
        </div>
      </footer>
    </>
  )
}

export default Home
