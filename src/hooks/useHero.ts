import { profile } from "../lib/constants";
import cvPdf from "../data/CV-Hubert-RAHERIMANANTENA.pdf"

export default function useHero() {

  const downloadCV = () => {
    const link = document.createElement("a");

    link.href = cvPdf;
    link.download = `${profile.name.replace(/\s+/g, "_")}_CV.pdf`;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }

  return { downloadCV }

}
