var Iterator = function(items) {
    this.index = 0;
    this.items = items;
};
 
Iterator.prototype = {
    
    next: function() {
        return this.items[this.index++];
    },
    hasNext: function() {
        return this.index < this.items.length;
    }
   
};
