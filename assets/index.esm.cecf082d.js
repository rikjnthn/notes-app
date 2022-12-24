import{r as d,g as q,f as b,k as w,o as S,R as v,c as R,j as k,I as Z,h as z}from"./index.85f1d4f1.js";function G(r,e){if(r!=null){if(typeof r=="function"){r(e);return}try{r.current=e}catch{throw new Error(`Cannot assign value '${e}' to ref '${r}'`)}}}function N(...r){return e=>{r.forEach(s=>{G(s,e)})}}function te(...r){return d.exports.useMemo(()=>N(...r),r)}var g=(...r)=>r.filter(Boolean).join(" "),E=r=>r?"":void 0,P=r=>r?!0:void 0;function H(...r){return function(s){r.some(o=>(o==null||o(s),s==null?void 0:s.defaultPrevented))}}var[J,A]=q({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[K,C]=q({strict:!1,name:"FormControlContext"});function Q(r){const{id:e,isRequired:s,isInvalid:o,isDisabled:t,isReadOnly:a,...m}=r,c=d.exports.useId(),l=e||`field-${c}`,f=`${l}-label`,i=`${l}-feedback`,F=`${l}-helptext`,[h,p]=d.exports.useState(!1),[_,I]=d.exports.useState(!1),[y,T]=d.exports.useState(!1),L=d.exports.useCallback((n={},u=null)=>({id:F,...n,ref:N(u,x=>{!x||I(!0)})}),[F]),O=d.exports.useCallback((n={},u=null)=>{var x,M;return{...n,ref:u,"data-focus":E(y),"data-disabled":E(t),"data-invalid":E(o),"data-readonly":E(a),id:(x=n.id)!=null?x:f,htmlFor:(M=n.htmlFor)!=null?M:l}},[l,t,y,o,a,f]),$=d.exports.useCallback((n={},u=null)=>({id:i,...n,ref:N(u,x=>{!x||p(!0)}),"aria-live":"polite"}),[i]),B=d.exports.useCallback((n={},u=null)=>({...n,...m,ref:u,role:"group"}),[m]),j=d.exports.useCallback((n={},u=null)=>({...n,ref:u,role:"presentation","aria-hidden":!0,children:n.children||"*"}),[]);return{isRequired:!!s,isInvalid:!!o,isReadOnly:!!a,isDisabled:!!t,isFocused:!!y,onFocus:()=>T(!0),onBlur:()=>T(!1),hasFeedbackText:h,setHasFeedbackText:p,hasHelpText:_,setHasHelpText:I,id:l,labelId:f,feedbackId:i,helpTextId:F,htmlProps:m,getHelpTextProps:L,getErrorMessageProps:$,getRootProps:B,getLabelProps:O,getRequiredIndicatorProps:j}}var U=b(function(e,s){const o=w("Form",e),t=S(e),{getRootProps:a,htmlProps:m,...c}=Q(t),l=g("chakra-form-control",e.className);return v.createElement(K,{value:c},v.createElement(J,{value:o},v.createElement(R.div,{...a({},s),className:l,__css:o.container})))});U.displayName="FormControl";var V=b(function(e,s){const o=C(),t=A(),a=g("chakra-form__helper-text",e.className);return v.createElement(R.div,{...o==null?void 0:o.getHelpTextProps(e,s),__css:t.helperText,className:a})});V.displayName="FormHelperText";function ae(r){const{isDisabled:e,isInvalid:s,isReadOnly:o,isRequired:t,...a}=W(r);return{...a,disabled:e,readOnly:o,required:t,"aria-invalid":P(s),"aria-required":P(t),"aria-readonly":P(o)}}function W(r){var _,I,y;const e=C(),{id:s,disabled:o,readOnly:t,required:a,isRequired:m,isInvalid:c,isReadOnly:l,isDisabled:f,onFocus:i,onBlur:F,...h}=r,p=r["aria-describedby"]?[r["aria-describedby"]]:[];return(e==null?void 0:e.hasFeedbackText)&&(e==null?void 0:e.isInvalid)&&p.push(e.feedbackId),e!=null&&e.hasHelpText&&p.push(e.helpTextId),{...h,"aria-describedby":p.join(" ")||void 0,id:s!=null?s:e==null?void 0:e.id,isDisabled:(_=o!=null?o:f)!=null?_:e==null?void 0:e.isDisabled,isReadOnly:(I=t!=null?t:l)!=null?I:e==null?void 0:e.isReadOnly,isRequired:(y=a!=null?a:m)!=null?y:e==null?void 0:e.isRequired,isInvalid:c!=null?c:e==null?void 0:e.isInvalid,onFocus:H(e==null?void 0:e.onFocus,i),onBlur:H(e==null?void 0:e.onBlur,F)}}var[X,Y]=q({name:"FormErrorStylesContext",errorMessage:`useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `}),ee=b((r,e)=>{const s=w("FormError",r),o=S(r),t=C();return t!=null&&t.isInvalid?v.createElement(X,{value:s},v.createElement(R.div,{...t==null?void 0:t.getErrorMessageProps(o,e),className:g("chakra-form__error-message",r.className),__css:{display:"flex",alignItems:"center",...s.text}})):null});ee.displayName="FormErrorMessage";var re=b((r,e)=>{const s=Y(),o=C();if(!(o!=null&&o.isInvalid))return null;const t=g("chakra-form__error-icon",r.className);return k(Z,{ref:e,"aria-hidden":!0,...r,__css:s.icon,className:t,children:k("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})});re.displayName="FormErrorIcon";var oe=b(function(e,s){var h;const o=z("FormLabel",e),t=S(e),{className:a,children:m,requiredIndicator:c=k(D,{}),optionalIndicator:l=null,...f}=t,i=C(),F=(h=i==null?void 0:i.getLabelProps(f,s))!=null?h:{ref:s,...f};return v.createElement(R.label,{...F,className:g("chakra-form__label",t.className),__css:{display:"block",textAlign:"start",...o}},m,i!=null&&i.isRequired?c:l)});oe.displayName="FormLabel";var D=b(function(e,s){const o=C(),t=A();if(!(o!=null&&o.isRequired))return null;const a=g("chakra-form__required-indicator",e.className);return v.createElement(R.span,{...o==null?void 0:o.getRequiredIndicatorProps(e,s),__css:t.requiredIndicator,className:a})});D.displayName="RequiredIndicator";export{U as F,ee as a,ae as b,oe as c,te as u};
