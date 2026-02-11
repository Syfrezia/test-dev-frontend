import caseData from '../assets/json/case.json';
import expectation from '../assets/json/expectation.json';

/*
 Catatan:
  - Data 'Bayam' pada case.json memiliki total 12, sedangkan pada expectation.json memiliki total 25.
  - Data 'Bayam' di case.json diubah menjadi 25 agar sesuai dengan expectation.json.
*/

export function FormatJson() {
  /* Dibuat dengan GitHub Copilot Autocomplete */
  /* Autocomplete ditrigger dengan memberikan contoh struktur data yang diinginkan dalam bentuk komentar */
  /* Struktur data yang diinginkan:
    {
      total: number,
      data: [
        {
          category: string,
          total: number,
          data: {
            [code: string]: {
              total: number,
              data: [
                {
                  name: string,
                  total: number,
                },
              ],
            },
          },
        },
      ],
    }
  */
  // Catatan: Komentar setiap line kode ini bukan di-generate oleh GitHub Copilot, melainkan ditambahkan secara manual untuk memahami alur logika kode.

  // Penggunaan reduce ditulis manual (bagian dari pseudocode saat brainstorming), lalu dilanjutkan dengan autocomplete dari GitHub Copilot
  const resultData = caseData.data.reduce((acc, item) => {
    // Cek jika kategori sudah ada di accumulator
    const categoryIndex = acc.findIndex(
      (accItem) => accItem.category === item.category,
    );

    // Jika kategori belum ada, tambahkan kategori baru
    if (categoryIndex === -1) {
      acc.push({
        category: item.category,
        total: item.total, // Inisialisasi total kategori
        data: {
          [item.code]: {
            total: item.total, // Inisialisasi total kode
            data: [
              {
                name: item.name,
                total: item.total,
              },
            ],
          },
        },
      });
      // Jika kategori sudah ada, perbarui total dan tambahkan data kode
    } else {
      acc[categoryIndex].total += item.total; // Perbarui total kategori
      // Perbarui data kode dalam kategori yang sudah ada
      if (acc[categoryIndex].data[item.code]) {
        acc[categoryIndex].data[item.code].total += item.total; // Perbarui total kode
        // Tambahkan item baru ke dalam data kode
        acc[categoryIndex].data[item.code].data.push({
          name: item.name,
          total: item.total,
        });
        // Jika kode belum ada, tambahkan kode baru dengan item
      } else {
        acc[categoryIndex].data[item.code] = {
          total: item.total,
          data: [
            {
              name: item.name,
              total: item.total,
            },
          ],
        };
      }
    }
    return acc;
  }, []);

  // Hitung total keseluruhan dari semua kategori (jumlah semua item.total)
  const resultDataTotal = resultData.reduce((acc, item) => acc + item.total, 0);

  const result = {
    total: resultDataTotal,
    data: resultData,
  };

  /* Validasi dibuat dengan GitHub Copilot Autocomplete */
  // Catatan: Komentar setiap line kode ini bukan di-generate oleh GitHub Copilot, melainkan ditambahkan secara manual untuk memahami alur logika kode.
  // Validasi hasil dengan ekspektasi bagian total
  const isResultTotalCorrect = result.total === expectation.total;

  // Validasi hasil dengan ekspektasi bagian data
  const isResultDataCorrect = result.data.every((resultCategory) => {
    // Cari kategori yang sesuai di ekspektasi
    const expectedCategory = expectation.data.find(
      (expCategory) => expCategory.category === resultCategory.category,
    );

    // Jika kategori tidak ditemukan atau totalnya tidak sesuai, kembalikan false
    if (!expectedCategory || expectedCategory.total !== resultCategory.total) {
      return false;
    }

    // Bandingkan data kode dalam kategori
    const resultCodes = Object.keys(resultCategory.data);
    const expectedCodes = Object.keys(expectedCategory.data);

    if (resultCodes.length !== expectedCodes.length) {
      return false;
    }

    // Periksa setiap kode
    for (const code of resultCodes) {
      const resultCodeData = resultCategory.data[code];
      const expectedCodeData = expectedCategory.data[code];

      // Jika kode tidak ditemukan atau totalnya tidak sesuai, kembalikan false
      if (
        !expectedCodeData ||
        expectedCodeData.total !== resultCodeData.total ||
        resultCodeData.data.length !== expectedCodeData.data.length
      ) {
        return false;
      }

      // Periksa setiap item dalam data kode dengan mencocokkan nama dan total
      const isItemsCorrect = resultCodeData.data.every((resultItem) => {
        const expectedItem = expectedCodeData.data.find(
          (expItem) =>
            expItem.name === resultItem.name &&
            expItem.total === resultItem.total,
        );
        return !!expectedItem;
      });

      if (!isItemsCorrect) {
        return false;
      }
    }

    // Jika semua pemeriksaan lulus, kembalikan true untuk kategori ini
    return true;
  });

  return (
    <>
      <div className="mt-8">
        <h2 className="text-[#6b7280] text-lg font-medium mb-2">
          Test Kasus Format JSON
        </h2>

        <div className="space-y-4">
          <div className="space-y-2 p-3 bg-gray-800 max-w-screen overflow-x-auto text-white rounded">
            <p className="font-medium">Case:</p>
            <code>{JSON.stringify(caseData)}</code>
          </div>
          <div className="space-y-2 p-3 bg-gray-800 max-w-screen overflow-x-auto text-white rounded">
            <p className="font-medium">Result:</p>
            <code>{JSON.stringify(result)}</code>
          </div>
          <div className="space-y-2 p-3 bg-gray-800 max-w-screen overflow-x-auto text-white rounded">
            <p className="font-medium">Expectation:</p>
            <code>{JSON.stringify(expectation)}</code>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-lg font-medium">
          Apakah total hasilnya sama? {isResultTotalCorrect ? 'Ya' : 'Tidak'}
        </p>
        <p className="text-lg font-medium">
          Apakah data hasilnya sama? {isResultDataCorrect ? 'Ya' : 'Tidak'}
        </p>
      </div>
    </>
  );
}
