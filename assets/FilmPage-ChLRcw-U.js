import{r as n,a as d,j as s}from"./index-Cf1jCGDK.js";import{d as m,u as o,L as x}from"./Layout-CxDziwq-.js";import{F as j}from"./FilmBanner-CPL70v6Y.js";const h=a=>{const[i,e]=n.useState(null),l=async r=>{const c=await m(r);e(c)};return n.useEffect(()=>{l(a)},[a]),i},t=a=>{const i={style:"currency",currency:"RUB",minimumFractionDigits:0},e=new Intl.NumberFormat("ru-RU",i);return typeof a=="string"?e.format(+a):e.format(a)},f=new Intl.DisplayNames("en",{type:"language"}),g=()=>{var l;const a=d("/movie/:id"),i=Number((l=a==null?void 0:a.params)==null?void 0:l.id),e=h(i);return o(`${e==null?void 0:e.title} | Cinema Guide`,e==null?void 0:e.title),s.jsxs(x,{children:[s.jsx(j,{film:e,filmPage:!0}),s.jsx("section",{className:"film",children:s.jsxs("div",{className:"container film__container",children:[s.jsx("h2",{className:"section-title film__title",children:"О фильме"}),e?s.jsxs(s.Fragment,{children:[s.jsxs("dl",{className:"film-details",children:[s.jsx("dt",{className:"film-details__category",children:s.jsx("span",{children:"Язык оригинала"})}),s.jsx("dd",{className:"film-details__description",children:s.jsx("span",{children:e.language?f.of(e.language):"Нет информации"})})]}),s.jsxs("dl",{className:"film-details",children:[s.jsx("dt",{className:"film-details__category",children:s.jsx("span",{children:"Бюджет"})}),s.jsx("dd",{className:"film-details__description",children:s.jsx("span",{children:e.budget?t(e.budget):"Нет информации"})})]}),s.jsxs("dl",{className:"film-details",children:[s.jsx("dt",{className:"film-details__category",children:s.jsx("span",{children:"Выручка"})}),s.jsx("dd",{className:"film-details__description",children:s.jsx("span",{children:e.revenue?t(e.revenue):"Нет информации"})})]}),s.jsxs("dl",{className:"film-details",children:[s.jsx("dt",{className:"film-details__category",children:s.jsx("span",{children:"Режиссёр"})}),s.jsx("dd",{className:"film-details__description",children:s.jsx("span",{children:e.director?e.director:"Нет информации"})})]}),s.jsxs("dl",{className:"film-details",children:[s.jsx("dt",{className:"film-details__category",children:s.jsx("span",{children:"Продакшен"})}),s.jsx("dd",{className:"film-details__description",children:s.jsx("span",{children:e.production?e.production:"Нет информации"})})]}),s.jsxs("dl",{className:"film-details",children:[s.jsx("dt",{className:"film-details__category",children:s.jsx("span",{children:"Награды"})}),s.jsx("dd",{className:"film-details__description",children:s.jsx("span",{children:e.awardsSummary?e.awardsSummary:"Нет информации"})})]})]}):null]})})]})};export{g as default};
