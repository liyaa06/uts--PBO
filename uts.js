// Class induk
class Karyawan {
  constructor(nama, kuotaCuti) {
    this.nama = nama;
    this.kuotaCuti = kuotaCuti;
  }

  ajukanCuti(jumlahHari, jenisCuti) //method 
  {
    if (jumlahHari > this.kuotaCuti) {
      console.log(`${this.nama}: Pengajuan cuti tidak disetujui karna Kuota anda tidak cukup untuk ${jenisCuti}.`);
    } else {
      this.kuotaCuti -= jumlahHari;
      console.log(`${this.nama}: Pengajuan ${jenisCuti} selama ${jumlahHari} hari disetujui. 
Sisa kuota cuti: ${this.kuotaCuti} hari.`);
    }
  }
}

//child
class CutiTahunan extends Karyawan {
  constructor(nama) {
    super(nama, 12); 
  }
}

class CutiSakit extends Karyawan {
  constructor(nama) {
    super(nama, 2); 
  }
}

class CutiMelahirkan extends Karyawan {
  constructor(nama) {
    super(nama, 90); 
  }
}


const husen = new CutiTahunan("husen");
const fadel = new CutiSakit("fadel");
const liya = new CutiMelahirkan("liya");

husen.ajukanCuti(10, "Cuti Tahunan");     
fadel.ajukanCuti(5, "Cuti Sakit");       
liya.ajukanCuti(75, "Cuti Melahirkan"); 