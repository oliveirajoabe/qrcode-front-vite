import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

type ResponseUrlShort = {
  clicks: number;
  createdAt: string;
  description?: string;
  expireAt: Date;
  shortedUrl: string;
  title?: string;
  url?: string;
  userId?: string;
  message?: string;
  statusCode?: number;
};
export default function useRedirectPageModel() {
  const params = useParams();

  const { data, isFetched, error } = useQuery({
    queryKey: ["page"],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/url/${params.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseJson: ResponseUrlShort = await response.json();

      if (!response.ok) {
        throw new Error(responseJson.message || "Erro ao buscar o link");
      }

      if (responseJson.url) {
        window.location.replace(responseJson.url);
      }

      return responseJson;
    },
  });

  return { loading: isFetched, data, error };
}
