(function(){
    window.stringifyJSON = function(input){
        var results = "";
        var t = typeof input;
        if ( t === "string" ){
            results += escapingHelper(input);
        }
        else if ( t === "number" || t === "boolean" ){
            results += String(input);
        }
        else if ( input === null ){
            results += "null";
        }
        else if ( input === undefined ){
            results += undefined;
        }
        else if ( Array.isArray(input) ){
            var items = [];
            for (var i = 0; i < input.length; i++) {
                items.push(stringifyJSON(input[i]));
            }
            results = results.concat('[', items, ']');
        }
        else if ( t === "object"){
            var items = [];
            for ( key in input ){
                if(typeof input[key]==="function"){
                    return "{}";
                }
                items.push(escapingHelper(key)+":"+stringifyJSON(input[key]));
            }
            items = items.join(',');
            results = results.concat('{',items,'}');
        }
        return results;
    };

    var escapingHelper = function(input){
        var firstesc = input.replace(/\\/g,"\\\\");
        var secondesc = '"'+firstesc.replace(/\"/g,'\\"')+'"';
        return secondesc;
    }
})();