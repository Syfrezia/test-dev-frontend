import { useState } from 'react';

import { isAnagram } from '../lib/utils';
import { anagramTestCases } from '../lib/data';

export function IsAnagramTestCases() {
  const [testResults, setTestResults] = useState([]);

  const handleRunTests = () => {
    const results = anagramTestCases.map(({ str1, str2, expected }) => {
      const result = isAnagram(str1, str2);
      return { str1, str2, expected, result };
    });
    setTestResults(results);
  };

  return (
    <div className="mt-8">
      <div className="max-w-[80dvw] flex justify-between items-center">
        <h2 className="text-[#6b7280] text-lg font-medium mb-2">
          Test Kasus Anagram
        </h2>

        <button
          onClick={handleRunTests}
          className="bg-[#0b74b6] text-white px-4 py-2 rounded"
        >
          Jalankan Tes
        </button>
      </div>

      <div className="min-h-48 mt-4 overflow-x-auto">
        <table className="min-w-[80dvw] bg-white border border-[#0b74b6]/10 text-sm">
          <thead>
            <tr className="bg-linear-to-r from-[#1ea7e1] to-[#0b74b6] text-white">
              <th className="px-3 py-2 text-left font-medium text-white">
                No.
              </th>
              <th className="px-3 py-2 text-left font-medium text-white">
                String 1
              </th>
              <th className="px-3 py-2 text-left font-medium text-white">
                String 2
              </th>
              <th className="px-3 py-2 text-left font-medium text-white">
                Hasil
              </th>
              <th className="px-3 py-2 text-left font-medium text-white">
                Ekspektasi
              </th>
              <th className="px-3 py-2 text-left font-medium text-white">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {testResults.length === 0 && (
              <tr className='h-54'>
                <td
                  colSpan="7"
                  className="px-3 py-2 text-center text-[#6b7280]"
                >
                  Klik "Jalankan Tes" untuk melihat hasilnya
                </td>
              </tr>
            )}
            {testResults.length > 1 &&
              testResults.map(({ str1, str2, expected, result }, index) => {
                const ok = result === expected;
                return (
                  <tr
                    key={index}
                    className={`border-t last:border-b border-[#0f1724]/6 ${ok ? '' : 'bg-red-50'}`}
                  >
                    <td className="px-3 py-2 text-[#0f1724]">{index + 1}</td>
                    <td className="px-3 py-2 text-[#0f1724]">{str1}</td>
                    <td className="px-3 py-2 text-[#0f1724]">{str2}</td>
                    <td className="px-3 py-2 text-[#0f1724]">
                      {result.toString()}
                    </td>
                    <td className="px-3 py-2 text-[#0f1724]">
                      {expected.toString()}
                    </td>
                    <td className="px-3 py-2 text-[#0f1724] font-medium">
                      {ok ? 'Cocok' : 'Gagal'}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
