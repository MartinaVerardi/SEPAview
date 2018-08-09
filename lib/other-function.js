


function max(data) {
    let m = data[0], i = 1, n = data.length;

    for (; i <= n; ++i) {
        if (data[i] > m) {
            m = data[i];
        }
    }

    return m;
}

function min(data) {
    let m = data[0], i = 1, n = data.length;

    for (; i <= n; ++i) {
        if (data[i] < m) {
            m = data[i];
        }
    }

    return m;
}


 function createSvg(data, l){

     let svg = d3.select(l).selectAll("svg").data(data).enter().append(
        "svg").attr("class", "bullet").attr("width",
        width + margin.left + margin.right).attr("height",
        height + margin.top + margin.bottom).append("g").attr("transform",
        "translate(" + margin.left + "," + margin.top + ")").call(chart);

     let title = svg.append("g").style("text-anchor", "end").attr("transform",
        "translate(940,27)");

    title.append("text").attr("class", "title").text(function(d) {
        return d.title;
    });

    title.append("text").attr("class", "subtitle").attr("dy", "1em").text(
        function(d) {
            return d.subtitle;
        });



     let i, id = l.substr(1, l.length - 1);
     for(i = 0; i <= data.length - 1; i++){
         if( document.getElementById(data[i].title) === null){
             element = document.createElement("a");
             element.id = data[i].title;
             element.className = "button";
             let t = document.createTextNode("STORICO");
             element.appendChild(t);
             document.getElementById(id).appendChild(element);
             element.setAttribute('data-quantity', data[i].quantities);
             element.setAttribute('href','indexAnalitics.html');
             element.setAttribute('target','blanck');


             //$(l).html("<a id = data[i].title class = 'button' data-quantity = data[i].quantities >STORICO</a>")


         }
     }



     var buttons = document.getElementsByClassName("button");
     var buttonsCount = buttons.length;
     for (var j = 0; j < buttonsCount; j += 1) {
         buttons[j].onclick = function(e) {
             console.log(this.dataset.quantity);

             qua = this.dataset.quantity;

         };
     }








 }

function divideData(data, l){
    let i = 0, d = [], j = 0;
    for(; i <= data.length - 1; i++){
        if(data[i].location === l){
            d[j] = data[i];
            j++;
        }
    }
    return d;
}



function countLocation(data){
    let i , j, isEqual = 0, k = 0, l = [];

    for(i = 0; i <= data.length - 1; i++){
        for(j = 0; j <= l.length; j++){
            if( l[j-1] === data[i].location ){
                isEqual = 1;
            }
        }
        if(isEqual === 0){
            l[k] = data[i].location;
            k++;
        }else{
            isEqual = 0;
        }
    }

    return l;
}


function humidex(T, h){
    //https://it.wikipedia.org/wiki/Punto_di_rugiada
    //https://en.wikipedia.org/wiki/Humidex

    //Approssimazione di Magnus-Tetens
    //umidità non %
    let hr = h / 100;
    let alfa = (( 17.27 * T ) / ( 237.7 + T )) + Math.log(hr);
   //dew point
    let Tdp = ( 237.7 * alfa ) / ( 17.27 - alfa );
    //humidex
    let b = 5417.7530 * ( ( 1 / 273.16 ) - ( 1 / (273.15 * Tdp) ) ) ;
    let H = T + 0.5555 * ( 6.11 * Math.E ^ (b) - 10 );

    return H;
}


