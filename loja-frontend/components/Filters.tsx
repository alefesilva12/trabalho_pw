"use client";

export default function Filters({ setFilters }: any) {
  return (
    <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 shadow-md fade-in space-y-4">

      <input
        type="text"
        placeholder="Buscar produto..."
        className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-100"
        onChange={(e) => setFilters((f: any) => ({ ...f, search: e.target.value }))}
      />

      <select
        className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-100"
        onChange={(e) => setFilters((f: any) => ({ ...f, category: e.target.value }))}
      >
        <option value="">Todas as categorias</option>
        <option value="eletronicos">Eletrônicos</option>
        <option value="moda">Moda</option>
        <option value="casa">Casa</option>
      </select>

      <select
        className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-100"
        onChange={(e) => setFilters((f: any) => ({ ...f, order: e.target.value }))}
      >
        <option value="">Ordenar por</option>
        <option value="asc">Preço: menor para maior</option>
        <option value="desc">Preço: maior para menor</option>
      </select>
    </div>
  );
}