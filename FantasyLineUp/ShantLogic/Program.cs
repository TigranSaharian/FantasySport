using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShantLogic
{
    class Program
    {
        static Random Random = new Random();

        static void Main(string[] args)
        {
            
            void RndGoalsGenerator()
            {

                List<int> myList = new List<int>();

                for (int i = 0; i < 10; i++)
                {
                    int b = Random.Next(1, 10);
                    myList.Add(b);
                }

                for (int i = 0; i < 10; i++)
                {
                    Console.Write(myList[i] + " ");
                }

            }
            //void rndPosgeneration()
            //{
            //    List<int> number = new List<int>();
            //    number.Add(10);
            //    number.Add(20);
            //}

            RndGoalsGenerator();
            Console.ReadLine();

        }
    }
}
