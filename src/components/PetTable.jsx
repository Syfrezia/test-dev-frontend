import { Button } from './ui/Button';

export function PetTable({
  petList,
  handleAddRino,
  changePersianToMaineCoon,
  typeCount,
  handleShowTypeCount,
}) {
  return (
    <div className="mt-8">
      <h2 className="text-[#6b7280] text-lg font-medium mb-2">
        Daftar Peliharaan Esa
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-[80dvw] bg-white border border-[#0b74b6]/10 text-sm">
          <thead>
            <tr className="bg-linear-to-r from-[#1ea7e1] to-[#0b74b6] text-white">
              <th className="px-3 py-2 text-left font-medium text-white">
                Nama
              </th>
              <th className="px-3 py-2 text-left font-medium text-white">
                Jenis
              </th>
              <th className="px-3 py-2 text-left font-medium text-white">
                Ras
              </th>
              <th className="px-3 py-2 text-left font-medium text-white">
                Deskripsi
              </th>
            </tr>
          </thead>
          <tbody>
            {petList.map((pet, idx) => (
              <tr
                key={`${pet.name}-${idx}`}
                className="border-t last:border-b border-[#0f1724]/6"
              >
                <td className="px-3 py-2 text-[#0f1724]">{pet.name}</td>
                <td className="px-3 py-2 text-[#0f1724]">{pet.type}</td>
                <td className="px-3 py-2 text-[#0f1724]">{pet.race}</td>
                <td className="px-3 py-2 text-[#6b7280]">{pet.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          {Object.entries(typeCount).map(([type, count]) => (
            <p key={type} className="mt-2 text-[#6b7280] font-medium">
              Jumlah {type}: {count}
            </p>
          ))}
        </div>

        <div className="flex gap-3">
          <Button
            onClick={handleAddRino}
            disabled={petList.some((pet) => pet.name === 'Rino')}
          >
            Tambah Rino ke Daftar Peliharaan
          </Button>

          <Button
            onClick={changePersianToMaineCoon}
            disabled={!petList.some((pet) => pet.race === 'Persia')}
          >
            Ganti Persia ke Maine Coon
          </Button>

          <Button onClick={handleShowTypeCount}>
            Tampilkan Jumlah Jenis Peliharaan
          </Button>
        </div>
      </div>
    </div>
  );
}
