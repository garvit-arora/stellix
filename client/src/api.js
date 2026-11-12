const API='/api';
export async function request(path,options={}){const res=await fetch(API+path,{credentials:'include',headers:{'Content-Type':'application/json',...(options.headers||{})},...options});const data=await res.json().catch(()=>({}));if(!res.ok)throw new Error(data.error||'Request failed');return data}
