import Component from '@ember/component';
import { computed } from '@ember/object';
export default Component.extend({
  tagName: "section",
  // The page we are currently on
  page: 1,
  // The number of items to show per page
  paginateBy: 2,


  // Returns the list of items for the current page only
  paginatedItems: computed('items', 'page', function(){
    this._super();

    var i = (parseInt(this.get('page')) - 1) * parseInt(this.get('paginateBy'));
    var j = i + parseInt(this.get('paginateBy'));
    //console.log(this.get('pageNumbers'));
    var n = this.get('items.length');
    var c = parseInt(this.get('paginateBy'));
    var r = Math.floor(n/c);
    if(n % c > 0) {
      r += 1;
    }
    this.set('numberOfPages',r)
    //var pa=this.get('showNext')
    return this.get('items').slice(i, j);
  }),
  // The total number of pages that our items span
  numberOfPages: 0,
  // An array containing the number of each page: [1, 2, 3, 4, 5, ...]
  pageNumbers: computed('numberOfPages', function(){
    var n = Array(this.get('numberOfPages'));
    for(var i = 0;i < n.length;i++) {
      n[i] = i + 1;
    }
    return n;
  }),
  // Whether or not to show the "next" button
  showNext: computed('page', function(){

    return (this.get('page') < this.get('numberOfPages'));
  }),
  // Whether or not to show the "previous" button
  activepage:function() {
  return this.get('page');
},
  showPrevious: computed('page', function(){
    return (this.get('page') > 1);
  }),
  // The text to display on the "next" button
  nextText: 'Next page',
  // The text to display on the "previous" button
  previousText: 'Previous page',
  actions: {
    // Show the next page of items
    nextClicked() {
      if(this.get('page') + 1 <= this.get('numberOfPages')) {
        this.set('page', this.get('page') + 1);
      }
    },
    // Show the previous page of items
    previousClicked() {
      if(this.get('page') > 0) {
        this.set('page', this.get('page') - 1);
      }
    },
    // Go to the clicked page of items
    pageClicked(pageNumber){
      this.set('page', pageNumber);
    }
  }
});
