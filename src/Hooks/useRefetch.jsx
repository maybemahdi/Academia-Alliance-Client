import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useRefetch = () => {
  const { isLoading, refetch, data } = useQuery({
    queryKey: ["assignments"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/assignments`
      );
      return data;
    },
  });
  return { isLoading, refetch, data };
};

export default useRefetch;
