var TouchOneByOneScene = cc.Scene.extend({
	ctor:function(){
		this._super();
		var oneByoneLayer = new TouchOneByOneLayer()
		this.addChild(oneByoneLayer)
	}
});
var TouchOneByOneLayer = cc.Layer.extend({
	ctor:function(){
		this._super();
		var sprite1 = new cc.Sprite(res.CYANSQUARE_PNG);
		sprite1.attr({x:100,y:100})
		this.addChild(sprite1)
		
		var sprite2 = new cc.Sprite(res.MAGENTASQUARE_PNG);
		sprite2.attr({x:300,y:100})
		this.addChild(sprite2)
		
		var sprite3 = new cc.Sprite(res.YELLOWSQUARE_PNG);
		sprite3.attr({x:100,y:300})
		sprite2.addChild(sprite3)
		
		var listener = cc.EventListener.create({
			event:cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches:true,
			onTouchBegan:function(touch,event){
				var target = event.getCurrentTarget();
				var locationNode = target.convertToNodeSpace(touch.getLocation())
				var size = target.getContentSize();
				var rect = cc.rect(0, 0, size.width, size.height)
				if(cc.rectContainsPoint(rect, locationNode))
				{
					cc.log("isok")
					target.opacity = 100;
					return true;
				}
				cc.log("not ok")
				return false;
			},
			onTouchMoved:function(touch,event)
			{
				var target = event.getCurrentTarget();
				var delta = touch.getDelta();
				target.x+=delta.x;
				target.y+=delta.y;
			},
			onTouchEnded:function(touch,event){
//				var target = event.getCurrentTarget();
//				sprite1.setColor(cc.color(255, 255, 255, 0.2))
				var target = event.getCurrentTarget();
//				target.setScale(0.2, 0.2)
				target.opacity=255;//透明度
			}
		})
		cc.eventManager.addListener(listener,sprite1)
		cc.eventManager.addListener(listener.clone(),sprite2)
		cc.eventManager.addListener(listener.clone(),sprite3)
	}
})

//var TouchOneByOne = TouchBaseLayer.extend({
//
//	onEnter : function () {
//		this._super();
//
//		var sprite1 = new cc.Sprite(res.CYANSQUARE_PNG);
//		sprite1.attr({x:100,y:100})
//		this.addChild(sprite1)
//
//		var sprite2 = new cc.Sprite(res.MAGENTASQUARE_PNG);
//		sprite2.attr({x:300,y:100})
//		this.addChild(sprite2)
//
//		var sprite3 = new cc.Sprite(res.YELLOWSQUARE_PNG);
//		sprite3.attr({x:100,y:300})
//		sprite2.addChild(sprite3)
//
//		var listener = cc.EventListener.create({
//			event: cc.EventListener.TOUCH_ONE_BY_ONE,
//			swallowTouches: true,    // TODO【事件吞噬】，阻止事件传递给下一层(层根据事件优先级而定，而非对象(节点)的zIndex值)
//			onTouchBegan: function (touch, event) {
//				// 获取当前触发事件的对象 TODO【备注】：有比getCurrentTarget更好的选择。
//				//  但这里主要是3个精灵引用了同一套的事件处理方案. 见下面的.clone
//				var target = event.getCurrentTarget();
//				// 获取点击坐标[基于本地坐标]
//				var locationInNode = target.convertToNodeSpace(touch.getLocation());
//				// 获取当前节点大小
//				var size = target.getContentSize();
//				// 区域设定
//				var rect = cc.rect(0, 0, size.width, size.height);
//				// 判断触摸点是否在节点区域内
//				if (!(cc.rectContainsPoint(rect, locationInNode))) {
//					return false;
//				}
//
//				// 开始逻辑处理
//				cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
//				target.opacity = 180;
//
//				// TODO  true 和 false 的区别。 return false 的话，onTouchMoved和onTouchEnded不会被调用到
//				return true;
//			},
//			onTouchMoved: function (touch, event) {
//				var target = event.getCurrentTarget();
//				// 返回从【前一个】触摸点【到当前点】的delta【距离】
//				var delta = touch.getDelta();
//				target.x += delta.x;
//				target.y += delta.y;
//			},
//			onTouchEnded: function (touch, event) {
//				var target = event.getCurrentTarget();
//				target.opacity = 255;
//			},
//			onTouchCancelled : function(touch, event){
//				cc.log("onTouchCancelled");
//			}
//		});
//
//		cc.eventManager.addListener(listener, sprite1);
//		cc.eventManager.addListener(listener.clone(), sprite2);
//		cc.eventManager.addListener(listener.clone(), sprite3);
//
//		// 3种移除监听器的方式
////		cc.eventManager.removeListeners(listener);   // 根据listener对象
////		cc.eventManager.removeListeners(cc.EventListener.TOUCH_ONE_BY_ONE);  // 根据listener类型
////		cc.eventManager.removeListeners(aNode);  // 根据节点
//		return true;
//	},
//	// 英文标题
//	getEnTitle : function(){
//		return "1. Touch_One_By_One";
//	},
//	// 中文标题
//	getZhTitle : function(){
//		return "Touch_One_By_One 触摸机制";
//	}
//
//});