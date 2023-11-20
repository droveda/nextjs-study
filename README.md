# NextJs Course
* https://nextjs.org/
  * https://nextjs.org/docs/getting-started/installation#manual-installation
  * npx create-next-app@latest <nome-do-projeto> (cria um novo projeto já com dependências e estrutura certa)

## Criando o projeto
* npm init -y
* npm install next@latest react@latest react-dom@latest
* npm install
* npx gitignore node
* para rodar **npm run dev**

## Conceitos
* O next trabalha com a pasta na raiz do projeto **pages** onde ficam as páginas
* Componentes foram criados em **/src/components/**  

* O que é Next.js?
  * Next.js é um framework baseado em React que pode entregar tanto conteúdo estático quanto gerado no servidor.
* A criar um projeto Next.js
    * Pode-se criar um projeto Next.js adicionando os pacotes do framework manualmente num projeto Node.js.
* Componente Linkclear
  * Este componente permite a navegação SPA de aplicações Next.js.


## Entendendo o build do NextJS
* npm run build
* npm run start
* npm run export (este comando irá fazer o build e exportar o projeto (estáticos para uma pasta /out))
  * gera os arquivos que serão utilizados no ambiente de produção.
  * npm http-server ./out -c-1

## Estilizando o projeto
* CSS-in-JS

## Adicionar alguns componentes
* Font Awesome
  * npm install add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
* Imagens Utilizadas no site podem ser baixadas em:
  * https://github.com/alura-cursos/01-nextjs-course/blob/aula2.5/public/images/alura-cases.png
  * https://github.com/alura-cursos/01-nextjs-course/blob/aula2.5/public/images/alura-logo.svg
* GitHub com o código dos componentes: https://github.com/omariosouto/01-nextjs-course/pull/6/files

## Página de FAQ
* Endpoint da API: https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json

## Importante:
* getStaticProps() -> pense em conteúdo estático (roda somente em build time , mas em modo dev sempre roda a cada acesso) (Static Generation)
* getServerSideProps() -> conteúdo dinâmico (npm run build && npm run start) (roda a cada acesso que você recebe, em modo dev sempre roda a cada acesso) (Server-Side Rendering)
* useEffect
* Jamstack - https://jamstack.org
* arquivo **next.config.js**

## Publicando o Site na nuven