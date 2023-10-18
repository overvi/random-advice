import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Values {
  id: number;
  advice: string;
}

interface Advice {
  slip: Values;
}

const useAdvice = () =>
  useQuery<Advice>({
    queryKey: ["advice"],
    queryFn: () =>
      axios
        .get<Advice>("https://api.adviceslip.com/advice", {
          params: {
            _: new Date().getTime(),
          },
        })
        .then((res) => res.data),
  });

export default useAdvice;
