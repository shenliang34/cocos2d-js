
var ActionScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		cc.log("-------------------------test---------------------")
		var g = new cc.Sprite(res.GROSSINI_PNG);
		this.addChild(g);
		g.x = 200;
		g.y = 300;
		//g.runAction(cc.sequence(cc.delayTime(0.5),cc.fadeOut(1)))//在0.5秒 alpha值从255到0
		g.runAction(cc.sequence(cc.MoveTo(1,cc.p(400, 100)),cc.delayTime(0.5),cc.fadeOut(1),cc.fadeIn(1),cc.scaleTo(1, 2, 2)))//连续动作可这样
		var g1 = new cc.Sprite(res.GROSSINI_PNG);
		this.addChild(g1)
		g1.x = 300;
		g1.y = 300;
//		g1.runAction(cc.moveBy(1, cc.p(100, 100)))//移动 moveTo 移动到
//		g1.runAction(cc.jumpTo(1, cc.p(400, 300), 50, 4))//跳跃时间 位置 高度 次数
//		var action = cc.sequence(cc.jumpTo(1, cc.p(400, 300), 50, 4),cc.CallFunc(function(){cc.log("============end==========")},this,false));//添加动画完成停止返回函数
//		g1.runAction(action)//跳跃时间 位置 高度 次数
//		g1.runAction(cc.skewTo(1, 50, 10))//时间 x y
		g1.runAction(cc.bezierTo(1, [cc.p(300, 300),cc.p(400, 300),cc.p(400, 400),cc.p(300, 400),cc.p(300, 300)]))
		cc.log("-------------------------test---------------------")
	}
	
});