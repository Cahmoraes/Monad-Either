var R=Object.defineProperty;var h=(t,e)=>{for(var L in e)R(t,L,{get:e[L],enumerable:!0})};var i={};h(i,{left:()=>o,right:()=>n});var r=class{constructor(e){this.value=e}isLeft(){return!0}isRight(){return!1}},s=class{constructor(e){this.value=e}isLeft(){return!1}isRight(){return!0}},o=t=>new r(t),n=t=>new s(t);export{i as Either};
//# sourceMappingURL=index.mjs.map