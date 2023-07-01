import{s as e,N as d,j as t}from"./index-fb0a19b2.js";import{u as l,s as x}from"./api-a28ee28c.js";const p=e.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
  text-align: center;
  text-decoration: none;
`,u=e.li`
  padding: 5px;
  border: 1px solid black;
  border-radius: 4px;
`,m=e.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  text-decoration: none;
`,g=e(d)`
  text-decoration: none;
`,h=()=>{const{data:s,isLoading:i,isError:n}=l({queryKey:"searchByName",queryFn:x,options:{refetchOnWindowFocus:!1,keepPreviousData:!0}}),r=s;return n?t.jsx("div",{children:"Error data"}):i?t.jsx("div",{children:"Loading..."}):r?t.jsx(p,{children:r&&r.map(({idDrink:o,strDrinkThumb:c,strDrink:a})=>t.jsx(u,{children:t.jsxs(g,{to:`/coctails/${o}`,children:[t.jsx("img",{src:c,alt:a}),t.jsx(m,{children:a})]})},o))}):t.jsx("div",{children:"No coctails!"})},y=()=>t.jsxs("div",{children:["Coctails Page ",t.jsx(h,{})]});export{y as default};
