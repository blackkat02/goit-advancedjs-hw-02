import"./assets/styles-B-Pfv7Ki.js";const e={formData:{email:"",message:""},feedbackform:document.querySelector(".feedback-form"),localStorageKey:"",emailInput:document.querySelector('.feedback-form input[name="email"]'),emaiMessage:document.querySelector('.feedback-form textarea[name="message"]'),form:document.querySelector(".feedback-form")};console.log(localStorage);window.addEventListener("load",o=>{if(!localStorage.length){console.log("hello");return}console.log("hello22"),e.formData=JSON.parse(localStorage.localStorageKey),console.log(e.formData),e.emailInput.value=e.formData.email,e.emaiMessage.value=e.formData.message});e.feedbackform.addEventListener("input",o=>{o.preventDefault();const a=o.target;console.log(a.name),console.log(a.value),e.formData[a.name]=a.value,console.log(e.formData);const l=JSON.stringify(e.formData);localStorage.setItem("localStorageKey",l),console.log(localStorage)});e.feedbackform.addEventListener("submit",o=>{o.preventDefault(),console.log(o.target.elements.message.value),localStorage.removeItem(localStorage.localStorageKey),console.log("finish"),e.form.reset(),localStorage.removeItem("localStorageKey")});
//# sourceMappingURL=2-form.js.map
