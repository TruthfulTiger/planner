namespace PlannerService
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;
    using System.Runtime.Serialization;

    [Table("Expenditure")]
    [DataContract(Name = "Expenditure", Namespace = "")]
    public partial class Expenditure
    {
        // Attributes
        int _inID = 0;
        string _exName = "";
        int _exTypeID = 0;
        decimal _amountWk = 0;
        decimal _amountMth = 0;
        decimal _amountQt = 0;
        decimal _amountTm = 0;
        decimal _amountYr = 0;
        bool _communal = false;

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Expenditure()
        {
            Students = new HashSet<Student>();
        }

        public Expenditure(string exName, int extypeID, decimal amountWk, decimal amountMth, decimal amountQt, decimal amountTm, decimal amountYr, bool communal)
        {
            _exName = exName;
            _exTypeID = extypeID;
            _amountWk = amountWk;
            _amountMth = amountMth;
            _amountQt = amountQt;
            _amountTm = amountTm;
            _amountYr = amountYr;
            _communal = communal;
        }

        [Key]
        [DataMember(Name = "expenseID", Order = 1)]
        public int ExpenseID { get; set; }

        [Required]
        [StringLength(30)]
        [DataMember(Name = "expenseName", Order = 2)]
        public string ExpenseName { get; set; }

        [DataMember(Name = "expenseType", Order = 3)]
        public int ExTypeID { get; set; }

        [DataMember(Name = "amountWk", Order = 4)]
        public decimal WeeklyAmount { get; set; }

        [DataMember(Name = "amountMth", Order = 5)]
        public decimal MonthlyAmount { get; set; }

        [DataMember(Name = "amountTm", Order = 6)]
        public decimal TermlyAmount { get; set; }

        [DataMember(Name = "amountQt", Order = 7)]
        public decimal QuarterlyAmount { get; set; }

        [DataMember(Name = "amountYr", Order = 8)]
        public decimal YearlyAmount { get; set; }

        [DataMember(Name = "isCommunal", Order = 9)]
        public bool IsCommunal { get; set; }

        public virtual ExpenseType ExpenseType { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Student> Students { get; set; }
    }
}
