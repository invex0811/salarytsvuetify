(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3498bd02"],{"0a06":function(t,e,n){"use strict";var r=n("c532"),o=n("30b5"),i=n("f6b4"),c=n("5270"),s=n("4a7b"),a=n("848b"),u=a.validators;function l(t){this.defaults=t,this.interceptors={request:new i,response:new i}}l.prototype.request=function(t){"string"===typeof t?(t=arguments[1]||{},t.url=arguments[0]):t=t||{},t=s(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=t.transitional;void 0!==e&&a.assertOptions(e,{silentJSONParsing:u.transitional(u.boolean,"1.0.0"),forcedJSONParsing:u.transitional(u.boolean,"1.0.0"),clarifyTimeoutError:u.transitional(u.boolean,"1.0.0")},!1);var n=[],r=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(r=r&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var o,i=[];if(this.interceptors.response.forEach((function(t){i.push(t.fulfilled,t.rejected)})),!r){var l=[c,void 0];Array.prototype.unshift.apply(l,n),l=l.concat(i),o=Promise.resolve(t);while(l.length)o=o.then(l.shift(),l.shift());return o}var f=t;while(n.length){var b=n.shift(),d=n.shift();try{f=b(f)}catch(p){d(p);break}}try{o=c(f)}catch(p){return Promise.reject(p)}while(i.length)o=o.then(i.shift(),i.shift());return o},l.prototype.getUri=function(t){return t=s(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){l.prototype[t]=function(e,n){return this.request(s(n||{},{method:t,url:e,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(t){l.prototype[t]=function(e,n,r){return this.request(s(r||{},{method:t,url:e,data:n}))}})),t.exports=l},"0df6":function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},"19a4":function(t,e,n){"use strict";n.r(e);n("b680");var r=n("7a23");Object(r["F"])("data-v-0d15dc37");var o=Object(r["l"])("h1",{style:{"text-align":"center"}},"Salary",-1),i=Object(r["m"])(" Working day in month: "),c=Object(r["l"])("option",{value:"21"},"21",-1),s=Object(r["l"])("option",{value:"22"},"22",-1),a=Object(r["l"])("option",{value:"23"},"23",-1),u=[c,s,a],l={class:"checkbox"},f=Object(r["m"])(),b=Object(r["l"])("span",null,"Test",-1),d={class:"checkbox"},p=Object(r["m"])(),h=Object(r["l"])("span",null,"TimeX2",-1),m={class:"checkbox"},j=Object(r["m"])(),O=Object(r["l"])("span",null,"Cash bonus",-1),y={class:"checkbox"},v=Object(r["m"])(),g=Object(r["l"])("span",null,"Tax",-1),x={class:"checkbox"},_=Object(r["m"])(),k=Object(r["l"])("span",null,"Vacation",-1),T={class:"checkbox"},w=Object(r["m"])(),C=Object(r["l"])("span",null,"$ exchange",-1),E=Object(r["m"])(" Ok "),P={key:0},S=Object(r["l"])("td",null,"Working time: ",-1),U=Object(r["l"])("td",null,"Working day hours: ",-1),A=Object(r["l"])("td",null,"Rate: ",-1),R=Object(r["l"])("td",null,"Over rate: ",-1),N={key:0},B=Object(r["l"])("td",null,"Over time: ",-1),D={key:1},L=Object(r["l"])("td",null,"Over time cash: ",-1),M={key:2},V=Object(r["l"])("td",null,"Time per test: ",-1),W={key:3},X=Object(r["l"])("td",null,"Cash per test: ",-1),q={key:4},F=Object(r["l"])("td",null,"TimeX2 cash: ",-1),J={key:0},H=Object(r["m"])(" mdi-information-outline ");function K(t,e,n,c,s,a){var K=this,z=Object(r["K"])("v-card-header-text"),$=Object(r["K"])("v-card"),I=Object(r["K"])("v-col"),G=Object(r["K"])("v-row"),Z=Object(r["K"])("v-card-header"),Q=Object(r["K"])("v-badge"),Y=Object(r["K"])("v-card-actions"),tt=Object(r["K"])("v-btn"),et=Object(r["K"])("v-divider"),nt=Object(r["K"])("v-icon"),rt=Object(r["K"])("v-container"),ot=Object(r["K"])("router-view");return Object(r["C"])(),Object(r["k"])(r["a"],null,[Object(r["n"])(rt,{class:"container center__container",fluid:""},{default:Object(r["bb"])((function(){return[Object(r["n"])($,{position:"absolute",right:"10",class:"pa-3"},{default:Object(r["bb"])((function(){return[Object(r["n"])(z,null,{default:Object(r["bb"])((function(){return[Object(r["m"])(" Курс $ на "+Object(r["P"])(K.exchangeDate)+" : "+Object(r["P"])(t.infoCurentDollar),1)]})),_:1})]})),_:1}),Object(r["n"])($,{"min-width":"600px"},{default:Object(r["bb"])((function(){return[Object(r["n"])(Z,null,{default:Object(r["bb"])((function(){return[Object(r["n"])(G,{justify:"center"},{default:Object(r["bb"])((function(){return[Object(r["n"])(I,{cols:"6"},{default:Object(r["bb"])((function(){return[o]})),_:1})]})),_:1})]})),_:1}),Object(r["n"])(z,{class:"pa-5"},{default:Object(r["bb"])((function(){return[Object(r["n"])(G,{justify:"center"},{default:Object(r["bb"])((function(){return[Object(r["n"])(I,{cols:"6",style:{"text-align":"center"}},{default:Object(r["bb"])((function(){return[i,Object(r["cb"])(Object(r["l"])("select",{"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.workDay=e})},u,512),[[r["V"],t.workDay]])]})),_:1})]})),_:1}),Object(r["n"])(G,{justify:"center"},{default:Object(r["bb"])((function(){return[Object(r["n"])(I,{cols:"6",style:{"text-align":"center"}},{default:Object(r["bb"])((function(){return[Object(r["cb"])(Object(r["l"])("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.workingTime=e}),placeholder:"Working time"},null,512),[[r["W"],t.workingTime,void 0,{number:!0}]])]})),_:1})]})),_:1}),t.input__test?(Object(r["C"])(),Object(r["i"])(G,{key:0,justify:"center"},{default:Object(r["bb"])((function(){return[Object(r["n"])(I,{style:{"text-align":"center"},cols:"5"},{default:Object(r["bb"])((function(){return[Object(r["cb"])(Object(r["l"])("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.firstTest=e}),placeholder:"1st test"},null,512),[[r["W"],t.firstTest,void 0,{number:!0}]])]})),_:1}),Object(r["n"])(I,{style:{"text-align":"center"},cols:"5"},{default:Object(r["bb"])((function(){return[Object(r["cb"])(Object(r["l"])("input",{type:"number","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.secondTest=e}),placeholder:"2nd test"},null,512),[[r["W"],t.secondTest,void 0,{number:!0}]])]})),_:1})]})),_:1})):Object(r["j"])("",!0),Object(r["n"])(G,{justify:"center"},{default:Object(r["bb"])((function(){return[Object(r["n"])(I,{cols:"6",style:{"text-align":"center"}},{default:Object(r["bb"])((function(){return[Object(r["cb"])(Object(r["l"])("input",{type:"number","onUpdate:modelValue":e[4]||(e[4]=function(e){return t.rate=e}),placeholder:"Rate"},null,512),[[r["W"],t.rate,void 0,{number:!0}]])]})),_:1})]})),_:1}),t.input__timeX2?(Object(r["C"])(),Object(r["i"])(G,{key:1,justify:"center"},{default:Object(r["bb"])((function(){return[Object(r["n"])(I,{cols:"6",style:{"text-align":"center"}},{default:Object(r["bb"])((function(){return[Object(r["cb"])(Object(r["l"])("input",{type:"number","onUpdate:modelValue":e[5]||(e[5]=function(e){return t.timeX2=e}),placeholder:"TimeX2"},null,512),[[r["W"],t.timeX2,void 0,{number:!0}]])]})),_:1})]})),_:1})):Object(r["j"])("",!0),t.input__cashBonus?(Object(r["C"])(),Object(r["i"])(G,{key:2,justify:"center"},{default:Object(r["bb"])((function(){return[Object(r["n"])(I,{cols:"6",style:{"text-align":"center"}},{default:Object(r["bb"])((function(){return[Object(r["cb"])(Object(r["l"])("input",{type:"number","onUpdate:modelValue":e[6]||(e[6]=function(e){return t.cashBonus=e}),placeholder:"Cash bonus"},null,512),[[r["W"],t.cashBonus,void 0,{number:!0}]])]})),_:1})]})),_:1})):Object(r["j"])("",!0),t.input__dollarExchange?(Object(r["C"])(),Object(r["i"])(G,{key:3,justify:"center"},{default:Object(r["bb"])((function(){return[Object(r["n"])(I,{cols:"6",style:{"text-align":"center"}},{default:Object(r["bb"])((function(){return[Object(r["n"])(Q,{icon:" mdi-currency-usd","offset-x":"15","offset-y":"4",onClick:t.inputCurencyUsdRare,title:"Current rate USD"},{default:Object(r["bb"])((function(){return[Object(r["cb"])(Object(r["l"])("input",{type:"number","onUpdate:modelValue":e[7]||(e[7]=function(e){return t.dollarRate=e}),placeholder:"Dollar rate"},null,512),[[r["W"],t.dollarRate,void 0,{number:!0}]])]})),_:1},8,["onClick"])]})),_:1})]})),_:1})):Object(r["j"])("",!0)]})),_:1}),Object(r["n"])(Y,null,{default:Object(r["bb"])((function(){return[Object(r["n"])(I,{style:{"text-align":"center"}},{default:Object(r["bb"])((function(){return[Object(r["n"])(G,{"no-gutters":"",justify:"space-around"},{default:Object(r["bb"])((function(){return[Object(r["n"])(I,{cols:"3",style:{"text-align":"left"}},{default:Object(r["bb"])((function(){return[Object(r["l"])("label",l,[Object(r["cb"])(Object(r["l"])("input",{type:"checkbox","onUpdate:modelValue":e[8]||(e[8]=function(e){return t.input__test=e})},null,512),[[r["U"],t.input__test]]),f,b])]})),_:1}),Object(r["n"])(I,{cols:"3",style:{"text-align":"left"}},{default:Object(r["bb"])((function(){return[Object(r["l"])("label",d,[Object(r["cb"])(Object(r["l"])("input",{type:"checkbox","onUpdate:modelValue":e[9]||(e[9]=function(e){return t.input__timeX2=e})},null,512),[[r["U"],t.input__timeX2]]),p,h])]})),_:1}),Object(r["n"])(I,{cols:"3",style:{"text-align":"left"}},{default:Object(r["bb"])((function(){return[Object(r["l"])("label",m,[Object(r["cb"])(Object(r["l"])("input",{type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=function(e){return t.input__cashBonus=e})},null,512),[[r["U"],t.input__cashBonus]]),j,O])]})),_:1})]})),_:1}),Object(r["n"])(G,{"no-gutters":"",justify:"space-around"},{default:Object(r["bb"])((function(){return[Object(r["n"])(I,{cols:"3",style:{"text-align":"left"}},{default:Object(r["bb"])((function(){return[Object(r["l"])("label",y,[Object(r["cb"])(Object(r["l"])("input",{type:"checkbox","onUpdate:modelValue":e[11]||(e[11]=function(e){return t.input__tax=e})},null,512),[[r["U"],t.input__tax]]),v,g])]})),_:1}),Object(r["n"])(I,{cols:"3",style:{"text-align":"left"}},{default:Object(r["bb"])((function(){return[Object(r["l"])("label",x,[Object(r["cb"])(Object(r["l"])("input",{type:"checkbox","onUpdate:modelValue":e[12]||(e[12]=function(e){return t.input__4percentWeekend=e})},null,512),[[r["U"],t.input__4percentWeekend]]),_,k])]})),_:1}),Object(r["n"])(I,{cols:"3",style:{"text-align":"left"}},{default:Object(r["bb"])((function(){return[Object(r["l"])("label",T,[Object(r["cb"])(Object(r["l"])("input",{type:"checkbox","onUpdate:modelValue":e[13]||(e[13]=function(e){return t.input__dollarExchange=e})},null,512),[[r["U"],t.input__dollarExchange]]),w,C])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["n"])(Y,null,{default:Object(r["bb"])((function(){return[Object(r["n"])(G,{justify:"center"},{default:Object(r["bb"])((function(){return[Object(r["n"])(tt,{color:"deep-purple darken-2",onClick:t.calculateSalary,style:{color:"#fff"}},{default:Object(r["bb"])((function(){return[E]})),_:1},8,["onClick"])]})),_:1})]})),_:1}),Object(r["n"])(et,{class:"my-2"}),Object(r["n"])(G,{justify:"center"},{default:Object(r["bb"])((function(){return[Object(r["n"])(I,{cols:"12",class:"center mr-2"},{default:Object(r["bb"])((function(){return[t.more__info?(Object(r["C"])(),Object(r["k"])("table",P,[Object(r["l"])("tr",null,[S,Object(r["l"])("td",null,Object(r["P"])(t.totalTime+" h"),1)]),Object(r["l"])("tr",null,[U,Object(r["l"])("td",null,Object(r["P"])(t.workDayTime+" h"),1)]),Object(r["l"])("tr",null,[A,Object(r["l"])("td",null,Object(r["P"])(t.rateOutput)+" $",1)]),Object(r["l"])("tr",null,[R,Object(r["l"])("td",null,Object(r["P"])(t.overRate)+" $",1)]),t.overTime>0?(Object(r["C"])(),Object(r["k"])("tr",N,[B,Object(r["l"])("td",null,Object(r["P"])(t.overTime.toFixed(2)+" h"),1)])):Object(r["j"])("",!0),t.overTime>0?(Object(r["C"])(),Object(r["k"])("tr",D,[L,Object(r["l"])("td",null,Object(r["P"])(t.overTimeCach.toFixed(2))+" $",1)])):Object(r["j"])("",!0),t.input__test?(Object(r["C"])(),Object(r["k"])("tr",M,[V,Object(r["l"])("td",null,Object(r["P"])(t.timeTest+" h"),1)])):Object(r["j"])("",!0),t.input__test?(Object(r["C"])(),Object(r["k"])("tr",W,[X,Object(r["l"])("td",null,Object(r["P"])(t.plusTest)+" $",1)])):Object(r["j"])("",!0),t.input__timeX2?(Object(r["C"])(),Object(r["k"])("tr",q,[F,Object(r["l"])("td",null,Object(r["P"])(t.plusTimeX2)+" $",1)])):Object(r["j"])("",!0)])):Object(r["j"])("",!0)]})),_:1})]})),_:1}),Object(r["n"])(G,{justify:"center"},{default:Object(r["bb"])((function(){return[Object(r["n"])(I,{cols:"12",style:{"text-align":"center"}},{default:Object(r["bb"])((function(){return[Object(r["m"])(" Total cash: "+Object(r["P"])(t.result+" $")+" ",1),K.dollarRate>0?(Object(r["C"])(),Object(r["k"])("span",J," | "+Object(r["P"])(t.exchangeMonayToUAH.toFixed(2)+" UAH"),1)):Object(r["j"])("",!0),Object(r["n"])(tt,{icon:"",size:"x-small",onClick:e[14]||(e[14]=function(e){return t.more__info=!t.more__info}),class:"mb-1 info__icon",elevation:"0"},{default:Object(r["bb"])((function(){return[Object(r["n"])(nt,{size:"small"},{default:Object(r["bb"])((function(){return[H]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["n"])(ot)],64)}Object(r["D"])();var z=n("bc3a"),$=n.n(z),I=Object(r["o"])({name:"Salary",data:function(){return{workingTime:"",firstTest:"",secondTest:"",rate:"",timeX2:"",cashBonus:"",tax:"",fourPercentWeekend:"",dollarRate:"",input__test:!0,input__timeX2:!1,input__cashBonus:!1,input__tax:!1,input__4percentWeekend:!1,input__dollarExchange:!1,input__currentRateDollar:!1,more__info:!1,workDay:22,totalTime:0,overTime:0,rateOutput:0,overRate:0,totalMoney:0,totalTestPercent:0,timeTest:0,timeTestMoney:0,checkBtnClick:!1,workDayTime:0,infoCurentDollar:null,exchangeDate:null,overTimeCach:0,axiosError:""}},mounted:function(){var t=this;$.a.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json").then((function(e){return t.infoCurentDollar=e.data[26].rate,t.exchangeDate=e.data[26].exchangedate})).catch((function(e){return t.infoCurentDollar=e}))},methods:{calculateSalary:function(){this.rateOutput=this.rate,this.workDayTime=8*this.workDay,this.totalTime=this.workingTime,this.overTime=this.totalTime-this.workDayTime,this.overRate=1.5*this.rate,this.totalTestPercent=(this.firstTest+this.secondTest)/2,this.overTimeCach=this.overTime*this.overRate,this.totalTestPercent>=91?this.timeTest=8:this.totalTestPercent>=81&&this.totalTestPercent<=90?this.timeTest=6:this.totalTestPercent>=71&&this.totalTestPercent<=80?this.timeTest=4:this.totalTestPercent>=60&&this.totalTestPercent<=70?this.timeTest=0:this.totalTestPercent<60&&(this.timeTest="-4"),this.totalTime<this.workDayTime?this.totalMoney=this.totalTime*this.rate:this.totalTime>=this.workDayTime&&(this.rate<=2?this.totalMoney=this.totalTime*this.rate:this.totalMoney=this.workDayTime*this.rate+this.overTime*this.overRate),this.checkBtnClick=!0},plusTestTotal:function(t,e,n){return this.totalTestPercent>60?t+=e*n:t-=4*n,t},inputCurencyUsdRare:function(){this.dollarRate=this.infoCurentDollar}},computed:{plus4percentWeekend:function(){return this.totalMoney/100*(4*this.input__4percentWeekend)},plusTest:function(){return this.plusTestTotal(this.timeTestMoney,this.timeTest,this.rate)*this.input__test},plusTax:function(){return 45*this.input__tax},plusTimeX2:function(){return this.timeX2*(2*this.rate*this.input__timeX2)},plusCashBonus:function(){return this.cashBonus*this.input__cashBonus},result:function(){return Math.round(this.totalMoney+(this.plus4percentWeekend+this.plusTest+this.plusTax+this.plusTimeX2+this.plusCashBonus))},exchangeMonayToUAH:function(){return this.result*this.dollarRate}}});n("44c1");I.render=K,I.__scopeId="data-v-0d15dc37";e["default"]=I},"1d2b":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},2444:function(t,e,n){"use strict";(function(e){var r=n("c532"),o=n("c8af"),i=n("387f"),c={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function a(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof e&&"[object process]"===Object.prototype.toString.call(e))&&(t=n("b50d")),t}function u(t,e,n){if(r.isString(t))try{return(e||JSON.parse)(t),r.trim(t)}catch(o){if("SyntaxError"!==o.name)throw o}return(n||JSON.stringify)(t)}var l={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:a(),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)||e&&"application/json"===e["Content-Type"]?(s(e,"application/json"),u(t)):t}],transformResponse:[function(t){var e=this.transitional,n=e&&e.silentJSONParsing,o=e&&e.forcedJSONParsing,c=!n&&"json"===this.responseType;if(c||o&&r.isString(t)&&t.length)try{return JSON.parse(t)}catch(s){if(c){if("SyntaxError"===s.name)throw i(s,this,"E_JSON_PARSE");throw s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){l.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){l.headers[t]=r.merge(c)})),t.exports=l}).call(this,n("4362"))},"2d83":function(t,e,n){"use strict";var r=n("387f");t.exports=function(t,e,n,o,i){var c=new Error(t);return r(c,e,n,o,i)}},"2e67":function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"30b5":function(t,e,n){"use strict";var r=n("c532");function o(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var c=[];r.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),c.push(o(e)+"="+o(t))})))})),i=c.join("&")}if(i){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},"387f":function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},3934:function(t,e,n){"use strict";var r=n("c532");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44c1":function(t,e,n){"use strict";n("82f6")},"467f":function(t,e,n){"use strict";var r=n("2d83");t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},"4a0c":function(t){t.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')},"4a7b":function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e){e=e||{};var n={},o=["url","method","data"],i=["headers","auth","proxy","params"],c=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function a(t,e){return r.isPlainObject(t)&&r.isPlainObject(e)?r.merge(t,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function u(o){r.isUndefined(e[o])?r.isUndefined(t[o])||(n[o]=a(void 0,t[o])):n[o]=a(t[o],e[o])}r.forEach(o,(function(t){r.isUndefined(e[t])||(n[t]=a(void 0,e[t]))})),r.forEach(i,u),r.forEach(c,(function(o){r.isUndefined(e[o])?r.isUndefined(t[o])||(n[o]=a(void 0,t[o])):n[o]=a(void 0,e[o])})),r.forEach(s,(function(r){r in e?n[r]=a(t[r],e[r]):r in t&&(n[r]=a(void 0,t[r]))}));var l=o.concat(i).concat(c).concat(s),f=Object.keys(t).concat(Object.keys(e)).filter((function(t){return-1===l.indexOf(t)}));return r.forEach(f,u),n}},5270:function(t,e,n){"use strict";var r=n("c532"),o=n("c401"),i=n("2e67"),c=n("2444");function s(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){s(t),t.headers=t.headers||{},t.data=o.call(t,t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||c.adapter;return e(t).then((function(e){return s(t),e.data=o.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(s(t),e&&e.response&&(e.response.data=o.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},"5f02":function(t,e,n){"use strict";t.exports=function(t){return"object"===typeof t&&!0===t.isAxiosError}},"7a77":function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},"7aac":function(t,e,n){"use strict";var r=n("c532");t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,c){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===c&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"82f6":function(t,e,n){},"83b9":function(t,e,n){"use strict";var r=n("d925"),o=n("e683");t.exports=function(t,e){return t&&!r(e)?o(t,e):e}},"848b":function(t,e,n){"use strict";var r=n("4a0c"),o={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){o[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));var i={},c=r.version.split(".");function s(t,e){for(var n=e?e.split("."):c,r=t.split("."),o=0;o<3;o++){if(n[o]>r[o])return!0;if(n[o]<r[o])return!1}return!1}function a(t,e,n){if("object"!==typeof t)throw new TypeError("options must be an object");var r=Object.keys(t),o=r.length;while(o-- >0){var i=r[o],c=e[i];if(c){var s=t[i],a=void 0===s||c(s,i,t);if(!0!==a)throw new TypeError("option "+i+" must be "+a)}else if(!0!==n)throw Error("Unknown option "+i)}}o.transitional=function(t,e,n){var o=e&&s(e);function c(t,e){return"[Axios v"+r.version+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return function(n,r,s){if(!1===t)throw new Error(c(r," has been removed in "+e));return o&&!i[r]&&(i[r]=!0,console.warn(c(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,s)}},t.exports={isOlderVersion:s,assertOptions:a,validators:o}},"8df4":function(t,e,n){"use strict";var r=n("7a77");function o(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t,e=new o((function(e){t=e}));return{token:e,cancel:t}},t.exports=o},b50d:function(t,e,n){"use strict";var r=n("c532"),o=n("467f"),i=n("7aac"),c=n("30b5"),s=n("83b9"),a=n("c345"),u=n("3934"),l=n("2d83");t.exports=function(t){return new Promise((function(e,n){var f=t.data,b=t.headers,d=t.responseType;r.isFormData(f)&&delete b["Content-Type"];var p=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",m=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";b.Authorization="Basic "+btoa(h+":"+m)}var j=s(t.baseURL,t.url);function O(){if(p){var r="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,i=d&&"text"!==d&&"json"!==d?p.response:p.responseText,c={data:i,status:p.status,statusText:p.statusText,headers:r,config:t,request:p};o(e,n,c),p=null}}if(p.open(t.method.toUpperCase(),c(j,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,"onloadend"in p?p.onloadend=O:p.onreadystatechange=function(){p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))&&setTimeout(O)},p.onabort=function(){p&&(n(l("Request aborted",t,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(l("Network Error",t,null,p)),p=null},p.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(l(e,t,t.transitional&&t.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var y=(t.withCredentials||u(j))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;y&&(b[t.xsrfHeaderName]=y)}"setRequestHeader"in p&&r.forEach(b,(function(t,e){"undefined"===typeof f&&"content-type"===e.toLowerCase()?delete b[e]:p.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(p.withCredentials=!!t.withCredentials),d&&"json"!==d&&(p.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){p&&(p.abort(),n(t),p=null)})),f||(f=null),p.send(f)}))}},bc3a:function(t,e,n){t.exports=n("cee4")},c345:function(t,e,n){"use strict";var r=n("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,c={};return t?(r.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(c[e]&&o.indexOf(e)>=0)return;c[e]="set-cookie"===e?(c[e]?c[e]:[]).concat([n]):c[e]?c[e]+", "+n:n}})),c):c}},c401:function(t,e,n){"use strict";var r=n("c532"),o=n("2444");t.exports=function(t,e,n){var i=this||o;return r.forEach(n,(function(n){t=n.call(i,t,e)})),t}},c532:function(t,e,n){"use strict";var r=n("1d2b"),o=Object.prototype.toString;function i(t){return"[object Array]"===o.call(t)}function c(t){return"undefined"===typeof t}function s(t){return null!==t&&!c(t)&&null!==t.constructor&&!c(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function a(t){return"[object ArrayBuffer]"===o.call(t)}function u(t){return"undefined"!==typeof FormData&&t instanceof FormData}function l(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function f(t){return"string"===typeof t}function b(t){return"number"===typeof t}function d(t){return null!==t&&"object"===typeof t}function p(t){if("[object Object]"!==o.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function h(t){return"[object Date]"===o.call(t)}function m(t){return"[object File]"===o.call(t)}function j(t){return"[object Blob]"===o.call(t)}function O(t){return"[object Function]"===o.call(t)}function y(t){return d(t)&&O(t.pipe)}function v(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams}function g(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function x(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function _(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),i(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function k(){var t={};function e(e,n){p(t[n])&&p(e)?t[n]=k(t[n],e):p(e)?t[n]=k({},e):i(e)?t[n]=e.slice():t[n]=e}for(var n=0,r=arguments.length;n<r;n++)_(arguments[n],e);return t}function T(t,e,n){return _(e,(function(e,o){t[o]=n&&"function"===typeof e?r(e,n):e})),t}function w(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}t.exports={isArray:i,isArrayBuffer:a,isBuffer:s,isFormData:u,isArrayBufferView:l,isString:f,isNumber:b,isObject:d,isPlainObject:p,isUndefined:c,isDate:h,isFile:m,isBlob:j,isFunction:O,isStream:y,isURLSearchParams:v,isStandardBrowserEnv:x,forEach:_,merge:k,extend:T,trim:g,stripBOM:w}},c8af:function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},cee4:function(t,e,n){"use strict";var r=n("c532"),o=n("1d2b"),i=n("0a06"),c=n("4a7b"),s=n("2444");function a(t){var e=new i(t),n=o(i.prototype.request,e);return r.extend(n,i.prototype,e),r.extend(n,e),n}var u=a(s);u.Axios=i,u.create=function(t){return a(c(u.defaults,t))},u.Cancel=n("7a77"),u.CancelToken=n("8df4"),u.isCancel=n("2e67"),u.all=function(t){return Promise.all(t)},u.spread=n("0df6"),u.isAxiosError=n("5f02"),t.exports=u,t.exports.default=u},d925:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,o=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!o){n=e+1;break}}else-1===r&&(o=!1,r=e+1);return-1===r?"":t.slice(n,r)}function o(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var c=i>=0?arguments[i]:t.cwd();if("string"!==typeof c)throw new TypeError("Arguments to path.resolve must be strings");c&&(e=c+"/"+e,r="/"===c.charAt(0))}return e=n(o(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),c="/"===i(t,-1);return t=n(o(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&c&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(o(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),i=r(n.split("/")),c=Math.min(o.length,i.length),s=c,a=0;a<c;a++)if(o[a]!==i[a]){s=a;break}var u=[];for(a=s;a<o.length;a++)u.push("..");return u=u.concat(i.slice(s)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,o=!0,i=t.length-1;i>=1;--i)if(e=t.charCodeAt(i),47===e){if(!o){r=i;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,o=!0,i=0,c=t.length-1;c>=0;--c){var s=t.charCodeAt(c);if(47!==s)-1===r&&(o=!1,r=c+1),46===s?-1===e?e=c:1!==i&&(i=1):-1!==e&&(i=-1);else if(!o){n=c+1;break}}return-1===e||-1===r||0===i||1===i&&e===r-1&&e===n+1?"":t.slice(e,r)};var i="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e683:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},f6b4:function(t,e,n){"use strict";var r=n("c532");function o(){this.handlers=[]}o.prototype.use=function(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o}}]);
//# sourceMappingURL=chunk-3498bd02.15550251.js.map