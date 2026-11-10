# Verificações — CHECKPOINT

Executadas em 10/11/2026.

- Cinco HTMLs: doctype, pt-BR, tags balanceadas, um head/body/header/nav/main/footer e um h1 por página: aprovados pelo script local. Esta checagem estrutural não substitui o Nu HTML Checker.
- Menu: cinco opções idênticas, destinos relativos existentes e exatamente um aria-current correto por página: aprovado.
- 72 referências locais de arquivos, incluindo CSS, JS e imagens: existentes.
- Home: três imagens de card ligadas respectivamente a Notícias, Reviews e Dicas: aprovado.
- Sintaxe JavaScript: aprovada com node:vm.
- Chrome real: cinco páginas em 390, 768 e 1440 px (15 combinações): nenhuma rolagem horizontal e nenhuma imagem quebrada; cinco links e uma página ativa em todos os casos.
- Menu em 390 px: abre por botão e expõe aria-expanded=true.
- Formulário: vazio marca três campos e move foco ao nome; e-mail inválido e mensagem curta marcam os campos correspondentes; dados válidos mostram confirmação explícita de demonstração sem envio.
- Console: nenhum erro próprio do site observado. A extensão externa linkedInSearch.js registra ReferenceError: _cookie is not defined; esse código não pertence ao projeto.
- PDF: assinatura PDF e duas páginas confirmadas. Ambas renderizadas pelo Windows.Data.Pdf e inspecionadas visualmente: capa e links sem cortes ou sobreposição. Duas anotações de link URI conferidas, com repositório e site públicos reais. O documento permanece provisório pela ausência dos dados dos integrantes.
- Publicação GitHub Pages: configurada em main / (root), com HTTPS. Repositório público criado e conteúdo commitado pelo conector GitHub. Cinco páginas públicas retornaram HTTP 200 e foram abertas no Chrome. Navegação entre as cinco páginas e links dos três cards exercitados.
- Servidor estático local: cinco páginas retornaram HTTP 200.

O projeto não exige npm install nem build. As verificações estruturais podem ser repetidas com node scripts/check.mjs. Os testes de navegador foram executados no Chrome conectado; não dependem de uma suíte instalada no projeto.
