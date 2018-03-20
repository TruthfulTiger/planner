

class PlannerServicePage {    

    PageLoad(): void {
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
    }

    // Get income amounts
    private AjaxIncomeWKClick = (e: JQueryEventObject): boolean => {
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
    }

    private AjaxIncomeMthClick = (e: JQueryEventObject): boolean => {
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
    }

    private AjaxIncomeTMClick = (e: JQueryEventObject): boolean => {
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
    }

    private AjaxIncomeYrClick = (e: JQueryEventObject): boolean => {
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
    }

    private AjaxIncomeTypeClick = (e: JQueryEventObject): boolean => {
        $.ajax({
            cache: false,
            type: "GET",
            url: "http://localhost:44037/PlannerService.svc/incometype",
            data: '{}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: this.AjaxAmountReadSuccessful,
            error: this.AjaxError
        });
        e.preventDefault();
        return false;
    }

    // Get expense amounts 
    private AjaxExpenseWKClick = (e: JQueryEventObject): boolean => {
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
    }

    private AjaxExpenseMthClick = (e: JQueryEventObject): boolean => {
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
    }

    private AjaxExpenseTMClick = (e: JQueryEventObject): boolean => {
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
    }

    private AjaxExpenseYrClick = (e: JQueryEventObject): boolean => {
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
    }

    // Callback methods
    private AjaxIncomeClick = (e: JQueryEventObject): boolean => {
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
    }

    private AjaxAddIncomeClick = (e: JQueryEventObject): boolean => {
        // Add new data in REST - use POST
        let amount: number;
        amount = $("#incomeAmount").val();

        let w: number;
        let m: number;
        let q: number;
        let t: number;
        let y: number;   

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
            success: this.AjaxAmountSendSuccessful,
            error: this.AjaxError
        });
        e.preventDefault();
        return false;
    }

    private AjaxEditIncomeClick = (e: JQueryEventObject): boolean => {
        // Edit data in REST - use PUT
        $.ajax({
            cache: false,
            type: "PUT",
            url: "http://localhost:44037/PlannerService.svc/editIncome?id=" + $("#msgIdTextBox").val(),
            data: '{}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: this.AjaxAmountEditSuccessful,
            error: this.AjaxError
        });
        e.preventDefault();
        return false;
    }

    private AjaxRemoveIncomeClick = (e: JQueryEventObject): boolean => {
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
    }

    private AjaxAddExpenseClick = (e: JQueryEventObject): boolean => {
        // Add new data in REST - use POST
        let amount: number;
        amount = $("#expenseAmount").val();

        let w: number;
        let m: number;
        let q: number;
        let t: number;
        let y: number;

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
            success: this.AjaxAmountSendSuccessful,
            error: this.AjaxError
        });
        e.preventDefault();
        return false;
    }

    private AjaxAmountSendSuccessful = (json: any, status: string, req: JQueryXHR): void => {
        window.alert("Amount added successfully\n Status: " + status);
    }

    private AjaxAmountReadSuccessful = (json: any, status: string, req: JQueryXHR): void => {
        // "Message" here comes from the return type in IMessageService
        window.alert("Read message\n Status: " + status + "\nMessage: " + json.Message + "\n");
    }

    private AjaxAmountEditSuccessful = (json: any, status: string, req: JQueryXHR): void => {
        // "Message" here comes from the return type in IMessageService
        let emailMessage = json.Modifications; // See interface file for "Modifications" return
        window.alert("Changes made: sender=" + emailMessage.sender + " message=" + emailMessage.text + "\n");
    }

    private AjaxError = (req: JQueryXHR, status: string, error: string): void => {
        window.alert("Got error \n Status: " + status + "\n Error: " + error + "\n");
    }
}

$(function () {
    let page: PlannerServicePage = new PlannerServicePage();
    page.PageLoad();
});