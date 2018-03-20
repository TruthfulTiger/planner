namespace PlannerService
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Planner : DbContext
    {
        public Planner()
            : base("name=PlannerService")
        {
        }

        public virtual DbSet<Expenditure> Expenditures { get; set; }
        public virtual DbSet<ExpenseType> ExpenseTypes { get; set; }
        public virtual DbSet<Household> Households { get; set; }
        public virtual DbSet<Income> Incomes { get; set; }
        public virtual DbSet<IncomeType> IncomeTypes { get; set; }
        public virtual DbSet<Student> Students { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Expenditure>()
                .Property(e => e.ExpenseName)
                .IsUnicode(false);

            modelBuilder.Entity<Expenditure>()
                .Property(e => e.WeeklyAmount)
                .HasPrecision(7, 2);

            modelBuilder.Entity<Expenditure>()
                .Property(e => e.MonthlyAmount)
                .HasPrecision(7, 2);

            modelBuilder.Entity<Expenditure>()
                .Property(e => e.TermlyAmount)
                .HasPrecision(7, 2);

            modelBuilder.Entity<Expenditure>()
                .Property(e => e.QuarterlyAmount)
                .HasPrecision(7, 2);

            modelBuilder.Entity<Expenditure>()
                .Property(e => e.YearlyAmount)
                .HasPrecision(7, 2);

            modelBuilder.Entity<Expenditure>()
                .HasMany(e => e.Students)
                .WithMany(e => e.Expenditures)
                .Map(m => m.ToTable("StudentExpense").MapLeftKey("ExpenseID").MapRightKey("StudentID"));

            modelBuilder.Entity<ExpenseType>()
                .Property(e => e.ExTypeName)
                .IsUnicode(false);

            modelBuilder.Entity<ExpenseType>()
                .HasMany(e => e.Expenditures)
                .WithRequired(e => e.ExpenseType)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Household>()
                .Property(e => e.HouseholdName)
                .IsUnicode(false);

            modelBuilder.Entity<Household>()
                .Property(e => e.TermAddress1)
                .IsUnicode(false);

            modelBuilder.Entity<Household>()
                .Property(e => e.TermAddress2)
                .IsUnicode(false);

            modelBuilder.Entity<Household>()
                .Property(e => e.TermCity)
                .IsUnicode(false);

            modelBuilder.Entity<Household>()
                .Property(e => e.TermPostcode)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<Household>()
                .Property(e => e.Country)
                .IsUnicode(false);

            modelBuilder.Entity<Household>()
                .HasMany(e => e.Students)
                .WithRequired(e => e.Household)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Income>()
                .Property(e => e.IncomeName)
                .IsUnicode(false);

            modelBuilder.Entity<Income>()
                .Property(e => e.WeeklyAmount)
                .HasPrecision(7, 2);

            modelBuilder.Entity<Income>()
                .Property(e => e.MonthlyAmount)
                .HasPrecision(7, 2);

            modelBuilder.Entity<Income>()
                .Property(e => e.TermlyAmount)
                .HasPrecision(7, 2);

            modelBuilder.Entity<Income>()
                .Property(e => e.QuarterlyAmount)
                .HasPrecision(7, 2);

            modelBuilder.Entity<Income>()
                .Property(e => e.YearlyAmount)
                .HasPrecision(7, 2);

            modelBuilder.Entity<Income>()
                .HasMany(e => e.Students)
                .WithMany(e => e.Incomes)
                .Map(m => m.ToTable("StudentIncome").MapLeftKey("IncomeID").MapRightKey("StudentID"));

            modelBuilder.Entity<IncomeType>()
                .Property(e => e.InTypeName)
                .IsUnicode(false);

            modelBuilder.Entity<IncomeType>()
                .HasMany(e => e.Incomes)
                .WithRequired(e => e.IncomeType)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Student>()
                .Property(e => e.StudentID)
                .IsUnicode(false);

            modelBuilder.Entity<Student>()
                .Property(e => e.Email)
                .IsUnicode(false);

            modelBuilder.Entity<Student>()
                .Property(e => e.UserName)
                .IsUnicode(false);

            modelBuilder.Entity<Student>()
                .Property(e => e.Password)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<Student>()
                .Property(e => e.FirstName)
                .IsUnicode(false);

            modelBuilder.Entity<Student>()
                .Property(e => e.LastName)
                .IsUnicode(false);

            modelBuilder.Entity<Student>()
                .Property(e => e.PermAddress1)
                .IsUnicode(false);

            modelBuilder.Entity<Student>()
                .Property(e => e.PermAddress2)
                .IsUnicode(false);

            modelBuilder.Entity<Student>()
                .Property(e => e.PermCity)
                .IsUnicode(false);

            modelBuilder.Entity<Student>()
                .Property(e => e.PermPostcode)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<Student>()
                .Property(e => e.Country)
                .IsUnicode(false);

            modelBuilder.Entity<Student>()
                .Property(e => e.StudyPlace)
                .IsUnicode(false);
        }
    }
}
