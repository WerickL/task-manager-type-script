# Use a imagem base do Node.js
FROM node:latest

# Crie e defina o diretório de trabalho no contêiner
WORKDIR /home/app

# Copie o arquivo package.json e package-lock.json para um diretório temporário
RUN mkdir ../dependencies

COPY package*.json ../dependencies/
# Instale as dependências no diretório temporário
RUN cd ../dependencies/ && npm install && npx prisma generate
RUN ls -l
# Instale o 'wait-for-it'
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /usr/wait-for-it.sh
RUN chmod +x /usr/wait-for-it.sh

CMD [""]