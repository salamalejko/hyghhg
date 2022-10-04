$( document ).ready(function() {
    function _x(STR_XPATH) {
        var xresult = document.evaluate(STR_XPATH, document, null, XPathResult.ANY_TYPE, null);
        var xnodes = [];
        var xres;
        while (xres = xresult.iterateNext()) {
            xnodes.push(xres);
        }
    
        return xnodes;
    }

    var currentTitle = $(document).attr('title');
    console.log(currentTitle)
    if (currentTitle == 'FNSTOCK | Biggest Fortnite Store' || currentTitle == 'FNSTOCK | Feedbacks'){
        $(_x('/html/body/section[10]')).remove();
    }
    else if(currentTitle == 'FNSTOCK | Order'){
        $(_x('/html/body/section[5]')).remove();
    } 
    else if (currentTitle == 'FNSTOCK | FAQ & T.O.S'){
        $(_x('/html/body/section[8]')).remove();
    }

});