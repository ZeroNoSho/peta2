import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faList, faMap } from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
  return (
    <div className={`w-96 h-screen blue text-slate-100 h-auto`}>
      <div>
        <div className="flex flex-row  py-5 cursor-default">
          <p className="ui-font-serif font-semibold text-xl text-center basis-1/6">
            <FontAwesomeIcon icon={faMap} />
          </p>
          <h3 className="ui-font-serif font-semibold text-xl basis-4/6">
            <Link href="/">
              <span className="pr-2">S</span>
              <span className="pr-2">i</span>
              <span className="pr-2">L</span>
              <span className="pr-2">o</span>
              <span className="pr-2">o</span>
              <span className="pr-2">k</span>
            </Link>
          </h3>
        </div>

        <hr />

        <div className="pt-4">
          <div className="flex flex-row py-4 cursor-pointer">
            <p className="basis-1/6 text-center">
              <FontAwesomeIcon icon={faList} />
            </p>
            <Link href="/" className="basis-5/6">
              Menu
            </Link>
          </div>
          <div className="flex flex-row py-4 cursor-pointer">
            <p className="basis-1/6 text-center">
              <FontAwesomeIcon icon={faCompass} />
            </p>
            <Link href="/" className="basis-5/6">
              list sensor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
