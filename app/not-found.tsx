import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Image src="/404.jpg" alt="404" width={500} height={500} />
    </div>
  );
};

export default NotFound;
