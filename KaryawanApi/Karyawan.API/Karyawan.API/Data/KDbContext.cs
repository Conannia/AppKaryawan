using Karyawan.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Karyawan.API.Data
{
    public class KDbContext: DbContext
    {
        public KDbContext(DbContextOptions options) : base(options) { 
        
        }

        public DbSet<DataKaryawan> Karyawan { get; set; }
    }
}
