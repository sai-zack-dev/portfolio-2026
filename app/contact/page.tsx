import ContactForm from "@/components/sections/contact/form";
import SocialLinks from "@/components/sections/contact/social-links";

export default function Contact() {
  return (
    <div className="flex w-full max-w-7xl items-center justify-center bg-white dark:bg-black sm:items-start mx-auto pt-24">
      <SocialLinks />
      <ContactForm />
    </div>
  );
}
