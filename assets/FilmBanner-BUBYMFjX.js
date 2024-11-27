const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TrailerModal-ug0CpEtO.js","assets/index-DLOjgd3P.js","assets/index-C9hz3eMb.css","assets/logo-2XCtsmTN.js","assets/Layout-H_9agTaF.js","assets/icon-person-CSVaiHAu.js","assets/Layout-L5lOBEnz.css","assets/TrailerModal-CveSqFv8.css"])))=>i.map(i=>d[i]);
import{r as a,_ as x,A as C,j as e,M as g,L as _}from"./index-DLOjgd3P.js";import{R as l}from"./logo-2XCtsmTN.js";import{r as j,a as p,u as f}from"./useFavorites-gEHvaayg.js";import{s as w,f as N}from"./setRatingColor-BvuJ5bNp.js";const F=(s,n)=>{const[r,t]=a.useState(!1),i=o=>{r?j(o):p(o.toString()),t(!r)};return a.useEffect(()=>{s&&n.some(o=>o.id===s.id)?t(!0):t(!1)},[s,n]),[r,i]},k=()=>{const[s,n]=a.useState(!1),r=()=>{n(t=>!t)};return a.useEffect(()=>(document.body.style.overflowY=s?"hidden":"auto",()=>{document.body.style.overflowY="auto"}),[s]),[s,r]},M="/cinema-guide/assets/stub-banner-DG7GvVBq.webp",y="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%204C14.7486%204%2017.1749%205.38626%2018.6156%207.5H16V9.5H22V3.5H20V5.99936C18.1762%203.57166%2015.2724%202%2012%202C6.47715%202%202%206.47715%202%2012H4C4%207.58172%207.58172%204%2012%204ZM20%2012C20%2016.4183%2016.4183%2020%2012%2020C9.25144%2020%206.82508%2018.6137%205.38443%2016.5H8V14.5H2V20.5H4V18.0006C5.82381%2020.4283%208.72764%2022%2012%2022C17.5228%2022%2022%2017.5228%2022%2012H20Z'%20/%3e%3c/svg%3e",v="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.5%203C19.5376%203%2022%205.5%2022%209C22%2016%2014.5%2020%2012%2021.5C9.5%2020%202%2016%202%209C2%205.5%204.5%203%207.5%203C9.35997%203%2011%204%2012%205C13%204%2014.64%203%2016.5%203ZM12.9339%2018.6038C13.8155%2018.0485%2014.61%2017.4955%2015.3549%2016.9029C18.3337%2014.533%2020%2011.9435%2020%209C20%206.64076%2018.463%205%2016.5%205C15.4241%205%2014.2593%205.56911%2013.4142%206.41421L12%207.82843L10.5858%206.41421C9.74068%205.56911%208.5759%205%207.5%205C5.55906%205%204%206.6565%204%209C4%2011.9435%205.66627%2014.533%208.64514%2016.9029C9.39%2017.4955%2010.1845%2018.0485%2011.0661%2018.6038C11.3646%2018.7919%2011.6611%2018.9729%2012%2019.1752C12.3389%2018.9729%2012.6354%2018.7919%2012.9339%2018.6038Z'%20/%3e%3c/svg%3e",h="data:image/svg+xml,%3csvg%20width='20'%20height='19'%20viewBox='0%200%2020%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5%200C17.5376%200%2020%202.5%2020%206C20%2013%2012.5%2017%2010%2018.5C7.5%2017%200%2013%200%206C0%202.5%202.5%200%205.5%200C7.35997%200%209%201%2010%202C11%201%2012.64%200%2014.5%200Z'%20fill='%23B4A9FF'/%3e%3c/svg%3e",V=a.lazy(()=>x(()=>import("./TrailerModal-ug0CpEtO.js").then(s=>s.T),__vite__mapDeps([0,1,2,3,4,5,6,7]))),B=({film:s,filmPage:n,handleRefresh:r})=>{const[t,i]=k(),[o,d]=f(),[c,m]=F(s,o),{currentUser:b,handleAuthModalCall:u}=a.useContext(C);return a.useEffect(()=>{d()},[d]),e.jsxs(e.Fragment,{children:[s&&t&&e.jsx(a.Suspense,{fallback:e.jsx(g,{}),children:e.jsx(V,{film:s,active:t,handleModalCall:i})}),e.jsx("section",{className:"film-banner",children:e.jsx("div",{className:"container film-banner__container",children:s&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"film-banner__content",children:[e.jsxs("div",{className:"film-banner__block",children:[e.jsxs("div",{className:"film-banner__info",children:[e.jsx("p",{className:w(s.tmdbRating),children:s.tmdbRating.toFixed(1)}),e.jsx("p",{className:"film-banner__release-year",children:s.releaseYear}),e.jsx("p",{className:"film-banner__genre",children:s.genres[0]}),e.jsx("p",{className:"film-banner__runtime",children:N(s.runtime)})]}),e.jsxs("div",{className:"film-banner__description",children:[e.jsx("h2",{className:"page-title film-banner__title",children:s.title}),e.jsx("p",{className:n?"film-banner__plot":"film-banner__plot-preview",children:s.plot})]})]}),n?e.jsxs("div",{className:"film-banner__actions film-banner__actions--film-page",children:[e.jsx("button",{className:"button button-primary button-film-trailer",onClick:()=>i(),children:"Трейлер"}),e.jsx("button",{className:"button button-icon button-favorite","aria-label":"Добавить в избранное",onClick:b?()=>m(s.id):()=>u(),children:c?e.jsx(l,{src:h}):e.jsx(l,{src:v})})]}):e.jsxs("div",{className:"film-banner__actions film-banner__actions--random",children:[e.jsx("button",{className:"button button-primary button-trailer",onClick:()=>i(),children:"Трейлер"}),e.jsx(_,{className:"button button-secondary button-about",to:`/movie/${s.id}`,children:"О фильме"}),e.jsx("button",{className:"button button-icon button-favorite","aria-label":"Добавить в избранное",onClick:b?()=>m(s.id):()=>u(),children:e.jsx(l,{src:c?h:v,className:c?"svg-favored":"svg"})}),e.jsx("button",{className:"button button-icon button-refresh",onClick:r,"aria-label":"Загрузить новый случайный фильм",children:e.jsx(l,{src:y})})]})]}),e.jsxs("div",{className:"film-banner__backdrop",children:[e.jsx("img",{src:s.backdropUrl?s.backdropUrl:M,alt:s.title,width:900,height:530}),e.jsx("div",{className:"overlay"})]})]})})})]})};export{B as F};