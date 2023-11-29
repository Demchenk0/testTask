import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {initialSellers} from './mockup';

const itemsPerPage = 3;

const PaginatedList = ( data:any ) => {
  const [currentPage, setCurrentPage] = useState(1);

    const handleChange = (event:any, value:any) => {
        setCurrentPage(value);
    };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div>
      <Stack spacing={2} mt={3}>
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={currentPage}
          onChange={handleChange}
          shape="rounded"
        />
      </Stack>
    </div>
  );
};

export default function PaginationRounded( initialSellers:any ) {
  return <PaginatedList data={initialSellers} />;
}