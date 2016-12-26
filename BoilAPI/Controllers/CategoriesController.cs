using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using BoilAPI.Models;

namespace BoilAPI.Controllers
{
    public class CategoriesController : ApiController
    {
        public IEnumerable<Category> Get()
        {
            return new List<Category>
            {
                new Category
                {
                    Name = "Морепродукты",
                    Image = "",
                    Type = CategoryType.Seafood
                },
                new Category
                {
                    Name = "Яйца",
                    Image = "",
                    Type = CategoryType.Eggs
                },
                new Category
                {
                    Name = "Мясо",
                    Image = "",
                    Type = CategoryType.Meat
                },
                new Category
                {
                    Name = "Рыба",
                    Image = "",
                    Type = CategoryType.Fish
                },
                new Category
                {
                    Name = "Овощи",
                    Image = "",
                    Type = CategoryType.Vegetables
                },
                new Category
                {
                    Name = "Крупы",
                    Image = "",
                    Type = CategoryType.Cereals
                },
                new Category
                {
                    Name = "Макароны",
                    Image = "",
                    Type = CategoryType.Macaroni
                },
                new Category
                {
                    Name = "Грибы",
                    Image = "",
                    Type = CategoryType.Mashrooms
                }
            }.OrderBy(x => x.Name);
        }
    }
}