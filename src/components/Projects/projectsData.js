import shoppingCart from '../../assets/shoppingCart.gif';
import solarSystem from '../../assets/solarSystem.gif';
import trybeTunes from '../../assets/trybetunes.gif';
import cssLogo from '../../assets/svg/css-3-logo.svg';
import htmlLogo from '../../assets/svg/html-5-logo.svg';
import jsLogo from '../../assets/svg/javascript-logo.svg';
import jestLogo from '../../assets/svg/react-logo.svg';
import reactLogo from '../../assets/svg/jest-logo.svg';

const trybeTunesDescription = `
Aqui foi desenvolvida uma aplicação capaz de reproduzir músicas das mais variadas bandas e
artistas,criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.
Essa aplicação é capaz de:

- Fazer login;
- Pesquisar por uma banda ou artista;
- Listar os álbuns disponíveis dessa banda ou artista;
- Visualizar as músicas de um álbum selecionado;
- Reproduzir uma prévia das músicas deste álbum;
- Favoritar e desfavoritar músicas;
- Ver a lista de músicas favoritas;
- Ver o perfil da pessoa logada;
- Editar o perfil da pessoa logada;
`;

const shoppingCartDescription = `
Projeto desenvolvido durante meu aprendizado no curso de Desenvolvimento Web da Trybe
(Módulo: Front-end).
Nesse projeto coloco em prática o que aprendi sobre JavaScript assíncrono, Fetch API,
Async/Await, Jest — Testes Assíncronos.

O projeto Shopping Cart é uma aplicação que visa criar um carrinho de compras totalmente
dinâmico, consumindo dados diretamente da API do Mercado Livre. Nesse projeto fazemos a
busca pela categoria "computadores" e exibimos o resultado, mostrando imagem, nome e
valor de cada produto.
`;

const solarSystemDescription = `
Projeto desenvolvido durante meu aprendizado no curso de Desenvolvimento Web da Trybe
(Módulo: Front-end).
Solar System é o meu primeiro projeto utilizando React, se trata de uma aplicação que
lista os planetas do sistema solar e algumas das missões espaciais mais conhecidas.

Nesse projeto coloco em prática o que aprendi sobre utilizar JSX no React, utilizar
corretamente o método render() para renderizar os componentes, utilizar import para
trazer componentes em diferentes arquivos, criar componentes de classe em React, criar
múltiplos componentes a partir de um array, fazer uso de props corretamente e fazer uso
de PropTypes para validar as props de um componente.
`;

const projectsData = [
  {
    title: 'Shopping Cart',
    description: shoppingCartDescription,
    image: shoppingCart,
    techs: [cssLogo, htmlLogo, jsLogo, jestLogo],
    siteLink: 'https://shopping-cart-mho.vercel.app/',
    codeLink: 'https://github.com/mtssantos96/project-shopping-cart',
  },
  {
    title: 'Solar System',
    description: solarSystemDescription,
    image: solarSystem,
    techs: [cssLogo, htmlLogo, jsLogo, reactLogo],
    siteLink: 'https://solar-system-mho.vercel.app/',
    codeLink: 'https://github.com/mtssantos96/project-solar-system',
  },
  {
    title: 'TrybeTunes',
    description: trybeTunesDescription,
    image: trybeTunes,
    techs: [cssLogo, htmlLogo, jsLogo, reactLogo],
    siteLink: 'https://trybetunes-mho.vercel.app/',
    codeLink: 'https://github.com/mtssantos96/project-trybetunes',
  },
];

export default projectsData;
