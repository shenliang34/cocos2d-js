
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
		cc.log("-------------------------test---------------------")
	}
	
});