"use client";

import { useState } from "react";
import Button from "@/components/Button";

export default function CadastroPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  function update(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e: any) {
    e.preventDefault();
    setMsg("Enviando...");

    const res = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setMsg(res.ok ? "Usuário criado com sucesso!" : "Erro ao cadastrar.");
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Criar Conta</h1>

      <form className="flex flex-col gap-4" onSubmit={submit}>
        <input
          className="border p-2 rounded"
          placeholder="Nome"
          name="name"
          value={form.name}
          onChange={update}
        />

        <input
          className="border p-2 rounded"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={update}
        />

        <input
          className="border p-2 rounded"
          placeholder="Senha"
          type="password"
          name="password"
          value={form.password}
          onChange={update}
        />

        <Button>Cadastrar</Button>
      </form>

      <p className="mt-4">{msg}</p>
    </div>
  );
}