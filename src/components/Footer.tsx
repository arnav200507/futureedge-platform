import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-xl">
                F
              </div>
              <span className="text-xl font-heading font-bold text-foreground">FutureEdge</span>
            </div>
            <p className="text-sm text-muted-foreground font-body">
              Empowering students to shape their future with personalized career guidance and industry-ready internships.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/counselling", label: "Counselling" },
                { path: "/internships", label: "Internships" },
                { path: "/updates", label: "Updates" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground font-body">Career Counselling</li>
              <li className="text-sm text-muted-foreground font-body">Internship Programs</li>
              <li className="text-sm text-muted-foreground font-body">Resume Building</li>
              <li className="text-sm text-muted-foreground font-body">Skill Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="font-body">contact@futureedge.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="font-body">+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="font-body">Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} FutureEdge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
