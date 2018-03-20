namespace PlannerService
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Student")]
    public partial class Student
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Student()
        {
            Expenditures = new HashSet<Expenditure>();
            Incomes = new HashSet<Income>();
        }

        [StringLength(10)]
        public string StudentID { get; set; }

        [Required]
        [StringLength(80)]
        public string Email { get; set; }

        [Required]
        [StringLength(30)]
        public string UserName { get; set; }

        [Required]
        [StringLength(10)]
        public string Password { get; set; }

        [Required]
        [StringLength(30)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(30)]
        public string LastName { get; set; }

        [Required]
        [StringLength(100)]
        public string PermAddress1 { get; set; }

        [StringLength(100)]
        public string PermAddress2 { get; set; }

        [Required]
        [StringLength(30)]
        public string PermCity { get; set; }

        [Required]
        [StringLength(8)]
        public string PermPostcode { get; set; }

        [Required]
        [StringLength(80)]
        public string Country { get; set; }

        [Required]
        [StringLength(50)]
        public string StudyPlace { get; set; }

        public int HouseholdID { get; set; }

        public virtual Household Household { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Expenditure> Expenditures { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Income> Incomes { get; set; }
    }
}
