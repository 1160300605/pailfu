(function(){"use strict";var e={738:function(e,n,t){var i=t(5130),l=t(6768);function s(e,n,t,i,s,c){const a=(0,l.g2)("router-view");return(0,l.uX)(),(0,l.Wv)(a)}var c={name:"App"},a=t(1241);const r=(0,a.A)(c,[["render",s]]);var o=r,u=t(1387),p=t.p+"img/logo.b922f66e.png",d=t.p+"img/wechat-image.481ab180.png",g=t.p+"img/footerlogo.9493f0fe.png";const m={id:"main"},f={class:"fixed-buttons-wrapper",style:{bottom:"100px"}},k={key:0,src:d,class:"wechat-image",alt:"微信二维码"},b={key:1,class:"phone-text"},x=["innerHTML"];function h(e,n,t,i,s,c){const a=(0,l.g2)("el-col"),r=(0,l.g2)("el-menu-item"),o=(0,l.g2)("el-menu"),u=(0,l.g2)("el-row"),d=(0,l.g2)("el-header"),h=(0,l.g2)("router-view"),L=(0,l.g2)("font-awesome-icon"),y=(0,l.g2)("el-button");return(0,l.uX)(),(0,l.CE)("div",m,[(0,l.bF)(d,{class:"header"},{default:(0,l.k6)((()=>[(0,l.bF)(u,{class:"header-row",type:"flex",align:"middle"},{default:(0,l.k6)((()=>[(0,l.bF)(a,{span:12,class:"logo-container"},{default:(0,l.k6)((()=>n[8]||(n[8]=[(0,l.Lk)("img",{src:p,alt:"公司logo",class:"logo-img"},null,-1)]))),_:1}),(0,l.bF)(a,{span:12},{default:(0,l.k6)((()=>[(0,l.bF)(o,{"default-active":e.activeIndex,class:"menu",mode:"horizontal",ellipsis:!1,onSelect:e.handleSelect},{default:(0,l.k6)((()=>[(0,l.bF)(r,{index:"1",onClick:n[0]||(n[0]=e=>c.clickMenu({path:"/home"}))},{default:(0,l.k6)((()=>n[9]||(n[9]=[(0,l.eW)("首页")]))),_:1}),(0,l.bF)(r,{index:"2",onClick:n[1]||(n[1]=e=>c.clickMenu({path:"/products"}))},{default:(0,l.k6)((()=>n[10]||(n[10]=[(0,l.eW)("产品中心")]))),_:1}),(0,l.bF)(r,{index:"3",onClick:n[2]||(n[2]=e=>c.clickMenu({path:"/certificates"}))},{default:(0,l.k6)((()=>n[11]||(n[11]=[(0,l.eW)("技术认证")]))),_:1}),(0,l.bF)(r,{index:"4",onClick:n[3]||(n[3]=e=>c.clickMenu({path:"/informations"}))},{default:(0,l.k6)((()=>n[12]||(n[12]=[(0,l.eW)("联系信息")]))),_:1})])),_:1},8,["default-active","onSelect"])])),_:1})])),_:1})])),_:1}),(0,l.bF)(h),(0,l.Lk)("div",f,[(0,l.bF)(y,{class:"fixed-button",type:"primary",onMouseover:n[4]||(n[4]=e=>s.showImage=!0),onMouseleave:n[5]||(n[5]=e=>s.showImage=!1)},{default:(0,l.k6)((()=>[(0,l.bF)(L,{icon:["fab","weixin"],size:"2x"})])),_:1}),s.showImage?((0,l.uX)(),(0,l.CE)("img",k)):(0,l.Q3)("",!0),(0,l.bF)(y,{class:"fixed-button",type:"primary",onMouseover:n[6]||(n[6]=e=>s.showPhone=!0),onMouseleave:n[7]||(n[7]=e=>s.showPhone=!1)},{default:(0,l.k6)((()=>[(0,l.bF)(L,{icon:["fas","phone"],size:"2x"})])),_:1}),s.showPhone?((0,l.uX)(),(0,l.CE)("span",b,"+86 189-1540-0054")):(0,l.Q3)("",!0),(0,l.bF)(y,{class:"fixed-button",type:"primary",onClick:c.scrollToTop},{default:(0,l.k6)((()=>[(0,l.bF)(L,{icon:["fas","angle-up"],size:"2x"})])),_:1},8,["onClick"])]),(0,l.Lk)("footer",null,[(0,l.bF)(u,{gutter:20},{default:(0,l.k6)((()=>[(0,l.bF)(a,{span:12},{default:(0,l.k6)((()=>n[13]||(n[13]=[(0,l.Lk)("img",{style:{width:"50%","margin-top":"20px"},src:g},null,-1),(0,l.Lk)("p",{style:{"font-size":"18px"}},"专业金属表面喷涂加工",-1)]))),_:1}),(0,l.bF)(a,{span:12,style:{display:"flex","flex-direction":"column","align-items":"flex-start","padding-left":"20px","margin-top":"20px"}},{default:(0,l.k6)((()=>[n[14]||(n[14]=(0,l.Lk)("div",{style:{"font-size":"20px",color:"#fff","font-weight":"600"}},"联系方式",-1)),(0,l.Lk)("p",{style:{"font-size":"16px","text-align":"left","text-indent":"2em"},innerHTML:s.contactDescription},null,8,x)])),_:1})])),_:1}),n[15]||(n[15]=(0,l.Lk)("div",{style:{width:"100%","text-align":"center"}},[(0,l.Lk)("hr",{style:{margin:"0 auto",border:"1px solid #ccc",width:"80%"}})],-1)),n[16]||(n[16]=(0,l.Lk)("p",{style:{"text-align":"center"}},"© 2025 派尔福金属科技 版权所有",-1))])])}t(4114);var L={name:"MainPage",data(){return{showPhone:!1,showImage:!1,contactDescription:"\n        <p>联 系 人： 孙先生\n        <p>联系电话：+86 189-1540-0054\n        <p>联系邮箱：sun_dajun9@163.com\n        <p>地址：苏州高新区浒墅关镇西金芝路15号\n      "}},methods:{clickMenu(e){this.$route.path!==e.path&&this.$router.push(e.path)},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}};const y=(0,a.A)(L,[["render",h]]);var F=y,v=t(4232),_=t.p+"img/partners.7ba7cc0f.png";const w={id:"home"},M=["src","alt"],T={class:"banner-content"},C={class:"feature-item"},H={class:"feature-icon"},X={class:"feature-title"},j=["innerHTML"],W={class:"contact-info"},z={class:"product-item"},E=["src","alt"],I=["innerHTML"],q={class:"product-item"},K=["src","alt"],O=["innerHTML"],P={class:"equipment-subtitle"},A={class:"equipment-item"},D=["src","alt"],S=["innerHTML"];function G(e,n,t,i,s,c){const a=(0,l.g2)("el-carousel-item"),r=(0,l.g2)("el-carousel"),o=(0,l.g2)("font-awesome-icon"),u=(0,l.g2)("el-col"),p=(0,l.g2)("el-row"),d=(0,l.g2)("el-card"),g=(0,l.g2)("el-button"),m=(0,l.g2)("el-main"),f=(0,l.g2)("el-container");return(0,l.uX)(),(0,l.CE)("div",w,[(0,l.bF)(f,null,{default:(0,l.k6)((()=>[(0,l.bF)(m,null,{default:(0,l.k6)((()=>[(0,l.bF)(r,{height:"500px"},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.carouselImages,(e=>((0,l.uX)(),(0,l.Wv)(a,{key:e.id},{default:(0,l.k6)((()=>[(0,l.Lk)("img",{src:e.url,alt:e.title,class:"carousel-image"},null,8,M)])),_:2},1024)))),128))])),_:1}),(0,l.bF)(d,{class:"banner"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",T,[n[1]||(n[1]=(0,l.Lk)("h1",null,[(0,l.eW)("以"),(0,l.Lk)("span",{class:"highlight"},"品质"),(0,l.eW)("为核心，以"),(0,l.Lk)("span",{class:"highlight"},"客户满意"),(0,l.eW)("为目标")],-1)),(0,l.bF)(p,{gutter:40,style:{"margin-top":"30px"}},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.features,((e,n)=>((0,l.uX)(),(0,l.Wv)(u,{span:8,key:n},{default:(0,l.k6)((()=>[(0,l.Lk)("div",C,[(0,l.Lk)("div",H,[(0,l.bF)(o,{icon:e.icon,size:"3x"},null,8,["icon"])]),(0,l.Lk)("h3",X,(0,v.v_)(e.title),1),(0,l.Lk)("p",{class:"feature-desc",innerHTML:e.description},null,8,j)])])),_:2},1024)))),128))])),_:1}),(0,l.Lk)("div",W,[(0,l.bF)(o,{icon:["fas","phone-volume"],size:"2x"}),n[0]||(n[0]=(0,l.Lk)("span",{class:"phone-number"},"+86 189-1540-0054",-1))])])])),_:1}),(0,l.bF)(d,{class:"product-section",style:{"margin-top":"20px"}},{default:(0,l.k6)((()=>[(0,l.bF)(p,{gutter:20},{default:(0,l.k6)((()=>[(0,l.bF)(u,{span:8,style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},{default:(0,l.k6)((()=>[n[3]||(n[3]=(0,l.Lk)("div",{class:"sectiontitle"},"多规格表面喷涂",-1)),n[4]||(n[4]=(0,l.Lk)("hr",{style:{margin:"0 0",border:"1px solid #ccc",width:"80%"}},null,-1)),(0,l.bF)(g,{type:"text",style:{"font-size":"20px",margin:"15px 0"}},{default:(0,l.k6)((()=>n[2]||(n[2]=[(0,l.eW)("了解更多")]))),_:1})])),_:1}),(0,l.bF)(u,{span:16},{default:(0,l.k6)((()=>[(0,l.bF)(p,{gutter:20},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.products.slice(0,2),(e=>((0,l.uX)(),(0,l.Wv)(u,{span:12,key:e.id},{default:(0,l.k6)((()=>[(0,l.Lk)("div",z,[(0,l.Lk)("img",{src:e.url,alt:e.kind,class:"product-image"},null,8,E),(0,l.Lk)("p",{class:"product-kind",innerHTML:e.kind},null,8,I)])])),_:2},1024)))),128))])),_:1}),(0,l.bF)(p,{gutter:20},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.products.slice(2,4),(e=>((0,l.uX)(),(0,l.Wv)(u,{span:12,key:e.id},{default:(0,l.k6)((()=>[(0,l.Lk)("div",q,[(0,l.Lk)("img",{src:e.url,alt:e.kind,class:"product-image"},null,8,K),(0,l.Lk)("p",{class:"product-kind",innerHTML:e.kind},null,8,O)])])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.bF)(d,{class:"equipment-section",style:{"margin-top":"20px"}},{default:(0,l.k6)((()=>[n[5]||(n[5]=(0,l.Lk)("div",{class:"sectiontitle"},"产线设备",-1)),(0,l.bF)(p,{gutter:40,style:{"margin-top":"30px"}},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.equipments,(e=>((0,l.uX)(),(0,l.Wv)(u,{span:12,key:e.id,style:{"margin-top":"20px"}},{default:(0,l.k6)((()=>[(0,l.bF)(d,{class:"equipment-card",shadow:"hover"},{header:(0,l.k6)((()=>[(0,l.Lk)("div",P,(0,v.v_)(e.title),1)])),default:(0,l.k6)((()=>[(0,l.Lk)("div",A,[(0,l.Lk)("img",{src:e.url,alt:e.title,class:"equipment-image"},null,8,D),(0,l.Lk)("p",{class:"equipment-desc",innerHTML:e.desc},null,8,S)])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,l.bF)(d,{class:"info-section",style:{"margin-top":"20px"}},{default:(0,l.k6)((()=>[(0,l.bF)(p,{gutter:20},{default:(0,l.k6)((()=>[(0,l.bF)(u,{span:4,style:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center"}},{default:(0,l.k6)((()=>[n[7]||(n[7]=(0,l.Lk)("div",{class:"sectiontitle"},"合作伙伴",-1)),(0,l.bF)(g,{type:"text"},{default:(0,l.k6)((()=>n[6]||(n[6]=[(0,l.eW)("了解更多")]))),_:1})])),_:1}),(0,l.bF)(u,{span:20},{default:(0,l.k6)((()=>n[8]||(n[8]=[(0,l.Lk)("img",{src:_,style:{width:"100%",height:"auto","object-fit":"contain"}},null,-1)]))),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])}var Q={name:"HomePage",data(){return{carouselImages:[{id:1,url:t(4919),title:"轮播图1"},{id:2,url:t(6444),title:"轮播图2"},{id:3,url:t(9333),title:"轮播图3"},{id:4,url:t(5034),title:"轮播图4"}],features:[{icon:["fas","people-group"],title:"专业制造",description:'专注于<span class="highlight">喷涂加工和表面处理</span>的产品供应<br>拥有先进的生产设备和专业的技术团队'},{icon:["fas","cart-flatbed"],title:"品质保证",description:'严格的<span class="highlight">质量管理体系</span><br>确保每一件产品都符合国际标准'},{icon:["fas","hand-holding-heart"],title:"服务至上",description:'为客户提供<span class="highlight">差异化的一站式服务</span><br>确保客户的生产需求'}],products:[{id:1,kind:"小件喷涂",url:t(5486)},{id:2,kind:"大件及异形件喷涂",url:t(4701)},{id:3,kind:"箱体类喷涂件",url:t(9776)},{id:4,kind:"平板类喷涂件",url:t(6847)}],equipments:[{id:1,title:"槽浸式前处理产线",url:t(8381),desc:"最大可生产尺寸<br>3600*1400*1350(mm)<br><br>行车最大可承重1500kg"},{id:2,title:"流水线产品线",url:t(7142),desc:"最大可生产尺寸<br>2200*750*1500(mm)<br><br>单钩最大可承重60kg"},{id:3,title:"超大件面包房",url:t(6159),desc:"最大可生产尺寸<br>6000*2500*2800(mm)<br><br>行车最大可承重1500kg"},{id:4,title:"抛丸设备（小件）",url:t(9664),desc:"最大入舱尺寸<br>1500*800(mm)<br><br>吊舱最大可承重1000kg"}]}}};const $=(0,a.A)(Q,[["render",G]]);var J=$,U=t.p+"img/1.d67b76b7.jpg";const Y={id:"products"},B=["src","alt"],N=["innerHTML"],R=["src","alt"],V=["innerHTML"],Z=["src","alt"],ee=["innerHTML"],ne=["src","alt"],te=["innerHTML"];function ie(e,n,t,i,s,c){const a=(0,l.g2)("el-col"),r=(0,l.g2)("el-row"),o=(0,l.g2)("el-card"),u=(0,l.g2)("el-main"),p=(0,l.g2)("el-container");return(0,l.uX)(),(0,l.CE)("div",Y,[(0,l.bF)(p,null,{default:(0,l.k6)((()=>[(0,l.bF)(u,null,{default:(0,l.k6)((()=>[n[4]||(n[4]=(0,l.Lk)("img",{src:U,class:"top-image"},null,-1)),n[5]||(n[5]=(0,l.Lk)("h1",null,"产品中心",-1)),n[6]||(n[6]=(0,l.Lk)("p",null,null,-1)),(0,l.bF)(o,{class:"product-section",style:{"margin-top":"20px"}},{default:(0,l.k6)((()=>[(0,l.bF)(r,{gutter:20},{default:(0,l.k6)((()=>[(0,l.bF)(a,{span:4,style:{height:"200px",display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","margin-bottom":"10px",padding:"10px"}},{default:(0,l.k6)((()=>n[0]||(n[0]=[(0,l.Lk)("h2",null,"小件喷涂",-1),(0,l.Lk)("hr",{style:{margin:"0 0",border:"1px solid #ccc",width:"80%"}},null,-1)]))),_:1}),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.products.slice(0,4),(e=>((0,l.uX)(),(0,l.Wv)(a,{span:5,style:{height:"200px",padding:"10px"},key:e.id},{default:(0,l.k6)((()=>[(0,l.Lk)("img",{src:e.url,alt:e.kind,class:"product-image"},null,8,B),(0,l.Lk)("p",{style:{"font-size":"20px"},innerHTML:e.kind},null,8,N)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,l.bF)(o,{class:"product-section",style:{"margin-top":"20px"}},{default:(0,l.k6)((()=>[(0,l.bF)(r,{gutter:20},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.products.slice(4,8),(e=>((0,l.uX)(),(0,l.Wv)(a,{span:5,style:{height:"200px",padding:"10px"},key:e.id},{default:(0,l.k6)((()=>[(0,l.Lk)("img",{src:e.url,alt:e.kind,class:"product-image"},null,8,R),(0,l.Lk)("p",{style:{"font-size":"20px"},innerHTML:e.kind},null,8,V)])),_:2},1024)))),128)),(0,l.bF)(a,{span:4,style:{height:"200px",display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","margin-bottom":"10px",padding:"10px"}},{default:(0,l.k6)((()=>n[1]||(n[1]=[(0,l.Lk)("h2",null,"大件及异形件喷涂",-1),(0,l.Lk)("hr",{style:{margin:"0 0",border:"1px solid #ccc",width:"80%"}},null,-1)]))),_:1})])),_:1})])),_:1}),(0,l.bF)(o,{class:"product-section",style:{"margin-top":"20px"}},{default:(0,l.k6)((()=>[(0,l.bF)(r,{gutter:20},{default:(0,l.k6)((()=>[(0,l.bF)(a,{span:4,style:{height:"200px",display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","margin-bottom":"10px",padding:"10px"}},{default:(0,l.k6)((()=>n[2]||(n[2]=[(0,l.Lk)("h2",null,"箱体类喷涂件",-1),(0,l.Lk)("hr",{style:{margin:"0 0",border:"1px solid #ccc",width:"80%"}},null,-1)]))),_:1}),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.products.slice(8,12),(e=>((0,l.uX)(),(0,l.Wv)(a,{span:5,style:{height:"200px",padding:"10px"},key:e.id},{default:(0,l.k6)((()=>[(0,l.Lk)("img",{src:e.url,alt:e.kind,class:"product-image"},null,8,Z),(0,l.Lk)("p",{style:{"font-size":"20px"},innerHTML:e.kind},null,8,ee)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,l.bF)(o,{class:"product-section",style:{"margin-top":"20px"}},{default:(0,l.k6)((()=>[(0,l.bF)(r,{gutter:20},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.products.slice(12,16),(e=>((0,l.uX)(),(0,l.Wv)(a,{span:5,style:{height:"200px",padding:"10px"},key:e.id},{default:(0,l.k6)((()=>[(0,l.Lk)("img",{src:e.url,alt:e.kind,class:"product-image"},null,8,ne),(0,l.Lk)("p",{style:{"font-size":"20px"},innerHTML:e.kind},null,8,te)])),_:2},1024)))),128)),(0,l.bF)(a,{span:4,style:{height:"200px",display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","margin-bottom":"10px",padding:"10px"}},{default:(0,l.k6)((()=>n[3]||(n[3]=[(0,l.Lk)("h2",null,"平板类喷涂件",-1),(0,l.Lk)("hr",{style:{margin:"0 0",border:"1px solid #ccc",width:"80%"}},null,-1)]))),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])}var le={name:"ProductsPage",data(){return{longDescription:"这里是公司简介的详细内容。可以在这里放置较长的文字，描述公司的历史、愿景、使命等信息。可以根据需要进行格式化和排版。",products:[{id:1,kind:"纺机零件喷涂件",url:t(5486)},{id:2,kind:"通讯模组外壳喷涂件",url:t(3317)},{id:3,kind:"电机端盖喷涂件",url:t(1052)},{id:4,kind:"裂变器外壳喷涂件",url:t(8451)},{id:5,kind:"设备框架喷涂件",url:t(4701)},{id:6,kind:"设备框架喷涂件",url:t(4761)},{id:7,kind:"设备部件喷涂件",url:t(8540)},{id:8,kind:"设备部件喷涂件",url:t(288)},{id:9,kind:"新能源电池外壳喷涂件",url:t(9776)},{id:10,kind:"充电桩外壳喷涂件",url:t(3595)},{id:11,kind:"电器柜外壳喷涂件",url:t(3090)},{id:12,kind:"电脑及服务器外壳喷涂件",url:t(4813)},{id:13,kind:"电梯楼层门板喷涂件",url:t(6847)},{id:14,kind:"设备侧板喷涂件",url:t(8036)},{id:15,kind:"设备盖板喷涂件",url:t(5517)},{id:16,kind:"新能源电池外壳盖板喷涂件",url:t(6370)}]}}};const se=(0,a.A)(le,[["render",ie]]);var ce=se,ae=t.p+"img/2.c3c1a4fd.jpg",re=t.p+"img/1.d252769e.png",oe=t.p+"img/2.2f94bb6b.png",ue=t.p+"img/3-1.10ea0a76.png",pe=t.p+"img/3-2.321347bb.png",de=t.p+"img/3-3.2678f961.png",ge=t.p+"img/3-4.d1e98589.png",me=t.p+"img/3-5.d287127c.png",fe=t.p+"img/3-6.b58d0e3f.png",ke=t.p+"img/3-7.54145ac3.png",be=t.p+"img/3-8.0eac9ca7.png",xe=t.p+"img/3-9.d99affc3.png",he=t.p+"img/3-10.fe49b7bf.png",Le=t.p+"img/3-11.6c7f64e6.png",ye=t.p+"img/3-12.8bd7bf8d.png",Fe=t.p+"img/3-13.9176ab9c.png",ve=t.p+"img/3-14.5c17a99f.png";const _e={id:"certificates"};function we(e,n,t,i,s,c){const a=(0,l.g2)("el-col"),r=(0,l.g2)("el-row"),o=(0,l.g2)("el-main"),u=(0,l.g2)("el-container");return(0,l.uX)(),(0,l.CE)("div",_e,[(0,l.bF)(u,null,{default:(0,l.k6)((()=>[(0,l.bF)(o,null,{default:(0,l.k6)((()=>[n[4]||(n[4]=(0,l.Lk)("img",{src:ae,class:"top-image"},null,-1)),n[5]||(n[5]=(0,l.Lk)("h1",null,"技术认证",-1)),(0,l.bF)(r,{gutter:20},{default:(0,l.k6)((()=>[(0,l.bF)(a,{span:12,style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},{default:(0,l.k6)((()=>n[0]||(n[0]=[(0,l.Lk)("img",{src:re,style:{width:"90%",height:"auto","object-fit":"cover",border:"10px solid #ccc","border-radius":"5px"}},null,-1),(0,l.Lk)("p",null,"图片说明",-1)]))),_:1}),(0,l.bF)(a,{span:12,style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},{default:(0,l.k6)((()=>n[1]||(n[1]=[(0,l.Lk)("img",{src:oe,style:{width:"90%",height:"auto","object-fit":"cover",border:"10px solid #ccc","border-radius":"5px"}},null,-1),(0,l.Lk)("p",null,"图片说明",-1)]))),_:1}),(0,l.bF)(a,{span:24},{default:(0,l.k6)((()=>n[2]||(n[2]=[(0,l.Lk)("h3",null,"目前共有实用新型专利15项",-1)]))),_:1}),(0,l.bF)(a,{span:24},{default:(0,l.k6)((()=>n[3]||(n[3]=[(0,l.Lk)("img",{src:ue,class:"cert-image"},null,-1),(0,l.Lk)("img",{src:pe,class:"cert-image"},null,-1),(0,l.Lk)("img",{src:de,class:"cert-image"},null,-1),(0,l.Lk)("img",{src:ge,class:"cert-image"},null,-1),(0,l.Lk)("img",{src:me,class:"cert-image"},null,-1),(0,l.Lk)("img",{src:fe,class:"cert-image"},null,-1),(0,l.Lk)("img",{src:ke,class:"cert-image"},null,-1),(0,l.Lk)("img",{src:be,class:"cert-image"},null,-1),(0,l.Lk)("img",{src:xe,class:"cert-image"},null,-1),(0,l.Lk)("img",{src:he,class:"cert-image"},null,-1),(0,l.eW)(),(0,l.Lk)("img",{src:ue,class:"cert-image"},null,-1),(0,l.Lk)("img",{src:Le,class:"cert-image"},null,-1),(0,l.Lk)("img",{src:ye,class:"cert-image"},null,-1),(0,l.Lk)("img",{src:Fe,class:"cert-image"},null,-1),(0,l.Lk)("img",{src:ve,class:"cert-image"},null,-1)]))),_:1})])),_:1})])),_:1})])),_:1})])}var Me={name:"CertificatesPage"};const Te=(0,a.A)(Me,[["render",we]]);var Ce=Te,He=t.p+"img/3.ae536193.jpg",Xe=t.p+"img/company.c1a53195.jpg",je=t.p+"img/contact.62a3d155.jpg",We=t.p+"img/puzzle.32dc6f33.jpg";const ze={id:"informations"},Ee=["innerHTML"],Ie=["innerHTML"],qe=["innerHTML"];function Ke(e,n,t,i,s,c){const a=(0,l.g2)("el-col"),r=(0,l.g2)("el-row"),o=(0,l.g2)("el-card"),u=(0,l.g2)("el-main"),p=(0,l.g2)("el-container");return(0,l.uX)(),(0,l.CE)("div",ze,[(0,l.bF)(p,null,{default:(0,l.k6)((()=>[(0,l.bF)(u,null,{default:(0,l.k6)((()=>[n[9]||(n[9]=(0,l.Lk)("img",{src:He,class:"top-image"},null,-1)),(0,l.bF)(o,{class:"product-section",style:{"margin-top":"20px"}},{default:(0,l.k6)((()=>[(0,l.bF)(r,{gutter:20},{default:(0,l.k6)((()=>[(0,l.bF)(a,{span:12,style:{display:"flex","flex-direction":"column","align-items":"flex-start","padding-left":"20px"}},{default:(0,l.k6)((()=>[n[0]||(n[0]=(0,l.Lk)("div",{class:"sectiontitle"},"公司简介",-1)),n[1]||(n[1]=(0,l.Lk)("hr",{style:{margin:"0",border:"1px solid #ccc",width:"80%"}},null,-1)),(0,l.Lk)("p",{class:"commondesc",style:{"margin-bottom":"20px"},innerHTML:s.companyDescription},null,8,Ee)])),_:1}),(0,l.bF)(a,{span:12,class:"image-col"},{default:(0,l.k6)((()=>n[2]||(n[2]=[(0,l.Lk)("img",{src:Xe,class:"common-image"},null,-1)]))),_:1}),(0,l.bF)(a,{span:12,class:"image-col"},{default:(0,l.k6)((()=>n[3]||(n[3]=[(0,l.Lk)("img",{src:je,class:"common-image"},null,-1)]))),_:1}),(0,l.bF)(a,{span:12,style:{display:"flex","flex-direction":"column","align-items":"flex-start","padding-left":"20px","margin-top":"20px"}},{default:(0,l.k6)((()=>[n[4]||(n[4]=(0,l.Lk)("div",{class:"sectiontitle"},"联系方式",-1)),n[5]||(n[5]=(0,l.Lk)("hr",{style:{margin:"0",border:"1px solid #ccc",width:"80%"}},null,-1)),(0,l.Lk)("p",{class:"commondesc",style:{"margin-bottom":"20px"},innerHTML:s.contactDescription},null,8,Ie)])),_:1}),(0,l.bF)(a,{span:12,style:{display:"flex","flex-direction":"column","align-items":"flex-start","padding-left":"20px","margin-top":"20px"}},{default:(0,l.k6)((()=>[n[6]||(n[6]=(0,l.Lk)("div",{class:"sectiontitle"},"组织架构",-1)),n[7]||(n[7]=(0,l.Lk)("hr",{style:{margin:"0",border:"1px solid #ccc",width:"80%"}},null,-1)),(0,l.Lk)("p",{class:"commondesc",innerHTML:s.organizationDescription},null,8,qe)])),_:1}),(0,l.bF)(a,{span:12,class:"image-col"},{default:(0,l.k6)((()=>n[8]||(n[8]=[(0,l.Lk)("img",{src:We,class:"common-image"},null,-1)]))),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])}var Oe={name:"InformationsPage",data(){return{companyDescription:'\n        <p>苏州派尔福金属科技公司成立于2005年10月，位于风景秀丽、交通便利的苏州高新区浒关镇西金芝路15号，西临大阳山国家森林公园。</p>\n        <p>公司厂区占地面积为10264.50m2，专业从事喷涂加工及表面处理的产品供应。</p>\n        <p>公司一贯秉承"以品质为核心，以客户满意为目标"的服务理念，为客户提供有差异化的一站式服务。</p>\n      ',contactDescription:"\n        <p>联 系 人： 孙先生\n        <p>联系电话：+86 189-1540-0054\n        <p>联系邮箱：sun_dajun9@163.com\n        <p>地址：苏州高新区浒墅关镇西金芝路15号\n      ",organizationDescription:"\n        <ul>\n          <li>总经理\n            <ul>\n              <li>└制造副总\n                <ul>\n                  <li>└工艺技术部 (4名员工)\n                    <ul>\n                      <li>负责设备管理和工艺流程设计优化</li>\n                    </ul>\n                  </li>\n                  <li>└生产管理部 (36名员工)\n                    <ul>\n                      <li>负责计划运营和生产</li>\n                    </ul>\n                  </li>\n                  <li>└品保部 (3名员工)\n                    <ul>\n                      <li>负责出入库和制程品管</li>\n                    </ul>\n                  </li>\n                </ul>\n              </li>\n              <li>└业务副总 (3名员工)\n                <ul>\n                  <li>负责市场拓展与客户服务</li>\n                </ul>\n              </li>\n              <li>└后勤部 (2名员工)\n                <ul>\n                  <li>负责人事行政和采购财务</li>\n                </ul>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      "}}};const Pe=(0,a.A)(Oe,[["render",Ke]]);var Ae=Pe;const De=[{path:"/",component:F,redirect:"/home",children:[{path:"home",component:J},{path:"products",component:ce},{path:"certificates",component:Ce},{path:"informations",component:Ae}]}],Se=(0,u.aE)({history:(0,u.LA)("/"),routes:De});var Ge=Se,Qe=t(5555),$e=(t(4188),t(8950)),Je=t(4996),Ue=t(2353),Ye=t(292);$e.Yv.add(Ue.GHC,Ue.OKC,Ue.uUT,Ue.KKr,Ue.WJz,Je.oSu,Ue.GF6);const Be=(0,i.Ef)(o);Be.component("font-awesome-icon",Ye.gc),Be.use(Qe.A),Be.use(Ge),Be.mount("#app")},4919:function(e,n,t){e.exports=t.p+"img/slide1.209c72f1.png"},6444:function(e,n,t){e.exports=t.p+"img/slide2.0cbb35db.png"},9333:function(e,n,t){e.exports=t.p+"img/slide3.29af990c.png"},5034:function(e,n,t){e.exports=t.p+"img/slide4.0a8d7a5b.png"},8381:function(e,n,t){e.exports=t.p+"img/equipment1.2643b117.png"},7142:function(e,n,t){e.exports=t.p+"img/equipment2.948bc5f3.png"},6159:function(e,n,t){e.exports=t.p+"img/equipment3.ab1893d1.png"},9664:function(e,n,t){e.exports=t.p+"img/equipment4.132e8a56.png"},5486:function(e,n,t){e.exports=t.p+"img/1-1.de0fbc78.png"},3317:function(e,n,t){e.exports=t.p+"img/1-2.5b0c077d.png"},1052:function(e,n,t){e.exports=t.p+"img/1-3.b50cdffd.png"},8451:function(e,n,t){e.exports=t.p+"img/1-4.4d045b8c.png"},4701:function(e,n,t){e.exports=t.p+"img/2-1.7eec773d.png"},4761:function(e,n,t){e.exports=t.p+"img/2-2.ff6beb96.png"},8540:function(e,n,t){e.exports=t.p+"img/2-3.ee3dd5f0.png"},288:function(e,n,t){e.exports=t.p+"img/2-4.1c1427c5.png"},9776:function(e,n,t){e.exports=t.p+"img/3-1.2092876a.png"},3595:function(e,n,t){e.exports=t.p+"img/3-2.e217eb5a.png"},3090:function(e,n,t){e.exports=t.p+"img/3-3.4e490e61.png"},4813:function(e,n,t){e.exports=t.p+"img/3-4.e80c5f38.png"},6847:function(e,n,t){e.exports=t.p+"img/4-1.25dee07c.png"},8036:function(e,n,t){e.exports=t.p+"img/4-2.326f4bc2.png"},5517:function(e,n,t){e.exports=t.p+"img/4-3.56c66108.png"},6370:function(e,n,t){e.exports=t.p+"img/4-4.858c3867.png"}},n={};function t(i){var l=n[i];if(void 0!==l)return l.exports;var s=n[i]={exports:{}};return e[i].call(s.exports,s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(n,i,l,s){if(!i){var c=1/0;for(u=0;u<e.length;u++){i=e[u][0],l=e[u][1],s=e[u][2];for(var a=!0,r=0;r<i.length;r++)(!1&s||c>=s)&&Object.keys(t.O).every((function(e){return t.O[e](i[r])}))?i.splice(r--,1):(a=!1,s<c&&(c=s));if(a){e.splice(u--,1);var o=l();void 0!==o&&(n=o)}}return n}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[i,l,s]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/"}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,i){var l,s,c=i[0],a=i[1],r=i[2],o=0;if(c.some((function(n){return 0!==e[n]}))){for(l in a)t.o(a,l)&&(t.m[l]=a[l]);if(r)var u=r(t)}for(n&&n(i);o<c.length;o++)s=c[o],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(u)},i=self["webpackChunkmywebsite"]=self["webpackChunkmywebsite"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[504],(function(){return t(738)}));i=t.O(i)})();
//# sourceMappingURL=app.99d629a8.js.map