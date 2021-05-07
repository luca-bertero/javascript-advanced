(()=>{"use strict";var e={948:(e,t,n)=>{var a=n(513);const i="d55eda21de69b35bd504fea3a4bb994125d36cfc",o=document.querySelector(".input_area"),r=document.querySelector(".search-btn"),s=document.querySelector(".geo-btn"),l=document.querySelector(".weather-box");function c(e){u(),function(e){const t=document.createElement("div");t.classList.add("error-box"),l.appendChild(t),t.innerText="ERRORE \n"+e}(e)}function d(e){var t;u(),function(e,t){const n=document.createElement("div");n.classList.add("city-container"),l.appendChild(n);const i=document.createElement("div");i.classList.add("aqi-container"),l.appendChild(i);const o=document.createElement("h2");o.textContent=t,n.appendChild(o);const r=document.createElement("p");r.textContent="AQI value: "+e,i.appendChild(r);const s=document.createElement("div");s.classList.add("result-box"),l.appendChild(s);const c=document.createElement("div");c.classList.add("description-box"),l.appendChild(c),function(e,t,n,i){switch(!0){case e<=50:t.style.background=a.SJ[0],n.innerHTML=a.q6[0],i.innerHTML=a.WL[0];break;case e<=100:t.style.background=a.SJ[1],n.innerHTML=a.q6[1],i.innerHTML=a.WL[1];break;case e<=150:t.style.background=a.SJ[2],n.innerHTML=a.q6[2],i.innerHTML=a.WL[2];break;case e<=200:t.style.background=a.SJ[3],n.innerHTML=a.q6[3],i.innerHTML=a.WL[3];break;case e<=300:t.style.background=a.SJ[4],n.innerHTML=a.q6[4],i.innerHTML=a.WL[4];break;case e>300:t.style.background=a.SJ[5],n.innerHTML=a.q6[5],i.innerHTML=a.WL[5];break;default:t.style.background=a.SJ[6],n.innerHTML=a.q6[6],i.innerHTML=a.WL[6]}}(e,i,s,c)}((t=e).data.aqi,t.data.city.name)}function u(){for(;l.firstChild;)l.removeChild(l.lastChild)}r.onclick=function(e){e.preventDefault();var t=o.value;t?fetch("https://api.waqi.info/feed/"+t+"/?token="+i).then((e=>e.json())).then((e=>{"ok"===e.status?d(e):c("Wrong query")})).catch((e=>c(e))):c("inserisci una città")},s.onclick=function(e){e.preventDefault(),navigator.geolocation.getCurrentPosition((e=>{var t="geo:"+e.coords.latitude+";"+e.coords.longitude;fetch("https://api.waqi.info/feed/"+t+"/?token="+i).then((e=>e.json())).then((e=>{"ok"===e.status?d(e):c("Wrong query")})).catch((e=>c(e)))}))}},513:(e,t,n)=>{n.d(t,{SJ:()=>a,q6:()=>i,WL:()=>o});const a=["#05d48f","#fde153","#f8a858","#f04a73","#b147e6","#7a5f66","#797e85"],i=["Buona","Moderata","Malsana per i soggetti sensibili","Malsana","Molto malsana","Pericolosa","Non disponibile"],o=["La qualità dell'aria è considerata soddisfacente e l'inquinamento atmosferico presenta pochi o nessun rischio.","La qualità dell'aria è accettabile; tuttavia, per alcuni inquinanti potrebbe esserci un moderato problema di salute per un numero molto limitato di persone che sono insolitamente sensibili all'inquinamento atmosferico.","I soggetti sensibili possono avere effetti sulla salute. È improbabile che il pubblico in generale ne risenta.","Tutti possono iniziare a sperimentare effetti sulla salute; i membri di gruppi sensibili possono subire effetti sulla salute più gravi","Avvertenze per la salute delle condizioni di emergenza. L'intera popolazione ha maggiori probabilità di essere colpita.","Allerta sulla salute: tutti possono avere effetti sulla salute più gravi","Non abbiamo dati recenti per la località selezionata."]}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(513),n(948)})();