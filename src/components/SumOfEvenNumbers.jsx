import { useState } from 'react';

import { arrayOfNum } from '../lib/data';
import { isEven } from '../lib/utils';

export function SumOfEvenNumbers() {
  const [evenSum, setEvenSum] = useState(0);
  const [evenNumbers, setEvenNumbers] = useState([]);

  // Task 7: Buat fungsi untuk menjumlah bilangan genap dari array berikut [15,18,3,9,6,2,12,14] dan munculkan bilangan genap nya
  const handleEvenSum = () => {
    const evens = arrayOfNum.filter(isEven);
    const sum = evens.reduce((acc, curr) => acc + curr, 0);
    setEvenSum(sum);
    setEvenNumbers(evens);
  };

  return (
    <div className="mt-8">
      <h2 className="text-[#6b7280] text-lg font-medium mb-2">
        Jumlah Bilangan Genap
      </h2>
      <p>Array [{arrayOfNum.join(', ')}]</p>
      <p>Bilangan genap: {`[${evenNumbers.join(', ')}]`}</p>
      <p className="mt-2 font-semibold">
        Jumlah: {evenSum > 0 ? evenSum : '...'}
      </p>

      <button
        onClick={handleEvenSum}
        className="mt-4 px-4 py-2 bg-[#0b74b6] text-white rounded-md hover:bg-[#095a91] disabled:opacity-50 disabled:cursor-not-allowed font-medium"
      >
        Hitung Jumlah Bilangan Genap
      </button>
    </div>
  );
}
