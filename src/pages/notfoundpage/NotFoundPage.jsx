import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import { Button } from '@nextui-org/react';

function NotFoundPage() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen gap-6">
        <ErrorIcon sx={{ fontSize: '60px' }} className="text-red-600" />
        <h2 className="text-4xl lg:text-6xl font-bold ">404 Not found</h2>
        <p className="text-customStreetcolor text-lg font-normal">
          This page does not exist.
        </p>
      </div>
      <Button color="primary">Home</Button>
    </div>
  );
}

export default NotFoundPage;
