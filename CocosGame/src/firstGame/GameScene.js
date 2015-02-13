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
		this.footList = new Array();
		this.disappearAction = null;
		cc.log("Game Scene ctor");
		var size = cc.winSize;
		var bgSprtie = new cc.Sprite(res.BACKGROUND_PNG);
		bgSprtie.attr({x:size.width>>1,y:size.height>>1});
		this.addChild(bgSprtie);
		this.schedule(this.update, 1, -1, 1)
//		this.addFood();
//		this.createAction();
		cc.spriteFrameCache.addSpriteFrames(res.SUSHI_PILST)//加载图片到缓存
		
	},
	addFood:function()
	{
		var food = new SushiSprite();
		var size = cc.winSize;
		var ranX = cc.random0To1()*size.width;
		food.attr({x:ranX,y:size.height-30})
		this.addChild(food);
		this.footList.push(food)
		cc.log("ranx",ranX,"ccwin",size.width>>1)
//		food.runAction(cc.repeat(cc.sequence(cc.moveTo(1, cc.p(ranX,-100))),999));
		food.runAction(cc.moveTo(5, cc.p(ranX,-100)));
		
//		cc.eventManager.addListener({
//			event: cc.EventListener.TOUCH_ONE_BY_ONE,
//			swallowTouches: true,
//			onTouchBegan: function (touch, event) {
//				//do something
//				var pos = touch.getLocation();
//				var target = event.getCurrentTarget(); 
//				if ( cc.rectContainsPoint(target.getBoundingBox(),pos)) {
//					cc.log("touched")
//					var frames = [];
//					for (var i = 0; i < 11; i++) {
//						var s = "sushi_1n_"+i+".png"
//						var frame = cc.spriteFrameCache.getSpriteFrame(s);
//						frames.push(frame)
//					}
//					var animation = new cc.Animation(frames,0.02)
//					var animate = new cc.Animate(animation)
//					target.runAction(animate.repeatForever())
//				}
//				cc.log("pos",pos.x,pos.y)
////				this.createAction();
//				
//				return true;
//			}
//		},this);
	},
	update:function()
	{
		this.addFood();
		this.removeFood();
		
	},
	removeFood:function()
	{
		for (var i = 0; i < this.footList.length; i++) {
			var temp = this.footList[i];
			cc.log("start remove",temp.y)
			if(temp.y<=0)
			{
				cc.log("remove ",i)
				this.removeChild(temp)
				this.footList.splice(i, 1)
				i=i-1;
			}
		}
	}
	
	
	
})