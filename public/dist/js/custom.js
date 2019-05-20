/*$(function () {
    $('#tab_lang').DataTable();
    $('#tab_Track').DataTable();
    $('#tab_Tag1').DataTable();
    $('#tab_Cat1').DataTable();

});*/

langData();
//catData();
// tagData();
// trackData();


var URL = "uploadTrack";

function langData() {
    showLoad();
    $.ajax({
            type: "GET",
            url: "/getPerson",
            contentType: 'application/json',
            success: function (result) {
                $('#langTbody').empty();
                for (var i = 0; i < result.data.length; i++) {

                    $('#langTbody').append('<tr>' +
                        '<td><span style="cursor: pointer;" onclick="callLoan(' + result["data"][i].id + ')"> ' + result["data"][i].id + '</span></td>' +
                        '<td>' + result["data"][i].name + '</td>' +
                        '<td>' + result["data"][i].father_name + '</td>' +
                        '<td>' + result["data"][i].address + ' </td>' +
                        '<td>' + result["data"][i].a_text + ' </td>' +
                        '<td>' + result["data"][i].type + ' </td>' +
                        '<td>' + result["data"][i].description + ' </td>' +
                        '<td>' + result["data"][i].mob + ' </td>' +
                        '<td><i onclick="deletePeople(' + result["data"][i].id + ')" class="fa fa-trash-o" style="cursor: pointer;"></i> </td>' +
                        '</tr>');
                }
                hideLoad();

                $(document).ready(function () {

                    $('#tab_lang1').DataTable();
                });


            }
        }
    );

}

$(document).ready(function () {
    $('#tab_lang1').DataTable();
});

function getLoanType() {
    $.ajax({
            type: "GET",
            url: "/getLoanType",
            contentType: 'application/json',
            success: function (result) {
                $('#loanType').empty();
                $('#tl').empty();
                for (var i = 0; i < result.data.length; i++) {

                    $('#loanType').append('<option value="' + result["data"][i].l_type_id + '">' + result["data"][i].type + '</option>');
                }


            }
        }
    );
}

getLoanType();

function catData() {
    $.ajax({
            type: "GET",
            url: "/getCat",
            contentType: 'application/json',
            success: function (result) {
                $('#catTbody').empty();
                $('#tc').empty();
                for (var i = 0; i < result.data.length; i++) {
                    $('#catTbody').append('<tr>' +
                        '<td>' + result["data"][i].category_id + '</td>' +
                        '<td>' + result["data"][i].category_name + ' </td>' +
                        '<td>' + result["data"][i].isActive + ' </td>' +
                        '</tr>');
                    if (result["data"][i].isActive == 1)
                        $('#tc').append('<option value="' + result["data"][i].category_id + '">' + result["data"][i].category_name + '</option>');

                }


            }
        }
    );
}

function tagData() {
    $.ajax({
            type: "GET",
            url: "/getTag",
            contentType: 'application/json',
            success: function (result) {
                $('#tagTbody').empty();

                $('#tg').empty();

                for (var i = 0; i < result.data.length; i++) {
                    $('#tagTbody').append('<tr>' +
                        '<td>' + result["data"][i].l_tag_id + '</td>' +
                        '<td>' + result["data"][i].tag_name + ' </td>' +
                        '<td>' + result["data"][i].isActive + ' </td>' +
                        '</tr>');
                    if (result["data"][i].isActive == 1)
                        $('#tg').append('<option value="' + result["data"][i].l_tag_id + '">' + result["data"][i].tag_name + '</option>');


                }


            }
        }
    );
}

var copyJson = {};

function trackData() {

    $.ajax({
            type: "GET",
            url: "/getTrack",
            contentType: 'application/json',
            success: function (result) {
                $('#trackTbody').empty();
                copyJson = result;
                //alert(result["data"][0].track_name);
                for (var i = 0; i < result.data.length; i++) {
                    $('#trackTbody').append('<tr>' +
                        '<td>' + result["data"][i].track_id + '</td>' +
                        '<td>' + result["data"][i].track_name + '</td>' +
                        '<td>' + result["data"][i].category_name + ' </td>' +
                        '<td>' + result["data"][i].language_name + ' </td>' +
                        '<td>' + result["data"][i].artist + ' </td>' +
                        '<td>' + result["data"][i].genre + ' </td>' +
                        '<td>' + result["data"][i].tags + ' </td>' +
                        '<td>' + result["data"][i].beat + ' </td>' +
                        '<td>' + result["data"][i].tempo + ' </td>' +
                        '<td>' + result["data"][i].isActive + ' </td>' +
                        '<td><i style="cursor: pointer" class="fa fa-edit" onclick="editTrack(' + result["data"][i].track_id + ')"></i>' +
                        '&nbsp;&nbsp;<i style="cursor: pointer" class="fa fa-trash" onclick="deleteTrack(' + result["data"][i].track_id + ')"></i> </td>' +
                        '</tr>');


                }


            }
        }
    );
}

var arr = [];
var finalArr = [];
var j = 1;


function editTrack(ee) {
    $('#tid').val(ee);
    var inputs = $('#trackForm :input');

    // An array of just the ids...
    var ids = [];
    URL = "updateTrack";
    var form = document.getElementById('trackForm');
    for (var i = 0; i < form.elements.length; i++) {
        var e = form.elements[i];
        ids.push(encodeURIComponent(e.id));
    }
    var tagsStr = "";
    for (var i = 0; i < copyJson.data.length; i++) {
        if (copyJson["data"][i].track_id == ee) {

            $('#' + ids[0]).val(copyJson["data"][i].track_languageID);
            $('#' + ids[1]).val(copyJson["data"][i].track_name);
            $('#' + ids[2]).val(copyJson["data"][i].artist);
            $('#' + ids[3]).val(copyJson["data"][i].track_duration);
            $('#' + ids[4]).val(copyJson["data"][i].track_categoryID);
            $('#' + ids[5]).val(copyJson["data"][i].album);
            $('#' + ids[6]).val(copyJson["data"][i].genre);
            $('#' + ids[7]).val(copyJson["data"][i].description);
            $('#' + ids[8]).val(copyJson["data"][i].lyrics);
            $('#' + ids[9]).val(copyJson["data"][i].year);
            $('#' + ids[10]).val(copyJson["data"][i].beat);
            $('#' + ids[11]).val(copyJson["data"][i].tempo);
            updateTags = copyJson["data"][i].tags;
            break;
        }
    }
    arr = [];
    var newTagStr = updateTags.split(',');
    // alert(newTagStr);
    for (var i = 0; i < newTagStr.length - 1; i++) {
        var newTag = newTagStr[i].split(':');

        if (newTag[1] != "undefined") {
            var today = new Date();

            arr.push(newTag[1]);
        }
    }

    renderTag();
    $('#inFooter').fadeOut(100);
    $('#upFooter').fadeIn(1000);
}

function cancel() {
    document.getElementById('trackForm').reset();
    $('#Ttag').val() == "";
    renderTag();
    $('#tagDiv').empty();
    arr = [];
    $('#inFooter').fadeIn(1000);
    $('#upFooter').fadeOut(100);
    URL = "uploadTrack"

}

function addTag() {
    if (!contains(arr, $('#tg option:selected').text())) {
        arr.push($('#tg option:selected').text());
        //alert(arr);
        renderTag();
        j++;


    }
}

function renderTag() {
    $('#tagDiv').html("");
    for (var i = 0; i < arr.length; i++) {
        $('#tagDiv').append('<button style="cursor: default;" class="btn btn-sm btn-app"  onclick="removeTag(' + i + ')"><b>' + (i + 1) + ':' + arr[i] + '</b>&nbsp;&nbsp;&nbsp;<span onclick="removeTag(' + i + ')" style=" clear; cursor: pointer;" class="close-circled close">x</span></button>');

    }
}

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

function copyArr(a) {
    var s = "";
    for (var i = 0; i < a.length; i++) {
        s += "" + i + ":" + a[i] + ",";
    }
    return s;
    $('#Ttag').val() == ""
}

function removeTag(e) {
    //alert(e);
    arr.splice(e, 1);
    renderTag();
}

$('#trackForm').on('submit', function (e) {

    $('#Ttag').val(copyArr(arr));
    if ($('#Ttag').val() == "") {
        alert("Please Provide Tags!!");
        return false;
    }

    e.preventDefault();
    var fdata = new FormData(document.getElementById('trackForm'));
    var object = {};
    fdata.forEach(function (value, key) {
        object[key] = value;
    });
    var json = JSON.stringify(object);

    $.ajax({
        type: 'POST',
        url: URL,
        dataType: "json",
        contentType: "application/json",
        data: json,
        success: function (data) {

            // alert(data);
            //$('#track_upload_panel').fadeIn(1000);
            toast("Track Load Successfully.");

            document.getElementById('trackForm').reset();
            $('#Ttag').val() == "";
            trackData();
            $('#tagDiv').empty();
            arr = [];

        }
    });

});

function deletePeople(e) {
    if (confirm("Are you Sure?")) {
        showLoad();
        $.get('deletePeople/' + e, function (data) {
            toast(data.message);

            hideLoad();
            langData();
        });
    }
}

var app = angular.module('susApp', []);
app.controller('loanCycleCtr', function ($scope, $http) {
    $http.get("/getLoanCycle").then(function (response) {
        $scope.myData = response.data.data;

        $scope.timw = {type: $scope.myData[0].cycle};
    });
    var IData = {};
    var ldData = {};
    var fdData = {};
    $scope.colors = ['', '', '#ff8989'];
    $scope.getInstallmentsByID = function (lid) {
        //alert(lid);
        showLoad();
        $http.get("/getInstallmentsByID/" + lid).then(function (response) {
            hideLoad();
            IData[lid] = response.data;
            // alert(JSON.stringify(response.data.data));
            $scope.IData = IData;
        }, function (response) {
            //Second function handles error
            alert('Something went wrong');
            $scope.content = "Something went wrong";
        });

    }

    $scope.search = function (id) {
        id = $('#acc').val();
        if ($('#acc').val() == '') {
            alert("Please fill the Account Number!!!");
            return;
        }
        showLoad();
        $http.get("/getPersonByID/" + id).then(function (response) {
            $scope.pData = response.data;
            hideLoad();

        }, function (response) {
            //Second function handles error
            alert('Something went wrong');
            $scope.content = "Something went wrong";
        });
    }
    $scope.getDateReport = function () {
        var fr = $('#fr').val();
        var to = $('#to').val();
        if (fr == '' || to == '') {
            alert("Please fill the required fields!!!");
            return;
        }
        fr = fr.replace('/', '-');
        fr = fr.replace('/', '-');
        to = to.replace('/', '-');
        to = to.replace('/', '-');
        showLoad();
        $http.get("/getDateReport/" + fr + "&" + to).then(function (response) {
            $scope.rData = response.data;
            hideLoad();
            if (JSON.stringify(response.data.data) == 'null') {
                alert('Your Are Not Aoutherized to this Action.');
            }
        }, function (response) {
            //Second function handles error
            hideLoad();
            alert('Something went wrong');
            $scope.content = "Something went wrong";
        });
    }
    $scope.getTodayReport = function (q) {
        // var q=4;

        showLoad();
        $http.get("/getTranctionReport/" + q).then(function (response) {
            if (q > 0)
                $scope.tData = response.data;
            else
                $scope.fData = response.data;

            hideLoad();

        }, function (response) {
            //Second function handles error
            hideLoad();
            alert('Something went wrong');
            $scope.content = "Something went wrong";
        });
    }
    $scope.searchLoan = function (id) {
        id = $('#accLoan').val();
        if ($('#accLoan').val() == '') {
            alert("Please fill the Account Number!!!");
            return;
        }
        $http.get("/getPersonLoanByID/" + id).then(function (response) {
            $scope.lData = response.data;
            //alert(JSON.stringify(response.data.data));

        }, function (response) {
            //Second function handles error
            alert('Something went wrong');
            $scope.content = "Something went wrong";
        });
    }
    $scope.deletePeople = function (id) {
        //alert(id);
        if (confirm("Are you Sure?")) {
            $http.get("/deletePersonByID/" + id).then(function (response) {
                // $scope.lData = response.data;
                alert(JSON.stringify(response.data.data));

            }, function (response) {
                //Second function handles error
                alert('Something went wrong');
                $scope.content = "Something went wrong";
            });
        }
        id
    }
    $scope.deleteLoanByloanID = function (id, acc) {
        //alert(id);
        if (confirm("Are you Sure?")) {
            showLoad();
            $http.get("/deleteLoanByloanID/" + id).then(function (response) {
                // $scope.lData = response.data;
                //alert(JSON.stringify(response.data.message));
                toast(JSON.stringify(response.data.message) + " If there is no Loan Records then please add loan first.");

                $scope.searchLoan(acc);
                hideLoad();

            }, function (response) {
                //Second function handles
                hideLoad();
                alert('Something went wrong');
                $scope.content = "Something went wrong";

            });
        }
    }
    $scope.installmentsLoanByloanID = function (id) {
        //alert(id);

        showLoad();
        $http.get("/installmentsLoanByloanID/" + id).then(function (response) {
            // $scope.lData = response.data;
            //alert(JSON.stringify(response.data.message));
           // toast(JSON.stringify(response.data.message) + " If there is no Loan Records then please add loan first.");
            $scope.IlData = response.data;
            hideLoad();

        }, function (response) {
            //Second function handles
            hideLoad();
            alert('Something went wrong');
            $scope.content = "Something went wrong";

        });

    }
    $scope.getLoanDetail = function (id) {
        //alert(id);
        if ($('#accLoan').val() == '') {
            alert("Please fill the Account Number!!!");
            return;
        }
        $http.get("/getLoanDetailByID/" + id).then(function (response) {
            ldData[id] = response.data;
            $scope.ldData = ldData;
            // alert(JSON.stringify(response.data.data));

        }, function (response) {
            //Second function handles error
            alert('Something went wrong');
            $scope.content = "Something went wrong";
        });
    }
    $scope.getDefaulterDetail = function () {

        showLoad();
        $http.get("/getDefaulterDetail").then(function (response) {
            dData = response.data;
            $scope.dData = dData;
            // alert(JSON.stringify(response.data.data));
            hideLoad();
        }, function (response) {
            //Second function handles error
            alert('Something went wrong');
            $scope.content = "Something went wrong";
            hideLoad();
        });
    }
    $scope.getStats = function () {

        showLoad();
        $http.get("/getStats").then(function (response) {

            sData = response.data;
            $scope.sData = sData;
            //alert(JSON.stringify(sData.data[0][0].psum)+"");
            hideLoad();
        }, function (response) {
            //Second function handles error
            alert('Something went wrong');
            $scope.content = "Something went wrong";
            hideLoad();
        });
    }
    $scope.getForms = function () {

        showLoad();
        $http.get("/getForms").then(function (response) {

            frData = response.data;
            $scope.frData = frData;
            //alert(JSON.stringify(frData.data) + "");
            hideLoad();
        }, function (response) {
            //Second function handles error
            alert('Something went wrong');
            $scope.content = "Something went wrong";
            hideLoad();
        });
    }
    $scope.gs = function (e) {
        // alert(e);
        // e+='()';
        $scope.$eval(e);
    }
    $scope.getTabs = function () {

        showLoad();
        $http.get("/getTabs").then(function (response) {

            tabData = response.data;
            $scope.tabData = tabData;
            // alert(JSON.stringify(tabData.data[0])+"");
            hideLoad();
        }, function (response) {
            //Second function handles error
            alert('Something went wrong');
            $scope.content = "Something went wrong";
            hideLoad();
        });
    }
    $scope.getTranctionReport = function (id) {
        showLoad();
        $http.get("/getTranctionReport/1").then(function (response) {
            var res = response.data.data[0];
//alert('1');
//alert(JSON.stringify(res));
            $(document).ready(function () {
                var bar = new Morris.Bar({
                    element: 'bar-chart',
                    resize: true, data: res,
                    barColors: ['#427923'],
                    xkey: 'y',
                    ykeys: ['amt'],
                    labels: ['Total'],
                    hideHover: 'false',
                    stacked: 'true'
                });
            });
            hideLoad();


        }, function (response) {
            //Second function handles error
            alert('Something went wrong');
            $scope.content = "Something went wrong";
            hideLoad();
        });
    }
    $scope.getfineByLoanID = function (id) {
        //alert(id);
        if ($('#accLoan').val() == '') {
            alert("Please fill the Account Number!!!");
            return;
        }
        $http.get("/getfineByLoanID/" + id).then(function (response) {
            fdData[id] = response.data;
            $scope.fdData = fdData;
            //alert(JSON.stringify(response.data.data));

        }, function (response) {
            //Second function handles error
            alert('Something went wrong');
            $scope.content = "Something went wrong";
        });
    }
    $scope.installDeposit = function (id) {
        //alert(id);
        showLoad();
        if ($('#Iamt' + id).val() == '') {
            alert("Please fill the Installment Amount!!!");
            hideLoad();
            return;
        }
        var note = $('#Inote' + id).val();
        if ($('#Inote' + id).val() == '') {
            note = 'None';
        }

        $http.get("/updateInstallment/" + id + "&" + $('#Iamt' + id).val() + "& " + note).then(function (response) {
            //$scope.lData = response.data;
            alert(JSON.stringify(response.data.message));
            $('#Iamt' + id).val('');
            $('#Inote' + id).val('');
            // $scope.getInstallmentsByID(id);
            $scope.searchLoan($('#accLoan').val());
            hideLoad();


        }, function (response) {
            //Second function handles error
            alert('Something went wrong');
            $scope.content = "Something went wrong";
        });
    }
    $scope.fineDeposit = function (id) {
        //alert(id);

        if ($('#Famt' + id).val() == '') {
            alert("Please fill the Installment Amount!!!");
            return;
        }
        var note = $('#Fnote' + id).val();
        if ($('#Fnote' + id).val() == '') {
            note = 'None';
        }
        showLoad();

        $http.get("/updateFine/" + id + "&" + $('#Famt' + id).val() + "& " + note).then(function (response) {
            //$scope.lData = response.data;
            // alert(JSON.stringify(response.data.message));
            $('#Famt' + id).val('');
            $('#Fnote' + id).val('');
            // $scope.getInstallmentsByID(id);
            $scope.searchLoan($('#accLoan').val());
            hideLoad();
        }, function (response) {
            //Second function handles error
            alert('Something went wrong');
            $scope.content = "Something went wrong";
        });
    }
    ////Intail Calls////
    $scope.getTabs();
    $scope.getForms();
    $scope.getTranctionReport();
    $scope.getDefaulterDetail();
    //$scope.getStats();

    ///Intail Calls End

    //Print

    $scope.printInstall = function (id) {

        $http.get("/getPrintByinID/" + id).then(function (response) {


            //alert(JSON.stringify(response.data.data));
            w = window.open();
            var ht = response.data.data;
            w.document.write(ht);
            w.print();
            w.close();

        }, function (response) {
            //Second function handles error
            alert('Something went wrong');
            $scope.content = "Something went wrong";
        });

    }
});


var id = 0;
$('#personForm').on('submit', function (e) {

    e.preventDefault();
    var fdata = new FormData(document.getElementById('personForm'));
    var object = {};
    fdata.forEach(function (value, key) {
        object[key] = value;
    });
    var json = JSON.stringify(object);
    showLoad();
    $.ajax({
        type: 'POST',
        url: "uploadLang",
        dataType: "json",
        contentType: "application/json",
        data: json,
        success: function (data1) {
            langData();
            // alert(data);
            //$('#track_upload_panel').fadeIn(1000);


            id = parseInt(data1["data"].insertId + "");

            $('#tab_lang').DataTable();
            $('#accText').html("Person Account Number:<b style='color: red;'>" + data1["data"].insertId + "</b>");
            hideLoad();

            document.getElementById('accModalBtn').click()[0];
            //document.getElementById('personForm').reset();

            langData();


        }
    });

});

function callLoan(id) {
    if (typeof(id) === 'number') {

    } else {
        id = id.getAttribute("data-filterListId");
        //alert(id);
    }
    $('#myTab a[href="#tab_3"]').tab('show');
    $('#accLoan').focus();
    $('#accLoan').val(id + "");
    document.getElementById('findLoanDeposit').click()[0];
    scroll(0, 0);
    hideLoad();

}

$('#loan').on('submit', function (e) {

    e.preventDefault();
    var fdata = new FormData(document.getElementById('loan'));
    var object = {};
    fdata.forEach(function (value, key) {
        object[key] = value;
    });
    var json = JSON.stringify(object);

    $.ajax({
        type: 'POST',
        url: "insertLoan",
        dataType: "json",
        contentType: "application/json",
        data: json,
        success: function (data1) {
            alert(JSON.stringify(data1.message));
            document.getElementById('loan').reset();


        }
    });

});

function goForLoan() {
    $('#accModal').modal('hide');
    $('#myTab a[href="#tab_2"]').tab('show');
    $('#acc').focus();
    $('#acc').val(id + "");
    document.getElementById('find').click()[0];
    scroll(0, 0);

}

function showLoad() {
    $('#load').show();
    $('#load').fadeIn(600);

}

function hideLoad() {
    $('#load').fadeOut(200);
}

$(document).ready(function () {


});

//Timer to logout

$(document).ready(function () {
    $(document).click(function () {

        if (typeof timeOutObj != "undefined") {
            clearTimeout(timeOutObj);
        }

        timeOutObj = setTimeout(function () {


            window.location = "/";
        }, 200000);   //will expire after twenty minutes

    });

});

