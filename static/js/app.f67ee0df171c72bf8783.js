webpackJsonp([0],[,function(t,e,a){var s=a(0)(a(6),a(11),null,null,null);t.exports=s.exports},function(t,e,a){var s=a(0)(a(7),a(12),null,null,null);t.exports=s.exports},function(t,e,a){var s=a(0)(a(8),a(10),null,null,null);t.exports=s.exports},,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{projet:{},projets:[],modalContent:{},updatingProjet:{},baseApiUrl:"https://monitor-client-bda09.firebaseio.com/projets",alerts:[],loadingDel:!1,loadingNew:!1,loadingMod:!1,loadingGet:!0}},created:function(){this.getProjets(),console.log(this.loadingDel),console.log($("#deleteButton"))},methods:{newProject:function(){var t=this;if(this.projet.titre&&this.projet.client){this.loadingNew=!0;var e={titre:this.projet.titre,client:this.projet.client};this.$http.post(this.baseApiUrl+".json",e).then(function(e){t.makeAlert("alert-success","Votre projet a bien été créé"),t.getProjets()},function(e){500==e.status&&t.makeAlert("alert-danger","Erreur interne lors de la création dans la base de donnée")})}else console.log("Pas ok");$("#addproject").modal("hide"),this.loadingNew=!1},makeAlert:function(t,e){var a={type:t,msg:e};this.alerts.push(a),console.log(this.alerts)},updateModal:function(t,e){this.modalContent=t,this.modalContent.id=e},deleteProjet:function(t){var e=this;this.loadingDel=!0,this.$http.delete(this.baseApiUrl+"/"+this.modalContent.id+".json").then(function(t){e.makeAlert("alert-danger","Votre projet a été supprimé"),e.getProjets()},function(t){500==t.status&&e.makeAlert("alert-danger","Erreur interne lors de la suppression dans la base de donnée")}),$("#Edit").modal("hide"),this.loadingDel=!1},getProjets:function(){var t=this;this.$http.get(this.baseApiUrl+".json").then(function(e){t.projets=e.body,console.log(e)},function(e){404==e.status&&t.makeAlert("alert-danger","Erreur 404, impossible de se connecter a la base de donnée"),500==e.status&&t.makeAlert("alert-danger","Erreur interne lors de la recuperation des projets dans la base de donnée")}),this.loadingGet=!1},updateProjet:function(){var t=this;this.loadingMod=!0,this.$http.put(this.baseApiUrl+"/"+this.modalContent.id+".json",{titre:this.updatingProjet.titre,client:this.updatingProjet.client}).then(function(e){t.makeAlert("alert-success","Votre projet a bien été modifié"),t.projets[t.modalContent.id]=e.body},function(e){500==e.status&&t.makeAlert("alert-danger","Erreur interne lors de la modification dans la base de donnée")}),this.loadingMod=!1,$("#Edit").modal("hide"),this.updatingProjet={}},edittask:function(t,e,a){var s=this;this.$http.put(this.baseApiUrl+"/"+e+"/taches/"+a+".json",{nom:t.nom,etat:"terminé"}).then(function(t){s.getProjets()},function(t){console.log("error")})},deletetask:function(t,e){var a=this;this.$http.delete(this.baseApiUrl+"/"+e+"/taches/"+t+".json").then(function(t){a.getProjets()},function(t){})},addtask:function(t,e){var a=this,s={nom:t,etat:"terminé"};this.$http.post(this.baseApiUrl+"/"+e+"/taches.json",s).then(function(t){a.getProjets()},function(t){console.log("error")})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["type","msg"]}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["projet","index"],data:function(){return{show:!1,newtask:"",AllTasks:[]}},created:function(){this.getTaches()},methods:{edit:function(t){this.show=t},updateModal:function(){this.$emit("updateModal",this.projet,this.index)},add:function(){this.$emit("addtask",this.newtask,this.index)},edittask:function(t){this.$emit("edittask",this.show,this.index,t),this.show=!1},deletetask:function(t){this.$emit("deletetask",t,this.index),this.show=!1},getTaches:function(){var t=this,e=this;this.$http.get("https://monitor-client-bda09.firebaseio.com/projets/"+this.index+"/taches.json").then(function(t){jQuery.each(t.body,function(t,a){console.log(t),console.log(a),e.AllTasks.push(a),console.log(e.AllTasks)})},function(e){404==e.status&&t.makeAlert("alert-danger","Erreur 404, impossible de se connecter a la base de donnée"),500==e.status&&t.makeAlert("alert-danger","Erreur interne lors de la recuperation des projets dans la base de donnée")})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(5),n=a(1),i=a.n(n),o=a(4),r=a(3),l=a.n(r),d=a(2),c=a.n(d);s.a.use(o.a),s.a.component("app-card",l.a),s.a.component("alert",c.a),new s.a({el:"#app",render:function(t){return t(i.a)}})},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-4 mb-5"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-block"},[a("h4",{staticClass:"card-title"},[t._v(" "+t._s(t.projet.titre)+" ")]),t._v(" "),a("h6",{staticClass:"card-subtitle text-muted"},[t._v(" "+t._s(t.projet.client)+" ")]),t._v(" "),a("div",{staticClass:"input-group mt-4 mb-3"},[a("span",{staticClass:"input-group-btn"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.add}},[t._v("+")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newtask,expression:"newtask"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nouvelle Tâche"},domProps:{value:t.newtask},on:{input:function(e){e.target.composing||(t.newtask=e.target.value)}}})]),t._v(" "),t._l(t.projet.taches,function(e,s){return a("div",{staticClass:"form-check "},[e==t.show?a("span",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.nom,expression:"tache.nom"}],domProps:{value:e.nom},on:{input:function(t){t.target.composing||(e.nom=t.target.value)}}}),t._v(" "),a("button",{staticClass:"fa fa-check",attrs:{type:"button"},on:{click:function(e){t.edittask(s)}}}),t._v(" "),a("button",{staticClass:"fa fa-times",attrs:{type:"button"},on:{click:function(e){t.deletetask(s)}}})]):a("span",[t._v(" \n              "+t._s(e.nom)),a("span",{staticClass:"badge badge-success"},[t._v(" Actif ")]),t._v(" "),a("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(a){t.edit(e)}}},[a("i",{staticClass:"fa fa-pencil"})])]),t._v(" "),t._m(0,!0)])})],2),t._v(" "),a("a",{staticClass:"card-link",attrs:{href:"#"}},[t._v(" Toutes les tâches... ")])]),t._v(" "),a("div",{staticClass:"card-footer text-center"},[a("a",{staticClass:"card-link",attrs:{href:"#","data-toggle":"modal","data-target":"#Edit"},on:{click:t.updateModal}},[t._v("Editer")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("small",[a("p",{staticClass:"text-muted"},[t._v("\n                  Annotation \n                  "),a("i",{staticClass:"fa fa-times"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("link",{attrs:{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css",integrity:"sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ",crossorigin:"anonymous"}}),t._v(" "),a("link",{attrs:{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}}),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"jumbotron"},[t._l(t.alerts,function(t){return a("alert",{attrs:{type:t.type,msg:t.msg}})}),t._v(" "),a("div",{staticClass:"row"},[t.loadingGet?a("div",{staticClass:"col-sm-3 offset-sm-5 mt-5"},[a("i",{staticClass:"fa fa-spinner fa-spin fa-5x"})]):t._e(),t._v(" "),t._l(t.projets,function(e,s){return a("app-card",{attrs:{projet:e,index:s},on:{updateModal:t.updateModal,addtask:t.addtask,edittask:t.edittask,deletetask:t.deletetask}})})],2)],2)]),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"Edit",tabindex:"-1",role:"dialog","aria-labelledby":"Edit","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputTitre"}},[t._v("Titre")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.updatingProjet.titre,expression:"updatingProjet.titre"}],staticClass:"form-control",attrs:{id:"inputTitre",type:"text",placeholder:t.modalContent.titre},domProps:{value:t.updatingProjet.titre},on:{input:function(e){e.target.composing||(t.updatingProjet.titre=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputClient"}},[t._v("Client")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.updatingProjet.client,expression:"updatingProjet.client"}],staticClass:"form-control",attrs:{id:"inputClient",type:"text",placeholder:t.modalContent.client},domProps:{value:t.updatingProjet.client},on:{input:function(e){e.target.composing||(t.updatingProjet.client=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Annuler")]),t._v(" "),t.loadingDel?a("button",{staticClass:"btn btn-danger",attrs:{type:"button",id:"deleteButton"}},[a("i",{staticClass:"fa fa-circle-o-notch fa-spin"})]):a("button",{staticClass:"btn btn-danger",attrs:{type:"button",id:"deleteButton"},on:{click:function(e){t.deleteProjet(t.modalContent)}}},[t._v("Supprimer")]),t._v(" "),t.loadingMod?a("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[a("i",{staticClass:"fa fa-circle-o-notch fa-spin"})]):a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.updateProjet()}}},[t._v("Editer")])])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"addproject",tabindex:"-1",role:"dialog","aria-labelledby":"addproject","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputTitre"}},[t._v("Titre")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.projet.titre,expression:"projet.titre"}],staticClass:"form-control",attrs:{id:"inputTitre",type:"text",placeholder:"Titre"},domProps:{value:t.projet.titre},on:{input:function(e){e.target.composing||(t.projet.titre=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputClient"}},[t._v("Client")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.projet.client,expression:"projet.client"}],staticClass:"form-control",attrs:{id:"inputClient",type:"text",placeholder:"Client"},domProps:{value:t.projet.client},on:{input:function(e){e.target.composing||(t.projet.client=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Annuler")]),t._v(" "),t.loadingNew?a("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[a("i",{staticClass:"fa fa-circle-o-notch fa-spin"})]):a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.newProject}},[t._v("Ajouter")])])])])]),t._v(" "),t._m(4)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-toggleable-xl navbar-inverse bg-inverse"},[a("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#nav-content","aria-controls":"nav-content","aria-expanded":"false","aria-label":"Toggle navigation"}}),t._v(" "),a("a",{staticClass:"navbar-brand",attrs:{href:""}},[t._v("MONITOR")]),t._v(" "),a("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"nav-content"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"","data-toggle":"modal","data-target":"#signin"}},[t._v("Se connecter")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"","data-toggle":"modal","data-target":"#addproject"}},[t._v("Nouveau projet")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"Annotation",tabindex:"-1",role:"dialog","aria-labelledby":"Edit","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header text-center"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),a("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[t._v("Editer une tâche")])]),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputNom"}},[t._v("Titre")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{id:"inputNom",type:"text",placeholder:"Nom de tâche"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputAnnot"}},[t._v("Client")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{id:"inputAnnot",type:"text",placeholder:"Ajouter/Modifier l'annotation"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputEtat"}},[t._v("Etat de la tâche")]),t._v(" "),a("select",{staticClass:"form-control",attrs:{id:"inputEtat"}},[a("option",{attrs:{value:" "}},[t._v("Etat de la tâche")]),t._v(" "),a("option",[t._v(" Actif ")]),t._v(" "),a("option",[t._v(" En recette ")]),t._v(" "),a("option",[t._v(" Terminé ")])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Annuler")]),t._v(" "),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[t._v("Supprimer")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Ajouter")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header text-center"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),a("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[t._v("Editer le projet")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header text-center"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),a("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[t._v("Ajouter un nouveau projet")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"signin",tabindex:"-1",role:"dialog","aria-labelledby":"#signin","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),a("h4",{staticClass:"form-signin-heading"},[t._v("Veuillez vous connecter")])]),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Identifiant")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Identifiant",required:"",autofocus:""}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Mot de passe")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Mot de passe",required:""}})]),t._v(" "),a("div",{staticClass:"checkbox"},[a("label",[a("input",{attrs:{type:"checkbox",value:"remember-me"}}),t._v(" Se souvenir de moi\n          ")])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("Connexion")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"alert alert-dismissible fade show",class:[t.type],attrs:{id:"alert","data-dismiss":"alert",role:"alert"}},[t._v("\n    "+t._s(t.msg)+"\n  ")])},staticRenderFns:[]}},,function(t,e){}],[9]);
//# sourceMappingURL=app.f67ee0df171c72bf8783.js.map