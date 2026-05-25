import React from "react";
import ErrorPage from "@/pages/ErrorPage";

type AppErrorBoundaryProps = {
  children: React.ReactNode;
};

type AppErrorBoundaryState = {
  hasError: boolean;
};

class AppErrorBoundary extends React.Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  constructor(props: AppErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  override componentDidCatch(error: Error) {
    console.error("Application error boundary caught an error:", error);
  }

  override render() {
    if (this.state.hasError) {
      return (
        <ErrorPage
          title="We hit a problem loading this page"
          message="Something unexpected happened while rendering the website. Please reload the page and try again."
          detail="If the issue started because of an unstable internet connection, reconnect and refresh the page."
        />
      );
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;