using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;

namespace PlannerService
{
    [DataContract(Name = "IncomeAmount", Namespace = "")]
    public class IncomeAmount
    {
        // Attributes
        string _inName = "";
        int _inTypeID = 0;
        double _amountWk = 0;
        double _amountMth = 0;
        double _amountQt = 0;
        double _amountTm = 0;
        double _amountYr = 0;

        // Constructors

        public IncomeAmount()
        {
            // Do Nothing
        }

        public IncomeAmount(string inName, int intypeID, double amountWk, double amountMth, double amountQt, double amountTm, double amountYr)
        {
            _inName = inName;
            _inTypeID = intypeID;
            _amountWk = amountWk;
            _amountMth = amountMth;
            _amountQt = amountQt;
            _amountTm = amountTm;
            _amountYr = amountYr;
        }

        // Properties

        [DataMember(Name = "incomeName", Order = 1)]       // Set name returned to JSON
        public string IncomeName
        {
            get { return _inName; }
            set { _inName = value; }
        }

        [DataMember(Name = "incomeType", Order = 2)]
        public int IncomeType
        {
            get { return _inTypeID; }
            set { _inTypeID = value; }
        }

        [DataMember(Name = "amountWk", Order = 3)]
        public double AmountWk
        {
            get { return _amountWk; }
            set { _amountWk = value; }
        }

        [DataMember(Name = "amountMth", Order = 4)]
        public double AmountMth
        {
            get { return _amountMth; }
            set { _amountMth = value; }
        }

        [DataMember(Name = "amountQt", Order = 5)]
        public double AmountQt
        {
            get { return _amountQt; }
            set { _amountQt = value; }
        }

        [DataMember(Name = "amountTm", Order = 6)]
        public double AmountTm
        {
            get { return _amountTm; }
            set { _amountTm = value; }
        }

        [DataMember(Name = "amountYr", Order = 7)]
        public double AmountYr
        {
            get { return _amountYr; }
            set { _amountYr = value; }
        }
    }
}