document.body.style.zoom="90%";
var app = angular.module('susApp', []);
app.controller('MBCtrl', function ($scope, $http) {
    
    var IData = {};
    var ldData = {};
    var frData = {};
    var fdData = {};
    var sdate = null;
    var edate = null;
    var sdate_edit = null;
    var edate_edit = null;
    $scope.colors = ['', '', '#ff8989'];


    // $scope.search = function (id) {

    //     id = $('#acc').val();
    //     if ($('#acc').val() == '') {
    //         alert("Please fill the Valid Mobile Number and Booking ID!!!");
    //         return;
    //     }
    //     showLoad();
    //     $http.get("/getSearchBymob_bid/" + id).then(function (response) {
    //         $scope.searchData = response.data;
    //         hideLoad();

    //     }, function (response) {
    //         //Second function handles error
    //         alert('Something went wrong');
    //         $scope.content = "Something went wrong";
    //     });
    // }

//     $scope.getHotelsList = function () {

//         $http.get("/getHotelsList/").then(function (response) {
//             $scope.hData = response.data;

//             alert("");
//             hideLoad();
//             $scope.hData=hData;
//         }, function (response) {
//             //Second function handles error
//             alert('Something went wrong');
//             $scope.content = "Something went wrong";
//         });
//     }
//     $scope.getTodayActivity = function () {
// showLoad();
//         $http.get("/getTodayActivity/").then(function (response) {
//             $scope.TaData = response.data;

//             //alert("");
//             hideLoad();
//             $scope.TaData=TaData;
//         }, function (response) {
//             //Second function handles error
//             alert('Something went wrong');
//             $scope.content = "Something went wrong";
//         });
//     }
    $scope.getGridviewHeaderById = function (id) {

        showLoad();
        $http.get("/getGridviewHeaderById/" + id).then(function (response) {
            $scope.ghData = response.data;
            hideLoad();

        }, function (response) {
            //Second function handles error
            //alert('Something went wrong');
            $scope.content = "Something went wrong";
        });
    }
       $scope.getSetting = function () {


        $http.get("/getSetting").then(function (response) {

            if (JSON.stringify(response.data.data[0][0].is_on)==0)
               window.location.href="/";
            if (JSON.stringify(response.data.data[0][0].is_readonly)==1) {
                $(':button').prop('disabled', true);
                //$(':text').prop('disabled', true);
            }


        }, function (response) {
            //Second function handles error
            //alert('Something went wrong');
            $scope.content = "Something went wrong";
        });
    }
    var cCount = 0;
    var globalStudentUpdateFormAction = '';
//     $scope.getStudentDetailById = function (id) {
// //alert(id);
//         showLoad();
//         if (cCount == 0) {
//             globalStudentUpdateFormAction = $('#student_formBySId').attr('action') + "";
//             cCount++;
//         }

//         $('#student_formBySId').attr('action', globalStudentUpdateFormAction);

//         $http.get("/getStudentDetailById/" + id).then(function (response) {
//             $scope.fdData = response.data;
//             hideLoad();
//             $('#student_formBySId').attr('action', ($('#student_formBySId').attr('action') + "&" + id) + "");
//         }, function (response) {
//             //Second function handles error
//             hideLoad();

//             alert('Something went wrong');
//             $scope.content = "Something went wrong";
//         });


//     }
    $scope.getGridviewById = function (id) {

        showLoad();
        $http.get("/getGridviewById/" + id).then(function (response) {
            $scope.gdData = response.data;
            hideLoad();

        }, function (response) {
            //Second function handles error
            alert('Something went wrong');
            $scope.content = "Something went wrong";
        });
    }
    
    $scope.getGalleryList = function () {
        
        
        $http.get("/getGalleryList").then(function (response) {
            $scope.gData = response.data;
            hideLoad();
//alert(JSON.stringify($scope.gData));

        }, function (response) {
            //Second function handles error
            hideLoad();
            alert('Something went wrong');
            $scope.content = "Something went wrong";
        });
    }
    $scope.getGalleryList();

    $scope.getFeedbackList = function () {
        
        
        $http.get("/getFeedbackList").then(function (response) {
            $scope.feedData = response.data;
            hideLoad();
//alert(JSON.stringify($scope.feedData.data));

        }, function (response) {
            //Second function handles error
            hideLoad();
            alert('Something went wrong');
            $scope.content = "Something went wrong";
        });
    }
    $scope.getFeedbackList();
//     $scope.getIsolateReport = function (hid) {

//         showLoad();
//         $http.get("/getIsolateReport/"+hid).then(function (response) {
//             $scope.rData = response.data;
//             hideLoad();
// //alert(JSON.stringify(response.data.data[0]));

//         }, function (response) {
//             //Second function handles error
//             hideLoad();
//             alert('Something went wrong');
//             $scope.content = "Something went wrong";
//         });
//     }
//     var category = -1;
//     $scope.getRoomsByCategoryID = function (q) {
//         // var q=4;
//         if (q != -1)
//             category = q;
//         showLoad();
//         var d_date = $('#datetimepickerFromText').val();

//         $http.get("/getRoomsByCategoryID/" + category + "&" + d_date).then(function (response) {

//             $scope.tData = response.data;

//             hideLoad();
//             $scope.getToltipForRooms();

//         }, function (response) {
//             //Second function handles error
//             hideLoad();
//             alert('Something went wrong');
//             $scope.content = "Something went wrong";
//         });
//     }


//     $scope.getRoomDetailByRoomID = function (id) {

//         $http.get("/getRoomDetailByRoomID/" + id).then(function (response) {
//             $scope.fdData = response.data;

//             //alert(JSON.stringify(response.data.data[1]));
//             dateDisable = [];
//             var t = 0;
//             //  var dateDisable = [];
//             for (var i = 0; i < response.data.data[1].length; i++) {

//                 dateDisable.push(response.data.data[1][i].disabled_dates.replace(/\b0/g, '').substring(0,response.data.data[1][i].disabled_dates.indexOf("T")-1) + '');
// //alert(dateDisable);
// if (i == (response.data.data[1].length) - 1 || (response.data.data[1].length) == 0) {
//                     if (sdate != null) {

//                         sdate.datepicker('destroy');
//                         edate.datepicker('destroy');
//                     }
//                     t = 1;
//                     sdate = $('#start_date').datepicker({

//                         "format": 'yyyy-mm-dd',
//                         "startDate": today,
//                         beforeShowDay: function (date) {
//                             var allDates = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
//                             if (dateDisable.indexOf(allDates) == -1)
//                                 return true;
//                             else
//                                 return false;
//                         }
//                     }).on('changeDate', function () {
//                         $(this).datepicker('hide');
//                     }).datepicker("setDate", today);
//                     edate = $('#end_date').datepicker({

//                         "format": 'yyyy-mm-dd',
//                         "startDate": today,
//                         beforeShowDay: function (date) {
//                             var allDates = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
//                             if (dateDisable.indexOf(allDates) == -1)
//                                 return true;
//                             else
//                                 return false;
//                         }


//                     }).on('changeDate', function () {
//                         $(this).datepicker('hide');
//                     }).datepicker("setDate", tomorrow);


//                 }
//             }

//             if (t == 0) {
//                 if (sdate != null) {

//                     sdate.datepicker('remove');
//                     edate.datepicker('remove');
//                 }

//                 sdate = $('#start_date').datepicker({

//                     "format": 'yyyy-mm-dd',
//                     "startDate": today,
//                     beforeShowDay: function (date) {
//                         var allDates = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
//                         if (dateDisable.indexOf(allDates) == -1)
//                             return true;
//                         else
//                             return false;
//                     }
//                 }).on('changeDate', function () {
//                     $(this).datepicker('hide');
//                 }).datepicker("setDate", today);
//                 edate = $('#end_date').datepicker({

//                     "format": 'yyyy-mm-dd',
//                     "startDate": today,
//                     beforeShowDay: function (date) {
//                         var allDates = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
//                         if (dateDisable.indexOf(allDates) == -1)
//                             return true;
//                         else
//                             return false;
//                     }


//                 }).on('changeDate', function () {
//                     $(this).datepicker('hide');
//                 }).datepicker("setDate", tomorrow);


//             }
//             // alert(dateDisable);


//         }, function (response) {
//             //Second function handles error
//             alert('Something went wrong');
//             $scope.content = "Something went wrong";
//         });
//     }
//     $scope.getBookindDetailBySummaryID = function (q) {

//         showLoad();


//         $http.get("/getBookindDetailBySummaryID/" + q).then(function (response) {

//             fdData[2] = response.data;
//             $scope.fdData = fdData;

//             hideLoad();
//             dateDisable = [];
//             var t = 0;
//             //  var dateDisable = [];
//             for (var i = 0; i < response.data.data[1].length; i++) {//alert(response.data.data[1][i].disabled_dates+"");4

//                 dateDisable.push(response.data.data[1][i].disabled_dates.replace(/\b0/g, '') + '');

//                 if (i == (response.data.data[1].length) - 1 || (response.data.data[1].length) == 0) {
//                     if (sdate_edit != null) {

//                         sdate_edit.datepicker('remove');
//                         edate_edit.datepicker('remove');
//                     }

// t=1;
//                     sdate_edit = $('.start_date_edit').datepicker({

//                         "format": 'yyyy-mm-dd',
//                         "startDate": today,
//                         beforeShowDay: function (date) {
//                             var allDates = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
//                             if (dateDisable.indexOf(allDates) == -1)
//                                 return true;
//                             else
//                                 return false;
//                         }
//                     }).on('changeDate', function () {
//                         $(this).datepicker('hide');
//                     });//.datepicker("setDate", today);

//                     edate_edit = $('.end_date_edit').datepicker({

//                         "format": 'yyyy-mm-dd',
//                         "startDate": today,
//                         beforeShowDay: function (date) {
//                             var allDates = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
//                             if (dateDisable.indexOf(allDates) == -1)
//                                 return true;
//                             else
//                                 return false;
//                         }


//                     }).on('changeDate', function () {
//                         $(this).datepicker('hide');
//                     });//.datepicker("setDate", tomorrow);


//                 }
//             }

//             if (t == 0) {

//                 if (sdate_edit != null) {

//                     sdate_edit.datepicker('remove');
//                     edate_edit.datepicker('remove');
//                 }

//                 sdate_edit = $('.start_date_edit').datepicker({

//                     "format": 'yyyy-mm-dd',
//                     "startDate": today,
//                     beforeShowDay: function (date) {
//                         var allDates = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
//                         if (dateDisable.indexOf(allDates) == -1)
//                             return true;
//                         else
//                             return false;
//                     }
//                 }).on('changeDate', function () {
//                     $(this).datepicker('hide');
//                 });//.datepicker("setDate", today);
//                 edate_edit = $('.end_date_edit').datepicker({

//                     "format": 'yyyy-mm-dd',
//                     "startDate": today,
//                     beforeShowDay: function (date) {
//                         var allDates = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
//                         if (dateDisable.indexOf(allDates) == -1)
//                             return true;
//                         else
//                             return false;
//                     }


//                 }).on('changeDate', function () {
//                     $(this).datepicker('hide');
//                 });//.datepicker("setDate", tomorrow);


//             }

//         }, function (response) {
//             //Second function handles error
//             hideLoad();
//             alert('Something went wrong');
//             $scope.content = "Something went wrong";
//         });
//     }
//     $scope.getLastTenBookingTransactions = function (h_id) {
//       //  alert(h_id);

//         $http.get("/getLastTenBookingTransactions/"+h_id).then(function (response) {
//             $scope.room10Data = response.data;
//             //alert(JSON.stringify(response.data));

//         }, function (response) {
//             //Second function handles error
//             alert('Something went wrong');
//             $scope.content = "Something went wrong";
//         });

//     }

    $scope.getStatupMethodLoader = function () {
        //alert(id);

        $http.get("/getStatupMethodLoader/").then(function (response) {
       //     $scope.slData = response.data;
           // alert(JSON.stringify(response.data.data[0][0].method));
            $scope.$eval(response.data.data[0][0].method);

        }, function (response) {
            //Second function handles error
            alert('Something went wrong');
            $scope.content = "Something went wrong";
        });

    }
    // $scope.getToltipForRooms = function () {
    //     //alert(id);

    //     $http.get("/getToltipForRooms/").then(function (response) {
    //    //     $scope.slData = response.data;
    //        // alert(JSON.stringify(response.data.data[0]));
    //         //$scope.$eval(response.data.data[0][0].method);
    //         for (var i=0;i<response.data.data.length;i++)
    //         {

    //             //alert(response.data.data[i].room_id);
    //             $('#tol'+response.data.data[i].room_id).append('<table class="table table-bordered tab-danger">\n' +
    //                 '                                <thead style="color:white"><th>Room Name</th>\n' +
    //                 '                                <th>Start Date</th>\n' +
    //                 '                                <th>End Date</th>\n' +
    //                 '                                <th>Status</th></thead></table>');

    //             $('#tol'+response.data.data[i].room_id).append('<table class="table"><tr><td style=\'color:white;\'><h3>'+response.data.data[i].room_name+'</h3></td>' +
    //                 '<td style=\'color:white;\'><h3>'+response.data.data[i].book_start_date.substring(0,10)+'</h3></td>' +
    //                 '<td style=\'color:white;\'><h3>'+response.data.data[i].book_end_date.substring(0,10)+'</h3></td>' +
    //                 '<td style=\'color:white;\'><h3>'+response.data.data[i].description+'</h3></td></tr></table>');//, html: true});//.attr('title','<h3>'+response.data.data[0][i].customer_name+' | '+response.data.data[0][i].room_name+'</h3>');
    //         }


    //     }, function (response) {
    //         //Second function handles error
    //         alert('Something went wrong');
    //         $scope.content = "Something went wrong";
    //     });

    // }


    $scope.getForms = function (id) {

        // showLoad();
        $http.get("/getFormsByID/" + id).then(function (response) {

            frData[id] = response.data;
            $scope.frData = frData;
            //alert(JSON.stringify(frData.data) + "");
            hideLoad();
            $('#start_date_edit').datepicker().datepicker("setDate", today);
        }, function (response) {
            //Second function handles error
            //alert('Something went wrong');
            $scope.content = "Something went wrong";
            hideLoad();
        });
    }
    $scope.getL_fieldByname = function (fname) {

        //5showLoad();
        $http.get("/getL_fieldByname/" + fname).then(function (response) {

            froData = response.data;
            $scope.froData = froData;
            //alert(JSON.stringify(frData.data) + "");
            hideLoad();
        }, function (response) {
            //Second function handles error
            //alert('Something went wrong');
            $scope.content = "Something went wrong";
            hideLoad();
        });
    }

//     $scope.populate_StudentListByclassId = function (sl) {


//         gdData = sl;
//         $scope.gdData = gdData;

//         hideLoad();


//         $(document).ready(function () {
// //$('#datatable1').dataTable({"remove":true});
//             $('#datatable1').DataTable({"pageLength": 25});
//         });
//         document.getElementById('managestudent').click()[0];

//         //  alert(JSON.stringify($scope.gd1Data));

//     }


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
            $(document).ready(function () {

                $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

                    localStorage.setItem('activeTab', $(e.target).attr('href'));

                });

                var activeTab = localStorage.getItem('activeTab');

                if (activeTab) {

                    $('#myTab a[href="' + activeTab + '"]').tab('show');

                }
            });
        }, function (response) {
            //Second function handles error
            alert('Something went wrong');
            $scope.content = "Something went wrong";
            hideLoad();
        });
    }
    var chart_1;
    var chart_2;
    var chart_3;
    $scope.getReports = function (id,h_id) {
        //alert(id);
        showLoad();
$('#f').html("  "+$('#rpt_datepickerFrom').val()+' To '+$('#rpt_datepickerTo').val());
        $http.get("/getReports/" + id+"&"+$('#rpt_datepickerFrom').val()+"&"+$('#rpt_datepickerTo').val()+"&"+h_id).then(function (response) {
            var tdData = response.data;
            $scope.tdData = tdData;
            //alert(JSON.stringify(response.data.data));

            $('#line-chart').empty();
            chart_1 = new Morris.Line({
                // ID of the element in which to draw the chart.
                element: 'line-chart',
                // Chart data records -- each entry in this array corresponds to a point on
                // the chart.
                data: tdData.data[1]
                ,
                // The name of the data record attribute that contains x-values.
                xkey: 'y',
                // A list of names of data record attributes that contain y-values.
                ykeys: ['amt'],
                // Labels for the ykeys -- will be displayed when you hover over the
                // chart.
                labels: ['Turn Over'],
                parseTime: false,
                hideHover: 'auto',
                lineWidth: 2,
                pointSize: 8,
                lineColors: ['#4a8bc2', '#ff6c60'],
                fillOpacity: 1,

                behaveLikeLine: true
            });
$('#line-chart_1').empty();
            chart_2 = new Morris.Line({
                // ID of the element in which to draw the chart.
                element: 'line-chart_1',
                // Chart data records -- each entry in this array corresponds to a point on
                // the chart.
                data: tdData.data[4]
                ,
                // The name of the data record attribute that contains x-values.
                xkey: 'd',
                // A list of names of data record attributes that contain y-values.
                ykeys: ['b', 'c', 't'],
                // Labels for the ykeys -- will be displayed when you hover over the
                // chart.
                labels: ['Booked', 'Cancelled', 'Tentive'],
                parseTime: false,
                hideHover: 'auto',
                lineWidth: 2,
                pointSize: 8,
                pointColor: ['#ff6c60'],
                lineColors: ['#44af56', '#ff6c60', '#997fa3'],
                fillOpacity: 1,

                behaveLikeLine: true
            });

            $('#salesChart').empty();
            chart_3 =  new Morris.Area({
                // ID of the element in which to draw the chart.
                element: 'salesChart',
                // Chart data records -- each entry in this array corresponds to a point on
                // the chart.
                data: tdData.data[0]
                ,
                // The name of the data record attribute that contains x-values.
                xkey: 'y',
                // A list of names of data record attributes that contain y-values.
                ykeys: ['amt'],
                // Labels for the ykeys -- will be displayed when you hover over the
                // chart.
                labels: ['Turn Over'],
                parseTime: false,
                hideHover: 'auto',
                lineWidth: 2,
                pointSize: 8,
                lineColors: ['#4a8bc2', '#ff6c60'],
                fillOpacity: 0.8,

                behaveLikeLine: true
            });

hideLoad();
        }, function (response) {
            //Second function handles error
            alert('Something went wrong');
            $scope.content = "Something went wrong";
        });
    }
    $scope.whatClassIsIt = function (someValue) {
        if (someValue <= 25)
            return "progress-bar-red"
        else if (someValue > 25 && someValue <= 50)
            return "progress-bar-yellow";
        else if (someValue > 50 && someValue <= 75)
            return "progress-bar-aqua";
        else
            return "progress-bar-green";
    }

    $scope.addToArray = function (e) {
        //$('#class_name').val($('#class_id_1').chosen);
        var x = document.getElementById("class_id_1");
        var s = '';
        for (var i = 0; i < x.options.length; i++) {
            if (x.options[i].selected == true) {
                s += x.options[i].value + ',';
            }
        }
        $('#class_name').val(s);
    }
    var roomData = {};
    $scope.getRoomDetailByRoomID_temp = function (id) {
        //alert(id);
        showLoad();
        show_roomDetails(id);


        $http.get("/getRoomDetailByRoomID_temp/" + id).then(function (response) {
            roomData[id] = response.data;
            $scope.roomData = roomData;
            //alert(JSON.stringify(response.data));

            // $scope.getInstallmentsByID(id);

            hideLoad();


        }, function (response) {
            //Second function handles error
            alert('Something went wrong');
            $scope.content = "Something went wrong";
        });
    }
    $scope.roomDetailClose = function (id) {
        //alert(id);
        $('#' + id).hide(200);

    }
    ////Intail Calls////
    $scope.getTabs();
    //$scope.getStats();
$scope.getStatupMethodLoader();
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
$('#student_form').on('submit', function (e) {

    e.preventDefault();
    var fdata = new FormData(document.getElementById('student_form'));
    var object = {};
    fdata.forEach(function (value, key) {
        object[key] = value;
    });
    var json = JSON.stringify(object);

    showLoad();
    $.ajax({
        type: 'POST',
        url: $('#student_form').attr('action'),
        dataType: "json",
        contentType: "application/json",
        data: json,
        success: function (data1) {
            toast(data1.message)
            // alert(data);
            //$('#track_upload_panel').fadeIn(1000);


            hideLoad();
            document.getElementById('student_form').reset();

        }
    });

});

function show_roomDetails(id) {

    $('#' + id).show(500);
}

$('#room_booking_edit_form').on('submit', function (e) {

//alert($('#end_date_edit').val());
    var from = new Date($('.start_date_edit').val());
    var to = new Date($('#end_date_edit').val());

    var dom_el = document.querySelector('[ng-controller="loanCycleCtr"]');
    var ng_el = angular.element(dom_el);
    var ng_el_scope = ng_el.scope();
    var street_name = ng_el_scope.dateDisable;

    var j = -1;
    for (var i = 0; i < dateDisable.length; i++) {
        var dis_date = new Date(dateDisable[i]);

        if (from <= dis_date && to >= dis_date) {
            //alert('Room is not free for selected dates');
            toast('Room is not free for selected dates.');
            j = 1;
            // break;


        }
        //alert(from+"---"+to);
        if (from > to) {
            //alert('Booking Start date must be greater than the End date.');
            toast('Booking Start date must be greater than the End date.');
            j = 0;
            break;
        }
    }
    if (j == 0) {
        return false;
    }
    e.preventDefault();
    var fdata = new FormData(document.getElementById('room_booking_edit_form'));
    var object = {};
    fdata.forEach(function (value, key) {
        object[key] = value;
    });
    var json = JSON.stringify(object);
//alert($('#room_booking_edit_form').attr('action'));
    showLoad();
    $.ajax({
        type: 'POST',
        url: $('#room_booking_edit_form').attr('action'),
        dataType: "json",
        contentType: "application/json",
        data: json,
        success: function (data1) {
            toast(data1.message)
            // alert(data);
            //$('#track_upload_panel').fadeIn(1000);
            angular.element(document.getElementById('room_booking_form')).scope().getRoomsByCategoryID(-1);
            angular.element(document.getElementById('room_booking_form')).scope().getLastTenBookingTransactions(angular.element(document.getElementById('room_booking_form')).scope().h_id);
            hideLoad();
            $('#roomEditFormModal').modal('hide');

            angular.element(document.getElementById('room_booking_form')).scope().getRoomCategory(3);
            //getRoomCategory(3);
            document.getElementById('room_booking_form').reset();


        }
    });

});

                                                                                    function submitFileup()
                                                                                    {
                                                                                        alert( document.getElementById('fileup'))
                                                                                       // $("#fileup").submit();
                                                                                       document.getElementById('fileup').submit();
                                                                                    }
                                                                                  

$('#room_booking_form').on('submit', function (e) {
    

    e.preventDefault();
    var fdata = new FormData(document.getElementById('room_booking_form'));
    fdata.append('img_rl',document.getElementById('img_rl').value)
    
    var object = {};
    var files = document.getElementById('room_booking_form').files;
    
    fdata.forEach(function (value, key) {
        
        object[key] = value;
    });
    
    
    
    var json = JSON.stringify(object);

    showLoad();
    $.ajax({
        type: 'POST',
        url: $('#room_booking_form').attr('action'),
        dataType: "json",
        contentType: "application/json",
        data: json,
        success: function (data1) {

            hideLoad();


            //alert(data1.message);
            //$('#track_upload_panel').fadeIn(1000);

            toast(data1.message + "");
            $('#student_form_by_class').submit();

            //document.getElementById('student_form').reset();

        }
    });

});

var id = 0;
$('#student_form_by_class').on('submit', function (e) {

    e.preventDefault();
    var fdata = new FormData(document.getElementById('student_form_by_class'));
    var object = {};
    fdata.forEach(function (value, key) {
        object[key] = value;
    });
    var json = JSON.stringify(object);

    showLoad();
    $('#datatable1').DataTable().destroy();
    $.ajax({
        type: 'POST',
        url: $('#student_form_by_class').attr('action'),
        dataType: "json",
        contentType: "application/json",
        data: json,
        success: function (data1) {
            //toast(data1.data)
            // alert(data);
            //$('#track_upload_panel').fadeIn(1000);

            angular.element(document.getElementById('student_form_by_class')).scope().populate_StudentListByclassId(data1);


            hideLoad();


            //document.getElementById('student_form_by_class').reset();

        }
    });

});


function dateAtRoomPopUp() {
    angular.element(document.getElementById('datetimepickerFromText')).scope().getRoomsByCategoryID(-1);
}

//Date setting for whole Pages
var date = new Date();
var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
var tomorrow = new Date(date.getFullYear(), date.getMonth(), (date.getDate() + 1));

var nextMonth = new Date(date.getFullYear(), date.getMonth()+1, (date.getDate()));


$('#datetimepickerFrom').datepicker({

    "format": 'yyyy-mm-dd'
}).datepicker("setDate", today);


$('#datetimepickerTo').datepicker("setDate", tomorrow);

$('#rpt_datepickerFrom').datepicker({

    "format": 'yyyy-mm-dd'
}).datepicker("setDate", today);



$('#rpt_datepickerTo').datepicker({

    "format": 'yyyy-mm-dd'
}).datepicker("setDate", nextMonth);


///////////////////////////////////////////////


////////////////////////Loadings//////////////////////////
function showLoad() {
    $('#load').show();
    $('#load').fadeIn(600);

}

function hideLoad() {
    $('#load').fadeOut(200);
}


//////////////////////////end Loadings/////////////


$(document).ready(function () {
    

});
///////////////////////////Datatable/////////

//Timer to logout
$(document).ready(function () {
    $(document).click(function () {

        if (typeof timeOutObj != "undefined") {
            clearTimeout(timeOutObj);
        }

        timeOutObj = setTimeout(function () {


            window.location = "/logout";
        }, 900000);   //will expire after twenty minutes

    });

});

function genPDF() {

    alert('We are working. Just wait for a moment.')

html2canvas(document.body).then(function(canvas) {
    var ctx = canvas.getContext('2d');
        ctx.webkitImageSmoothingEnabled = false;
        ctx.mozImageSmoothingEnabled = false;
        ctx.imageSmoothingEnabled = false;
   var img=canvas.toDataURL("image/png");

      var doc = new jsPDF("p", "mm", "a4");
        var width = doc.internal.pageSize.width;
var height = doc.internal.pageSize.height;
        doc.addImage(img,'JPEG', 0, 0, width, height);
        doc.save('test.pdf');
});





}

 	$('#acc').focus();
//////////////////multiple select///////////////20

///Checking is Site On ////
function checkSite() {
  //  alert('d');
     angular.element(document.getElementById('room_booking_form')).scope().getSetting();

}
setTimeout(checkSite,1000*60*5)
////////////////////

