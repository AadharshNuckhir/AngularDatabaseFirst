using System;
using System.Collections.Generic;

namespace DatabaseFirst.Models
{
    public partial class Player
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public int ShirtNo { get; set; }
        public int Appearances { get; set; }
        public int Goals { get; set; }
        public int PositionId { get; set; }

        public virtual Position? Position { get; set; } = null!;
    }
}
