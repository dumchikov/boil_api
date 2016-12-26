using System;
using System.Collections.Generic;

namespace BoilAPI.Models
{
    public class Product
    {
        public string Id { get; set; }

        public string Title { get; set; }

        public string Image { get; set; }

        public string Description { get; set; }

        public Category Category { get; set; }

        public IList<Timer> Timers { get; set; }
    }
}