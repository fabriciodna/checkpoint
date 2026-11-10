# Verificações do projeto

Estas são as conferências registradas em **10/11/2026** antes da entrega da AOP2.

- As cinco páginas foram verificadas quanto à estrutura HTML básica e à presença do menu.
- Os links entre as páginas e as três imagens clicáveis da Home foram conferidos.
- Os arquivos locais de CSS, JavaScript e imagens foram encontrados (72 referências verificadas).
- O layout foi testado nas larguras de 390 px, 768 px e 1440 px, sem imagens quebradas ou rolagem horizontal indevida nos testes registrados.
- O menu para celular e a validação do formulário de contato foram testados.
- As cinco páginas foram abertas na publicação do GitHub Pages durante a verificação.

## Para repetir a checagem dos arquivos

Na pasta do projeto, com Node.js instalado:

```bash
node scripts/check.mjs
```

Esse script faz verificações estruturais e de caminhos. Ele não substitui abrir o site no navegador e conferir a aparência e a navegação.

**Observação:** o formulário de Contatos é demonstrativo. Ele valida os dados no navegador, mas não envia mensagens. O PDF definitivo da atividade é entregue separadamente no ambiente da faculdade.
