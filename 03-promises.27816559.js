var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequired7c6=n);var o=n("iQIUW");function i(e,r){return new Promise(((t,n)=>{const o=Math.random()>.3;setTimeout((()=>{o&&t(`✅ Fulfilled promise ${e} in ${r}ms`),n(`❌ Rejected promise ${e} in ${r}ms`)}),r)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();let r=Number(e.currentTarget.delay.value);const t=Number(e.currentTarget.step.value),n=Number(e.currentTarget.amount.value);for(let e=0;e<n;e+=1)i(e+1,r).then((e=>o.Notify.success(e))).catch((e=>o.Notify.failure(e))),r+=t}));
//# sourceMappingURL=03-promises.27816559.js.map
