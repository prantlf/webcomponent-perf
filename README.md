# Web Component Library Performance Comparison

We carry out a comparison using the webcomponent counter existing in [webcomponents.dev](https://webcomponents.dev/) of Atomico, Bacom, Lit, Preact and React:

1. Size of the JS (Library + Component) sent to the browser
2. Render time of 1000 components
3. Lines of code written to solve the webcomponent.

## Scripts

```bash
## step 1
npm i

## step 2
npm run build

## step 3
npm run perf
```

The results of this benchmark are being used for the [atomicojs.dev](https://atomicojs.dev) site.

## Results

    ┌─────────────┬─────────────────┐
    │     Version │ <none>          │
    ├─────────────┼─────────────────┤
    │     Browser │ chrome-headless │
    │             │ 123.0.6312.107  │
    ├─────────────┼─────────────────┤
    │ Sample size │ 50              │
    └─────────────┴─────────────────┘

    ┌───────────┬─────────────┬─────────────────────┬─────────────────────┬─────────────────────┬─────────────────────┬─────────────────────┬─────────────────────┐
    │ Benchmark │ Bytes       │            Avg time │          vs atomico │            vs bacom │              vs lit │           vs preact │            vs react │
    ├───────────┼─────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
    │ atomico   │ 13.11 KiB   │   78.38ms - 80.24ms │                     │              slower │              slower │              slower │              faster │
    │           │             │                     │            -        │         254% - 267% │         124% - 130% │           25% - 30% │           72% - 72% │
    │           │             │                     │                     │   56.36ms - 58.29ms │   43.37ms - 45.27ms │   15.99ms - 18.57ms │ 200.24ms - 206.60ms │
    ├───────────┼─────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
    │ bacom     │ 4.54 KiB    │   21.70ms - 22.27ms │              faster │                     │              faster │              faster │              faster │
    │           │             │                     │           72% - 73% │            -        │           36% - 38% │           64% - 65% │           92% - 92% │
    │           │             │                     │   56.36ms - 58.29ms │                     │   12.64ms - 13.37ms │   39.10ms - 40.99ms │ 257.69ms - 263.80ms │
    ├───────────┼─────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
    │ lit       │ 18.57 KiB   │   34.76ms - 35.22ms │              faster │              slower │                     │              faster │              faster │
    │           │             │                     │           55% - 56% │           57% - 61% │            -        │           43% - 44% │           87% - 88% │
    │           │             │                     │   43.37ms - 45.27ms │   12.64ms - 13.37ms │                     │   26.11ms - 27.97ms │ 244.70ms - 250.79ms │
    ├───────────┼─────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
    │ preact    │ 24.32 KiB   │   61.13ms - 62.93ms │              faster │              slower │              slower │                     │              faster │
    │           │             │                     │           20% - 23% │         177% - 188% │           74% - 80% │            -        │           78% - 78% │
    │           │             │                     │   15.99ms - 18.57ms │   39.10ms - 40.99ms │   26.11ms - 27.97ms │                     │ 217.53ms - 223.87ms │
    ├───────────┼─────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
    │ react     │ 1022.09 KiB │ 279.69ms - 285.77ms │              slower │              slower │              slower │              slower │                     │
    │           │             │                     │         251% - 262% │       1164% - 1208% │         698% - 718% │         348% - 364% │            -        │
    │           │             │                     │ 200.24ms - 206.60ms │ 257.69ms - 263.80ms │ 244.70ms - 250.79ms │ 217.53ms - 223.87ms │                     │
    └───────────┴─────────────┴─────────────────────┴─────────────────────┴─────────────────────┴─────────────────────┴─────────────────────┴─────────────────────┘

    ┌───────────┬───────────────┬───────────────┐
    │ Example   │ Lines of code │ File types    │
    ├───────────┼───────────────┼───────────────┤
    │ atomico   │       32      │ tsx           │
    │ bacom     │       46      │ ts, html, css │
    │ lit       │       47      │ ts            │
    │ preact    │       30      │ tsx           │
    └───────────┴───────────────┴───────────────┘
