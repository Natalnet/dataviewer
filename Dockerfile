# Imagem de Origem
FROM node:alpine
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Instalando dependências da aplicação e armazenando em cache.
COPY package*.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
RUN yarn global add react-scripts@3.4.1 -g
# Inicializa a aplicação
EXPOSE 3000
CMD ["yarn", "start"]