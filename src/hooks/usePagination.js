import { useEffect, useState } from "react";
export const DOTS = "...";

const range = (start, end, step = 1) => {
  return Array.from(
    { length: Math.ceil((end - start + 1) / step) },
    (item, index) => start + index * step
  );
};

function usePagination({ currentPage, totalCount, pageSize }) {
  // The return value of the hook function is the newly generated paginationRange State
  // In the hook function, useEffect is used to monitor the changes of pageSize and currentPage, and totalCount.
  // When the change occurs, we need to re-update the paginationRange.
  // There are two main cases for updates,
  // 1: The first one, if the total page count is less than 4
  // then it means we never need to insert a DOTS.
  // 2: The second case is relatively complicated.
  // First, we need to consider whether the current page is the first page, the second page, the last page or the penultimate page
  // In this case, we only need to insert a DOTS in one direction.
  // Next, we consider the normal case where the DOTS need to be inserted on both sides.
  // After processing the DOTS, the paginationRange can be generated.
  // Here I created a "range" function to generate an array of page numbers.

  const [paginationRange, setPaginationRange] = useState([]);
  useEffect(() => {
    const start = 1;
    const end = Math.ceil(totalCount / pageSize);
    if (end === 1) {
      setPaginationRange([1]);
    } else {
      // Case 1: Total Pages < 4
      if (end < 4) {
        setPaginationRange(range(start, end));
        // Case 2: Greater than 4
      } else {
        // Case 2.1: Example: 1,2,3 ... end
        if (currentPage === start || currentPage === start + 1) {
          setPaginationRange([...range(start, start + 2), DOTS, end]);
        }
        // Case 2.2: Example : 1 ... end - 2, end - 1, end
        else if (currentPage === end || currentPage === end - 1) {
          setPaginationRange([start, DOTS, ...range(end - 2, end)]);
        }
        // Case 2.3: Example: start ... Cur - 1, Cur, Cur + 1, ... end
        else {
          setPaginationRange([
            start,
            DOTS,
            ...range(currentPage - 1, currentPage + 1),
            DOTS,
            end,
          ]);
        }
      }
    }
  }, [currentPage, pageSize, totalCount]);
  return paginationRange;
}

export default usePagination;
