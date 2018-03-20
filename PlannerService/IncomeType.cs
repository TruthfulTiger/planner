namespace PlannerService
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;
    using System.Runtime.Serialization;

    [Table("IncomeType")]
    [DataContract(Name = "IncomeType", Namespace = "")]
    public partial class IncomeType
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public IncomeType()
        {
            Incomes = new HashSet<Income>();
        }

        [Key]
        [DataMember(Name = "inTypeID", Order = 1)]
        public int InTypeID { get; set; }

        [Required]
        [StringLength(50)]
        [DataMember(Name = "inTypeName", Order = 2)]
        public string InTypeName { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Income> Incomes { get; set; }
    }
}
