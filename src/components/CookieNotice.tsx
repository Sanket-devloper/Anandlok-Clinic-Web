import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "anandlok-cookie-consent";

const CookieNotice = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(COOKIE_CONSENT_KEY) !== "accepted") {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-5 left-5 z-40 w-[calc(100vw-2.5rem)] max-w-sm rounded-2xl border border-border bg-background/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-md md:bottom-6 md:left-6">
      <div className="space-y-3">
        <div>
          <p className="font-semibold text-foreground mb-1">Cookie notice</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We use cookies to improve your browsing experience and remember your preferences.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={acceptCookies}
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Accept
          </button>
          <Link to="/privacy-policy" className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookieNotice;