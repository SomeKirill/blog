---
id: hello-world
title: Hello world blog post
---

# Head Metadata

My text

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```


:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).


You can write [links](/otherFolder/doc4.mdx) relative to the content root (`/docs/`).


Let $f\colon[a,b]\to\R$ be Riemann integrable. Let $F\colon[a,b]\to\R$ be
$F(x)=\int_{a}^{x} f(t)\,dt$. Then $F$ is continuous, and at all $x$ such that
$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.


```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```