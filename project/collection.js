User = new Meteor.Collection("User");//global variable

post=new Meteor.Collection("post");

Mess=new Meteor.Collection("Message");

if (Meteor.isClient) {

Template.container.created=function(){
Session.setDefault("currentUrl", {login: "active", page: "", reg: "",sendMail:"",setting:"",personal:""});


var urlRouter = Backbone.Router.extend({
  initialize:function(){
    this.route(/^page/,"page");
    this.route("","login");
    this.route("reg","reg");
    this.route(/^sendMail/,"sendMail");
    this.route(/^setting/,"setting");
    this.route(/^personal/,"personal");
},
  login: function () {
    Session.set("currentUrl", {login: "active", page: "", reg: "",sendMail:"",setting:"",personal:""});
  },
  page: function () {
   
    Session.set("currentUrl", {login: "", page: "active", reg: "",sendMail:"",setting:"",personal:""});
  },
  reg: function () {
    
    Session.set("currentUrl", {login: "", page: "", reg: "active",sendMail:"",setting:"",personal:""});
  },
  sendMail: function () {
    
    Session.set("currentUrl", {login: "", page: "", reg: "",sendMail:"active",setting:"",personal:""});
  },
  setting: function () {
    
    Session.set("currentUrl", {login: "", page: "", reg: "",sendMail:"",setting:"active",personal:""});
  },
  personal: function () {
    
    Session.set("currentUrl", {login: "", page: "", reg: "",sendMail:"",setting:"",personal:"active"});
  },
  
  
  redirect: function (url) {
    this.navigate(url, true);
  }
  
});

Router = new urlRouter;

Meteor.startup(function () {
  Backbone.history.start({pushState: true});
});
}

Template.container.currentUrl = function () {
  return Session.get("currentUrl");
};
}
