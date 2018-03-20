// To parse this JSON data, add NuGet 'Newtonsoft.Json' then do:
//
//    using PlannerService;
//
//    var countries = Countries.FromJson(jsonString);

namespace PlannerService
{
    using System;
    using System.Collections.Generic;
    using System.Net;

    using System.Globalization;
    using Newtonsoft.Json;
    using Newtonsoft.Json.Converters;

    public partial class Countries
    {
        [JsonProperty("country")]
        public List<Country> Country { get; set; }
    }

    public partial class Country
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("code")]
        public string Code { get; set; }
    }

    public partial class Countries
    {
        public static Countries FromJson(string json) => JsonConvert.DeserializeObject<Countries>(json, PlannerService.Converter.Settings);
    }

    public static class Serialize
    {
        public static string ToJson(this Countries self) => JsonConvert.SerializeObject(self, PlannerService.Converter.Settings);
    }

    internal class Converter
    {
        public static readonly JsonSerializerSettings Settings = new JsonSerializerSettings
        {
            MetadataPropertyHandling = MetadataPropertyHandling.Ignore,
            DateParseHandling = DateParseHandling.None,
            Converters = {
                new IsoDateTimeConverter { DateTimeStyles = DateTimeStyles.AssumeUniversal }
            },
        };
    }
}
