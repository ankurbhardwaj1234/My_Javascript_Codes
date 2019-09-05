const Integer='Integer';
const Plus='Plus';
const EOF='EOF';
const integers=Object.freeze(['0','1','2','3','4','5','6','7','8','9']);
var Token=function(type,value){
this.type=type;
this.value=value;
}


var interpreter=function(text){
this.text=text;
this.pos=0;
this.current_token=null;
this.get_next_token=function(){
let text=this.text;
if(this.pos==text.length){
return(new Token(EOF,null));
}
let current_Char=text[this.pos];
if(toNum(current_Char)!=null){
let token=new Token(Integer,toNum(current_Char));
this.pos+=1;
return token;
}
if(current_Char=='+'){
let token=new Token(Plus,current_Char);
this.pos+=1;
return token;
}
throwError('Unknown_Character');
console.error('Unknown_Token');
}
this.interpret=function(){
this.current_token=this.get_next_token();
let left=this.current_token;
this.check_Tok(Integer);
let op=this.current_token;
this.check_Tok(Plus);
let right=this.current_token;
this.check_Tok(Integer);
let result=left.value+right.value;
return result;
}
this.check_Tok=function(type){
if(this.current_token.type==type){
this.currentToken=this.get_next_token();
}else{
throwError('Wrong_Syntax');
console.error('Wrong_Syntax');
}
}

}

function toNum(val){
for(let i=0;i<10;i++){
if(integers[i]==val){
return i;
}
}
return null;
}