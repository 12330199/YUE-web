if(Meteor.isClient) {
 Template.setting.events({
    'click #yy':function () {

       var url=window.location.href;
       var yy=url.indexOf('~')
       var from1=url.substring(yy+1,url.length);
       mail=from1;
       var url1=document.getElementById("touxiangurl").value;
       var name1=document.getElementById("nicheng").value;
       var self1=document.getElementById("geqian").value;
       
       var id=Mess.find().count()+1;
       Mess.insert({Mail:mail,image:url1,name:name1,self:self1,ID:id});
       
       
       Session.set("data",mail);
       Session.set("currentUrl", {login: "", page: "active", reg: "",sendMail:"",setting:"",personal:""});
         Router.redirect("/page~"+mail); 

    }
  });

  Template.setting.events({
    'click #nn':function () {
       var url=window.location.href;
       var yy=url.indexOf('~')
       var from1=url.substring(yy+1,url.length);
       mail=from1;
       
       Session.set("data",mail);
       Session.set("currentUrl", {login: "", page: "active", reg: "",sendMail:"",setting:"",personal:""});
       Router.redirect("/page~"+mail); 

    }
  });

   Template.setting.helpers({
	'message': function() {
                var url=window.location.href;
      		 var yy=url.indexOf('~')
       	         var from1=url.substring(yy+1,url.length);
      		 mail=from1;
      		 Session.set("data",mail);
                 

		return Mess.find({Mail:mail},{sort:{ID:-1},limit:1});
	}
  });  

}

if(Meteor.isServer) {
 Meteor.startup(function () {

        //get value from browser  
       
  process.env.MAIL_URL = 'smtp://postmaster@sandboxbd0b40909f0e4e149dbdf704b4d0a886.mailgun.org:62f9e10e8fba10ff401cefa94548fb29@smtp.mailgun.org';
});
}


