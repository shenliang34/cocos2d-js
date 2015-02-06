var GameScene = cc.Scene.extend({
	onEnter:function()
	{
		this._super();
		cc.log(" Game Scene onEnter");
		var gameLayer = new GameLayer()
		this.addChild(gameLayer);
	}
})

var GameLayer = cc.Layer.extend({
	ctor:function(){
		this._super();
		cc.log("Game Scene ctor");
		var size = cc.winSize;
		var bgSprtie = new cc.Sprite(res.BACKGROUND_PNG);
		bgSprtie.attr({x:size.width>>1,y:size.height>>1});
		this.addChild(bgSprtie);
		this.schedule(this.addFood, 1, -1, 1)
//		this.addFood();
	},
	addFood:function()
	{
		var food = cc.Sprite(res.SUSHI_1n_0_PNG);
		var size = cc.winSize;
		var ranX = cc.random0To1()*size.width;
		food.attr({x:ranX,y:size.height-30})
		this.addChild(food);
		
		cc.log("ranx",ranX,"ccwin",size.width>>1)
		food.runAction(cc.repeat(cc.sequence(cc.moveTo(1, cc.p(ranX,0))),999));
//		food.runAction(cc.recc.delayTime(3),cc.moveTo(1, cc.p(ranX,0)),cc.moveTo(1,cc.p(ranX,size.height-40))));
		
	}
	
	
})