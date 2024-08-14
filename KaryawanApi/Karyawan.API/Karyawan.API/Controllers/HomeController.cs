using Karyawan.API.Data;
using Karyawan.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Karyawan.API.Controllers
{
    [ApiController]
    [Route("api/controller")]
    public class HomeController : Controller
    {
        private readonly KDbContext _kDbContext;

        public HomeController(KDbContext kDbContext)
        {
            _kDbContext = kDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllKaryawan()
        {
            var data = await _kDbContext.Karyawan.ToListAsync();
            return Ok(data);
        }

        [HttpPost]
        public async Task<IActionResult> AddKaryawan([FromBody] DataKaryawan karyawanrequest)
        {
            karyawanrequest.Id = Guid.NewGuid();
            await _kDbContext.Karyawan.AddAsync(karyawanrequest);
            await _kDbContext.SaveChangesAsync();

            return Ok(karyawanrequest);
        }
    }
}
