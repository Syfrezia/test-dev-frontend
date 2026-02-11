import { useState } from 'react';

import { arrayOfNum } from '../lib/data';
import { isEven } from '../lib/utils';
import { Button } from './ui/Button';

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

      <Button onClick={handleEvenSum}>Hitung Jumlah Bilangan Genap</Button>
    </div>
  );
}
