import useRedirectPageModel from "./model";

export default function RedirectPageView({
  data,
  loading,
}: ReturnType<typeof useRedirectPageModel>) {
  console.log(data, loading);

  return (
    <main className="bg-black h-dvh text-white flex justify-center items-center">
      <p>CARREGANDO...</p>
    </main>
  );
}
