import"./assets/modulepreload-polyfill-3cfb730f.js";let e={email:"",message:""};const a="feedback-form-state",m=document.querySelector('.feedback-form [name="email"]'),r=document.querySelector('.feedback-form [name="message"]');document.querySelector(".feedback-form").addEventListener("input",t=>{e.email=m.value,e.message=r.value,localStorage.setItem(a,JSON.stringify(e))});document.querySelector(".feedback-form").addEventListener("submit",t=>{if(t.preventDefault(),e.email==""||e.message==""){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(a),e={email:"",message:""},t.currentTarget.reset()});function l(){JSON.parse(localStorage.getItem(a))!=null?(e=JSON.parse(localStorage.getItem(a)),document.querySelector('.feedback-form [name="email"]').value=e.email,document.querySelector('.feedback-form [name="message"]').value=e.message):e={email:"",message:""}}l();
//# sourceMappingURL=commonHelpers2.js.map
