# webjump-desafio

### Tecnologias Utilizadas

Olá, para a construção desse projeto foi utilizado, no Front-End, a biblioteca ReactJs em conjunto com o framework NextJs e o Typescript. Para o CSS, usei o framework Tailwild. Todas essas ferramentas foram encapsuladas com o uso do Tailwind Material UI. O "backend" foi simulado pelo Json Server, que age como uma API para jsons. A fim de fazer essas requisições, para esse protótipo de API, foi utilizado o Axios.

## Como rodar o projeto:

Inicialmente, rode npm install para instalar todas as dependências do projeto.

### `npm install`

O projeto tem que ser rodado em dois terminais diferentes, mas na mesma pasta. No primeiro, é preciso colocar o "backend" no "ar". Para isso, precisamos rodar o comando para iniciar a mock API do Json Server. Segue ele:

### `npm run server`

Ele vai executar o Json Server e no terminal mesmo vai aparecer quais URL's estão disponíveis para serem visitadas.
Abra [http://localhost:4000/](http://localhost:4000/) em seu navegador para ver as rotas na página.

Depois de colocar a mock API para rodar, é hora de iniciar o projeto. Para isso utilizamos o seguinte comando:

### `npm run dev`

Aqui o projeto será inicializado e estará disponível em: [http://localhost:3000/](http://localhost:3000/). Abra em seu navegador para ser direcionado à página inicial.

#### A aplicação:

Em quase toda sua totalidade, repliquei o Layout fornecido para esse desafio. Por estar utilizando alguns frameworks, tem alguns componentes que dei uma alterada. Além disso, havia alguns conflitos entre o layout e os jsons fornecidos. Portanto, eu alterei um pouco os dados passados para ter uma maior fidelidade. Por conta de estar utilizando o Json Server, eu também precisei juntar todos os 4 arquivos jsons que foram fornecidos em 1. Todas as informações se mantiveram de forma separada, mas tive que fazer isso para uma melhor performace nas tecnologias que utilizei.

Por fim, apesar de ter passado apenas o layout de uma tela de produtos, a de sapato, eu tomei a liberdade e criei as outras duas de camisetas e calças. Todas as rotas da navbar funcionam, até a de contato.

### O deploy dessa aplicação foi feito:

O Front-End foi colocado no ar com a ajuda do Vercel, segue o link:
[https://web-frontend-chex77wia-marcos-projects-4833e144.vercel.app/](https://web-frontend-chex77wia-marcos-projects-4833e144.vercel.app/)

Também foi feito o deploy do Back-End, seguem os links para as requisições da API:

### Raiz do server
[https://web-json-api.onrender.com/](https://web-json-api.onrender.com/)

### Filtros
[https://web-json-api.onrender.com/filters](https://web-json-api.onrender.com/filters)

### Camisetas
[https://web-json-api.onrender.com/camisetas](https://web-json-api.onrender.com/camisetas)

### Calças
[https://web-json-api.onrender.com/calcas](https://web-json-api.onrender.com/calcas)

### Tênis
[https://web-json-api.onrender.com/tenis](https://web-json-api.onrender.com/tenis)

### List
[https://web-json-api.onrender.com/list](https://web-json-api.onrender.com/list)