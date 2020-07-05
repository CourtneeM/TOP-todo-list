!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){let e={"Default List":[]};return{projects:e,addNewProject:function(){const t=document.getElementById("new-project-input");""!==t.value&&(e[t.value]=[],t.value="")},deleteProject:function(t){delete e[t]}}}();class r{constructor(e,t,n,o){this.Title=e,this.Description=t,this["Due Date"]=n,this.Priority=o,this.Completed=!1}}var d=function(){let e=[],t=document.getElementById("title-input"),n=document.getElementById("description-input"),o=document.getElementById("due-date-input"),d=document.getElementById("priority-input");return{todos:e,createTodo:function(){e.push(new r(t.value,n.value,o.value,d.value))},editTodo:function(l){e[l]=new r(t.value,n.value,o.value,d.value)},deleteTodo:function(t){e.splice([t],1)},toggleCompleted:function(t){e[t].Completed=!e[t].Completed}}}();!function(){let e=o.projects;const t=document.getElementById("project-list"),n=document.querySelector("#current-todos>h2");t.addEventListener("click",e=>{const o=Array.from(t.querySelectorAll("div")),r=Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);n.textContent=o[r].firstChild.textContent;for(let e=0;e<Array.from(o).length;e++)"active"===o[e].id&&o[e].removeAttribute("id");e.target.parentNode.id="active"}),function(){const r=document.getElementById("new-project-btn");function d(){for(;t.lastChild;)t.removeChild(t.firstChild);for(let o in e){let r=document.createElement("div"),d=document.createElement("p"),l=document.createElement("p");d.textContent=o,null==document.querySelector("#active")&&(r.id="active",n.textContent=o),r.appendChild(d),Object.keys(e).length>1&&(l.textContent="x",l.classList.add("delete-project-btn"),r.appendChild(l)),t.appendChild(r)}}d(),r.addEventListener("click",()=>{const e=document.getElementById("active").firstChild.textContent;o.addNewProject(),d(),n.textContent=e}),t.addEventListener("click",e=>{e.target.classList.contains("delete-project-btn")&&(o.deleteProject(e.target.previousSibling.textContent),d())})}()}(),function(){let e=o.projects,t=d.todos;function n(){const t=document.getElementById("todo-list-container");let n=document.getElementById("active").firstChild.textContent;for(;t.firstChild;)t.removeChild(t.lastChild);for(let o=0;o<e[n].length;o++){let r=document.createElement("div");r.classList.add("todo-container");for(let t in e[n][o]){let d=document.createElement("p");if(r.appendChild(d),"Title"===t||"Description"===t)d.textContent=""+e[n][o][t];else if("Priority"===t){const r={Low:"low",Medium:"medium",High:"high",Urgent:"urgent"};d.textContent=`${t}: ${e[n][o][t]}`,d.parentNode.classList.add(r[e[n][o][t]]+"-priority")}else if("Completed"===t){let r=document.createElement("input");r.type="checkbox",e[n][o][t]?(d.textContent=t+":",r.checked=!0):(d.textContent=t+":",r.checked=!1),d.appendChild(r)}else d.textContent=`${t}: ${e[n][o][t]}`}let d=document.createElement("p");d.classList.add("edit-todo-btn"),d.textContent="EDIT",r.appendChild(d);let l=document.createElement("p");l.classList.add("delete-todo-btn"),l.textContent="DELETE",r.appendChild(l),t.appendChild(r)}}document.getElementById("add-todo-btn").addEventListener("click",()=>{let o=document.getElementById("active").firstChild.textContent;d.createTodo();let r=Array.from(document.getElementById("create-todo-container").querySelectorAll("input"));for(let e=0;e<r.length;e++){if(""===r[e].value){for(let e=0;e<r.length;e++)r[e].value="";return}r[e].value=""}e[o].push(t[t.length-1]),n()}),document.addEventListener("click",o=>{if(o.target.classList.contains("edit-todo-btn")){const r=Array.from(o.target.parentNode.parentNode.children).indexOf(o.target.parentNode);let l=document.getElementById("active").firstChild.textContent,i=Array.from(document.getElementById("create-todo-container").querySelectorAll("input"));d.editTodo(r);for(let e=0;e<i.length;e++){if(""===i[e].value){for(let e=0;e<i.length;e++)i[e].value="";return}i[e].value=""}e[l][r]=t[r],n()}}),document.addEventListener("click",t=>{if(t.target.classList.contains("delete-todo-btn")){const o=Array.from(t.target.parentNode.parentNode.children).indexOf(t.target.parentNode);let r=document.getElementById("active").firstChild.textContent;d.deleteTodo(o),e[r].splice(o,1),n()}}),document.addEventListener("click",t=>{if("checkbox"===t.target.type){const o=Array.from(t.target.parentNode.parentNode.parentNode.children).indexOf(t.target.parentNode.parentNode);let r=document.getElementById("active").firstChild.textContent,l=e[r][o].Completed;d.toggleCompleted(o),e[r][o].Completed=!l,n()}}),document.getElementById("project-list").addEventListener("click",()=>{n()})}()}]);