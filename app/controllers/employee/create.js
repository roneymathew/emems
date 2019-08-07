import Controller from '@ember/controller';
import Ember from 'ember'
//import jsPlumb from 'jsplumb';
const { $: { ajax }, } = Ember;
const { inject: { service }, RSVP } = Ember;



export default Controller.extend({
  windowscroll: Ember.inject.service(),
	ajax: Ember.inject.service(),
session: Ember.inject.service(),
boss:null,
sameBoss:null,
unders:null,
init() {
    this._super(...arguments);
    this.errors = [];
    // console.log("helllllo");
    // jsPlumb.repaintEverything();
    // this.get('windowscroll').on('scroll', (e) => {
    // console.log('scroll happens');
    // jsPlumb.repaintEverything();
  // });
  },


	actions: {
  //   onScrollY: function() {
  //           alert('scrolled');
  //           console.log(_this.get('windowscroll'));
  //         },
		// link: function(){
  //     jsPlumb.repaintEverything()
  //   },

		
		adddata: function(){
      jsPlumb.setContainer("container1");
     jsPlumb.repaintEverything()
			var _this=this
			const option={
             url: 'http://localhost:8000/tree/?boss=52',
            method: 'GET',
        //contentType: 'application/json',
        //AccessControlRequestHeaders: 'authorization,content-type',
        //AccessControlRequestMethod: 'PUT',
       //beforeSend: function (xhr) {   //Include the bearer token in header
        //xhr.setRequestHeader("Authorization", 'Bearer '+ token);
    //},
        success: function(data) {
               
               console.log(_this.get('boss'));
              _this.set('boss',data.boss);
              _this.set('sameBoss',data.sameBoss);
              console.log(_this.get('sameBoss.0.id'));
              _this.set('unders',data.reporters);
              // boss:2               //self.replaceRoute('employee.home');

           },
        error: function(data) {
          if (data.responseJSON.user.email)
          {
               alert(data.responseJSON.user.email)
             }
          if (data.responseJSON.user.first_name)
              { alert(data.responseJSON.user.first_name)
              }
       }
        
              };

         let promise= ajax( option);
         promise.then(() => {
          var sid=this.get('sameBoss.1.user.first_name');
          var slen=this.get('sameBoss.length');
          
          console.log(slen);

          for (var i = slen-1; i >= 0; i--) {
            var common = {
  // anchors:[ "BottomCenter", "TopCenter"],
  endpoints:["Dot", "Blank" ]
};
            var sid2=this.get('sameBoss');
            console.log(sid2[i])
            // jsPlumb.draggable("bossid");
            // jsPlumb.draggable(sid2[i].user.first_name,{containment:"parent"});
            jsPlumb.connect({
      source: bossid,

      target: sid2[i].user.first_name,
      anchors:["Bottom", "Top" ],
       endpoint:[ "Dot", { radius:5, hoverClass:"myEndpointHover" }, common ],
  connector:[ "Bezier", { curviness:30 ,color:"red"}, common ],
  paintStyle:{ stroke:"blue", strokeWidth:1 },
  overlays: [
        [ "Arrow", { foldback:0.5 }, common ],
        [ "Label", { cssClass:"labelClass" } ]  
    ]
    });
                  }
      
      


         });
         
		},
    resetboss: function() {
               
               console.log(_this.get('boss'));
              _this.set('boss',null);
              _this.set('sameBoss',null);
              console.log(_this.get('sameBoss.0.id'));
              _this.set('unders',null);
              // boss:2               //self.replaceRoute('employee.home');

           },
	}
});
