(this["webpackJsonppackage.json"]=this["webpackJsonppackage.json"]||[]).push([[0],{102:function(e){e.exports=JSON.parse('[{"id":1,"title":"Developer","description":"Recent Wyncode graduate, now working as a Product Specialist for the Wix Editor. My day to day involves providing support for customer solutions within web developent and content management. I focus primarily on Full Stack Javascript including React, Node.js, & Corvid by Wix."},{"id":2,"title":"Mixologist","description":"Designing cocktails in Wynwood, FL since 2015 through spirit knowledge, preparation of house-made syrups, liquor infusions, and other ingredients to create quality drinks. *BarSmarts Certified"}]')},143:function(e,t,a){e.exports=a.p+"static/media/jameson.9ad34f2a.jpg"},144:function(e,t,a){},164:function(e){e.exports=JSON.parse('{"allProjects":[{"title":"BarGuide","imgName":"cocktailparty","description":"Learn to Bartend | Wix editor & Corvid","linkTo":"https://www.barguide.info"},{"title":"Overtime Tracker","imgName":"overtime","description":"Employee Overtime Tracker | Ruby on Rails.","linkTo":"https://overtime-trackr.herokuapp.com"},{"title":"Cubatoriano Fan Page","imgName":"cubatoriano","description":"Sketch comedy Portfolio | Wix Editor","linkTo":"https://www.cubatoriano.com"}]}')},177:function(e,t,a){e.exports=a(324)},182:function(e,t,a){},289:function(e,t,a){e.exports=a.p+"static/media/logo.b8abd547.png"},313:function(e,t,a){},314:function(e,t,a){},316:function(e,t,a){},320:function(e,t,a){},322:function(e,t,a){},324:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(16),c=a(19),l=a(17),i=a(18),o=a(0),s=a.n(o),m=a(47),u=a.n(m),p=(a(182),a(336)),d=a(49),h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={activeItem:"about"},a.handleItemClick=function(e,t){var n=t.name;return a.setState({activeItem:n})},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.activeItem;return s.a.createElement(p.a,{className:"ui fixed top secondary menu"},s.a.createElement(p.a.Item,null,s.a.createElement("a",{href:"#home"},s.a.createElement("img",{className:"ui avatar image tiny",src:a(289),alt:"logo"}))),s.a.createElement(p.a.Item,{href:"#about",position:"right",name:"about",active:"about"===e,onClick:this.handleItemClick},s.a.createElement("p",null,s.a.createElement("strong",null,"About"))),s.a.createElement(p.a.Item,{href:"#projects",name:"projects",active:"projects"===e,onClick:this.handleItemClick},s.a.createElement("p",null,s.a.createElement("strong",null,"Projects"))),s.a.createElement(p.a.Item,{href:"#contact",name:"contact",active:"contact"===e,onClick:this.handleItemClick},s.a.createElement("p",null,s.a.createElement("strong",null,"Contact"))),s.a.createElement(p.a.Item,{href:"/resume.pdf",download:"resume.pdf",name:"resume",active:"resume"===e,onClick:this.handleItemClick},s.a.createElement(d.a,{name:"download",className:"icon-resume"}),s.a.createElement("p",null,s.a.createElement("strong",null,"Resume"))))}}]),t}(o.Component),b=a(335),f=a(161),E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={activeItem:"about"},a.handleItemClick=function(e,t){var n=t.name;return a.setState({activeItem:n})},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.activeItem;return s.a.createElement(p.a,{id:"mobile",className:"fixed inverted borderless compact"},s.a.createElement(b.a,{icon:"content",className:"link item"},s.a.createElement(b.a.Menu,null,s.a.createElement(b.a.Item,{href:"#about",position:"right",name:"about",active:"about"===e,onClick:this.handleItemClick},"About"),s.a.createElement(b.a.Item,{href:"#projects",name:"projects",active:"projects"===e,onClick:this.handleItemClick},"Projects"),s.a.createElement(b.a.Item,{href:"#contact",name:"contact",active:"contact"===e,onClick:this.handleItemClick},"Contact"),s.a.createElement(b.a.Item,{href:"/resume.pdf",download:"resume.pdf",name:"resume",active:"resume"===e,onClick:this.handleItemClick},"Resume",s.a.createElement(d.a,{name:"download",className:"icon-resume"})),s.a.createElement(f.a,null),s.a.createElement(b.a.Item,{href:"#home"},"Back To Top"))))}}]),t}(o.Component),j=a(333),v=(a(313),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"home",className:"nav-menu"},s.a.createElement(j.a,{minWidth:768},s.a.createElement(h,null)),s.a.createElement(j.a,{maxWidth:768},s.a.createElement(E,null)))}}]),t}(o.Component)),g=(a(314),a(33)),O=a(102),k=a(162),y=a.n(k),C=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={segments:!1},a.toggleContent=a.toggleContent.bind(Object(g.a)(a)),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"toggleContent",value:function(e){e.preventDefault(),(0,this.props.toggle)(e)}},{key:"render",value:function(){var e=this.props.person;return s.a.createElement("div",{className:"roles",grid:"true"},s.a.createElement(y.a,{bottom:!0,delay:3e3},s.a.createElement("button",{id:"role",onClick:this.toggleContent},s.a.createElement("strong",null,s.a.createElement("a",{href:"",className:"effect-shine"},e.title)))))}}]),t}(o.Component),w=a(339),N=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.person;return s.a.createElement("div",{className:"role-description"},s.a.createElement(w.a,{stacked:!0},s.a.createElement("p",null,e.description)))}}]),t}(o.Component),I=(a(316),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).toggleRole=a.toggleRole.bind(Object(g.a)(a)),a.eachRole=a.eachRole.bind(Object(g.a)(a)),a.eachDescription=a.eachDescription.bind(Object(g.a)(a)),a.state={segments:!1,activeRole:0},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"toggleRole",value:function(e){this.setState({segments:!this.state.segments,activeRole:e})}},{key:"eachRole",value:function(e,t){return s.a.createElement(C,{key:t,index:t,person:e,toggle:this.toggleRole.bind(this,t)})}},{key:"eachDescription",value:function(e,t){return s.a.createElement(N,{activeRole:t,key:t,person:e})}},{key:"render",value:function(){var e=this.state.segments,t=this.state.activeRole,a=this.eachDescription(O[t],t);return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"roles"},O.map(this.eachRole)),s.a.createElement("div",null,e?a:null))}}]),t}(o.Component)),x=a(163),R=a.n(x),S=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"header"},s.a.createElement(R.a,{bottom:!0,duration:1e3,delay:1e3},s.a.createElement("h1",{className:"name"},"Chris Duenas")),s.a.createElement(I,null))}}]),t}(o.Component),W=a(338),D=a(167),T=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(W.a,null,s.a.createElement(W.a.Row,null,s.a.createElement("div",{className:"ui container about"},s.a.createElement("div",{className:"about-image"},s.a.createElement("h5",null," Web Developer"),s.a.createElement(j.a,{minWidth:768},s.a.createElement(D.a,{src:a(143),alt:"portrait",size:"massive"})),s.a.createElement(j.a,{maxWidth:768},s.a.createElement(D.a,{src:a(143),alt:"portrait",size:"medium"}))),s.a.createElement("div",{className:"about-p"},s.a.createElement("p",null,"I had always found an interest in coding and after hearing about Wyncode I decided to enroll in a full-immersive bootcamp to put my skills to the test. I seeked for a new challenge and after my experience, my mission is to build web applications to solve real world problems.",s.a.createElement("br",null),s.a.createElement("br",null),"My life beyond developing software involves meal-prepping, the gym, and going on adventures with my girlfriend Kristy and Luna the husky.")))))}}]),t}(o.Component),F=(a(320),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"about"},s.a.createElement("div",{className:"about-header"},s.a.createElement("h2",null,"About me")),s.a.createElement(T,null))}}]),t}(o.Component)),P=(a(144),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.imgName+" portfolio-img",t=this.props.linkTo;return s.a.createElement("a",{href:t,target:"blank"},s.a.createElement("div",{className:"project"},s.a.createElement("h5",{id:"title"},this.props.title),s.a.createElement("div",{className:e}),s.a.createElement("p",{id:"description"},this.props.description)))}}]),t}(o.Component)),M=a(164),z=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"projects",className:"fluid scroll"},s.a.createElement("h2",null,"My Projects"),s.a.createElement(W.a,{className:"projects",grid:"true"},s.a.createElement(W.a.Row,null,M.allProjects.map((function(e,t){return s.a.createElement(P,{key:t,title:e.title,imgName:e.imgName,description:e.description,linkTo:e.linkTo})})))))}}]),t}(o.Component),A=a(334),B=a(337),J=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(A.a,{id:"contact-form",action:"//formspree.io/chrisduenasonline@gmail.com",method:"POST"},s.a.createElement(A.a.Field,{width:15},s.a.createElement("input",{type:"text",name:"name",placeholder:"Name"})),s.a.createElement(A.a.Field,{width:15},s.a.createElement("input",{type:"text",name:"_replyto",placeholder:"Email"})),s.a.createElement(A.a.Field,{width:15},s.a.createElement("input",{type:"text",name:"_subject",placeholder:"Subject"})),s.a.createElement(A.a.Field,{width:15},s.a.createElement("textarea",{name:"message",placeholder:"Your Message"}),s.a.createElement("input",{type:"text",name:"_gotcha",style:{display:"none"}})),s.a.createElement(B.a,{type:"submit",value:"Send"},"Submit"))}}]),t}(o.Component),L=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(W.a,{className:"columns"},s.a.createElement(W.a.Row,null,s.a.createElement(W.a.Column,null,s.a.createElement("a",{className:"social-link",href:"https://github.com/chrisduenas",target:"blank"},s.a.createElement(d.a,{name:"github",size:"big"}))),s.a.createElement(W.a.Column,null,s.a.createElement("a",{className:"social-link",href:"https://www.linkedin.com/in/christopherduenas/",target:"blank"},s.a.createElement(d.a,{name:"linkedin",size:"big"}))),s.a.createElement(W.a.Column,null,s.a.createElement("a",{className:"social-link",href:"https://www.facebook.com/Chris.A.Duenas",target:"blank"},s.a.createElement(d.a,{name:"facebook",size:"big"}))),s.a.createElement(W.a.Column,null,s.a.createElement("a",{className:"social-link",href:"https://twitter.com/christopherdue",target:"blank"},s.a.createElement(d.a,{name:"twitter",size:"big"})))))}}]),t}(o.Component),_=(a(322),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"contact"},s.a.createElement("div",{className:"ui container"},s.a.createElement("h2",{className:"contact-title"},"Contact Me"),s.a.createElement(J,null),s.a.createElement(L,null)),s.a.createElement("div",{className:"ui-fluid footer"},s.a.createElement("p",null,"Copyright Chris Duenas 2018")))}}]),t}(o.Component)),q=a(166),G=a.n(q),K=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return G.a.setup(1e3,-9),s.a.createElement(s.a.Fragment,null,s.a.createElement(v,null),s.a.createElement(S,null),s.a.createElement(F,null),s.a.createElement(z,null),s.a.createElement(_,null))}}]),t}(o.Component);a(323);a.d(t,"default",(function(){return Y}));var Y=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(K,null)}}]),t}(o.Component);u.a.render(s.a.createElement(Y,null),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.8f9f3646.chunk.js.map