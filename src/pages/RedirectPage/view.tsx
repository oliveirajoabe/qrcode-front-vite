import useRedirectPageModel from "./model";

export default function RedirectPageView({
  loading,
  error,
}: ReturnType<typeof useRedirectPageModel>) {
  return (
    <main className="bg-black h-dvh text-white flex justify-center items-center">
      {!error && !loading && <p>CARREGANDO...</p>}
      {error && <p>{(error as Error).message}</p>}
    </main>
  );
}
