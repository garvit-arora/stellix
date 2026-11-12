import jwt from 'jsonwebtoken';
export const RESERVED=new Set(['www','api','app','admin','dashboard','scf','support','help','auth','login','signup','static','assets','stellix']);
export function slugify(value=''){return value.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,50)}
export function canManage(role){return role==='owner'||role==='admin'}
export function tenantSlugFromHost(host='',rootDomain=process.env.ROOT_DOMAIN||'stellix.localhost'){const hostname=host.split(':')[0].toLowerCase();if(hostname===rootDomain||!hostname.endsWith('.'+rootDomain))return null;const slug=hostname.slice(0,-rootDomain.length-1);return /^[a-z0-9](?:[a-z0-9-]{1,48}[a-z0-9])?$/.test(slug)?slug:null}
export function signSession(userId){return jwt.sign({sub:String(userId)},process.env.JWT_SECRET,{expiresIn:'7d',issuer:'stellix'})}
export function readSession(token){return jwt.verify(token,process.env.JWT_SECRET,{issuer:'stellix'}).sub}
