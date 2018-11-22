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

/**
 * @param {String} host -域名（必需）
 * @param {String} gov -备案号（必需）
 * @param {String} addClass -要添加的class（必需，xingwei、fanxing、tianlei）
 * @param {String} baidu -百度统计key
 * @param {String} delClass-要删除的class
 */

//配置域名和需要显示的板块  
var config=[
  {
    "host":"jingjingmall.cn", // 星微
    "gov":"粤ICP备18044292号",
    "baidu": "438193ad5585d4d6ab586ce6ed738f5e",
    "delClass": ".del--login",
    "addClass": ".xingwei"
  },
  {
    "host":"fxscrm.com", // 帆星
    "gov":"粤ICP备18114627号",
    "baidu": "2f4be2619429f659c02a9845b281681b",
    "delClass": ".del--login",
    "addClass": ".fanxing"
  },
  {
    "host":"tianleiscrm.com", // 田蕾
    "gov":"粤ICP备18116819号",
    "baidu": "e47636fe2162fc585ea988bc6027000b",
    "delClass": ".del--login",
    "addClass": ".tianlei"
  },
  {
    "host":"168feitao.com",  // 168非淘网
    "gov":"粤ICP备18044292号-10",
    "addClass": ".xingwei"
  },
  {
    "host":"wechatgj.com", // 微客淘网
    "gov":"粤ICP备18044292号-12",
    "addClass": ".xingwei"
  },
  {
    "host":"168duoshou.com", // 168舵手网
    "gov":"粤ICP备18044292号-9",
    "addClass": ".xingwei"
  },
  {
    "host":"huanghuangmall.cn", // 欢豆商城网
    "gov":"粤ICP备18044292号-11",
    "addClass": ".xingwei"
  },
  {
    "host":"hailangmall.cn", // 海朗网
    "gov":"粤ICP备18116819号-3",
    "addClass": ".tianlei"
  },
  {
    "host":"doudoumall.cn", // 豆豆网
    "gov":"粤ICP备18116819号-2",
    "addClass": ".tianlei"
  },
  {
    "host":"youkemall.cn", // 友客网
    "gov":"粤ICP备18116819号-4",
    "addClass": ".tianlei"
  },
  {
    "host":"haitaimall.cn", // 嗨淘网
    "gov":"粤ICP备18116819号-5",
    "addClass": ".tianlei"
  },
  {
    "host":"wenwenmall.cn", // 文静网
    "gov":"粤ICP备18114627号-5",
    "addClass": ".fanxing"
  },
  {
    "host":"kukemall.cn", // 快客网
    "gov":"粤ICP备18114627号-4",
    "addClass": ".fanxing"
  },
  {
    "host":"douwanmall.cn", // 豆酷网
    "gov":"粤ICP备18114627号-2",
    "addClass": ".fanxing"
  },
  {
    "host":"kuaidoumall.cn", // 快斗网
    "gov":"粤ICP备18114627号-3",
    "addClass": ".fanxing"
  }
];

var uatConfig = [
  {
    "host":"ex-jjm.uat.aiagain.com", // 星微
    "gov":"粤ICP备18044292号",
    "addClass": ".xingwei",
    "baidu": "438193ad5585d4d6ab586ce6ed738f5e",
    "delClass": ".del--login"
  },
  {
    "host":"fxscrm.uat.aiagain.com", // 帆星
    "gov":"粤ICP备18114627号",
    "baidu": "2f4be2619429f659c02a9845b281681b",
    "addClass": ".fanxing",
    "delClass": ".del--login"
  },
  {
    "host":"tianleiscrm.uat.aiagain.com", // 田蕾
    "gov":"粤ICP备18116819号",
    "baidu": "e47636fe2162fc585ea988bc6027000b",
    "addClass": ".tianlei",
    "delClass": ".del--login"
  },
  {
    "host":"ex-168feitao.uat.aiagain.com",  // 168非淘网
    "gov":"粤ICP备18044292号-10",
    "addClass": ".xingwei"
  },
  {
    "host":"ex-wechatgj.uat.aiagain.com", // 微客淘网
    "gov":"粤ICP备18044292号-12",
    "addClass": ".xingwei"
  },
  {
    "host":"ex-168duoshou.uat.aiagain.com", // 168舵手网
    "gov":"粤ICP备18044292号-9",
    "addClass": ".xingwei"
  },
  {
    "host":"ex-huanghuangmall.uat.aiagain.com", // 欢豆商城网
    "gov":"粤ICP备18044292号-11",
    "addClass": ".xingwei"
  },
  {
    "host":"ex-hailangmall.uat.aiagain.com", // 海朗网
    "gov":"粤ICP备18116819号-3",
    "addClass": ".tianlei"
  },
  {
    "host":"ex-doudoumall.uat.aiagain.com", // 豆豆网
    "gov":"粤ICP备18116819号-2",
    "addClass": ".tianlei"
  },
  {
    "host":"ex-youkemall.uat.aiagain.com", // 友客网
    "gov":"粤ICP备18116819号-4",
    "addClass": ".tianlei"
  },
  {
    "host":"ex-haitaimall.uat.aiagain.com", // 嗨淘网
    "gov":"粤ICP备18116819号-5",
    "addClass": ".tianlei"
  },
  {
    "host":"ex-wenwenmall.uat.aiagain.com", // 文静网
    "gov":"粤ICP备18114627号-5",
    "addClass": ".fanxing"
  },
  {
    "host":"ex-kukemall.uat.aiagain.com", // 快客网
    "gov":"粤ICP备18114627号-4",
    "addClass": ".fanxing"
  },
  {
    "host":"ex-douwanmall.uat.aiagain.com", // 豆酷网
    "gov":"粤ICP备18114627号-2",
    "addClass": ".fanxing"
  },
  {
    "host":"ex-kuaidoumall.uat.aiagain.com", // 快斗网
    "gov":"粤ICP备18114627号-3",
    "addClass": ".fanxing"
  }
];
config = config.concat(uatConfig);

//跳转手机端
var gotoMobile = function () {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone"];
  for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
          window.location = "/Mobile/offline/index.html";
          break;
      }
  }
}

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
    gotoMobile();
    
    if(!!config[i].gov){
      $("#gov").html(config[i].gov);
    };
    if (!!config[i].baidu){
      statistics(config[i].baidu);
    }
    if (!!config[i].delClass){
      $(config[i].delClass).remove();
    }
    if (!!config[i].addClass){
      $(config[i].addClass).show();
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

