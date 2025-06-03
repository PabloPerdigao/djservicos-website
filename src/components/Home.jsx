import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logo from '../assets/logo.png';

export default function LandingPage() {
  return (
    <div className="bg-[#F1F0E8] text-[#333]">
      {/* Home Section */}
       <section class="home">
        <img src={logo} alt="Logo" />
        <h1>🌱 “Há 34 anos promovendo soluções ambientais que cultivam o futuro!”</h1>
        <p>Referência em reflorestamento, recuperação de áreas degradadas e soluções ambientais sustentáveis.</p>
        <a href="#servicos" class="btn">Solicite um orçamento</a>
      </section>

      {/* Sobre Nós */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#a30308] mb-6">Sobre Nós</h2>
        <p className="mb-4">🌱 Há 34 anos promovendo soluções ambientais que cultivam o futuro!</p>
        <p className="mb-4">Desde 1991, a D.J. Serviços Rurais Ltda. é referência em soluções ambientais, reflorestamento e recuperação de áreas degradadas...</p>
        <h3 className="text-2xl font-semibold mt-6 text-[#a30308]">Missão</h3>
        <p className="mb-4">Promover soluções ambientais inovadoras e sustentáveis...</p>
        <h3 className="text-2xl font-semibold mt-6 text-[#a30308]">Visão</h3>
        <p className="mb-4">Ser referência nacional no setor florestal e ambiental...</p>
        <h3 className="text-2xl font-semibold mt-6 text-[#a30308]">Valores</h3>
        <p className="mb-4">Sustentabilidade, excelência, segurança, ética, inovação e valorização das pessoas.</p>
      </section>

      {/* Serviços */}
      <section className="bg-white px-6 py-16">
        <h2 className="text-3xl font-bold text-[#a30308] text-center mb-12">Nossos Serviços</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#a30308]">Produção de Mudas</h3>
              <p className="mt-2">Cultivo e cuidado especializado de mudas nativas...</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#a30308]">Manejo e Recuperação</h3>
              <p className="mt-2">Controle de vegetação, adubação, irrigação e mais.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#a30308]">Revegetação e Hidrossemeadura</h3>
              <p className="mt-2">Soluções como biomantas, hidrossemeadura e mais.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#a30308]">Logística e Manutenção</h3>
              <p className="mt-2">Transporte, carga, descarga e cercas vivas.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projetos e Cases */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#a30308] mb-6">Projetos e Cases de Sucesso</h2>
        <p className="mb-4">Desde 2018, atuamos com a Vale S.A. em diversas unidades, com foco em reflorestamento, viveiros e recuperação ambiental.</p>
        <ul className="list-disc pl-6">
          <li>Manutenção de viveiros florestais</li>
          <li>Hidrossemeadura e aplicação de biomantas</li>
          <li>Controle ambiental e irrigação</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-[#a30308] text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Quer transformar seu projeto ambiental?</h2>
        <p className="mb-6">Entre em contato para saber como podemos contribuir.</p>
        <Button className="bg-white text-[#a30308] font-bold hover:bg-[#F1F0E8]">Fale Conosco</Button>
      </section>

      {/* Contato */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#a30308] mb-6">Contato</h2>
        <form className="grid gap-4">
          <input type="text" placeholder="Nome" className="p-3 border rounded" />
          <input type="email" placeholder="Email" className="p-3 border rounded" />
          <textarea placeholder="Mensagem" className="p-3 border rounded h-32"></textarea>
          <Button className="bg-[#a30308] text-white hover:bg-[#820204]">Enviar</Button>
        </form>
        <div className="mt-6">
          <p>📞 (31) 99999-9999</p>
          <p>📧 contato@djservicosrurais.com.br</p>
          <p>🔗 <a href="https://www.linkedin.com/company/djservicosrurais" target="_blank" rel="noopener noreferrer" className="text-[#a30308] underline">LinkedIn</a></p>
        </div>
      </section>

      {/* Banco de Talentos */}
      <section className="bg-white px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#a30308] mb-6">Banco de Talentos</h2>
        <p className="mb-4">Cadastre seu currículo e venha fazer parte da nossa equipe!</p>
        <form className="grid gap-4">
          <input type="text" placeholder="Nome" className="p-3 border rounded" />
          <input type="email" placeholder="Email" className="p-3 border rounded" />
          <input type="file" className="p-3 border rounded" />
          <Button className="bg-[#a30308] text-white hover:bg-[#820204]">Enviar Currículo</Button>
        </form>
      </section>

      {/* Políticas da Empresa */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#a30308] mb-4">Políticas da Empresa</h2>
        <p className="mb-4">Trabalhamos com ética, responsabilidade socioambiental e compromisso com a qualidade, segurança e inovação.</p>
      </section>
    </div>
  );
}
