if(Meteor.isClient) {
Template.sendMail.events({
    
    
    'click #yes':function(){

       var url=window.location.href;

       var xx=url.indexOf('=');
       var yy=url.indexOf('~')

       var to1=url.substring(xx+1,yy);
       var from1=url.substring(yy+1,url.length);
       mail=from1;

       
       var cont=document.getElementById("cont").value;
       Session.set('data',from1);
       Meteor.call('sendEmail',
            to1,
            from1,
            'Come from your friends on the Yue.',
            cont);
       

       Session.set("currentUrl", {login: "", page: "active", reg: "",sendMail:"",setting:"",personal:""});
      

       Router.redirect("/page~"+mail); 
    }
  });

  Template.sendMail.events({
    
    
    'click #no':function(){

       var url=window.location.href;

       var xx=url.indexOf('=');
       var yy=url.indexOf('~')

       var to1=url.substring(xx+1,yy);
       var from1=url.substring(yy+1,url.length);
       mail=from1;
       Session.set('data',from1);
       Session.set("currentUrl", {login: "", page: "active", reg: "",sendMail:"",setting:"",personal:""});
       

       Router.redirect("/page~"+mail); 
    }
  });
  
  Template.sendMail.helpers({
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


