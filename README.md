# CHECKPOINT — Blog de Games

Trabalho da **AOP2 de Programação Web - Front End**, do curso de **Análise e Desenvolvimento de Sistemas** da Universidade Vila Velha (UVV).

A proposta da atividade era criar um blog com pelo menos cinco páginas. Escolhi o tema **Games** e organizei o CHECKPOINT com notícias, análises de jogos e dicas para quem gosta de jogar.

**Site publicado:** https://fabriciodna.github.io/checkpoint/

## Páginas do blog

- **Home:** apresenta o blog e mostra os três conteúdos em destaque, com imagens que levam às outras páginas.
- **Notícias:** duas atualizações de Minecraft e No Man's Sky, com links para as fontes oficiais. São notícias de 2024, usadas como conteúdo do blog.
- **Reviews:** informações sobre Hollow Knight e Stardew Valley, incluindo pontos positivos e o que considerar antes de jogar.
- **Dicas:** orientações sobre controles, exploração, prática e pausas.
- **Contatos:** formulário para demonstrar validação de campos com JavaScript. Ele não envia mensagens.

## Tecnologias usadas

- **HTML5:** estrutura das páginas e elementos semânticos.
- **CSS3:** cores, espaçamento, cards e adaptação para celular.
- **JavaScript:** menu para telas menores e validação do formulário.

O projeto não utiliza frameworks e pode ser aberto diretamente no navegador.

## Como executar

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` no navegador.
3. Navegue pelo menu para acessar as outras páginas.

Se preferir usar um servidor local e tiver Node.js instalado, execute:

```bash
node scripts/serve.mjs
```

Depois, acesse `http://localhost:4173`.

## Organização dos arquivos

- `index.html`, `noticias.html`, `reviews.html`, `dicas.html`, `contatos.html`: páginas do blog.
- `css/style.css`: estilos.
- `js/script.js`: interações.
- `assets/images/`: ilustrações usadas no site.
- `scripts/check.mjs` e `TESTES.md`: verificações realizadas no projeto.

## Sobre a atividade

O foco foi praticar a estrutura de um site com várias páginas, manter a navegação funcionando em todas elas e cuidar da aparência tanto no computador quanto no celular.

**Aluno:** Fabricio Roosenvelt Rodrigues Dantas  
**Curso:** Análise e Desenvolvimento de Sistemas  
**Disciplina:** Programação Web - Front End  
**Professor:** Fabricio Ribeiro Ferreira  
**Instituição:** Universidade Vila Velha — 2026
