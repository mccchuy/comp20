$(document).ready(function() { 
    $(".totals").hide();
    $("#fullTotal").hide();
    genTable();
});

function validate(event) {
    event.preventDefault();
    err = false;
    with(document.orderForm) {

        if ((quantity1.value == "") && (quantity2.value == "") && quantity3.value == "") {
            alert("Must order at least 1 item!");
            err = true;
        }

    }
    if (err == false) {
        $(".totals").show();
        $("#fullTotal").show();
        t1Str = document.getElementById("total1").innerHTML;
        t1 = parseFloat(t1Str.split('=')[1]);

        t2Str = document.getElementById("total2").innerHTML;
        t2 = parseFloat(t2Str.split('=')[1]);

        t3Str = document.getElementById("total3").innerHTML;
        t3 = parseFloat(t3Str.split('=')[1]);

        total = (t1 + t2 + t3).toFixed(2);
        $("#fullTotal").html("Total = $" + total);
    }
}

function genTable() {
        $("select[id ='quantity1']").change(function() {
            var q1 = parseInt($('select[id ="quantity1"]').find(":selected").text());
            $("#quan1").html(q1);
            hdTotal = (Math.round((q1 * 3.75) * 100) / 100).toFixed(2);
            $("#total1").html("= " + hdTotal);
        });

        $("select[id ='quantity2']").change(function() {
            var q2 = parseInt($('select[id ="quantity2"]').find(":selected").text());
            $("#quan2").html(q2);
            ffTotal = (Math.round((q2 * 2) * 100) / 100).toFixed(2);
            $("#total2").html("= " + ffTotal);
        });

        $("select[id ='quantity3']").change(function() {
            var q3 = parseInt($('select[id ="quantity1"]').find(":selected").text());
            $("#quan3").html(q3);
            dTotal = (Math.round((q3 * 1.5) * 100) / 100).toFixed(2);
            $("#total3").html("= " + dTotal);
        });
}
