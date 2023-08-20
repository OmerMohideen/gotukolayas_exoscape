import { useEffect, useState } from "react";

export const useAsync = <S>(cb: Promise<S> | undefined) => {
  const [data, setData] = useState<S>();

  useEffect(() => {
    if (!cb) return;

    cb.then((data: S) => {
      setData(data);
    });
  }, [cb]);

  return data;
};
