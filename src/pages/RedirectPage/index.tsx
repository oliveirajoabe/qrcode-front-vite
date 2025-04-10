import useRedirectPageModel from "./model";
import RedirectPageView from "./view";

export default function RedirectPage() {
  const redirectPageModel = useRedirectPageModel();
  return <RedirectPageView {...redirectPageModel} />;
}
