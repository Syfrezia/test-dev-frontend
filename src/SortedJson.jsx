import expectation from './assets/json/expectation.json';

// Prompt: create a function to sort the total of innermost data from largest to smallest. log the sorted result.
export function SortedJson() {
  const sortInnermostTotal = (data) => {
    return {
      ...data,
      data: data.data.map((categoryItem) => {
        const sortedCategoryData = Object.fromEntries(
          Object.entries(categoryItem.data).map(([key, value]) => [
            key,
            {
              ...value,
              data: [...value.data].sort((a, b) => b.total - a.total),
            },
          ]),
        );

        return {
          ...categoryItem,
          data: sortedCategoryData,
        };
      }),
    };
  };

  const sortedResult = sortInnermostTotal(expectation);

  return (
    <div className="mt-2 p-3 bg-gray-800 max-w-screen overflow-x-auto text-white rounded">
      <p className="font-medium">Sorted Inner Total:</p>
      <code>{JSON.stringify(sortedResult)}</code>
    </div>
  );
}
