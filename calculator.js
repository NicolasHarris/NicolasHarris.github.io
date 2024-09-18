
var min =0, max=0, total =0;
var numbers =[];

var operators ={
    '*': function(x,y){return x * y;},
    '/': function(x,y){if(y ==0){return "computation error";}else{x/y;}},
    '-': function(x,y){return x - y;},
    '+': function(x,y){return (x + y);},
    '%': function(x,y){return x % y;}

}

function tableConstruct(x,y,o,itr){
    var result;
    if(o == '+' || o== '-' || o=='*' || o == '/'||o == '%'){
        
        if(isNaN(x) || isNaN(y)){
            result = "computation error";
            (isNaN(x)?(y>max?max=y:min=Math.min(y,min)):(x>max?max=x:min=Math.min(x,min)));
            
        }else{
            result = operators[o](Number(x),Number(y));
            max = Math.max(x,y,max,result);
            min = Math.min(x,y,min,result);
            total += result;
        }
    }else{
        result = "computational error";
       
    }
    if(itr == 1){
        document.write("<table>");
        document.write("<tr><th> x </th><th> op </th><th> y</th><th>Result</th></tr>");
    }
    document.write("<tr><td>" + x + "</td><td>" + o + "</td><td>" + y + "</td><td>" + result + "</td></tr>");




}


function createResultTable(i){
    if(i >= 1){
        document.write("</table>");
        document.write("<table>");
         document.write("<tr><th> Min </th><th> Max </th><th> Average </th><th> Total </th></tr>");
        document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + (total/i).toFixed(2)+ "</td><td>" + total + "</td></tr>");
        document.write("</table");
    }
}



function promptEvent(id){
    var repeat = true;
    var x ,y,o,i =0;

    while(repeat){
        let x = prompt('Enter a number to calculate');
        if(x != null){
            let y = prompt('Enter another number to calculate');
            if(y != null){
                let o = prompt('Enter an operator to operate');
                if(o == null){
                    repeat = false;
                    id.innerHTML = "Calculation Canceled";     
                }else{
                    i++;
                    tableConstruct(x,y,o,i);
                }
            }else{
                
                repeat = false;
                id.innerHTML = "Calculation Canceled";
                
            }
        }else {
            repeat = false;
            createResultTable(i);
            
        }
    }

}





