const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/917420026989?text=Hello%20Anandlok%20Ayurveda";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Anandlok Ayurveda on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background md:bottom-6 md:right-6 md:h-16 md:w-16"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 md:h-8 md:w-8 fill-current">
        <path d="M20.52 3.48A11.8 11.8 0 0 0 12.02 0C5.51 0 .22 5.28.22 11.79c0 2.07.54 4.08 1.56 5.85L0 24l6.54-1.72a11.72 11.72 0 0 0 5.48 1.37h.01c6.51 0 11.79-5.28 11.79-11.79 0-3.15-1.23-6.11-3.3-8.38Zm-8.5 18.12h-.01a9.74 9.74 0 0 1-4.96-1.35l-.36-.22-3.88 1.02 1.04-3.78-.24-.39a9.73 9.73 0 0 1-1.49-5.16c0-5.37 4.37-9.74 9.75-9.74a9.68 9.68 0 0 1 6.89 2.86 9.67 9.67 0 0 1 2.86 6.88c0 5.38-4.37 9.78-9.6 9.78Zm5.66-7.74c-.31-.16-1.83-.9-2.11-1s-.49-.16-.7.16-.81 1-.99 1.2-.37.24-.68.08a8.1 8.1 0 0 1-2.38-1.47 8.94 8.94 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.62.13-.13.3-.35.45-.53.15-.18.2-.31.3-.52.1-.21.05-.39-.02-.55s-.7-1.68-.96-2.3c-.25-.6-.51-.52-.7-.53h-.6c-.2 0-.54.07-.82.39s-1.06 1.04-1.06 2.55 1.08 2.97 1.23 3.18c.15.21 2.16 3.3 5.24 4.62.73.31 1.3.49 1.75.63.74.24 1.42.21 1.96.13.6-.09 1.83-.75 2.09-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37Z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;