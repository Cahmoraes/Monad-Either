"use strict";Object.defineProperty(exports, "__esModule", {value: true});var R=Object.defineProperty;var o=(t,e)=>{for(var L in e)R(t,L,{get:e[L],enumerable:!0})};var i={};o(i,{Left:()=>r,Right:()=>s,left:()=>h,right:()=>n});var r=class{constructor(e){this.value=e}isLeft(){return!0}isRight(){return!1}},s=class{constructor(e){this.value=e}isLeft(){return!1}isRight(){return!0}},h=t=>new r(t),n=t=>new s(t);exports.Either = i;
//# sourceMappingURL=index.js.map