import { useRouter } from "next/router";
import { HeartIcon } from "@heroicons/react/24/solid";

/**
 * Site footer
 */
export const Footer = () => {
  const router = useRouter();

  const handlePrivacyPolicyClick = () => {
    router.push("/privacy-policy"); // Use the route to navigate to privacy policy
  };

  return (
    <div className="min-h-0 p-5 bg-base-100">
      <div className="w-full">
        <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-sm w-full text-white">
            <div>
              <p>&copy; 2024 Rymedi, Inc.</p> {/* Add semicolon after &copy */}
            </div>
            <div>
              Built with <HeartIcon className="inline-block h-4 w-4" /> by{" "}
              <a
                href="https://rymedi.com/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                Team Rymedi
              </a>
            </div>
            <span>·</span>
            <div
              className="underline underline-offset-2 hover:opacity-80 transition-opacity cursor-pointer"
              onClick={handlePrivacyPolicyClick}
            >
              Privacy Policy
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
