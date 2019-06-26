using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FantasyLineUp
{
    class Team
    {
        /// <summary>
        /// The id of team
        /// </summary>
        public int TeamId { get; set; }
        /// <summary>
        /// the list of players of the each team
        /// </summary>
        public List<Player> Players { get; set; }

        public Team()
        {
            Players = new List<Player>();
        }
    }
}
