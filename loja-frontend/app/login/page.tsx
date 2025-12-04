"use client";

import { useState } from "react";
import Button from "@/components/Button";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  function update(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e: any) {
    e.preventDefault();
    setMsg("Entrando...");

    const res = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setMsg(res.ok ? "Login realizado!" : "Credenciais inválidas");
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <form className="flex flex-col gap-4" onSubmit={submit}>
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

        <Button>Entrar</Button>
      </form>

      <p className="mt-4">{msg}</p>
    </div>
  );
}