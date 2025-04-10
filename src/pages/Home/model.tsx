import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { copyToClipboard } from "../../utils/copyToClipboard";
import { useMemo, useState } from "react";
import { useMutation } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL;

const subscriptionSchema = z.object({
  url: z.string().url("Insira uma url corretamente"),
});

type SubscriptionSchema = z.infer<typeof subscriptionSchema>;

type ResponseUrlShort = {
  clicks: number;
  createdAt: string;
  description?: string;
  expireAt: Date;
  shortedUrl: string;
  title?: string;
  url?: string;
  userId?: string;
};

export default function useHomeModel() {
  const [isTextCopied, setIsTextCopied] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  });

  const {
    isPending,
    data,
    mutateAsync: createShortLink,
  } = useMutation<ResponseUrlShort, Error, SubscriptionSchema>({
    mutationFn: async (data: SubscriptionSchema) => {
      const response = await fetch(`${API_URL}/url`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao encurtar o link");
      }

      const responseJson = response.json();

      return responseJson;
    },
  });

  const fullUrl = useMemo(() => window.location.origin, []);

  async function onSubscribe(data: SubscriptionSchema) {
    createShortLink(data);
  }

  async function copyText() {
    const isCopy = await copyToClipboard(`${fullUrl}/${data?.shortedUrl}`);
    setIsTextCopied(!!isCopy);
    setTimeout(() => setIsTextCopied(false), 800);
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubscribe,
    copyText,
    isTextCopied,
    isPending,
    data,
    fullUrl,
  };
}
