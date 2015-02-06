var ClickAndMoveTestScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		var layer = new ClickLayer()
		this.addChild(layer)
	}
});
var ClickLayer = cc.Layer.extend({
	ctor:function(){//构造器
		this._super();
		var layer = new cc.LayerColor(cc.color(255, 255, 0, 100));
		layer.changeWidthAndHeight(100, 100)
		this.addChild(layer)
		cc.log("Math"+Math.random())
	}
	
})