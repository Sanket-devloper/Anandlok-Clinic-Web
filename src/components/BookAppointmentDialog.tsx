import { ReactElement } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";

type BookAppointmentDialogProps = {
  children?: ReactElement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const BookAppointmentDialog = ({ children, open, onOpenChange }: BookAppointmentDialogProps) => {
  const dialogProps = open !== undefined ? { open, onOpenChange } : {};
  const isMobile = useIsMobile();
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfAvLcme81fcmpNxashXI_fVSmYF7f1Iu_eOPJpX6IQvzWhWA/viewform";

  return (
    <Dialog {...dialogProps}>
      {children ? <DialogTrigger asChild>{children}</DialogTrigger> : null}
      <DialogContent className="w-[95vw] max-w-5xl p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-0">
          <DialogTitle>Book Appointment</DialogTitle>
          <DialogDescription>
            Fill this form and our team will contact you shortly.
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 pb-6 pt-4">
          {isMobile ? (
            <div className="flex flex-col items-start gap-4 rounded-xl border border-border bg-muted/20 p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Google Forms can block embedded loading on mobile browsers when third-party cookies are restricted.
                Open the appointment form in a new tab for the most reliable experience.
              </p>
              <Button asChild className="rounded-full">
                <a href={formUrl} target="_blank" rel="noreferrer">
                  Open Appointment Form
                </a>
              </Button>
              <p className="text-xs text-muted-foreground">
                If it still does not load, please allow cookies for Google or sign in to your Google account.
              </p>
            </div>
          ) : (
            <>
              <iframe
                title="Anandlok Appointment Form"
                src={`${formUrl}?embedded=true`}
                className="h-[68vh] md:h-[72vh] w-full rounded-xl border border-border"
                loading="lazy"
              >
                Loading…
              </iframe>
              <p className="text-xs text-muted-foreground mt-3">
                If the form does not load, open it directly: {" "}
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  Open Google Form
                </a>
              </p>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookAppointmentDialog;