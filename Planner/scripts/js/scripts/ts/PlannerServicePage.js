class PlannerServicePage {
    constructor() {
        // Get income amounts
        this.AjaxIncomeWKClick = (e) => {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:44037/PlannerService.svc/incomeweek",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: this.AjaxAmountReadSuccessful,
                error: this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxIncomeMthClick = (e) => {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:44037/PlannerService.svc/incomemonth",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: this.AjaxAmountReadSuccessful,
                error: this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxIncomeTMClick = (e) => {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:44037/PlannerService.svc/incometerm",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: this.AjaxAmountReadSuccessful,
                error: this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxIncomeYrClick = (e) => {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:44037/PlannerService.svc/incomeyear",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: this.AjaxAmountReadSuccessful,
                error: this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        // Get expense amounts 
        this.AjaxExpenseWKClick = (e) => {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:44037/PlannerService.svc/expenseweek",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: this.AjaxAmountReadSuccessful,
                error: this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxExpenseMthClick = (e) => {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:44037/PlannerService.svc/expensemonth",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: this.AjaxAmountReadSuccessful,
                error: this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxExpenseTMClick = (e) => {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:44037/PlannerService.svc/expenseterm",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: this.AjaxAmountReadSuccessful,
                error: this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxExpenseYrClick = (e) => {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:44037/PlannerService.svc/expenseyear",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: this.AjaxAmountReadSuccessful,
                error: this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        // Callback methods
        this.AjaxIncomeClick = (e) => {
            // Read data in REST - use GET
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:44037/PlannerService.svc/readmessage?id=" + $("#msgIdTextBox").val(),
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: this.AjaxAmountReadSuccessful,
                error: this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxAddIncomeClick = (e) => {
            // Add new data in REST - use POST
            $.ajax({
                cache: false,
                type: "POST",
                url: "http://localhost:44037/PlannerService.svc/addIncome",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: this.AjaxAmountSendSuccessful,
                error: this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxEditIncomeClick = (e) => {
            // Edit data in REST - use PUT
            $.ajax({
                cache: false,
                type: "PUT",
                url: "http://localhost:44037/PlannerService.svc/editIncome?id=" + $("#msgIdTextBox").val(),
                data: '{ "messageChanges": { "sender:"Sam", "recipient": "Bob", "text":"' + $("#msgTextBox").val() + '" } }',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: this.AjaxAmountEditSuccessful,
                error: this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxRemoveIncomeClick = (e) => {
            // Delete data in REST - use DELETE
            $.ajax({
                cache: false,
                type: "DELETE",
                url: "http://localhost:44037/PlannerService.svc/deleteincome?id=" + $("#msgIdTextBox").val(),
                data: '{ "messageChanges": { "sender:"Sam", "recipient": "Bob", "text":"' + $("#msgTextBox").val() + '" } }',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: this.AjaxAmountEditSuccessful,
                error: this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxAmountSendSuccessful = (json, status, req) => {
            let w;
            let m;
            let q;
            let t;
            let y;
            let income = new Income();
            income.setName = $("#incomeName").val();
            income.setTypeID = $("#incomeType").val();
            if ($("#incomeFreq").val() == 'Weekly') {
                w = $("#incomeAmount").val();
                y = w * 52;
                m = y / 12;
                t = y / 3;
                q = y / 4;
            }
            if ($("#incomeFreq").val() == 'Monthly') {
                m = $("#incomeAmount").val();
                y = m * 12;
                w = y / 52;
                t = y / 3;
                q = y / 4;
            }
            if ($("#incomeFreq").val() == 'Quarterly') {
                q = $("#incomeAmount").val();
                y = q * 4;
                w = y / 52;
                m = y / 12;
                t = y / 3;
            }
            if ($("#incomeFreq").val() == 'Termly') {
                t = $("#incomeAmount").val();
                y = t * 3;
                w = y / 52;
                m = y / 12;
                q = y / 4;
            }
            if ($("#incomeFreq").val() == 'Yearly') {
                y = $("#incomeAmount").val();
                m = y / 12;
                w = y / 52;
                t = y / 3;
                q = y / 4;
            }
            income.setWklyAmt(w.toFixed(2));
            income.setMthlyAmt(m.toFixed(2));
            income.setQtlyAmt(q.toFixed(2));
            income.setTmlyAmt(t.toFixed(2));
            income.setYrlyAmt(y.toFixed(2));
        };
        this.AjaxAmountReadSuccessful = (json, status, req) => {
            // "Message" here comes from the return type in IMessageService
            window.alert("Read message\n Status: " + status + "\nMessage: " + json.Message + "\n");
        };
        this.AjaxAmountEditSuccessful = (json, status, req) => {
            // "Message" here comes from the return type in IMessageService
            let emailMessage = json.Modifications; // See interface file for "Modifications" return
            window.alert("Changes made: sender=" + emailMessage.sender + " message=" + emailMessage.text + "\n");
        };
        this.AjaxError = (req, status, error) => {
            window.alert("Got error \n Status: " + status + "\n Error: " + error + "\n");
        };
    }
    PageLoad() {
        // Button actions
        $("#addIncome").click(this.AjaxAddIncomeClick);
        $("#removeIncome").click(this.AjaxRemoveIncomeClick);
        //     $("#addExpense").click(this.AjaxAddExpenseClick);
        //      $("#removeExpense").click(this.AjaxRemoveExpenseClick);
        //      $("#stSave").click(this.AjaxStSaveClick);
        //      $("#hhSave").click(this.AjaxHHSaveClick);
        //      $("#incomeSave").click(this.AjaxIncomeSaveClick);
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
    }
}
$(function () {
    let page = new PlannerServicePage();
    page.PageLoad();
});
//# sourceMappingURL=PlannerServicePage.js.map