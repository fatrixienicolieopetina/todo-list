(()=>{"use strict";const e=(()=>{let e;return e=window.localStorage,null==e.getItem("projects")&&e.setItem("projects","[]"),null==e.getItem("todos")&&e.setItem("todos","[]"),{addNewToDoToStorage:function(t){let n=JSON.parse(e.getItem("todos")||"[]");n.push(t),e.setItem("todos",JSON.stringify(n))},addNewProjectToStorage:function(t){let n=JSON.parse(e.getItem("projects")||"[]");n.push(t),e.setItem("projects",JSON.stringify(n))},getProjectItems:function(){return JSON.parse(e.getItem("projects"))},getTodoItemsOfAProject:function(t){return JSON.parse(e.getItem("todos")).filter((e=>e.projectName==t))},getTodoItemById:function(t){let n=JSON.parse(e.getItem("todos")).filter((e=>e.id==t));return 1==n.length?n[0]:null},deleteTodo:function(t){let n=JSON.parse(e.getItem("todos"));console.log(t),console.log(n);let o=n.filter((e=>e.id!=t));e.setItem("todos",JSON.stringify(o))}}})(),t=()=>Math.floor(Math.random()*Math.floor(Math.random()*Date.now())),n=function(){class n{constructor(e){this.title=e.title,this.description=e.description,this.duedate=e.duedate,this.priority=e.priority,this.projectName=e.projectName,this.id=e.id}}return{createTodo:function(o,c,i,d,s){let l={projectName:o,title:c,description:i,duedate:d,priority:s,id:t()};e.addNewToDoToStorage(new n(l))},getTodosOfAProject:function(t){return e.getTodoItemsOfAProject(t)},getTodoDetails:function(t){return e.getTodoItemById(t)},deleteTodo:function(t){e.deleteTodo(t)}}}(),o=function(){class n{constructor(e){this.projectName=e.projectName,this.id=e.id}}return{createNewProject:function(o){let c={projectName:o,id:t()};e.addNewProjectToStorage(new n(c))},getProjects:function(){return e.getProjectItems()}}}(),c=function(){function e(){let e=document.getElementById("project-name").value;o.createNewProject(e),l("new-project-modal"),p()}function t(){let e=document.getElementById("title").value,t=document.getElementById("project").value,o=document.getElementById("details").value,c=document.getElementById("duedate").value,i=document.getElementsByClassName("priority-option"),d="";for(let e=0;e<i.length;e++)i[e].classList.contains("is-selected")&&(d=i[e].innerText);console.log(e,t,o,c,d),n.createTodo(t,e,o,c,d),l("new-todo-modal"),p()}function c(e){let t=document.createElement("option");return t.innerText=e,t.value=e,t}function i(e,t,n){e.addEventListener("click",(function(){u(),a(t),function(e){let t=document.getElementById("menu-list").getElementsByClassName("is-active");for(let e of t)e.classList.remove("is-active");e.classList.add("is-active"),console.log(e.classList)}(n)}))}function d(){document.getElementById("new-todo-modal").classList.add("is-active")}function s(){document.getElementById("new-project-modal").classList.add("is-active")}function l(e){document.getElementById(e).classList.remove("is-active")}function a(e){let t=n.getTodosOfAProject(e),o=document.getElementById("parent-todo-container");t.forEach((e=>{o.appendChild(function(e,t,o,c){let i=document.createElement("div");i.setAttribute("class","panel-block todo-item"),i.id=o,"High"==t?i.classList.add("todo-item-green"):"Normal"==t?i.classList.add("todo-item-blue"):"Low"==t&&i.classList.add("todo-item-yellow");let d=document.createElement("input");d.setAttribute("type","checkbox");let s=document.createElement("label"),l=document.createElement("span");l.innerText=`${e} due at ${c}`,s.appendChild(d),s.appendChild(l);let a=document.createElement("div");a.setAttribute("class","field is-grouped add-button buttons are-small");let m=function(e){let t=document.createElement("button");t.className="button",t.setAttribute("type","button");let o=document.createElement("i");o.setAttribute("class","fa fa-eye"),t.appendChild(o);let c=n.getTodoDetails(e);return t.addEventListener("click",(function(){!function(e){let t=document.getElementById("section-details");t.textContent="";let n=document.createElement("p");n.innerText=`Title: ${e.title}`;let o=document.createElement("p");o.innerText=`Details: ${e.description}`;let c=document.createElement("p");c.innerText=`Due Date: ${e.duedate}`;let i=document.createElement("p");i.innerText=`Priority: ${e.priority}`;let d=document.createElement("p");d.innerText=`Project Name: ${e.projectName}`,t.appendChild(n),t.appendChild(o),t.appendChild(c),t.appendChild(i),t.appendChild(d),document.getElementById("details-modal").classList.add("is-active")}(c)})),t}(o),u=function(e){let t=document.createElement("button");t.className="button",t.setAttribute("type","button");let n=document.createElement("i");return n.setAttribute("class","fa fa-edit"),t.appendChild(n),t}(),p=function(e){let t=document.createElement("button");t.className="button",t.setAttribute("type","button");let n=document.createElement("i");return n.setAttribute("class","fa fa-trash"),t.appendChild(n),console.log("heyo"),t.addEventListener("click",(function(){console.log("i came here"),document.getElementById("delete-todo-modal").classList.add("is-active"),function(e){let t=document.getElementById("delete-todo-modal-btn");t.removeEventListener("click",(function(){r(e)})),t.addEventListener("click",(function(){r(e)}))}(e)})),t}(o);return a.appendChild(m),a.appendChild(u),a.appendChild(p),i.appendChild(s),i.appendChild(a),i}(e.title,e.priority,e.id,e.duedate))}))}function r(e){n.deleteTodo(e),m(),p()}function m(){document.getElementById("delete-todo-modal").classList.remove("is-active")}function u(){document.getElementById("parent-todo-container").textContent=""}function p(){!function(){let e=document.getElementById("project-list"),t=document.getElementById("project");e.textContent="",t.textContent="",u()}(),function(){let e=o.getProjects(),t=document.getElementById("project-list"),n=document.getElementById("project");n.appendChild(c("Home")),i(document.getElementById("home-project"),"Home",document.getElementById("home-project-anchor")),e.forEach((e=>{t.appendChild(function(e){let t=document.createElement("li"),n=document.createElement("a");return t.className="project",t.id=e.id,n.innerText=e.projectName,t.appendChild(n),i(t,e.projectName,n),t}(e)),n.appendChild(c(e.projectName))}))}(),a("Home")}return{addListeners:function(){document.getElementById("create-new-todo-btn").addEventListener("click",(function(){d()})),document.getElementById("create-new-project-btn").addEventListener("click",(function(){s()})),document.getElementById("cancel-create-todo").classList.remove("is-active"),document.getElementById("cancel-create-project").classList.remove("is-active"),document.getElementById("submit-create-todo").addEventListener("click",t),p(),document.getElementById("submit-create-project").addEventListener("click",e),p(),function(){let e=document.getElementsByClassName("priority-option"),t=e[0],n=e[1],o=e[2];t.addEventListener("click",(function(){t.classList.contains("is-selected")||t.classList.add("is-selected","is-success"),o.classList.remove("is-selected","is-warning"),n.classList.remove("is-selected","is-info")})),n.addEventListener("click",(function(){n.classList.contains("is-selected")||n.classList.add("is-selected","is-info"),o.classList.remove("is-selected","is-warning"),t.classList.remove("is-selected","is-success")})),o.addEventListener("click",(function(){o.classList.contains("is-selected")||o.classList.add("is-selected","is-warning"),t.classList.remove("is-selected","is-success"),n.classList.remove("is-selected","is-info")}))}(),document.getElementById("detail-modal-close-btn").addEventListener("click",(function(){document.getElementById("details-modal").classList.remove("is-active"),document.getElementById("section-details").textContent=""})),document.getElementById("delete-todo-modal-cancel-btn").addEventListener("click",m)},init:p,createNewToDo:d,createNewProject:s}}();c.init(),c.addListeners()})();