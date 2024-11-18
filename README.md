# Proposta de Componentização do portal G1

Aluno: Raphael Honorato e Silva

Realizei a componentização de alguns itens que achei pertinentes.

O Header separei em 2 componentes que foi a lista de links principal e o Menu, os banners, cards e o footer.

[Link do repositório](https://github.com/raphahonorato/pti-web-camadas)

[Portal do G1](https://g1.globo.com/)

---

### Header Original

<img src="./src/imagens/menu-original.png"  width="600px" />

### Header Componente

```xml
 <Header />

 <Menu />
```

<img src="./src/imagens/menu-react.png"  width="600px" />

---

### Banner Original

<img src="./src/imagens/header-original.png"  width="600px" />

### Banner Componente

```xml
      <Banner />
```

<img src="./src/imagens/header-react.png"  width="600px" />

---

### Card Original

<img src="./src/imagens/banner-original.png"  width="600px" />

### Card Componente

```xml
      <Card
        imagem="caminho/da/imagem"
        obs="Texto de observação"
        titulo="Título da Notícia"
        li="texto em tópico"
        autor="Autor da notícia"
      />
```

<img src="./src/imagens/banner-react.png"  width="600px" />

---

### Footer Original

<img src="./src/imagens/footer-original.png"  width="600px" />

### Footer Componente

```xml
      <Footer />
```

<img src="./src/imagens/footer-react.png"  width="600px" />
