if(Meteor.isClient) {
Template.page.events({
    
    'click #mess': function () {
       var content = document.getElementById("content").value;
       document.getElementById("content").value="";
      
       var date=moment().format('MMMM Do YYYY, h:mm:ss a');

       var id=post.find().count()+1;
       if(mail=="") {
         alert("请先登录！");
         Session.set("currentUrl", {login: "active", page: "", reg: "",sendMail:"",setting:"",personal:""});
         Router.redirect("/"); 
        
       }
       else if(content=="")
       {
         alert("消息不能为空！");
       }
       else
       {
          post.insert({Mail:mail,Content:content,Time:date,ID:id});
          Session.set("data",mail);
       }
  
    }
});    
  

  Template.page.helpers({
	'client': function() {
		return post.find({},{sort:{ID:-1}});
	}
  });
  
  Template.page.helpers({
	'message': function() {
                var url=window.location.href;
      		 var yy=url.indexOf('~')
       	         var from1=url.substring(yy+1,url.length);
      		 mail=from1;
      		 Session.set("data",mail);
                 

		return Mess.find({Mail:mail},{sort:{ID:-1},limit:1});
	}
  });
  Template.page.events({
    'click #set':function () {
       var url=window.location.href;
       var yy=url.indexOf('~')
       var from1=url.substring(yy+1,url.length);
       mail=from1;
       Session.set("data",mail);
       Session.set("currentUrl", {login: "", page: "", reg: "",sendMail:"",setting:"active",personal:""});
         Router.redirect("/setting~"+mail); Session.set("data",mail);

    }


  });


  Template.page.events({
    'click .gogo':function () {
       var url=window.location.href;
       var yy=url.indexOf('~')
       var from1=url.substring(yy+1,url.length);
       mail=from1;
       Session.set("data",mail);
       
    }


  });

  Template.page.events({
    'click #per':function () {
       
       var url=window.location.href;
       var yy=url.indexOf('~')
       var from1=url.substring(yy+1,url.length);
       mail=from1;
       Session.set("data",mail);

       Session.set("currentUrl", {login: "", page: "", reg: "",sendMail:"",setting:"",personal:"active"});
         Router.redirect("/personal~"+mail); 

    }


  });
}

if(Meteor.isServer) {
 Meteor.startup(function () {

        //get value from browser  
       
  process.env.MAIL_URL = 'smtp://postmaster@sandboxbd0b40909f0e4e149dbdf704b4d0a886.mailgun.org:62f9e10e8fba10ff401cefa94548fb29@smtp.mailgun.org';
});
}


