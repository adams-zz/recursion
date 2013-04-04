// fixme
var getElementsByClassName = function(targetClass){
    result = [];
    var recur = function (node) {
        // debugger;
        if ((node.classList) && node.classList.length > 0){
            if (_.contains(node.classList, targetClass)){
                result.push(node)
            }
        }
        if (node.childNodes.length > 0){
            _.each(node.childNodes, recur)
        }
    }
    recur(document.body);
    return result;
 }