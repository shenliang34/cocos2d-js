var StartScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		cc.log("onEnter")
		var startLayer = new StartLayer();
		this.addChild(startLayer);
	}
})
/**
 * 添加背景
 */
var StartLayer = cc.Layer.extend({
	ctor:function(){
		this._super();
		cc.log("ctor")
		var bgSprite = new cc.Sprite(res.BACKGROUND_PNG);
		var size = cc.winSize;
		bgSprite.attr({x:size.width>>1,y:size.height>>1})
		this.addChild(bgSprite);
		
		//添加开始按钮
		var startBtn =new cc.MenuItemImage(res.STRAT_N_PNG,res.STRAT_S_PNG,function(){
			cc.log("startBtn click")
//			var tr = new cc.TransitionScene(1,new GameScene())
			cc.director.pushScene(new GameScene())
//			cc.director.runScene(tr);
//			cc.director.
		})
		var menu = new cc.Menu(startBtn);
		this.addChild(menu)
	}
	
})