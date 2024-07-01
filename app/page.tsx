import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <header className="flex justify-center px-5">
          <Image src="/assets/logo_dominando.png" width={250} height={50} />
        </header>

        <section className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold text-center mb-4">Não somos um <span className="blue">grupo de alertas</span></h1>
          <h2 className="text-xl">cansado de participar de <b>vários grupos</b> com emissões que <b>não te interessam?</b></h2>
          <button className="blue-btn text-white p-4 rounded-xl font-bold text-xl px-8">Quero viajar barato!</button>
        </section>

        <section className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold text-center mb-6">O que <span className="blue">o mercado</span> te oferece</h1>

          <div className="card bg-white py-6 bg-white rounded-xl px-2 shadow-lg w-fit">
            <p className="text-lg font-semibold text-center mb-6">Grupos de alertas</p>

            <ul className="flex flex-col px-4 gap-4">
              <li className="flex"><p className="icon mb-0 mr-2">❌</p> Emissões personalizadas</li>
              <li className="flex"><p className="icon mb-0 mr-2">❌</p> Destinos que te interessam</li>
              <li className="flex"><p className="icon mb-0 mr-2">✅</p> Spam no seu Whatsapp</li>
              <li className="flex"><p className="icon mb-0 mr-2">✅</p> Promoções que você nunca vai usar</li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold text-center mb-6">O que a <span className="blue">Dominando pontos</span> te oferece</h1>

          <div className="flex gap-4">
            <div className="card bg-white py-6 rounded-xl px-2 shadow-lg w-fit">
              <p className="text-lg font-semibold text-center mb-6">Robô de busca de passagens</p>

              <ul className="flex flex-col px-4 gap-4">
                <li className="flex"><p className="icon mb-0 mr-2">✅</p> Emissões personalizadas</li>
                <li className="flex"><p className="icon mb-0 mr-2">✅</p> Destinos que te interessam</li>
                <li className="flex"><p className="icon mb-0 mr-2">✅</p> Datas personalizadas</li>
                <li className="flex"><p className="icon mb-0 mr-2">✅</p> Buscas com datas flexíveis</li>
              </ul>
            </div>

            <div className="card bg-white py-6 rounded-xl px-2 shadow-lg w-fit">
              <p className="text-lg font-semibold text-center mb-6">Grupos de alertas</p>

              <ul className="flex flex-col px-4 gap-4">
                <li className="flex"><p className="icon mb-0 mr-2">✅</p> As melhores promoções</li>
                <li className="flex"><p className="icon mb-0 mr-2">✅</p> Categorias personalizadas</li>
                <li className="flex"><p className="icon mb-0 mr-2">✅</p> Ligar e desligar os alertas <br />quando quiser</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold text-center mb-12">Receba alertas dos <span className="blue">principais programas</span> de pontos</h1>

          <div className="cias flex gap-12 items-center">
            <div className="flex flex-col items-center gap-4">
              <Image src="/assets/smiles.png" width={250} height={50} />
              <p className="text-base font-semibold text-center">
                Smiles
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Image src="/assets/azul.png" width={250} height={50} />
              <p className="text-base font-semibold text-center">
                Azul <span className="blue">(nacional)</span> e <br />
                Azul pelo mundo <span className="blue">(internacional)</span>
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Image src="/assets/american.png" width={250} height={50} />
              <p className="text-base font-semibold text-center">
                American Airlines
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold text-center mb-12">Algumas das emissões que <span className="blue">nossos usuários</span> <br /> estão tendo acesso</h1>

          <div className="emissoes flex items-center gap-y-6 flex-wrap">
            <div className="emissao flex flex-col items-center w-1/3">
              <Image className="rounded-3xl" src="/assets/emissao1.jpeg" width={300} height={315} />
              <p className="mt-4 text-2xl font-bold text-center">Orlando por <br /> <span className="blue">R$1200</span></p>
            </div>

            <div className="emissao flex flex-col items-center w-1/3">
              <Image className="rounded-3xl" src="/assets/emissao1.jpeg" width={300} height={315} />
              <p className="mt-4 text-2xl font-bold text-center">Orlando por <br /> <span className="blue">R$1200</span></p>
            </div>

            <div className="emissao flex flex-col items-center w-1/3">
              <Image className="rounded-3xl" src="/assets/emissao1.jpeg" width={300} height={315} />
              <p className="mt-4 text-2xl font-bold text-center">Orlando por <br /> <span className="blue">R$1200</span></p>
            </div>

            <div className="emissao flex flex-col items-center w-1/3">
              <Image className="rounded-3xl" src="/assets/emissao1.jpeg" width={300} height={315} />
              <p className="mt-4 text-2xl font-bold text-center">Orlando por <br /> <span className="blue">R$1200</span></p>
            </div>

            <div className="emissao flex flex-col items-center w-1/3">
              <Image className="rounded-3xl" src="/assets/emissao1.jpeg" width={300} height={315} />
              <p className="mt-4 text-2xl font-bold text-center">Orlando por <br /> <span className="blue">R$1200</span></p>
            </div>

            <div className="emissao flex flex-col items-center w-1/3">
              <Image className="rounded-3xl" src="/assets/emissao1.jpeg" width={300} height={315} />
              <p className="mt-4 text-2xl font-bold text-center">Orlando por <br /> <span className="blue">R$1200</span></p>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
