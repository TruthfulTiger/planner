namespace PlannerService
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;
    using System.Runtime.Serialization;

    [Table("Income")]
    [DataContract(Name = "Income", Namespace = "")]
    public partial class Income
    {
        // Attributes
        int _inID = 0;
        string _inName = "";
        int _inTypeID = 0;
        decimal _amountWk = 0;
        decimal _amountMth = 0;
        decimal _amountQt = 0;
        decimal _amountTm = 0;
        decimal _amountYr = 0;

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Income()
        {
            Students = new HashSet<Student>();
        }

        public Income(string inName, int intypeID, decimal amountWk, decimal amountMth, decimal amountQt, decimal amountTm, decimal amountYr)
        {
            _inName = inName;
            _inTypeID = intypeID;
            _amountWk = amountWk;
            _amountMth = amountMth;
            _amountQt = amountQt;
            _amountTm = amountTm;
            _amountYr = amountYr;
        }

        [DataMember(Name = "incomeID", Order = 1)]
        [Key]
        public int IncomeID { get; set; }

        [StringLength(50)]
        [DataMember(Name = "incomeName", Order = 2)]
        public string IncomeName { get; set; }

        [DataMember(Name = "incomeType", Order = 3)]
        public int InTypeID { get; set; }

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

        public virtual IncomeType IncomeType { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Student> Students { get; set; }
    }
}
