import React, { useEffect } from "react";

const Spinner = () => {
  useEffect(() => {
    // Use dynamic import to load the "ldrs" library on the client side
    import("ldrs").then(({ bouncy }) => {
      bouncy.register();
    });
  }, []);

  return (
    <div className="h-40 flex justify-center items-center">
      <l-bouncy size="45" speed="1.75" color="white"></l-bouncy>
    </div>
  );
};

export default Spinner;
