import Component from '@ember/component';
import { A } from 'ember-array/utils';
export default Component.extend({
	showConnections: true,
  connections: A(),
  
  didInsertElement() {
    this._super(...arguments);
    jsPlumb.setContainer(this.elementId);
  },
  
  addConnection( source, target, color, width ) {
  	console.log(source);
var common = {
    cssClass:"myCssClass"
};
    jsPlumb.connect({
      source: this.$(source),

      target: this.$(target),
      anchors:["Bottom", "Top" ],
       endpoint:[ "Dot", { radius:5, hoverClass:"myEndpointHover" }, common ],
  connector:[ "Bezier", { curviness:100 ,color:"red"}, common ],
  paintStyle:{ stroke:"blue", strokeWidth:1 },
  overlays: [
        [ "Arrow", { foldback:0.2 }, common ],
        [ "Label", { cssClass:"labelClass" } ]  
    ]
    });

    
    // connection.bind("click", function(conn) {
    //  jsPlumb.detach( conn ); 
    // });
  },
  
  actions: {
    toggleConnections() {
      
      	this.addConnection( '#block1', '#block2', 'red', 20 );
        this.addConnection( '#block1', '#block3', 'green', 5 );
        this.addConnection( '#block2', '#block3', 'blue', 10 );
       
      
       
      
    }
  }
});
