import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import vm from 'node:vm';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const pages=['index.html','noticias.html','reviews.html','dicas.html','contatos.html'];
const expected=['Home','Notícias','Reviews','Dicas','Contatos'];
let paths=0;
for(const file of pages){
 const html=await fs.readFile(path.join(root,file),'utf8');
 assert.match(html,/^<!DOCTYPE html>/i); assert.match(html,/<html lang="pt-BR">/);
 for(const tag of ['head','body','header','nav','main','footer'])assert.equal((html.match(new RegExp('<'+tag+'(?:\\s|>)','g'))||[]).length,1,file+': '+tag);
 const menu=html.match(/<nav[^>]*>([\s\S]*?)<\/nav>/)[1];
 const links=[...menu.matchAll(/<a href="([^"]+)"[^>]*>([^<]+)<\/a>/g)];
 assert.deepEqual(links.map(m=>m[1]),pages); assert.deepEqual(links.map(m=>m[2]),expected);
 assert.equal((menu.match(/aria-current="page"/g)||[]).length,1);
 assert.match(menu,new RegExp('href="'+file+'" aria-current="page"'));
 assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1);
 const voids=new Set(['meta','link','img','input','br','hr','source','area','base','col','embed','param','track','wbr']);const stack=[];
 for(const match of html.matchAll(/<(\/?)([a-z][a-z0-9-]*)\b[^>]*>/gi)){const closing=match[1],tag=match[2].toLowerCase();if(voids.has(tag))continue;if(closing)assert.equal(stack.pop(),tag,file+': fechamento de '+tag);else stack.push(tag)}assert.equal(stack.length,0);
 for(const img of html.matchAll(/<img\b[^>]*>/g))assert.match(img[0],/alt="[^"]+"/);
 for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){const href=match[1];if(/^(https?:|mailto:|#)/.test(href))continue;assert(!href.startsWith('/'));const [target,anchor]=href.split('#');await fs.access(path.join(root,target));if(anchor){const dest=await fs.readFile(path.join(root,target),'utf8');assert(dest.includes('id="'+anchor+'"'))}paths++}
 if(file==='index.html'){const targets=[...html.matchAll(/<a class="card-image" href="([^"]+)"/g)].map(m=>m[1]);assert.deepEqual(targets,['noticias.html','reviews.html','dicas.html'])}
}
new vm.Script(await fs.readFile(path.join(root,'js/script.js'),'utf8'));
const pdf=await fs.readFile(path.join(root,'output/pdf/CHECKPOINT-AOP2-PROVISORIO.pdf'));assert.equal((pdf.toString('latin1').match(/\/Type\s*\/Page\b/g)||[]).length,2);
console.log('APROVADO: 5 HTMLs, tags balanceadas, navegação, imagens, '+paths+' caminhos locais, sintaxe JS e PDF de 2 páginas.');
