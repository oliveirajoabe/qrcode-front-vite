import { Check, CircleArrowRight, Copy, QrCode } from "lucide-react";
import { InputField, InputIcon, InputRoot } from "../../components/Input";
import { ButtonField } from "../../components/Button";
import useHomeModel from "./model";
import { QRCode as QRCodeComponent } from "react-qrcode-logo";
import { formatDate } from "../../utils/formatData";

export default function HomeView({
  errors,
  handleSubmit,
  onSubscribe,
  register,
  copyText,
  isTextCopied,
  data,
  isPending,
  fullUrl,
}: ReturnType<typeof useHomeModel>) {
  return (
    <div className="mt-60">
      <form
        onSubmit={handleSubmit(onSubscribe)}
        className="flex justify-center"
      >
        <div className="flex gap-4 w-full flex-col sm:flex-row max-w-7xl">
          <InputRoot className="w-full" error={!!errors?.url}>
            <InputField
              type="text"
              placeholder="Inserir link"
              {...register("url")}
            />
            <InputIcon>
              <QrCode />
            </InputIcon>
          </InputRoot>

          <ButtonField>{isPending ? "..." : <CircleArrowRight />}</ButtonField>
        </div>
        {errors?.url && (
          <p className="text-red-500 text-xs font-semibold">
            {errors.url.message}
          </p>
        )}
      </form>
      {!!data && (
        <aside className="mt-16 flex justify-center">
          <div className="bg-purple-200 w-full p-4 rounded-md flex flex-col md:flex-row md:justify-between max-w-7xl">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl">Link encurtado</h2>
                <p>{data.url}</p>
                <div className="flex gap-2 items-center mt-4">
                  <p className="bg-white text-black px-2 rounded">
                    {fullUrl}/{data.shortedUrl}
                  </p>
                  <ButtonField onClick={copyText}>
                    {isTextCopied ? <Check /> : <Copy />}
                  </ButtonField>
                </div>
              </div>
              <small className="">Expira: {formatDate(data.expireAt)}</small>
            </div>
            <div className="flex mt-5 sm:mt-0">
              <QRCodeComponent
                value={`${fullUrl}/${data.shortedUrl}`}
                style={{ borderRadius: "6px" }}
              />
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}
