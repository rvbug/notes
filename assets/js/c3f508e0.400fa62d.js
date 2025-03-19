"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[126],{6843:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>o});var t=i(4113),s=i(4848),a=i(8453);const l={slug:"Nix",title:"Nix Introduction",authors:["rakesh"],tags:["nix"]},r="Nix Functional Programming",c={authorsImageUrls:[void 0]},o=[{value:"Core Concepts",id:"core-concepts",level:2},{value:"1. Immutability",id:"1-immutability",level:3},{value:"2. Let Bindings",id:"2-let-bindings",level:3},{value:"3. Functions and Lambda Expressions",id:"3-functions-and-lambda-expressions",level:3},{value:"Multiple Parameter Functions",id:"multiple-parameter-functions",level:3},{value:"4. Pattern Matching and Attribute Sets",id:"4-pattern-matching-and-attribute-sets",level:3},{value:"Accessing Attributes",id:"accessing-attributes",level:3},{value:"5. Function with Attribute Sets",id:"5-function-with-attribute-sets",level:3},{value:"6. Recursion and Recursive Sets",id:"6-recursion-and-recursive-sets",level:3},{value:"7. Importing and Modules",id:"7-importing-and-modules",level:3},{value:"8. List Comprehensions",id:"8-list-comprehensions",level:3},{value:"9. Conditional Expressions",id:"9-conditional-expressions",level:3},{value:"Advanced Concepts",id:"advanced-concepts",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Key Differences from Other Languages",id:"key-differences-from-other-languages",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"core-concepts",children:"Core Concepts"}),"\n",(0,s.jsx)(n.h3,{id:"1-immutability",children:"1. Immutability"}),"\n",(0,s.jsx)(n.p,{children:"In Nix, variables are immutable once defined:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-nix",children:"let\n  x = 5;\n  # x = 6;  # This would cause an error\nin x\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-let-bindings",children:"2. Let Bindings"}),"\n",(0,s.jsx)(n.p,{children:"Nix uses let for local variable definitions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-nix",children:'let\n  greeting = "Hello";\n  name = "World";\nin greeting + " " + name\n'})}),"\n",(0,s.jsx)(n.h3,{id:"3-functions-and-lambda-expressions",children:"3. Functions and Lambda Expressions"}),"\n",(0,s.jsx)(n.p,{children:"Basic Function Definition"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-nix",children:'let\n  greet = name: "Hello, " + name;\nin greet "Alice"  # Returns "Hello, Alice"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"multiple-parameter-functions",children:"Multiple Parameter Functions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-nix",children:"let\n  multiply = x: y: x * y;\n  result = multiply 3 4;  # Returns 12 in result\n"})}),"\n",(0,s.jsx)(n.h3,{id:"4-pattern-matching-and-attribute-sets",children:"4. Pattern Matching and Attribute Sets"}),"\n",(0,s.jsx)(n.p,{children:"Attribute Set Creation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-nix",children:'{\n  name = "John";\n  age = 30;\n  skills = ["Nix" "Functional Programming"];\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"accessing-attributes",children:"Accessing Attributes"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-nix",children:'let\n  person = { name = "Alice"; age = 25; };\nin person.name  # Returns "Alice"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"5-function-with-attribute-sets",children:"5. Function with Attribute Sets"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-nix",children:'let\n  greet = { name, age }: "Hello ${name}, you are ${toString age}";\n  \n  result = greet { \n    name = "Bob"; \n    age = 35; \n  }\nin result\n'})}),"\n",(0,s.jsx)(n.h3,{id:"6-recursion-and-recursive-sets",children:"6. Recursion and Recursive Sets"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-nix",children:"let\n  fibonacci = rec {\n    fib0 = 0;\n    fib1 = 1;\n    fib2 = fib0 + fib1;\n    fib3 = fib1 + fib2;\n    # Continues recursively\n  };\nin fibonacci\n"})}),"\n",(0,s.jsx)(n.h3,{id:"7-importing-and-modules",children:"7. Importing and Modules"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-nix",children:"let\n  # Importing another Nix file\n  utils = import ./utils.nix;\nin utils.someFunction\n"})}),"\n",(0,s.jsx)(n.h3,{id:"8-list-comprehensions",children:"8. List Comprehensions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-nix",children:"let\n  numbers = [1 2 3 4 5];\n  squared = map (x: x * x) numbers;\nin squared  # [1 4 9 16 25]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"9-conditional-expressions",children:"9. Conditional Expressions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-nix",children:'let\n  checkAge = age: \n    if age < 18 \n    then "Minor" \n    else "Adult";\nin checkAge 20  # Returns "Adult"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"advanced-concepts",children:"Advanced Concepts"}),"\n",(0,s.jsx)(n.p,{children:"Lazy Evaluation - Nix uses lazy evaluation, meaning expressions are only computed when needed:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-nix",children:'let\n  expensiveComputation = \n    builtins.trace "Computing..." \n    (x: x * x);\n  \n  # Not evaluated until used\n  result = expensiveComputation;\nin result 42\n'})}),"\n",(0,s.jsx)(n.p,{children:"Derivations\nThe core of Nix's package management:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-nix",children:'derivation {\n  name = "example";\n  builder = "/bin/sh";\n  args = [ "-c" "echo hello > $out" ];\n  system = "x86_64-linux";\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Keep functions pure"}),"\n",(0,s.jsx)(n.li,{children:"Avoid side effects"}),"\n",(0,s.jsx)(n.li,{children:"Embrace immutability"}),"\n",(0,s.jsx)(n.li,{children:"Use pattern matching"}),"\n",(0,s.jsx)(n.li,{children:"Leverage lazy evaluation"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"key-differences-from-other-languages",children:"Key Differences from Other Languages"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No mutable state"}),"\n",(0,s.jsx)(n.li,{children:"Functions are first-class citizens"}),"\n",(0,s.jsx)(n.li,{children:"Strong emphasis on reproducibility"}),"\n",(0,s.jsx)(n.li,{children:"Declarative package management"}),"\n",(0,s.jsx)(n.li,{children:"Built-in support for functional programming paradigms"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"Nix's functional programming syntax provides a unique approach to package management and system configuration, emphasizing reproducibility, purity, and declarative design."})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var t=i(6540);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}},4113:e=>{e.exports=JSON.parse('{"permalink":"/notes/blog/Nix","source":"@site/blog/2023-03-05-nix/Nix.md","title":"Nix Introduction","description":"Core Concepts","date":"2023-03-05T00:00:00.000Z","tags":[{"inline":false,"label":"nix","permalink":"/notes/blog/tags/nix","description":"Nix OS and Functional Package Manager"}],"readingTime":2.2,"hasTruncateMarker":false,"authors":[{"name":"rakesh","title":"Sr. Engineering Manager","url":"https://qubitai.in","page":{"permalink":"/notes/blog/authors/rakesh"},"socials":{"w":"https://qubitai.in","github":"https://github.com/rvbug"},"imageURL":"https://avatars.githubusercontent.com/u/10928536?v=4","key":"rakesh"}],"frontMatter":{"slug":"Nix","title":"Nix Introduction","authors":["rakesh"],"tags":["nix"]},"unlisted":false,"prevItem":{"title":"Quantum Gravity - Intestellar","permalink":"/notes/blog/Introduction"},"nextItem":{"title":"Nix Pkg Manager","permalink":"/notes/blog/Nix Pkgs"}}')}}]);