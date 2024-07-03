import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-between px-5 py-4">
        <Image alt="t" src="/assets/logo_dopontos.png" width={155} height={45} />
        <div className="btns">
          <button className="hover:scale-105 hover:text-white hover:bg-[#44AED1] text-[#44AED1] transition-all p-2 text-md font-semibold rounded-xl px-8">Entrar</button>
        </div>
      </header>
      <main className="mx-auto pt-12">
        <section className="max-w-7xl mx-auto flex flex-col items-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 mt-2 uppercase">Não somos um <span className="blue">grupo de alertas</span></h1>
          <h2 className="text-base md:text-xl text-center mb-6">cansado de participar de <b>vários grupos</b> com emissões que <br className="hidden md:block" /><b>não te interessam?</b></h2>
          <div className=" px-4 md:px-0">
            <Image className="rounded-lg shadow-lg mt-6 mb-12" alt="t" src="/assets/plataforma.png" width={900} height={500} />
          </div>

          <p className="text-center text-xl mb-6 font-normal">O robô <span className="blue">mais completo do mercado</span> <br /> para quem quer <span className="blue">viajar barato.</span></p>
          <Link scroll={true} href="#plans" className="hover:scale-105 transition-all blue-btn text-white p-4 rounded-xl font-normal text-lg px-8 text-center">Quero viajar barato!</Link>
        </section>

        <section className="mb-12 bg-[#316A7D] py-12 relative">
          <div className="bg absolute top-0 left-0 z-1 w-full h-full">
            <Image
              alt="airport"
              className="absolute top-0 left-0 w-full h-full z-10"
              src="/assets/airport.jpg"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="absolute top-0 left-0 bg-[#316A7D] w-full opacity-90 h-full z-20"></div>
          </div>
          <div className="container max-w-7xl px-8 md:px-0 mx-auto flex flex-col items-center z-30 relative">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-6 drop-shadow-lg">O que <span className="blue">o mercado</span> te oferece</h1>

            <div className="card bg-white py-6 bg-white rounded-xl px-2 shadow-lg w-fit">
              <p className="text-lg font-semibold text-center mb-6 px-4">Grupos de alertas</p>

              <ul className="flex flex-col px-4 gap-4">
                <li className="flex"><p className="icon mb-0 mr-2">❌</p> Emissões personalizadas</li>
                <li className="flex"><p className="icon mb-0 mr-2">❌</p> Destinos que te interessam</li>
                <li className="flex"><p className="icon mb-0 mr-2">✅</p> Spam no seu Whatsapp</li>
                <li className="flex"><p className="icon mb-0 mr-2">✅</p> Promoções que você nunca vai usar</li>
              </ul>
            </div>

            <h1 className="mt-10 text-3xl md:text-4xl font-bold text-center text-white mb-6 drop-shadow-lg">O que a <span className="blue">Dominando pontos</span> te oferece</h1>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="card bg-white py-6 rounded-xl px-2 shadow-lg w-full md:w-fit">
                <p className="text-lg font-semibold text-center mb-6 px-4">Robô de busca de passagens</p>

                <ul className="flex flex-col px-4 gap-4 w-full">
                  <li className="flex"><p className="icon mb-0 mr-2">✅</p> Emissões personalizadas</li>
                  <li className="flex"><p className="icon mb-0 mr-2">✅</p> Destinos que te interessam</li>
                  <li className="flex"><p className="icon mb-0 mr-2">✅</p> Datas personalizadas</li>
                  <li className="flex"><p className="icon mb-0 mr-2">✅</p> Buscas com datas flexíveis</li>
                </ul>
              </div>

              <div className="card bg-white py-6 rounded-xl px-2 shadow-lg w-full md:w-fit">
                <p className="text-lg font-semibold text-center mb-6 px-4">Robô de acúmulo de pontos</p>

                <ul className="flex flex-col px-4 gap-4">
                  <li className="flex"><p className="icon mb-0 mr-2">✅</p> As melhores promoções</li>
                  <li className="flex"><p className="icon mb-0 mr-2">✅</p> Categorias personalizadas</li>
                  <li className="flex"><p className="icon mb-0 mr-2">✅</p> Ligar e desligar os alertas <br />quando quiser</li>
                </ul>
              </div>

              <div className="card bg-white py-6 rounded-xl px-2 shadow-lg w-full md:w-fit">
                <p className="text-lg font-semibold text-center mb-6 px-4">Ferramenta de gestão de milhas</p>

                <ul className="flex flex-col px-4 gap-4">
                  <li className="flex"><p className="icon mb-0 mr-2">✅</p> Mantenha controle das <br />suas milhas</li>
                  <li className="flex"><p className="icon mb-0 mr-2">✅</p> Calcule quantas milhas <br />suas compras te darão</li>
                  <li className="flex"><p className="icon mb-0 mr-2">⚠️</p> EM BREVE</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto flex flex-col items-center mb-12 py-4 md:py-12">
          <h1 className="px-4 md:px-0 text-3xl md:text-4xl font-bold text-center mb-12">Receba alertas dos <span className="blue">principais programas</span> de pontos</h1>

          <div className="cias flex flex-col md:flex-row gap-12 items-center">
            <div className="flex flex-col items-center gap-4">
              <Image alt="t" src="/assets/smiles.png" width={250} height={50} />
              <p className="text-base font-semibold text-center">
                Smiles
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Image alt="" src="/assets/azul.png" width={250} height={50} />
              <p className="text-base font-semibold text-center">
                Azul <span className="blue">(nacional)</span> e <br />
                Azul pelo mundo <span className="blue">(internacional)</span>
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Image alt="" src="/assets/american.png" width={250} height={50} />
              <p className="text-base font-semibold text-center">
                American Airlines
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Image alt="" src="/assets/tap.png" width={250} height={50} />
              <p className="text-base font-semibold text-center">
                TAP (Em Breve)
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center mb-12 relative pt-12">
          <div className="bg absolute top-0 left-0 z-1 w-full h-full">
            <Image
              alt="airport"
              className="absolute top-0 left-0 w-full h-full z-10"
              src="/assets/swiss-alps.jpg"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="absolute top-0 left-0 bg-[#316A7D] w-full opacity-90 h-full z-20"></div>
          </div>
          <div className="container max-w-7xl mx-auto flex flex-col items-center z-30 relative py-4 md:py-12">

            <h1 className="text-3xl px-4 md:px-0 md:text-4xl text-white drop-shadow-lg font-bold text-center mb-12">Algumas das <span className="blue">emissões e promoções</span> que <br /> <span className="blue">nossos usuários</span> estão tendo acesso</h1>

            <div className="emissoes flex items-center gap-y-6 flex-wrap">
              <div className="emissao flex flex-col items-center w-full md:w-1/3">
                <Image alt="t" className="max-h-[300px] w-auto rounded-3xl" src="/assets/emissao1.jpeg" width={300} height={315} />
                <p className="drop-shadow-lg text-white mt-4 text-2xl font-bold text-center">Orlando por <br /> <span className="blue">R$1200</span></p>
              </div>

              <div className="emissao flex flex-col items-center w-full md:w-1/3">
                <Image alt="t" className="max-h-[300px] w-auto rounded-3xl" src="/assets/promo3.jpeg" width={300} height={315} />
                <p className="drop-shadow-lg text-white mt-4 text-2xl font-bold text-center"><span className="blue">80 MIL PONTOS AZUL</span> <br /> para emitir o visa infinite</p>
              </div>

              <div className="emissao flex flex-col items-center w-full md:w-1/3">
                <Image alt="t" className="max-h-[300px] w-auto rounded-3xl" src="/assets/emissao4.jpeg" width={300} height={315} />
                <p className="drop-shadow-lg text-white mt-4 text-2xl font-bold text-center">PRIMEIRA CLASSE PARA MIAMI<br /> por <span className="blue"> R$3500</span></p>
              </div>

              <div className="emissao flex flex-col items-center w-full md:w-1/3">
                <Image alt="t" className="max-h-[300px] w-auto rounded-3xl" src="/assets/emissao5.jpeg" width={300} height={315} />
                <p className="drop-shadow-lg text-white mt-4 text-2xl font-bold text-center">Fernando de noronha <br />ida e volta por <span className="blue">R$1100</span></p>
              </div>

              <div className="emissao flex flex-col items-center w-full md:w-1/3">
                <Image alt="t" className="max-h-[300px] w-auto rounded-3xl" src="/assets/promocao4.jpeg" width={300} height={315} />
                <p className="drop-shadow-lg text-white mt-4 text-2xl font-bold text-center">Ganhe até <span className="blue">220.000 pontos livelo</span> em 12 meses</p>
              </div>

              <div className="emissao flex flex-col items-center w-full md:w-1/3">
                <Image alt="t" className="max-h-[300px] w-auto rounded-3xl" src="/assets/emissao6.jpeg" width={300} height={315} />
                <p className="drop-shadow-lg text-white mt-4 text-2xl font-bold text-center">Buenos Aires por<br /> <span className="blue">R$450</span> o trecho</p>
              </div>
            </div>

            <div className="disclaimer mt-10">
              <p className="text-sm text-center text-white font-light">* Esses valores são aproximados considerando os valores do milheiro em jul/2024.</p>
              <p className="text-sm text-center text-white font-light">* NÃO trabalhamos com vendas de milhas.</p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto flex flex-col items-center mb-12 py-4 md:py-12" id="plans">
          <h1 className="px-4 md:px-0 text-3xl md:text-4xl font-bold text-center mb-12">Conheça nossos <span className="blue">planos de assinatura</span></h1>
          <div className="flex flex-col px-4 md:px-0 md:flex-row gap-20 items-center">
            <div className="card flex flex-col items-center bg-white py-6 bg-white rounded-xl px-6 shadow-xl w-fit max-w-96">
              <p className="text-lg font-semibold text-center mb-4">Plano Start</p>
              <p className="text-sm font-normal text-left mb-6">Ideal para viajantes que querem explorar novos destinos sem gastar muito. Receba alertas personalizados para garantir as melhore emissões de passagens com milhas!</p>

              <ul className="flex flex-col px-0 gap-4">
                <li className="flex">
                  <p className="icon mb-0 mr-2">✅</p>
                  <p className="text">Emissões personalizadas</p>
                </li>
                <li className="flex">
                  <p className="icon mb-0 mr-2">✅</p>
                  <p className="text">Destinos que te interessam</p>
                </li>
                <li className="flex">
                  <p className="icon mb-0 mr-2">✅</p>
                  <p className="text">Datas personalizadas</p>
                </li>
                <li className="flex">
                  <p className="icon mb-0 mr-2">✅</p>
                  <p className="text"><b>6 Alertas</b> com a Azul</p>
                </li>
                <li className="flex">
                  <p className="icon mb-0 mr-2">✅</p>
                  <p className="text"><b>2 Alertas</b> com a Smiles e American Airlines (calendário de 7 dias)</p>
                </li>
              </ul>

              <div className="price flex items-end justify-center mt-6">
                <span className="text-xs font-bold">R$</span>
                <h1 className="text-4xl font-bold">39,90</h1>
                <span className="text-xs font-bold">/mês</span>
              </div>

              <Link href="https://app.dominandomilhas.com.br/signup" className="text-center blue-btn mx-auto text-white p-4 mt-4 rounded-xl w-full transition-all font-normal text-lg px-8 hover:scale-105">Assinar plano Start</Link>
            </div>
            <div className="card flex flex-col items-center bg-white py-6 bg-white rounded-xl px-6 shadow-xl w-fit max-w-96">
              <p className="text-lg font-semibold text-center mb-4">Plano Black</p>
              <p className="text-sm font-normal text-left mb-6">O plano perfeito para viajantes mais exigentes! Tenha acesso exclusivo a uma ampla gama de benefícios e garante viagens incríveis o ano todo.</p>

              <ul className="flex flex-col px-0 gap-4">
                <li className="flex">
                  <p className="icon mb-0 mr-2">✅</p>
                  <p className="text">Emissões personalizadas</p>
                </li>
                <li className="flex">
                  <p className="icon mb-0 mr-2">✅</p>
                  <p className="text">Destinos que te interessam</p>
                </li>
                <li className="flex">
                  <p className="icon mb-0 mr-2">✅</p>
                  <p className="text">Datas personalizadas</p>
                </li>
                <li className="flex">
                  <p className="icon mb-0 mr-2">✅</p>
                  <p className="text"><b>10 Alertas</b> com a Azul</p>
                </li>
                <li className="flex">
                  <p className="icon mb-0 mr-2">✅</p>
                  <p className="text"><b>Calendário do Mês</b> com Smiles e American Airlines (até 30 dias)</p>
                </li>
              </ul>

              <div className="price flex items-end justify-center mt-6">
                <span className="text-xs font-bold">R$</span>
                <h1 className="text-4xl font-bold">59,90</h1>
                <span className="text-xs font-bold">/mês</span>
              </div>

              <Link href="https://app.dominandomilhas.com.br/signup" className="text-center blue-btn mx-auto text-white p-4 mt-4 rounded-xl w-full transition-all font-normal text-lg px-8 hover:scale-105">Assinar plano Black</Link>
            </div>
          </div>

        </section>

        <section className="flex flex-col items-center mb-0 relative py-12">
          <div className="bg absolute top-0 left-0 z-1 w-full h-full">
            <img className="absolute top-0 left-0 w-full h-full z-10" src="https://blog.atalaianoronha.com.br/assets/uploads/2018/12/istock-1302338178-1-1024x683.jpg" />
            <div className="absolute top-0 left-0 bg-[#316A7D] w-full opacity-90 h-full z-20"></div>
          </div>
          <div className="container max-w-7xl mx-auto flex flex-col items-center py-12 z-30 relative">
            <h1 className="text-3xl px-4 md:px-0 md:text-4xl md:leading-relaxed text-white drop-shadow-lg font-bold text-center mb-6">Ainda tá em dúvida? Entre no nosso grupo gratuito <br className="hidden md:block"/> para ver algumas das promoções que disponibilizamos <br /> para nossos usuários.</h1>
            <Link href="https://chat.whatsapp.com/G7cEc0JHecII0v8RXVbw76" target="_blank" className="hover:scale-105 transition-all blue-btn text-white p-4 rounded-xl font-normal text-xl px-8">Acessar grupo gratuito</Link>
          </div>
        </section>
      </main >
    </>
  );
}
