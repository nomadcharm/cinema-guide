import{r as i,u as x,j as e,R as f}from"./index--M7n79jh.js";import{c as p,u as b,L as y}from"./Layout-BtdBZLeT.js";import{F as _}from"./FilmPreviewCard-BnqDMwqI.js";const j="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.047%2020.0012L26.2967%2028.2507L23.9397%2030.6077L13.333%2020.0012L23.9397%209.39453L26.2967%2011.7515L18.047%2020.0012Z'%20/%3e%3c/svg%3e",v=s=>{const[t,r]=i.useState([]),[n,l]=i.useState(0),[c,o]=i.useState(!0),a=async(u,h)=>{const m=await p(u,h);(m.length===0||m.length<10)&&o(!1),r(d=>[...d,...m])};return i.useEffect(()=>{a(s,n)},[s,n]),[t,n,l,c]},w=()=>{const s=x();return()=>{s(-1)}},g=s=>s.substring(0,1).toUpperCase()+s.substring(1),G=()=>{const t=new URLSearchParams(window.location.search).get("genre")??"",[r,n,l,c]=v(t),o=w();return b(`${g(t)} | Cinema Guide`,t),e.jsx(y,{children:e.jsx("section",{className:"films-by-genre",children:e.jsxs("div",{className:"container films-by-genre__container",children:[e.jsxs("div",{className:"films-by-genre__title-block",children:[e.jsx("button",{className:"films-by-genre__nav-back",onClick:()=>o(),children:e.jsx(f,{src:j})}),e.jsx("h1",{className:"page-title films-by-genre__title",children:g(t)})]}),r?e.jsx("ul",{className:"films-by-genre__list",children:r.map(a=>e.jsx("li",{className:"films-by-genre__item",children:e.jsx(_,{id:a.id,title:a.title,posterUrl:a.posterUrl})},a.id))}):null,c?e.jsx("button",{className:"films-by-genre__load-btn",onClick:()=>l(n+1),children:"Показать ещё"}):null]})})})};export{G as default};
