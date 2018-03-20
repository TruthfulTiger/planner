var PlannerServicePage = (function () {
    function PlannerServicePage() {
        var _this = this;
        // Get income amounts
        this.AjaxIncomeWKClick = function (e) {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:44037/PlannerService.svc/incomeweek",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxAmountReadSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxIncomeMthClick = function (e) {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:44037/PlannerService.svc/incomemonth",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxAmountReadSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxIncomeTMClick = function (e) {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:44037/PlannerService.svc/incometerm",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxAmountReadSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxIncomeYrClick = function (e) {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:44037/PlannerService.svc/incomeyear",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxAmountReadSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxIncomeTypeClick = function (e) {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:44037/PlannerService.svc/incometype",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxAmountReadSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        // Get expense amounts 
        this.AjaxExpenseWKClick = function (e) {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:44037/PlannerService.svc/expenseweek",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxAmountReadSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxExpenseMthClick = function (e) {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:44037/PlannerService.svc/expensemonth",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxAmountReadSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxExpenseTMClick = function (e) {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:44037/PlannerService.svc/expenseterm",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxAmountReadSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxExpenseYrClick = function (e) {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:44037/PlannerService.svc/expenseyear",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxAmountReadSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        // Callback methods
        this.AjaxIncomeClick = function (e) {
            // Read data in REST - use GET
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:44037/PlannerService.svc/readmessage?id=" + $("#msgIdTextBox").val(),
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxAmountReadSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxAddIncomeClick = function (e) {
            // Add new data in REST - use POST
            var amount;
            amount = $("#incomeAmount").val();
            var w;
            var m;
            var q;
            var t;
            var y;
            switch ($("#incomeFreq").val()) {
                case 'Weekly':
                    w = amount;
                    y = w * 52;
                    m = y / 12;
                    t = y / 3;
                    q = y / 4;
                    break;
                case 'Monthly':
                    m = amount;
                    y = m * 12;
                    w = y / 52;
                    t = y / 3;
                    q = y / 4;
                    break;
                case 'Quarterly':
                    q = amount;
                    y = q * 4;
                    w = y / 52;
                    m = y / 12;
                    t = y / 3;
                    break;
                case 'Termly':
                    t = amount;
                    y = t * 3;
                    w = y / 52;
                    m = y / 12;
                    q = y / 4;
                    break;
                case 'Yearly':
                    y = amount;
                    m = y / 12;
                    w = y / 52;
                    t = y / 3;
                    q = y / 4;
                    break;
            }
            $.ajax({
                cache: false,
                type: "POST",
                url: "http://localhost:44037/PlannerService.svc/addIncome",
                data: '{ "income": { "incomeName":' + $("#incomeName").val() +
                    ' "incomeType":' + $("#incomeType").val() +
                    '"amountWk":' + w +
                    '"amountMth":' + m +
                    '"amountTm":' + t +
                    '"amountQt":' + q +
                    '"amountYr":' + y +
                    '} }',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxAmountSendSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxEditIncomeClick = function (e) {
            // Edit data in REST - use PUT
            $.ajax({
                cache: false,
                type: "PUT",
                url: "http://localhost:44037/PlannerService.svc/editIncome?id=" + $("#msgIdTextBox").val(),
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxAmountEditSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxRemoveIncomeClick = function (e) {
            // Delete data in REST - use DELETE
            $.ajax({
                cache: false,
                type: "DELETE",
                url: "http://localhost:44037/PlannerService.svc/deleteincome?id=" + $("#msgIdTextBox").val(),
                data: '{ "messageChanges": { "sender:"Sam", "recipient": "Bob", "text":"' + $("#msgTextBox").val() + '" } }',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxAmountEditSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxAddExpenseClick = function (e) {
            // Add new data in REST - use POST
            var amount;
            amount = $("#expenseAmount").val();
            var w;
            var m;
            var q;
            var t;
            var y;
            switch ($("#expenseFreq").val()) {
                case 'Weekly':
                    w = amount;
                    y = w * 52;
                    m = y / 12;
                    t = y / 3;
                    q = y / 4;
                    break;
                case 'Monthly':
                    m = amount;
                    y = m * 12;
                    w = y / 52;
                    t = y / 3;
                    q = y / 4;
                    break;
                case 'Quarterly':
                    q = amount;
                    y = q * 4;
                    w = y / 52;
                    m = y / 12;
                    t = y / 3;
                    break;
                case 'Termly':
                    t = amount;
                    y = t * 3;
                    w = y / 52;
                    m = y / 12;
                    q = y / 4;
                    break;
                case 'Yearly':
                    y = amount;
                    m = y / 12;
                    w = y / 52;
                    t = y / 3;
                    q = y / 4;
                    break;
            }
            $.ajax({
                cache: false,
                type: "POST",
                url: "http://localhost:44037/PlannerService.svc/addExpense",
                data: '{ "expense": { "expenseName":' + $("#expenseName").val() +
                    ' "expenseType":' + $("#expenseType").val() +
                    '"amountWk":' + w +
                    '"amountMth":' + m +
                    '"amountTm":' + t +
                    '"amountQt":' + q +
                    '"amountYr":' + y +
                    '} }',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxAmountSendSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxAmountSendSuccessful = function (json, status, req) {
            window.alert("Amount added successfully\n Status: " + status);
        };
        this.AjaxAmountReadSuccessful = function (json, status, req) {
            // "Message" here comes from the return type in IMessageService
            window.alert("Read message\n Status: " + status + "\nMessage: " + json.Message + "\n");
        };
        this.AjaxAmountEditSuccessful = function (json, status, req) {
            // "Message" here comes from the return type in IMessageService
            var emailMessage = json.Modifications; // See interface file for "Modifications" return
            window.alert("Changes made: sender=" + emailMessage.sender + " message=" + emailMessage.text + "\n");
        };
        this.AjaxError = function (req, status, error) {
            window.alert("Got error \n Status: " + status + "\n Error: " + error + "\n");
        };
    }
    PlannerServicePage.prototype.PageLoad = function () {
        // Button actions
        $("#incomeSave").click(this.AjaxAddIncomeClick);
        $("#removeIncome").click(this.AjaxRemoveIncomeClick);
        $("#expenseSave").click(this.AjaxAddExpenseClick);
        //      $("#removeExpense").click(this.AjaxRemoveExpenseClick);
        //      $("#stSave").click(this.AjaxStSaveClick);
        //      $("#hhSave").click(this.AjaxHHSaveClick);
        //      $("#expenseSave").click(this.AjaxExpenseSaveClick);
        //      $("#studentSearch").click(this.AjaxStudentSearchClick);
        //      $("#saveStudentHH").click(this.AjaxSaveStudentHHClick);  
        $("#incomeWk").click(this.AjaxIncomeWKClick);
        $("#incomeMth").click(this.AjaxIncomeMthClick);
        //      $("#incomeQt").click(this.AjaxIncomeQtClick);
        //      $("#incomeTm").click(this.AjaxIncomeTmClick);
        $("#incomeYr").click(this.AjaxIncomeYrClick);
        //      $("#expenseWk").click(this.AjaxExpenseWKClick);
        $("#expenseMth").click(this.AjaxExpenseMthClick);
        //      $("#expenseQt").click(this.AjaxExpenseQtClick);
        //      $("#expenseTm").click(this.AjaxExpenseTmClick);
        //       $("#expenseYr").click(this.AjaxExpenseYrClick);    
        $("#addIncome").click(this.AjaxIncomeTypeClick);
    };
    return PlannerServicePage;
}());
$(function () {
    var page = new PlannerServicePage();
    page.PageLoad();
});
//# sourceMappingURL=PlannerServicePage.js.map