javascript:(function(){(function(){window.Urbanise=window.Urbanise||{};Urbanise.Request=new%20function(){var%20baseUrl='https://urbanise.bamboohr.co.uk/ajax/dialog/history_popup.php?type=custom-8&e=118&id=&save=Save';var%20run=function(params){var%20xhr=new%20XMLHttpRequest();xhr.open('POST',baseUrl,false);xhr.setRequestHeader("content-type","application/x-www-form-urlencoded;%20charset=UTF-8");xhr.setRequestHeader("accept","application/json,%20text/javascript,%20*/*;%20q=0.01");xhr.send(params.data);if(xhr.status===200){params.onSuccess&&params.onSuccess(JSON.parse(xhr.responseText));}else%20if(xhr.status>=400){params.onError&&params.onError(xhr.responseText);}};this.fillToday=function(){var%20params={};var%20today=new%20Date();var%20dayParam=today.getDate()+'%2F'+(today.getMonth()+1)+'%2F'+today.getFullYear();var%20projectId=18436;var%20activityId=18428;var%20token=CSRF_TOKEN;params.data='custom-50='+dayParam+'&custom-53='+projectId+'&custom-51='+activityId+'&custom-64=&custom-52=8&CSRFToken='+token;params.onError=function(error){console.error(error);};params.onSuccess=function(s){window.location.reload();};run(params);};};})();Urbanise.Request.fillToday();})();
