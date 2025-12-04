"use client";

import React, { useEffect, useState } from "react";

export default function TestAPI() {
  const [data, setData] = useState("carregando...");

  useEffect(() => {
    fetch("http://localhost:3001/ping")
      .then((res) => res.json())
      .then((json) => setData(JSON.stringify(json)))
      .catch(() => setData("erro ao conectar"));
  }, []);

  return (
    <div style={{ padding: 20, fontSize: 18 }}>
      <h1>Teste de Integração</h1>
      <p>Resposta do backend: {data}</p>
    </div>
  );
}