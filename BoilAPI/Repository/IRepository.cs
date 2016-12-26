using System;
using System.Collections.Generic;

namespace BoilAPI.Data
{
    public interface IRepository<T>
        where T : class
    {
        T GetById(string id);

        IEnumerable<T> All();

        void Insert(T entity);

        void Update(T entity);

        void Remove(string id);

        void SaveChanges();
    }
}