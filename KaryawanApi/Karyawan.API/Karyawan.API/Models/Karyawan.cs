namespace Karyawan.API.Models
{
    public class DataKaryawan
    {
        public Guid Id { get; set; }
        public string Nama { get; set; }

        public string Email { get; set; }

        public int Phone { get; set; }

        public int Gaji { get; set; }
        public string Divisi { get; set; }

        public string Level { get; set;}
    }
}
