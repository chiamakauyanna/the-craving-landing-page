import { footerLinks, socialLinks } from "../../data/index";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-20">
      {/* Main Footer */}
      <div className="px-6 py-16 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-2xl font-bold">
              The <span className="text-accent">Craving</span>
            </h2>
            <p className="text-textLight leading-relaxed text-sm">
              Your favorite foods, all in one place. Hot, fresh and delivered
              right to your door.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-textLight hover:bg-accent hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-white font-bold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-textLight text-sm hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Menu */}
          <div>
            <h3 className="font-heading text-white font-bold text-lg mb-6">
              Our Menu
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.menu.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-textLight text-sm hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-heading text-white font-bold text-lg mb-6">
              Opening Hours
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="text-textLight text-sm">
                Monday to Friday: 9am to 11pm
              </li>
              <li className="text-textLight text-sm">
                Saturday: 10am to midnight
              </li>
              <li className="text-textLight text-sm">Sunday: 12pm to 10pm</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-6 py-6 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-textLight text-sm">
            © 2026 The Craving. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-textLight text-sm hover:text-accent transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-textLight text-sm hover:text-accent transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
