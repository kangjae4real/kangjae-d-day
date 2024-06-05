import { useEffect, useState } from "react";

const useClient = (): [boolean] => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return [ready];
};

export default useClient;
