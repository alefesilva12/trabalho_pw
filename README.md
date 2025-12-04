# Loja Virtual Completa — Backend + Frontend

Projeto desenvolvido para a disciplina **Programação Web**, contendo uma aplicação completa de **e-commerce**, com backend em Node.js/Express/Prisma e frontend em Next.js/TailwindCSS.
O sistema implementa cadastro e autenticação de usuários, CRUD de produtos, sessões, cookies de idioma e integração full stack.

## Tecnologias Utilizadas

### **Backend**

* Node.js
* Express
* Prisma ORM
* MySQL (Docker)
* express-session
* bcryptjs
* Joi (validação)
* Envalid (validação de variáveis de ambiente)
* Arquitetura em camadas (Routes → Controllers → Services → Repositories)

### **Frontend**

* Next.js (App Router)
* React
* TailwindCSS
* Context API (tema, carrinho, toasts)
* Fetch API com credenciais (sessões)

## Estrutura do Projeto

```
trabalho_pw/
│
├── backend/
│   ├── src/
│   │   ├── resources/
│   │   │   ├── auth/
│   │   │   ├── user/
│   │   │   ├── language/
│   │   │   ├── product/
│   │   │   └── purchase/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── middlewares/
│   │   └── utils/
│   ├── prisma/
│   └── docker-compose.yml
│
└── loja-frontend/
    ├── app/
    ├── components/
    ├── lib/
    ├── public/
    └── tailwind.config.js
```

## Como Rodar o Projeto

### 1. Backend

```bash
cd backend
npm install
docker-compose up -d
npx prisma migrate dev
npm run dev
```

A API ficará disponível em:
**[http://localhost:3001](http://localhost:3001)**

---

### 2. Frontend

```bash
cd loja-frontend
npm install
npm run dev
```

Frontend disponível em:
**[http://localhost:3000](http://localhost:3000)**

---

## Funcionalidades Implementadas

### **Backend**

✔ CRUD de produtos
✔ Cadastro de usuários
✔ Login com sessão (express-session)
✔ Cookie de idioma (`lang`)
✔ Autorização por tipo de usuário (admin/cliente)
✔ Validação via Joi
✔ Prisma + MySQL via Docker
✔ Tratamento centralizado de erros
✔ Arquitetura modular (Controllers, Services, Repositories)

### **Frontend**

✔ Listagem de produtos integrada
✔ Página de cadastro
✔ Página de login
✔ Sessão com cookie `connect.sid`
✔ Contexto de carrinho
✔ Tema dark/light com ThemeContext
✔ Interface construída com TailwindCSS
✔ Toasts de feedback
✔ Página protegida (somente logado)

---

## 🔗 Rotas da API

### **User**

| Método | Rota     | Descrição     |
| ------ | -------- | ------------- |
| POST   | `/users` | Criar usuário |

### **Auth**

| Método | Rota          | Descrição                   |
| ------ | ------------- | --------------------------- |
| POST   | `/auth/login` | Autenticar usuário          |
| GET    | `/auth/me`    | Retorna usuário autenticado |

### **Produtos**

| Método | Rota           | Descrição         |
| ------ | -------------- | ----------------- |
| GET    | `/product`     | Listar produtos   |
| POST   | `/product`     | Criar produto     |
| PUT    | `/product/:id` | Atualizar produto |
| DELETE | `/product/:id` | Remover produto   |

### **Idioma**

| Método | Rota                          | Descrição     |
| ------ | ----------------------------- | ------------- |
| GET    | `/language/change?lang=en-US` | Trocar idioma |

---

## Docker

Subir banco MySQL + API:

```bash
docker-compose up -d
```

Containers:

* **backend-api** → porta **3001**
* **backend-mysql** → porta **3306**


## Requisitos Atendidos

* API REST funcional
* SPA em Next.js integrada
* CRUD de produtos completo
* Sessões + autenticação real
* Cookies e middleware de idioma
* Validação de dados
* Prisma + MySQL via Docker
* Arquitetura organizada em camadas
* Boas práticas: ESLint, Prettier, DTOs



