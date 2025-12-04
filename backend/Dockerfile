FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Gera o Prisma dentro do container (Linux)
RUN npx prisma generate

# Compila TypeScript
RUN npm run build

EXPOSE 3001

CMD ["node", "dist/server.js"]
