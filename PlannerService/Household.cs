namespace PlannerService
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Household")]
    public partial class Household
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Household()
        {
            Students = new HashSet<Student>();
        }

        public int HouseholdID { get; set; }

        [Required]
        [StringLength(50)]
        public string HouseholdName { get; set; }

        [Required]
        [StringLength(100)]
        public string TermAddress1 { get; set; }

        [StringLength(100)]
        public string TermAddress2 { get; set; }

        [Required]
        [StringLength(30)]
        public string TermCity { get; set; }

        [Required]
        [StringLength(8)]
        public string TermPostcode { get; set; }

        [Required]
        [StringLength(80)]
        public string Country { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Student> Students { get; set; }
    }
}
