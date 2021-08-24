# Padrões de projeto

- Padrões adotados pelo frontend
  - Árvore de arquivos
    - public
    - src
      - assets
      - components
      - pages
      - utils
      - hooks
      - routes.tsx
    - .editorconfig
    - .eslintrc.json
    - Dockerfile
    - package.json
    - prettier.config.json
    - tsconfig.json

## Padrões adotados pelo frontend

Foram utilizados alguns padrões que devem ser mantidos pelo projeto para ter uma uniformidade durante o desenvolvimento do código.

### Árvore de arquivos

#### public

Nesta pasta está todos os arquivos que serão acessados pelo próprio navegador (icones, imagens e o html).

#### src

Dentro dessa pasta está todo o projeto react que é subdividido em outras pastas para melhor organização das hierarquias.

##### assets

Dentro dos _assets_ serão colocados todas as imagens, vetores ou semelhantes que são utilizados no site do projeto. Neles não serão colocados os ícones que são públicos (ícone da barra de navegador), uma vez que é necessário adicionar os mesmos na pasta _public_. Coloque nomes que façam sentido para identificar as imagens no padrão _Camel case_.

##### components

Dentro dessa pasta serão colocados todos os componentes que são reutilizáveis no projeto, fazendo com que não seja necessária repetição no código. Sempre no padrão _NameOfComponent/index.tsx_, e com seu respectivo css (se necessário).

##### pages

Dentro da _pages_ será construída a parte visual do site utilizando os _components_ necessários e com o mesmo padrão de nomenclatura.

##### services

Dentro dessa pasta serão colocados os serviços relacionados a integração com o backend.

##### hooks

Dentro de _hooks_ serão colocados os dados que serão disponíveis globalmente durante toda a aplicação. Normalmente usado com contexto. (Login, mensagens toast e qualquer outra que se vir necessário).

##### routes.tsx

Arquivo de configuração de rotas. Caso o projeto cresça muito será necessário criar uma pasta _routes_ para colocar todos os arquivos relacionados a rotas.

#### .editorconfig

Padronização de editor, podendo ser utilizado em editores diferentes do vscode.

#### .eslintrc.json

Regras de código que são utilizadas para evitar erros de produção. Algumas delas podem ser ignoradas dependendo da nossa intenção com o código, porém a recomendação é que sempre esteja atento a elas.

#### Dockerfile

Arquivo de configuração do Docker para subir um container do react dentro do servidor. Possui uma versão _-dev_ para testes.

#### package.json

Onde fica todos os pacotes necessários para rodar a aplicação, sempre quando baixar pela primeira vez o projeto o primeiro comando é o de instalar os pacotes listados nesse arquivo com suas respectivas versões. O projeto não roda sem ele.

#### prettier.config.json

É um arquivo de estilização de código para padronização. Nele possui regras de estilo de código que ajudam a deixar a leitura do mesmo mais fácil de entender.

#### tsconfig.json

Arquivo de configuração de tipagem typescript.

<h4 align="center">
	🚧  ReactJS 🚀 Em construção...  🚧
</h4>
