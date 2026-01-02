// pages/index.jsx
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Edilânio Diogo | Gerente Comercial</title>
        <meta name="description" content="Portfólio profissional de Edilânio De Jesus Pedro Diogo" />
      </Head>

      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur z-50 border-b">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold text-blue-600">EDILÂNIO</h1>
          <ul className="hidden md:flex gap-6 text-sm">
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#resultados">Resultados</a></li>
            <li><a href="#experiencia">Experiência</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main className="pt-28">

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Edilânio De Jesus<br />Pedro Diogo
            </h2>
            <p className="mt-4 text-blue-600 font-semibold">
              Gerente Comercial & Supervisor de Vendas
            </p>
            <p className="mt-4 text-gray-600">
              +3 anos impulsionando vendas, equipas e resultados comerciais.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="/cv.pdf" className="bg-blue-600 text-white px-6 py-3 rounded-lg">Baixar CV</a>
              <a href="https://wa.me/244933534797" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg">WhatsApp</a>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src="/foto.jpg" width={300} height={300} className="rounded-xl" alt="Edilânio" />
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="mt-24 bg-blue-50 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold">Sobre Mim</h3>
            <p className="mt-6 text-gray-700">
              Sou gerente comercial com mais de 3 anos de experiência em gestão de lojas, equipas e stock,
              focado no aumento de vendas, rentabilidade e crescimento sustentável de marcas.
            </p>
          </div>
        </section>

        {/* RESULTADOS */}
        <section id="resultados" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-12">Resultados em Números</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[['8+','Lojas'],['54M Kz','Vendas'],['150%','Crescimento'],['21','Clientes']].map(([num,label]) => (
                <div key={label} className="bg-white shadow rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-blue-600">{num}</p>
                  <p className="mt-2 text-gray-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section id="experiencia" className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-10">Experiência Profissional</h3>
            <div className="space-y-6">
              <Card title="Xiaomi Angola" role="Supervisor e Promotor de Vendas" desc="Supervisão de 8+ lojas, integração de novas parcerias e geração de 54M Kz em vendas." />
              <Card title="Phone Mania" role="Gerente Comercial" desc="Aumento de 150% da produção e formação de equipas em vendas e marketing." />
              <Card title="Mobismart Telecomunicações" role="Assistente de Vendas e Logística" desc="Gestão de inventário e apoio estratégico às vendas." />
              <Card title="Premier Bet" role="Gerente Comercial" desc="Gestão comercial e liderança de equipa." />
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="bg-blue-700 text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold">Vamos Trabalhar Juntos?</h3>
            <p className="mt-4">Luanda – Viana / Zango 1</p>
            <p className="mt-2">edilanio2002@gmail.com</p>
            <p className="mt-2">933 534 797 | 957 150 190</p>
            <a href="https://wa.me/244933534797" className="inline-block mt-6 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold">Falar no WhatsApp</a>
          </div>
        </section>

      </main>

      <footer className="py-6 text-center text-sm text-gray-500">
        © 2026 Edilânio De Jesus Pedro Diogo
      </footer>
    </>
  )
}

function Card({ title, role, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="text-blue-600 text-sm">{role}</p>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    </div>
  )
}
