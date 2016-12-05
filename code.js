(function() {

    (function() {

        window.Urbanise = window.Urbanise || {};

        Urbanise.Request = new function() {

            var baseUrl = 'https://urbanise.bamboohr.co.uk/ajax/dialog/history_popup.php?type=custom-8&e=118&id=&save=Save';

            var run = function(params) {

                var xhr = new XMLHttpRequest();
                xhr.open('POST', baseUrl, false);
                
                xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
                xhr.setRequestHeader("accept", "application/json, text/javascript, */*; q=0.01");
                
                xhr.send(params.data);

                if (xhr.status === 200) {
                    params.onSuccess && params.onSuccess(JSON.parse(xhr.responseText));
                } else if (xhr.status >= 400) {
                    params.onError && params.onError(xhr.responseText);
                }

            };

            this.fillToday = function() {

                var params = {};

                var today = new Date();
                var dayParam = today.getDate() + '%2F' + (today.getMonth() + 1) + '%2F' + today.getFullYear();
                var projectId = 18436;
                var activityId = 18428;
                var token = CSRF_TOKEN;

                params.data = 'custom-50=' + dayParam + '&custom-53=' + projectId + '&custom-51=' + activityId + '&custom-64=&custom-52=8&CSRFToken=' + token;

                params.onError = function(error) {
                    console.error(error);
                };

                params.onSuccess = function(s) {
                    window.location.reload();
                };

                run(params);
            };

        };

    })();

    Urbanise.Request.fillToday();

})();
