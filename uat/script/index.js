$(".wgjia-c_w_list>li").mouseenter(function(){
  $(this).siblings("li").children(".list__info").stop().animate({"top":"155px"});
  $(this).children(".list__info").stop().animate({"top":0});
}).mouseleave(function(){
  $(this).children(".list__info").stop().animate({"top":"155px"});
});
$("#DNSLink").text(window.location.host || "www.jingjingmall.cn");
var ArrayIndexOf =function(arr,value){
　　for(var i=0;i<arr.length;i++){
　　　　if(arr[i]===value){
　　　　　　return i;
　　　　}
　　}
　　return -1;
};

//配置域名和需要显示的板块  
var config=[
  {
    "host":"ex-jjm.uat.aiagain.com",
    "logo":"星微科技",
    "gov":"粤ICP备18044292号",
    "company": "广州星微网络科技有限公司",
    "name": "星微",
    "baidu": "9df49540020d98c5885ac7a92105929b"
  },
  {
    "host":"fxscrm.uat.aiagain.com",
    "logo":"帆星科技",
    "gov":"粤ICP备18114627号",
    "company": "广州帆星科技有限公司",
    "name": "帆星"
  },
  {
    "host":"tianleiscrm.uat.aiagain.com",
    "logo":"田蕾科技",
    "gov":"粤ICP备18116819号",
    "company": "广州田蕾信息科技有限公司",
    "name": "田蕾"
  },
  {
    "host":"168feitao.com",  // 168非淘网
    "gov":"粤ICP备18044292号-10"
  },
  {
    "host":"wechatgj.com", // 微客淘网
    "gov":"粤ICP备18044292号-12"
  },
  {
    "host":"168duoshou.com", // 168舵手网
    "gov":"粤ICP备18044292号-9"
  },
  {
    "host":"huanghuangmall.cn", // 欢豆商城网
    "gov":"粤ICP备18044292号-11"
  }
];

//百度统计
var statistics = function (key) {
  (function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?" + key;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
}

for(var i=0;i<config.length;i++){
  if(window.location.host.indexOf(config[i].host) > -1){
    if(!!config[i].logo){
      $("#logo").html(config[i].logo);
    };
    if(!!config[i].gov){
      $("#gov").html(config[i].gov);
    };
    if (!!config[i].company){
      $("#company").html(config[i].company);
    }
    if (!!config[i].name){
      $("#name").html(config[i].name);
    }
    if (!!config[i].baidu){
      statistics(config[i].baidu);
    }
  };
};

var setCookie =function(name,value){
  var Days = 1;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days*60*60*1000);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
};

var getCookie = function (name) {
  var arr;
  var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
};
var getQueryString = function(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null){
    return unescape(r[2]);
  }else{
    return null;
  };  
};
(function() {
  var regHref = $(".register").attr("href");
  var TRENCH = getCookie("TRENCH");
  var trench = null;
  var source = getQueryString("source");
  if(source!=null){
    trench="source="+source;
  }
  if(TRENCH==null&&!!source){
    setCookie("TRENCH",trench);
  }else if(!!TRENCH){
    trench=TRENCH;
    setCookie("TRENCH",trench);
  };
  if(!!trench){
    if (ArrayIndexOf(regHref,"?") != -1) {   
      trench ="&"+trench; 
    }
    regHref = regHref+trench;
    $(".register").attr({"href":regHref});
  }
})();

//回到顶部
$(".back-top").click(function(){
  $('html,body').animate({ scrollTop: 0 }, 500);
});


// 导航锚点跳转
$(".nav>li a").click(function(){
  $(".nav>li a").removeClass("active");
   var s=$(this).attr("href");
  if (ArrayIndexOf(s,"#") == -1){
    $("#"+s).ScrollTo(500);
  }else if(ArrayIndexOf(s,"/")== 0){
    $(s.slice(1)).ScrollTo(500);
  }else{
    $(s).ScrollTo(500);
  };
  $(this).addClass("active");
});

var scrollToSite = function (id) {
  if(id==''){
    return false;
  }
  if (ArrayIndexOf(id,'#') == -1) id = '#' + id;
  $(".nav>li a").each(function () {
    $(this).removeClass("active");
    if (this.hash == id) {
      $(this).addClass("active");
    }
  });
  $(id).ScrollTo(500);
};
scrollToSite(window.location.hash || '');

//轮播图
// 线下
var retailPlay =  new Swiper('.retail-banner', {
  paginationClickable: true,
  speed: 2000,
  loop: true,
  observer:true,
  observeParents:true,
  autoplayDisableOnInteraction : false, 
  autoplay:4000,
  pagination:'.retail-banner__pagination'
});

$(".wgjia-swiper-container").mouseenter(function(){
  onlinePlay.stopAutoplay();
}).mouseleave(function(){
  onlinePlay.startAutoplay();
});
$(".retail-banner").mouseenter(function(){
  retailPlay.stopAutoplay();
}).mouseleave(function(){
  retailPlay.startAutoplay();
});

$(".telephoneHover").mouseenter(function(){
  $(".telephone").animate({"right":"45px"});
}).mouseleave(function(){
  $(".telephone").animate({"right":"-300px"});
});
$(".markCodeHover").mouseenter(function(){
  $(".markCode").animate({"right":"45px"});
}).mouseleave(function(){
  $(".markCode").animate({"right":"-300px"});
});
$(".consultHover").mouseenter(function(){
  $(".consult").animate({"right":"45px"});
}).mouseleave(function(){
  $(".consult").animate({"right":"-300px"});
});
