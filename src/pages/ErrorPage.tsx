import { AlertTriangle, RefreshCcw, Home, WifiOff } from "lucide-react";
import { Link } from "react-router-dom";

type ErrorPageProps = {
  title: string;
  message: string;
  detail?: string;
  showHomeLink?: boolean;
};

const ErrorPage = ({ title, message, detail, showHomeLink = true }: ErrorPageProps) => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-muted/30 px-4 py-16 md:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary shadow-soft">
          <AlertTriangle className="h-10 w-10" />
        </div>

        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">Something went wrong</p>
        <h1 className="section-heading mb-4">{title}</h1>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">{message}</p>
        {detail ? <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{detail}</p> : null}

        <div className="mt-8 grid w-full gap-4 sm:grid-cols-2">
          <button
            type="button"
            onClick={handleRetry}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <RefreshCcw className="h-4 w-4" />
            Try Again
          </button>

          {showHomeLink ? (
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Home className="h-4 w-4" />
              Go to Home
            </Link>
          ) : (
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Home className="h-4 w-4" />
              Go to Home
            </a>
          )}
        </div>

        <div className="mt-10 grid w-full gap-4 md:grid-cols-2">
          <div className="premium-card flex items-start gap-4 text-left">
            <WifiOff className="mt-1 h-5 w-5 shrink-0 text-accent" />
            <div>
              <h2 className="font-semibold text-foreground">If this is a network issue</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Check your internet connection and try reloading the page once the network is stable.
              </p>
            </div>
          </div>

          <div className="premium-card flex items-start gap-4 text-left">
            <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-accent" />
            <div>
              <h2 className="font-semibold text-foreground">If the problem continues</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Return to the home page and try again, or reach out through the contact page for help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;