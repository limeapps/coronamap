google.maps.__gjsload__('stats', function(_){var E_=function(){this.b=new _.Dl},F_=function(a){var b=0,c=0;a.b.forEach(function(a){b+=a.Ho;c+=a.eo});return c?b/c:0},G_=function(a,b,c){var d=[];_.Ib(a,function(a,c){d.push(c+b+a)});return d.join(c)},H_=function(a){var b={};_.Ib(a,function(a,d){b[(0,window.encodeURIComponent)(d)]=(0,window.encodeURIComponent)(a).replace(/%7C/g,"|")});return G_(b,":",",")},I_=function(a,b,c){this.l=b;this.f=a+"/maps/gen_204";this.j=c},J_=function(a,b,c,d){var e={};e.host=window.document.location&&window.document.location.host||
window.location.host;e.v=a;e.r=Math.round(1/b);c&&(e.client=c);d&&(e.key=d);return e},K_=function(a,b,c,d,e){this.m=a;this.C=b;this.l=c;this.f=d;this.j=e;this.b=new _.Dl;this.B=_.Na()},M_=function(a,b,c,d,e){var f=_.O(_.R,23,500);var g=_.O(_.R,22,2);this.D=a;this.G=b;this.F=f;this.l=g;this.C=c;this.m=d;this.B=e;this.f=new _.Dl;this.b=0;this.j=_.Na();L_(this)},L_=function(a){window.setTimeout(function(){N_(a);L_(a)},Math.min(a.F*Math.pow(a.l,a.b),2147483647))},O_=function(a,b,c){a.f.set(b,c)},N_=function(a){var b=
J_(a.G,a.C,a.m,a.B);b.t=a.b+"-"+(_.Na()-a.j);a.f.forEach(function(a,d){a=a();0<a&&(b[d]=Number(a.toFixed(2))+(_.Fm()?"-if":""))});a.D.b({ev:"api_snap"},b);++a.b},P_=function(a,b,c,d,e){this.B=a;this.C=b;this.m=c;this.j=d;this.l=e;this.f={};this.b=[]},Q_=function(a,b,c,d){this.j=a;_.z.bind(this.j,"set_at",this,this.l);_.z.bind(this.j,"insert_at",this,this.l);this.B=b;this.C=c;this.m=d;this.f=0;this.b={};this.l()},R_=function(){this.j=_.P(_.R,6);this.C=_.uf();this.b=new I_(_.sg[35]?_.P(_.vf(_.R),11):
_.rw,_.jj,window.document);new Q_(_.Xi,(0,_.p)(this.b.b,this.b),_.Af,!!this.j);var a=_.P(new _.of(_.R.data[3]),1);this.D=a.split(".")[1]||a;this.G={};this.B={};this.m={};this.F={};this.fa=_.O(_.R,0,1);_.ij&&(this.l=new M_(this.b,this.D,this.fa,this.j,this.C))};E_.prototype.f=function(a,b,c){this.b.set(_.Bb(a),{Ho:b,eo:c})};
I_.prototype.b=function(a,b){b=b||{};var c=_.bk().toString(36);b.src="apiv3";b.token=this.l;b.ts=c.substr(c.length-6);a.cad=H_(b);a=G_(a,"=","&");a=this.f+"?target=api&"+a;this.j.createElement("img").src=a;(b=_.Rb.__gm_captureCSI)&&b(a)};
K_.prototype.D=function(a,b){b=_.m(b)?b:1;this.b.isEmpty()&&window.setTimeout((0,_.p)(function(){var a=J_(this.C,this.l,this.f,this.j);a.t=_.Na()-this.B;var b=this.b;_.El(b);for(var e={},f=0;f<b.b.length;f++){var g=b.b[f];e[g]=b.H[g]}_.Jz(a,e);this.b.clear();this.m.b({ev:"api_maprft"},a)},this),500);b=this.b.get(a,0)+b;this.b.set(a,b)};P_.prototype.D=function(a){this.f[a]||(this.f[a]=!0,this.b.push(a),2>this.b.length&&_.Tz(this,this.G,500))};
P_.prototype.G=function(){for(var a=J_(this.C,this.m,this.j,this.l),b=0,c;c=this.b[b];++b)a[c]="1";a.hybrid=+_.im();this.b.length=0;this.B.b({ev:"api_mapft"},a)};Q_.prototype.l=function(){for(var a;a=this.j.removeAt(0);){var b=a.In;a=a.timestamp-this.C;++this.f;this.b[b]||(this.b[b]=0);++this.b[b];if(20<=this.f&&!(this.f%5)){var c={};c.s=b;c.sr=this.b[b];c.tr=this.f;c.te=a;c.hc=this.m?"1":"0";this.B({ev:"api_services"},c)}}};R_.prototype.T=function(a){a=_.Bb(a);this.G[a]||(this.G[a]=new P_(this.b,this.D,this.fa,this.j,this.C));return this.G[a]};R_.prototype.S=function(a){a=_.Bb(a);this.B[a]||(this.B[a]=new K_(this.b,this.D,_.O(_.R,0,1),this.j,this.C));return this.B[a]};R_.prototype.f=function(a){if(this.l){this.m[a]||(this.m[a]=new _.XA,O_(this.l,a,function(){return b.Xa()}));var b=this.m[a];return b}};
R_.prototype.N=function(a){if(this.l){this.F[a]||(this.F[a]=new E_,O_(this.l,a,function(){return F_(b)}));var b=this.F[a];return b}};var S_=new R_;_.Tc("stats",S_);});

/*
     FILE ARCHIVED ON 15:54:56 Sep 12, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:43:27 May 26, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 263.18 (3)
  esindex: 0.007
  captures_list: 302.011
  CDXLines.iter: 11.518 (3)
  PetaboxLoader3.datanode: 284.064 (5)
  exclusion.robots: 0.203
  exclusion.robots.policy: 0.191
  RedisCDXSource: 8.596
  PetaboxLoader3.resolve: 633.599 (2)
  load_resource: 722.394
*/