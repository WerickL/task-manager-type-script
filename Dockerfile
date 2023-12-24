# Use a imagem base do Node.js
FROM node:latest

# Crie e defina o diretório de trabalho no contêiner
WORKDIR /home/werick/Documentos/type-script-task-manager

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install
RUN npm i -g @nestjs/cli
RUN npm install @prisma/client
RUN npm install bcrypt
RUN npx prisma generate
COPY . .
# Instale o 'wait-for-it'
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /usr/wait-for-it.sh
RUN chmod +x /usr/wait-for-it.sh

CMD ["sh", "-c", "/usr/wait-for-it.sh -t 120 mysql:3306 -- npx prisma db push && npm run start:dev"]
