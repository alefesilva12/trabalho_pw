"use client";

import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../lib/products";

export default function Home() {
  return (
    <div className="space-y-24">

      {/* BANNER PRINCIPAL */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-br from-blue-700 to-slate-900 p-16 rounded-3xl shadow-xl overflow-hidden border border-slate-700"
      >
        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-white drop-shadow">
            As melhores ofertas da semana
          </h1>

          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Produtos selecionados, envio rápido e preços exclusivos para você.
          </p>

          <a
            href="/produtos"
            className="inline-block mt-6 px-10 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow hover:scale-105 transition"
          >
            Ver Produtos
          </a>
        </div>

        {/* Efeito gráfico no fundo */}
        <div className="absolute inset-0 opacity-20 bg-[url('/window.svg')] bg-cover bg-center"></div>
      </motion.section>

      {/* SEÇÃO DE CATEGORIAS */}
      <section className="fade-in space-y-10">
        <SectionTitle>Categorias</SectionTitle>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {[
            { nome: "Eletrônicos", img: "/images/produto1.jpg" },
            { nome: "Moda", img: "/images/produto2.jpg" },
            { nome: "Casa", img: "/images/produto3.jpg" },
            { nome: "Promoções", img: "/images/produto1.jpg" },
            { nome: "Novidades", img: "/images/produto2.jpg" },
            { nome: "Mais vendidos", img: "/images/produto3.jpg" },
          ].map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow hover:border-blue-500 transition cursor-pointer"
            >
              <img
                src={cat.img}
                className="w-full h-24 object-cover rounded-lg mb-2"
              />
              <p className="text-slate-100 text-center font-medium">
                {cat.nome}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUTOS EM DESTAQUE */}
      <section className="fade-in space-y-10">
        <SectionTitle>Destaques da semana</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProductCard {...p} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOCOS DE INFORMAÇÃO */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 fade-in">
        {[
          {
            title: "Frete grátis",
            desc: "Para pedidos acima de R$ 150,00",
          },
          {
            title: "Entrega rápida",
            desc: "Envio no mesmo dia para Manaus",
          },
          {
            title: "Pagamento seguro",
            desc: "Pix, Cartão, Boleto",
          },
        ].map((info, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow text-center"
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-2">
              {info.title}
            </h3>
            <p className="text-slate-400">{info.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}