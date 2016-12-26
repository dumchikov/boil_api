using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using BoilAPI.Models;
using Newtonsoft.Json;

namespace BoilAPI.Data
{
    public class ProductsRepository : IRepository<Product>
    {
        private readonly string _fileName;

        private readonly IList<Product> _products;

        public ProductsRepository(string fileName)
        {
            _fileName = fileName;
            _products = JsonConvert.DeserializeObject<IList<Product>>(File.ReadAllText(fileName));
        }

        public Product GetById(string id)
        {
            return _products.SingleOrDefault(x => x.Id == id);
        }

        public IEnumerable<Product> All()
        {
            return _products;
        }

        public void Insert(Product entity)
        {
            entity.Id = Guid.NewGuid().ToString();
            _products.Add(entity);
        }

        public void Update(Product entity)
        {
            var product = GetById(entity.Id);
            product.Title = entity.Title;
            product.Description = entity.Description;
            product.Category = entity.Category;
            product.Image = entity.Image;
            product.Timers = entity.Timers;
        }

        public void Remove(string id)
        {
            var product = GetById(id);
            _products.Remove(product);
        }

        public void SaveChanges()
        {
            var json = JsonConvert.SerializeObject(_products);
            File.WriteAllText(_fileName, json);
        }
    }
}