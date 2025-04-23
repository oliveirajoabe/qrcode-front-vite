import {
  Check,
  CircleArrowRight,
  Copy,
  MessageCircleMore,
  Phone,
  QrCode,
} from "lucide-react";
import { InputField, InputIcon, InputRoot } from "../../components/Input";
import { ButtonField } from "../../components/Button";
import useHomeModel from "./model";
import { QRCode as QRCodeComponent } from "react-qrcode-logo";
import { formatDate } from "../../utils/formatData";
import { PulseLoader } from "react-spinners";

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
  onSubscribeWhatsApp,
  errorsZap,
  registerZap,
  handleSubmitZap,
}: ReturnType<typeof useHomeModel>) {
  return (
    <div className="mt-60">
      <div className="flex gap-12 md:gap-10 flex-col md:flex-row">
        <form
          onSubmit={handleSubmit(onSubscribe)}
          className="flex justify-center md:w-1/2"
        >
          <div className="flex gap-4 w-full flex-col max-w-7xl">
            <h2>Encurtar link:</h2>
            <InputRoot
              className="w-full"
              error={!!errors?.url}
              messageError={errors?.url?.message}
            >
              <InputField
                type="text"
                placeholder="Inserir link"
                inputMode="url"
                {...register("url")}
              />
              <InputIcon>
                <QrCode />
              </InputIcon>
            </InputRoot>

            <ButtonField>
              {isPending ? (
                <PulseLoader size={8} margin={1} color="#f8f9fa" />
              ) : (
                <CircleArrowRight />
              )}
            </ButtonField>
          </div>
        </form>

        <hr className="border border-white h-auto" />

        <form
          className="flex justify-center md:w-1/2"
          onSubmit={handleSubmitZap(onSubscribeWhatsApp)}
        >
          <div className="flex gap-4 w-full flex-col max-w-7xl">
            <h2>Link whatsapp:</h2>
            <InputRoot
              className="w-full"
              error={!!errorsZap?.messageText}
              messageError={errorsZap?.messageText?.message}
            >
              <InputField
                type="text"
                placeholder="Mensagem de texto"
                {...registerZap("messageText")}
              />
              <InputIcon>
                <MessageCircleMore />
              </InputIcon>
            </InputRoot>

            <InputRoot
              className="w-full"
              error={!!errorsZap?.phoneNumber}
              messageError={errorsZap?.phoneNumber?.message}
            >
              <InputField
                type="tel"
                placeholder="Numero de celular"
                inputMode="tel"
                {...registerZap("phoneNumber")}
              />
              <InputIcon>
                <Phone />
              </InputIcon>
            </InputRoot>

            <ButtonField>
              {isPending ? (
                <PulseLoader size={8} margin={1} color="#f8f9fa" />
              ) : (
                <CircleArrowRight />
              )}
            </ButtonField>
          </div>
        </form>
      </div>

      {!!data && (
        <aside className="mt-16 flex justify-center">
          <div className="bg-purple-200 w-full p-4 rounded-md flex flex-col md:flex-row md:justify-between max-w-7xl">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl">Link encurtado</h2>
                <p>{data.url}</p>
                <div className="flex gap-2 items-center mt-4">
                  <p className="bg-white text-black px-2 rounded w-[260px] truncate md:w-auto">
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
