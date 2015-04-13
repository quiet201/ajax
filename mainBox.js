// JavaScript Document
// recommend 推荐菜谱
/*function Ale() {
	alert("success get Data")
}*/
var aboutUsName =[{'PSNCh':'关于我们','PSNEn':'Company Profile'}];
var aboutUsList =[
	{'PSL':'益膳介绍','links':'CompanyInfor_YS.html'},
	{'PSL':'门店介绍','links':'CompanyInfor_YS.html'},
	{'PSL':'基地介绍','links':'CompanyInfor_YS.html'},
	{'PSL':'物流介绍','links':'CompanyInfor_WuLiu.html'},
	{'PSL':'冷链物流','links':'CompanyInfor_WuLiu.html'},
	{'PSL':'质量管控','links':'CompanyInfor_ContactUs.html'},
	{'PSL':'联系我们','links':'CompanyInfor_ContactUs.html'}
]

var aboutUsName1 =[{'PSNCh':'关于我们','PSNEn':'Company Profile'}];
var aboutUsList1 =[
	{'PSL':'益膳介绍','links':'CompanyInfor_YS1.html'},
	{'PSL':'门店介绍','links':'CompanyInfor_WuLiu1.html'},
	{'PSL':'基地介绍','links':'CompanyInfor_WuLiu1.html'},
	{'PSL':'物流介绍','links':'CompanyInfor_WuLiu1.html'},
	{'PSL':'冷链物流','links':'CompanyInfor_WuLiu1.html'},
	{'PSL':'质量管控','links':'CompanyInfor_WuLiu1.html'},
	{'PSL':'联系我们','links':'CompanyInfor_ContactUs1.html'}
]






//Member of the zone  会员专区
var MemberName =[{'MNCh':'会员专区','MNEn':'Member of the zone'}];
var MemberList =[
	{'ML':'个人资料','links':'memberZone_Info.html'},
	{'ML':'我的家庭','links':'memberZone_family.html'},
	{'ML':'我的益膳','links':'memberZone.html'},
	{'ML':'我的菜篮','links':'memberZone_Mybasket.html'},
	{'ML':'会员规则','links':'memberZone_Rule.html'},
	{'ML':'收货地址','links':'memberZone_address.html'},
	{'ML':'充值/充值记录','links':'memberZone_recharge.html'}	
]


//Products and Services  会员规则
var MemberRuleName =[{'PSNCh':'益膳服务','PSNEn':'YiShan Service'}];
var MemberRuleList =[
	{'PSL':'会员规则','links':'MemberInfor.html'},
	{'PSL':'套餐介绍','links':'MemberInfor_meal.html'}
]

//Products and Services  产品与服务
var ServicesName =[{'PSNCh':'食材产品','PSNEn':'Food products'}];
var ServicesList =[
	{'PSL':'推荐食材','links':'Products.html'},
	{'PSL':'粮油类','links':'Products.html'},
	{'PSL':'大米类','links':'Products.html'},
	{'PSL':'鸡蛋类','links':'Products.html'},
	{'PSL':'水产类','links':'Products.html'},
	{'PSL':'鸡蛋类','links':'Products.html'},
	{'PSL':'水产类','links':'Products.html'},
	{'PSL':'鸡蛋类','links':'Products.html'},
	{'PSL':'水产类','links':'Products.html'},
	{'PSL':'鸡蛋类','links':'Products.html'},
	{'PSL':'水产类','links':'Products.html'},
	{'PSL':'鸡蛋类','links':'Products.html'},
	{'PSL':'水产类','links':'Products.html'},
	{'PSL':'家禽类','links':'Products.html'}
]
var ServicesSecondList =[
	{'PSL':'粮油类','links':'Products.html'},
	{'PSL':'大米类','links':'Products.html'},
	{'PSL':'鸡蛋类','links':'Products.html'},
	{'PSL':'水产类','links':'Products.html'},
	{'PSL':'东北大米','links':'Products.html'}
]
var ServicesThreeList =[
	{'PSL':'东北大米','links':'ProductDetails.html'},
	{'PSL':'其它大米','links':'ProductDetails.html'},
	{'PSL':'其它大米','links':'ProductDetails.html'},
	{'PSL':'其它大米','links':'ProductDetails.html'},
	{'PSL':'其它大米','links':'ProductDetails.html'},
	{'PSL':'其它大米','links':'ProductDetails.html'},
	{'PSL':'其它大米','links':'ProductDetails.html'},
	{'PSL':'其它大米','links':'ProductDetails.html'},
	{'PSL':'其它大米','links':'ProductDetails.html'},
	{'PSL':'其它大米','links':'ProductDetails.html'},
	{'PSL':'更多','links':'Products.html'}
]

//STORES SELLING  门店直销
var STORESName =[{'PSNCh':'门店直销','PSNEn':'STORES SELLING'}];
var STORESList =[
	{'PSL':'门店布点','links':'OutLetStrore.html'}
]
var STORESSecondList =[
	{'PSL':'科苑路','links':'Products.html'},
	{'PSL':'深大','links':'Products.html'},
	{'PSL':'世界之窗','links':'Products.html'},
	{'PSL':'石岩','links':'Products.html'},
	{'PSL':'福田','links':'Products.html'}
]
var STORESThreeList =[
	{'PSL':'粮油类','links':'ProductDetails.html'},
	{'PSL':'大米类','links':'ProductDetails.html'},
	{'PSL':'鸡蛋类','links':'ProductDetails.html'},
	{'PSL':'水产类','links':'ProductDetails.html'},
	{'PSL':'东北大米','links':'ProductDetails.html'},
	{'PSL':'更多','links':'ProductDetails.html'}
]

//Eshare class  益膳课堂
var EshareName =[{'PSNCh':'益膳课堂','PSNEn':'Eshare class'}];
var EshareList =[
	{'PSL':'健康讲座','links':'YShealth.html'},
	{'PSL':'推荐菜谱','links':'YShealth_Recommend.html'}
]
var EshareSecondList =[
	{'PSL':'粤菜','links':'YShealth_Recommend.html'},
	{'PSL':'鲁菜','links':'YShealth_Recommend.html'},
	{'PSL':'湘菜','links':'YShealth_Recommend.html'},
	{'PSL':'东北菜','links':'YShealth_Recommend.html'}
]
var EshareThreeList =[
	{'PSL':'东北大米','links':'ProductDetails.html'},
	{'PSL':'其它大米','links':'ProductDetails.html'},
	{'PSL':'其它大米','links':'ProductDetails.html'},
	{'PSL':'其它大米','links':'ProductDetails.html'},
	{'PSL':'其它大米','links':'ProductDetails.html'},
	{'PSL':'其它大米','links':'ProductDetails.html'},
	{'PSL':'其它大米','links':'ProductDetails.html'},
	{'PSL':'其它大米','links':'ProductDetails.html'},
	{'PSL':'其它大米','links':'ProductDetails.html'},
	{'PSL':'其它大米','links':'ProductDetails.html'}
]



//菜谱详情列表
var MdetailsList =[
	{'pic':'cp1.png','links':'RecommendDetail.html','Chname':'豉汁排骨','Enname':'RIBS'},
	{'pic':'cp1.png','links':'RecommendDetail.html','Chname':'豉汁排骨','Enname':'RIBS'},
	{'pic':'cp1.png','links':'RecommendDetail.html','Chname':'豉汁排骨','Enname':'RIBS'},
	{'pic':'cp1.png','links':'#','Chname':'豉汁排骨','Enname':'RIBS'},
	{'pic':'cp1.png','links':'#','Chname':'豉汁排骨','Enname':'RIBS'},
	{'pic':'cp1.png','links':'#','Chname':'豉汁排骨','Enname':'RIBS'},
	{'pic':'cp1.png','links':'#','Chname':'豉汁排骨','Enname':'RIBS'},
	{'pic':'cp1.png','links':'#','Chname':'豉汁排骨','Enname':'RIBS'},
	{'pic':'cp1.png','links':'#','Chname':'豉汁排骨','Enname':'RIBS'},
	{'pic':'cp1.png','links':'#','Chname':'豉汁排骨','Enname':'RIBS'},
	{'pic':'cp1.png','links':'#','Chname':'豉汁排骨','Enname':'RIBS'},
	{'pic':'cp1.png','links':'#','Chname':'豉汁排骨','Enname':'RIBS'},
	{'pic':'cp1.png','links':'#','Chname':'豉汁排骨','Enname':'RIBS'},
	{'pic':'cp1.png','links':'#','Chname':'豉汁排骨','Enname':'RIBS'}
];

//单个菜谱详情
var Mdetails = [
	{'pic':'cpxq1.jpg','name':'菜名：豉汁排骨',
	'explain':'说明：排骨事先煮熟，油脂多半煮出，做法更加健康！水果入菜，味道清新不油腻！做法简单，只需3步，就能味道清新，超级下饭的橙汁排骨！',
	'data':'猪小排、姜、蒜、小红椒、葱、豆豉、料酒、酱油、蚝油、糖、胡椒粉、香油、淀粉。',
	'method':'1、猪小排用清水清洗，沥干水分。葱、姜、蒜、红尖椒切碎备用。将切好的葱、姜、蒜、红椒和所有腌料、豆豉拌匀。<br />2、把排骨放入腌制1个小时左右入味。腌好的排骨放入盘中，上蒸锅大火蒸30分钟。'
	}	
]



//食材
var foodMdetail =[
	{'pic':'sclist1.png','links':'material1.html','Chname':'饮品类','Enname':'share food','explainTit':'大闸蟹','explain':'中华绒螯蟹是一种经济蟹类，又称河蟹、毛蟹、清水蟹、大闸蟹。为中国久负盛名的美食。其螯足用于取食和抗敌，掌部内外缘密生绒毛，绒螯蟹因此而得名。杂食性动物，鱼、虾、螺、蚌、蠕虫、蚯蚓、昆虫及其幼虫等均可作为大闸蟹的动物性饵料。','Titphoto':'sc1.png'},
	{'pic':'sclist1.png','links':'#','Chname':'饮品类','Enname':'share food','explainTit':'','explain':'','Titphoto':'sc1.png'},
	{'pic':'sclist1.png','links':'#','Chname':'饮品类','Enname':'share food','explainTit':'','explain':'','Titphoto':'sc1.png'},
	{'pic':'sclist1.png','links':'#','Chname':'饮品类','Enname':'share food','explainTit':'','explain':'','Titphoto':'sc1.png'},
];


//食材说明
var foodMdeExplain =[
	{'explainTit':'大闸蟹','explain':'中华绒螯蟹是一种经济蟹类，又称河蟹、毛蟹、清水蟹、大闸蟹。为中国久负盛名的美食。其螯足用于取食和抗敌，掌部内外缘密生绒毛，绒螯蟹因此而得名。杂食性动物，鱼、虾、螺、蚌、蠕虫、蚯蚓、昆虫及其幼虫等均可作为大闸蟹的动物性饵料。','Titphoto':'sc1.png'},
];


//银行列表
var BankList =[
	{'BankName':'zhaosBank','links':''},
	{'BankName':'gsBank','links':''},
	{'BankName':'jsBank','links':''},
	{'BankName':'nyBank','links':''},
	
	
	{'BankName':'zgBank','links':''},
	{'BankName':'xyBank','links':''},
	{'BankName':'bjBank','links':''},
	{'BankName':'gdBank','links':''},
	
	{'BankName':'jtBank','links':''},
	{'BankName':'msBank','links':''},
	{'BankName':'paBank','links':''},
	{'BankName':'yzBank','links':''},
	
	{'BankName':'nbBank','links':''},
	{'BankName':'njBank','links':''},
	{'BankName':'gfBank','links':''},
	{'BankName':'pfBank','links':''},
	
	{'BankName':'shnsBank','links':''},
	{'BankName':'dyBank','links':''},
	{'BankName':'bhBank','links':''},
	{'BankName':'hzBank','links':''},
	
	{'BankName':'hbBank','links':''},
	{'BankName':'sfzBank','links':''},
	{'BankName':'zsBank','links':''},
	{'BankName':'zjtlBank','links':''},
	
	{'BankName':'NcbBank','links':''},
	{'BankName':'shBank','links':''},
	{'BankName':'bjncBank','links':''}
]
 

/*$(function() {
	//导航样式设置
	var oListMain = $(".navTop~li");
	oListMain.click(function() {
		$('.mainNav p').removeClass('clearBorder')
		oListMain.removeClass("active").find('.TitleIcon').removeClass('TitleIcon1');
		$(this).addClass("active").find('p').addClass('clearBorder');
		$(this).prev('li').find('p').addClass('clearBorder');
		$(this).find('.TitleIcon').addClass('TitleIcon1');
	});
});*/
