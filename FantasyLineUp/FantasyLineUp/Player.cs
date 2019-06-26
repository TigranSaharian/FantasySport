using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FantasyLineUp
{
    class Player
    {
        /// <summary>
        /// The number of player.
        /// </summary>
        public int PlayerId { get; set; }
        /// <summary>
        /// The position of player.
        /// </summary>
        public PlayerTypes Position { get; set; }
        /// <summary>
        /// Player price that company paid for.
        /// </summary>
        public int Price { get; set; }
        /// <summary>
        /// Player team / group id.
        /// </summary>
        public int TeamId { get; set; }
    }
}
