mail="";

//Account-ui
if (Meteor.isClient) {
  Session.setDefault("data","1234567890");//
  Template.page.data = function () {
     
     return Session.get("data");
   };

   Template.personal.data = function () {
     
     return Session.get("data");
   };

   Template.sendMail.data = function () {
     
     return Session.get("data");
   };

  Template.click.events({
    
    'click #yue': function () {

         mail=document.getElementById("Email").value;

       mail=document.getElementById("Email").value;
       var pass=document.getElementById("password").value;
       if(mail=="") {
        
        alert("邮箱不能为空");
      }
      else if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(mail) == false) {
         alert('邮箱格式不正确，请重新输入');
         
       }
      else {
        if(User.find({Mail:mail,Pass:pass}).count()==1) {
          var url="http://p3.gexing.com/touxiang/20121101/1742/509243ee3badd_200x200_3.jpg";
          
          
          Session.set("data",mail);
          Session.set("currentUrl", {login: "", page: "active", reg: "",sendMail:"",setting:"",personal:""});
          Router.redirect("/page~"+mail);

        }
        else if(User.find({Mail:mail,Pass:pass}).count()==0) {
          alert("您还没有注册，请先注册。");
          Session.set("currentUrl", {login: "", page: "", reg: "active",sendMail:"",setting:"",personal:""});

        

         Router.redirect("/reg");

        }
        else {
          alert('您的用户名或密码不正确，请重新输入');
          Session.set("currentUrl", {login: "active", page: "", reg: "",sendMail:"",setting:"",personal:""});

        

         Router.redirect("/");
        }
      }     

    }
    
  });


  Template.click.events({
    'click #register': function () {

    Session.set("currentUrl", {login: "", page: "", reg: "active",sendMail:"",setting:"",personal:""});

    Router.redirect("/reg");
        
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {

        //get value from browser  
       
  process.env.MAIL_URL = 'smtp://postmaster@sandboxbd0b40909f0e4e149dbdf704b4d0a886.mailgun.org:62f9e10e8fba10ff401cefa94548fb29@smtp.mailgun.org';
});


}
