using System;
using System.Collections.Generic;
using System.IO;
using System.Web;
using System.Web.Http;
using BoilAPI.Data;
using BoilAPI.Models;

namespace BoilAPI.Controllers
{
    public class ProductsController : ApiController
    {
        private readonly ProductsRepository _repository = new ProductsRepository(Path.Combine(HttpContext.Current.ApplicationInstance.Server.MapPath("~/App_Data"), "products.json"));

        public IEnumerable<Product> Get()
        {
            return _repository.All();
        }

        public Product Get(string id)
        {
            return _repository.GetById(id);
        }

        public void Post([FromBody]Product value)
        {
            _repository.Insert(value);
            _repository.SaveChanges();
        }
        public void Put([FromBody]Product value)
        {
            _repository.Update(value);
            _repository.SaveChanges();
        }

        public void Delete(string id)
        {
            _repository.Remove(id);
            _repository.SaveChanges();
        }
    }
}
