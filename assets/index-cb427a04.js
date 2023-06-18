import{b as u,u as S,d as F,n,e as f,j as e,f as U,Q as w,h as z,s as H,r as x}from"./index-679b9e55.js";import{u as L,g as $}from"./usersData-b7d737fb.js";function k(t=u){const r=t===u?S:F(t);return function(){const{store:a}=r();return a}}const B=k();function R(t=u){const r=t===u?B:k(t);return function(){return r().dispatch}}const m=R(),T=(t,r)=>r==="show all"?t:r==="followings"?t.filter(o=>o.checked===!0):t.filter(o=>!o.checked),y=t=>t.users.users,D=t=>t.category.category,E=n.section`
  padding: 40px;
`,P=n.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`,W=n.button`
  display: block;

  padding: 14px 18px;
  margin: 40px auto 0;

  color: #ebd8ff;
  background-color: #5736a3;

  border-radius: 10px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  :hover {
    opacity: 0.8;
  }
`,A=n.p`
  margin-top: 40px;
  color: #5736a3;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  text-transform: uppercase;
`,N=n.div`
  position: relative;

  width: 380px;
  height: 460px;

  padding-top: 178px;

  overflow: hidden;

  background-image: url("background/goit-logo.svg"),
    url("background/bg-img.svg"),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 76px, 308px, cover;
  background-repeat: no-repeat;
  background-position: top 20px left 20px, top 28px left 36px, center;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  ::after {
    position: absolute;
    display: block;
    content: "";
    top: -160px;

    width: 8px;
    height: 756px;

    background: #ebd8ff;

    transform: rotate(90deg);
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    z-index: 1;
  }
`,O=n.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto 26px;

  width: 80px;
  height: 80px;

  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;

  ::after {
    position: absolute;
    content: "";

    width: 80px;
    height: 80px;

    background-image: url("background/border.svg");
    background-repeat: no-repeat;
    background-position: top;
    z-index: 2;
  }
`,Q=n.img`
  position: absolute;
  top: 8px;
  z-index: 2;
`,b=n.p`
  margin-bottom: 16px;

  color: #ebd8ff;

  font-size: 20px;
  line-height: 1.2;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
`,q=n.button`
  display: block;

  padding: 14px 28px;
  margin: 26px auto 0;

  width: 196px;

  color: #373737;
  background-color: ${({color:t})=>t};

  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  :hover {
    opacity: 0.8;
  }
`;function G({avatar:t,tweets:r,followers:o,id:a,checked:s,user:p}){const d=f(y),g=m(),c=async l=>{try{const i=d.includes(l)?o-=1:o+=1;await L(l,i),g(U(l))}catch{return w.error("Something went wrong... Please, check your internet connection and try again later")}};return e.jsxs(N,{children:[e.jsx(O,{children:e.jsx(Q,{src:t,alt:p})}),e.jsxs(b,{children:[r," tweets"]}),e.jsxs(b,{children:[o.toLocaleString("en-US")," followers"]}),e.jsx(q,{color:s?"#5CD3A8":"#EBD8FF",onClick:()=>c(a),children:s?"following":"follow"})]})}const I=n.header`
  display: flex;
  align-items: center;

  width: 100%;
  height: 80px;
  padding: 12px 40px;

  background-color: #471ca9;
`,J=n.button`
  padding: 10px 12px;

  color: #373737;
  background-color: #ebd8ff;

  border-radius: 10px;

  :hover {
    opacity: 0.8;
  }
`,K=n.select`
  color: #ebd8ff;
  background-color: transparent;

  border: none;
  cursor: pointer;

  :focus {
    outline: none;
  }
`,h=n.option`
  background-color: #471ca9;
`,M=n.p`
  margin-left: auto;
  margin-right: 12px;
`;function V(){const t=z(),r=m(),o=()=>{t("/")},a=s=>{const p=s.target.value;r(H(p))};return e.jsxs(I,{children:[e.jsx(J,{onClick:o,type:"button",children:"Back"}),e.jsx(M,{children:"Filter tweets by category: "}),e.jsxs(K,{onChange:s=>a(s),children:[e.jsx(h,{value:"show all",children:"show all"}),e.jsx(h,{value:"follow",children:"follow"}),e.jsx(h,{value:"followings",children:"followings"})]})]})}function X(){const t=f(y),r=f(D),[o,a]=x.useState([]),[s,p]=x.useState(1),d=x.useCallback(async()=>{try{const l=(await $()).map(i=>t.includes(i.id)?{...i,checked:!0}:i);a(T(l,r))}catch{return w.error("Something went wrong... Please, check your internet connection and try again later")}},[r,t]);x.useEffect(()=>{d()},[d]);const g=()=>{p(c=>c+1)};return e.jsxs(e.Fragment,{children:[e.jsx(V,{}),e.jsxs(E,{children:[o&&o.length>0?e.jsx(P,{children:o.slice(0,s*3).map(({id:c,avatar:l,tweets:i,followers:j,checked:v,user:C})=>e.jsx("li",{children:e.jsx(G,{avatar:l,tweets:i,followers:j,id:c,checked:v,user:C})},c))}):e.jsx(A,{children:"There are no available tweets here"}),o.length>3&&s*3<o.length&&e.jsx(W,{type:"button",onClick:g,children:"Load more"})]})]})}function _(){return e.jsx("main",{children:e.jsx(X,{})})}export{_ as default};
