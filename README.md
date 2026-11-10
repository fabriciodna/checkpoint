# CHECKPOINT — Seu universo gamer

Blog de games desenvolvido para a AOP2 da Universidade Vila Velha (UVV), em 2026. Interface escura, identidade em roxo, ilustrações SVG originais e cinco páginas estáticas independentes.

## Tecnologias

HTML5 semântico, CSS3 com Grid/Flexbox e media queries, JavaScript puro. Sem frameworks, bibliotecas externas, fontes remotas ou instalação de dependências.

## Páginas e estrutura

- index.html: apresentação, destaque visual e três cards com imagens clicáveis.
- noticias.html: arquivo editorial de anúncios de 2024, com datas e fontes oficiais.
- reviews.html: análises descritivas de Hollow Knight e Stardew Valley, sem alegação de testes pessoais.
- dicas.html: configurações, exploração, prática e ritmo de jogo, com índice interno.
- contatos.html: formulário demonstrativo com validação local.
- css/style.css: estilos compartilhados e responsividade.
- js/script.js: menu adaptável e validação.
- assets/images/: sete ilustrações SVG locais, incluindo favicon.
- output/pdf/: PDF acadêmico provisório de duas páginas e fonte HTML editável.
- scripts/serve.mjs: servidor local opcional, sem dependências.
- scripts/check.mjs: verificação automatizada dos arquivos, usando apenas Node.js.
- TESTES.md: resultados e limites das verificações executadas.

## Executar localmente

Abra index.html no navegador. Todos os caminhos são relativos e também funcionam diretamente pelo sistema de arquivos.

Se tiver Node.js instalado, execute na pasta checkpoint:

```sh
node scripts/serve.mjs
```

Acesse http://127.0.0.1:4173. Encerre com Ctrl+C. Nenhum pacote precisa ser instalado.

Para repetir as verificações estáticas:

```sh
node scripts/check.mjs
```

## Funcionalidades e acessibilidade

Menu com cinco opções, página ativa com aria-current, menu móvel com aria-expanded e fechamento por Escape, link para pular ao conteúdo, foco visível, texto alternativo, animações discretas respeitando a preferência por movimento reduzido e layout adaptável.

O formulário exige nome (2 a 100 caracteres), e-mail válido (até 254) e mensagem (10 a 2000). Espaços vazios não são aceitos. Erros são associados aos campos e o foco vai ao primeiro campo inválido. A confirmação informa que nada foi enviado nem armazenado. Não há backend, analytics, cookies ou persistência de dados.

## Publicação no GitHub Pages

Repositório: https://github.com/fabriciodna/checkpoint

Para publicar a partir da raiz: Settings → Pages → Deploy from a branch → main → / (root) → Save. O arquivo .nojekyll mantém a publicação como site estático. Não há etapa de build. Use o endereço real fornecido pelo GitHub depois que a implantação terminar.

Site publicado: https://fabriciodna.github.io/checkpoint/

GitHub Pages configurado em main, raiz /, com HTTPS. As cinco páginas públicas foram verificadas.

## Documento acadêmico

output/pdf/CHECKPOINT-AOP2-PROVISORIO.pdf tem exatamente duas páginas: capa e links. O HTML ao lado permite editar os campos e imprimir novamente em A4, escala 100%, margens definidas pelo documento e sem cabeçalhos/rodapés do navegador.

Pendências: nomes completos e matrículas, em ordem alfabética. Os dois links públicos reais já estão inseridos e clicáveis. O arquivo está identificado como provisório e não deve ser entregue como versão definitiva enquanto houver marcadores.

## Política editorial e imagens

Notícias são uma seleção histórica de 2024, não um feed atual. Textos são originais. Fontes oficiais estão junto de cada notícia. Reviews descrevem as propostas dos jogos; não afirmam experiência prática inexistente. As imagens são ilustrações conceituais originais em SVG, não capturas dos jogos. Marcas pertencem aos seus titulares.
