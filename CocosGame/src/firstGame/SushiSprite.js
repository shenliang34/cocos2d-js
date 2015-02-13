var SushiSprite = cc.Layer.extend({
	food:null,
	ctor:function(){
		this._super();
		food = new cc.Sprite(res.SUSHI_1n_0_PNG);
		this.addChild(food);
		
		this.addTouchEventListener()
	},
	addTouchEventListener:function()
	{
		return cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,
			onTouchBegan: function (touch, event) {
			//do something
			var target = event.getCurrentTarget(); 
			var locationInNode = target.convertToNodeSpace(touch.getLocation());  
			var s = target.getContentSize();
			var rect = cc.rect(0, 0, s.width, s.height);

			if (cc.rectContainsPoint(rect, locationInNode)) {        // 判断触摸点是否在按钮范围内
				cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
				target.opacity = 180;
//				var frames = [];
//				for (var i = 0; i < 11; i++) {
//					var s = "sushi_1n_"+i+".png"
//					var frame = cc.spriteFrameCache.getSpriteFrame(s);
//					frames.push(frame)
//				}
//				var animation = new cc.Animation(frames,0.02)
//				var animate = new cc.Animate(animation)
//				target.runAction(animate.repeatForever())
				return true;
			}
//			this.createAction();
			
			return false;
			},
			onTouchEnded:function(touch,event)
			{
				var target = event.getCurrentTarget();
				target.opacity = 255;
			}
		},this);
	}
})