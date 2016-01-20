var LinkedHashMap = function () {
    this.array = [];
    this.map = {};
};
LinkedHashMap.prototype = {
    constructor: LinkedHashMap,
    
    hs: function (key, value) {
        var key = key || null, value = value || null, me = this;
        if (key === null) {
            if (value !== null) {
                for (var p in me.map) {
                    if (me.map[p] === value) {
                        return true;
                    }
                }
            }
        } else {
            if (key in me.map) {
                return true;
            }
        }
        return false;
    },
    
    ad: function (key, value) {
        var value = value || null;
        var key = key || null;
        var me = this;
        if (key === null) {
            return;
        }
        if (key in me.map) {
            me.map[key] = value;
        } else {
            me.array.push(key);
            me.map[key] = value;
        }
    },
         
    get: function (key) {
        return this.map[key];
    },
    
    keys: function () {
        var keys = [];
        for(var i=0;i<this.array.length;i++)
            keys.push(this.array[i]);
        
        return keys;
    }
};
