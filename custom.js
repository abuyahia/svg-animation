jQuery('#icons').prepend('<svg width="100px" height="150px" viewBox="0 0 230 200" enable-background="new 0 0 200 200" xml:space="preserve" id="iconScissors" aria - labelledby="scissors" role = "presentation" ><g ref="leftscissor"><path id="XMLID_8_" fill="#4F453C" d="M69.1,146.9c-3.5,0-6.7-2.3-7.6-5.8L35.2,44.9l-24.5-1.1c-4.4-0.2-7.7-3.9-7.5-8.2    c0.2-4.4,3.7-7.6,8.2-7.5l30.3,1.3c3.4,0.1,6.4,2.5,7.3,5.8l27.9,101.8c1.1,4.2-1.3,8.6-5.5,9.7C70.5,146.8,69.8,146.9,69.1,146.9    L69.1,146.9z" /><path id="XMLID_22_" fill="#4F453C" d="M88,193.9c-12,0-21.7-9.7-21.7-21.7S76,150.4,88,150.4s21.7,9.7,21.7,21.7    S100,193.9,88,193.9L88,193.9z M88,166.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9S91.3,166.2,88,166.2    L88,166.2z" /><path id="XMLID_18_" fill="#4F453C" d="M153.8,193.9c-12,0-21.7-9.7-21.7-21.7s9.7-21.7,21.7-21.7c12,0,21.7,9.7,21.7,21.7    S165.8,193.9,153.8,193.9L153.8,193.9z M153.8,166.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9    S157.1,166.2,153.8,166.2L153.8,166.2z" /><path id="XMLID_3_" fill="#4F453C" d="M175.3,146.9H69.1c-3.6,0-6.7-2.4-7.6-5.8L41.3,67.7c-0.7-2.4-0.2-4.9,1.3-6.9    c1.5-2,3.8-3.1,6.3-3.1h55.3c4.4,0,7.9,3.5,7.9,7.9c0,4.4-3.5,7.9-7.9,7.9H59.3l15.9,57.5h94.1l15.9-57.5h-31    c-4.4,0-7.9-3.5-7.9-7.9c0-4.4,3.5-7.9,7.9-7.9h41.4c2.5,0,4.8,1.2,6.3,3.1c1.5,2,2,4.5,1.3,6.9l-20.2,73.3    C182,144.5,178.9,146.9,175.3,146.9L175.3,146.9z" /></g><g ref="rightscissor"><path id="XMLID_2_" fill="#4F453C" d="M121.3,124.4c-2.1,0-4.1-0.8-5.6-2.3l-24-24c-3.1-3.1-3.1-8.1,0-11.2    c3.1-3.1,8.1-3.1,11.2,0l18.4,18.4l18.4-18.4c3.1-3.1,8.1-3.1,11.2,0c3.1,3.1,3.1,8.1,0,11.2l-23.9,24    C125.4,123.5,123.4,124.4,121.3,124.4L121.3,124.4z" /><path id="XMLID_1_" fill="#4F453C" d="M121.1,119.9c-4,0-7.4-3-7.9-7.1c-0.4-3.5-0.5-7.1-0.5-10.6c0-44.5,28.6-84.1,71.2-98.5    c4.1-1.4,8.6,0.8,10,5c1.4,4.1-0.8,8.6-5,10c-36.2,12.2-60.5,45.8-60.5,83.5c0,3.1,0.2,6.1,0.5,9.1c0.4,4.3-2.7,8.2-7.1,8.6    C121.7,119.9,121.4,119.9,121.1,119.9L121.1,119.9z" /></g></svg > ');

var main = Snap("#iconScissors");
var icon = Snap("#XMLID_2_");
var icon_2 = Snap("#XMLID_1_");
var cir = Snap("#XMLID_22_");
var cir_2 = Snap("#XMLID_18_");

var vcolor = ["maroon", "white", "red", "black", "#eee", "00bfbb"];
var vcolor_stroke = ["maroon", "white", "red", "black", "#eee", "00bfbb"];
var vstrock = ["1", "5", "2", "7", "4", "1"];
var nstroke = "stroke-width";
var icon_w = 100;
var state2 = 'click';

main.click(function () {
    if (state2 == "un-click") {
        state2 = 'click';
        var y = 0;
        (function loop() {
            i = 1;
            main.animate({ transform: 't5,t5' }, 1000)
            main.animate({ width: '100' }, 500, mina.linear)

            if (++i > vcolor.length) {
                setTimeout(loop, 300);
                console.log("abc", i);
            }

        })();

        console.log("y: ", y);
    } else {

        state2 = 'un-click';
        var y = 6;
        main.animate({ transform: 't200,t5' }, 1000)
        icon.animate({ transform: 'translate(' + y + ',10)' }, 1000)
        icon_2.animate({ transform: 'translate(' + y + ',10)' }, 1000)

        var i = 0;

        (function loop() {
            console.log(i);
            console.log(vstrock[i]);
            console.log(vcolor[i]);
            cir.animate({ fill: vcolor[i], strokeWidth: vstrock[i], stroke: '#000' }, 500, mina.easeinout)
            cir_2.animate({ fill: vcolor[i], strokeWidth: vstrock[i], stroke: '#000' }, 500, mina.linear)
            main.animate({ width: '150' }, 500, mina.linear)

            if (++i < vcolor.length) {
                setTimeout(loop, 300);
            }
        })();
        console.log("y un click: ", y);

    }

});

