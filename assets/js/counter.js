const DATE_TARGET=new Date("06/11/2022 08:00 AM"),SPAN_DAYS=document.querySelector("span#days"),SPAN_HOURS=document.querySelector("span#hours"),SPAN_MINUTES=document.querySelector("span#minutes"),SPAN_SECONDS=document.querySelector("span#seconds"),MILLISECONDS_OF_A_SECOND=1e3,MILLISECONDS_OF_A_MINUTE=60*MILLISECONDS_OF_A_SECOND,MILLISECONDS_OF_A_HOUR=60*MILLISECONDS_OF_A_MINUTE,MILLISECONDS_OF_A_DAY=24*MILLISECONDS_OF_A_HOUR;function updateCountdown(){var S=new Date,S=DATE_TARGET-S;let _=Math.floor(S/MILLISECONDS_OF_A_DAY),t=Math.floor(S%MILLISECONDS_OF_A_DAY/MILLISECONDS_OF_A_HOUR),e=Math.floor(S%MILLISECONDS_OF_A_HOUR/MILLISECONDS_OF_A_MINUTE),O=Math.floor(S%MILLISECONDS_OF_A_MINUTE/MILLISECONDS_OF_A_SECOND);S<=0&&(_=0,t=0,e=0,O=0),SPAN_DAYS.textContent=_,SPAN_HOURS.textContent=t,SPAN_MINUTES.textContent=e,SPAN_SECONDS.textContent=O}document.addEventListener("DOMContentLoaded",function(){updateCountdown(),setInterval(updateCountdown,MILLISECONDS_OF_A_SECOND)});