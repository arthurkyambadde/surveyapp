import React, { useState } from "react";

export default function MainLayout() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(data, "data");

  return <div>MainLayout</div>;
}
