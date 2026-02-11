import { useState } from 'react';

import { arrayOfNum } from '../lib/data';
import { isEven } from '../lib/utils';

export function SumOfEvenNumbers() {
  const [evenSum, setEvenSum] = useState(0);

  const handleEvenSum = () => {
    const sum = arrayOfNum
      .filter((num) => isEven(num))
      .reduce((acc, curr) => acc + curr, 0);
    setEvenSum(sum);
  };

  return (
    <div className="mt-8">
      <h2 className="text-[#6b7280] text-lg font-medium mb-2">
        Jumlah Bilangan Genap
      </h2>
      <p>
        Jumlah bilangan genap dari [{arrayOfNum.join(', ')}] adalah:{' '}
        <strong>{evenSum === 0 ? '...' : evenSum}</strong>
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
