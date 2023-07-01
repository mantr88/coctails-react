import{s as i,N as d,j as r}from"./index-fb0a19b2.js";import{u as c,f as l}from"./api-a28ee28c.js";const x=i.li`
  padding: 5px;
  border: 1px solid black;
  border-radius: 4px;
`,m=i.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  text-decoration: none;
`;i(d)`
  text-decoration: none;
`;const p=()=>{const{data:o,isError:t,isLoading:a}=c({queryKey:"randomCoctails",queryFn:l});if(t)return r.jsx("div",{children:"Error data"});if(a)return r.jsx("div",{children:"Loading..."});if(!o)return r.jsx("div",{children:"No coctail!"});const{idDrink:s,strDrinkThumb:e,strDrink:n}=o;return r.jsxs(x,{children:[r.jsx("img",{src:e,alt:n}),r.jsx(m,{children:n})]},s)},j=()=>r.jsxs("div",{children:[r.jsx("h2",{children:"Home Page"}),r.jsx(p,{})]});export{j as default};
