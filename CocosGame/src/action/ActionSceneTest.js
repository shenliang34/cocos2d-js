
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
//		g1.runAction(cc.bezierTo(1, [cc.p(300, 300),cc.p(400, 300)]));
		var delay = cc.delayTime(0.25);

		// 3 and only 3 control points should be used for Bezier actions.
		var controlPoints = [ cc.p(0, 374),
		                      cc.p(300, -374),
		                      cc.p(300, 100) ];

		var bezierForward = cc.bezierBy(2, controlPoints);
		var rep = cc.sequence(bezierForward, delay, bezierForward.reverse(), delay.clone()).repeatForever();
		var controlPoints2 = [ cc.p(200, 200),cc.p(400, 200),cc.p(400, 400),cc.p(200,400),cc.p(200,200)];
		var bezierTo1 = cc.bezierTo(2, controlPoints2);
		
//
//		// // sprite 3
//		var controlPoints3 = controlPoints2.slice();
//		var bezierTo2 = cc.bezierTo(2, controlPoints3);

//		g1.runAction(rep);
		g1.x = 200;
		g1.y = 200;
		g1.runAction(bezierTo1)
//		g1.runAction(cc.sequence(bezierTo1,be));
		cc.log("-------------------------test---------------------")
	}
	
});