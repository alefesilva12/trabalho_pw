export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* COLUNA 1 – SOBRE */}
        <div>
          <h3 className="text-xl font-bold mb-4">Minha Loja</h3>
          <p className="text-slate-400 leading-relaxed">
            Ecommerce moderno criado em Next.js.
            <br />
            Produtos de qualidade com o melhor preço.
          </p>
        </div>

        {/* COLUNA 2 – LINKS */}
        <div>
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul className="space-y-2 text-slate-300">
            <li className="hover:text-white transition cursor-pointer">Sobre</li>
            <li className="hover:text-white transition cursor-pointer">Produtos</li>
            <li className="hover:text-white transition cursor-pointer">Contato</li>
          </ul>
        </div>

        {/* COLUNA 3 – REDES SOCIAIS */}
        <div>
          <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>

          <div className="flex items-center gap-4 text-3xl">
            <span className="cursor-pointer hover:text-white">🌐</span>
            <span className="cursor-pointer hover:text-white">📱</span>
            <span className="cursor-pointer hover:text-white">📸</span>
            <span className="cursor-pointer hover:text-white">🦩</span>
          </div>
        </div>

      </div>

      {/* RODAPÉ INFERIOR */}
      <div className="text-center py-4 border-t border-slate-800 text-slate-500 text-sm">
        © 2025 Minha Loja — Todos os direitos reservados
      </div>
    </footer>
  );
}