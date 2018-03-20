/// <reference path="../typings/jquery/jquery.d.ts" />

class StudentExpense {
    studentID: string;
    expenseID: number;

    constructor(studentID: string, expenseID: number) {
        this.studentID = studentID;
        this.expenseID = expenseID;
    }
}