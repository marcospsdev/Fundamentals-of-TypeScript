# Fundamentos de TypeScript

Estudo de TypeScript puro: tipos, interfaces, classes e consumo de uma API fake.

---

## Sumário

- [Visão geral](#visão-geral)
- [Stack e versões](#stack-e-versões)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Primeiros passos](#primeiros-passos)
- [Scripts](#scripts)
- [Autor](#autor)

---

## Visão geral

Projeto de estudo dos fundamentos do TypeScript sem framework. Usa interfaces e classes para modelar usuários, um service que busca os dados de uma API fake servida pelo `json-server` e renderiza o resultado na página com Bootstrap. O código é compilado com o Webpack.

Principais funcionalidades:

- Interfaces e classes tipadas
- Service com `fetch` tipado
- API fake com json-server
- Build com Webpack e ts-loader

Feito em 2025, nos estudos de TypeScript.

---

## Stack e versões

| Categoria | Tecnologia | Versão |
| --- | --- | --- |
| Linguagem | TypeScript | 5.8 |
| Estilo | Bootstrap | 5.3 |
| API fake | json-server | 1.0 |
| Qualidade | Prettier | 3.5 |

As versões exatas estão no `package.json`.

---

## Estrutura do projeto

```
src/
  data/
    data.json
  service/
    service.ts
  index.ts
  models.ts
  output.ts
```

---

## Primeiros passos

### Pré-requisitos

- Node.js 18 ou mais recente
- npm

### Instalação

```bash
git clone https://github.com/marcospsdev/Fundamentals-of-TypeScript.git
cd Fundamentals-of-TypeScript
npm install
npx json-server src/data/data.json --port 3000   # API fake
npm run dev                                        # compila para public/dist
```

Depois abra `public/index.html` no navegador.

---

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Compila o TypeScript com o Webpack em modo watch |

---

## Autor

**Marcos Paulo** · Desenvolvedor Full-Stack

- LinkedIn: [in/marcospsdev](https://www.linkedin.com/in/marcospsdev)
- GitHub: [@marcospsdev](https://github.com/marcospsdev)
