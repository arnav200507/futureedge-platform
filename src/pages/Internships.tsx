import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, BookOpen, Briefcase, Code, DollarSign, LineChart, Megaphone, Palette, TrendingUp } from "lucide-react";
import internshipImage from "@/assets/internship-team.jpg";

const Internships = () => {
  const domains = [
    {
      icon: Code,
      title: "Technology & IT",
      areas: ["Software Development", "Web Development", "Data Science", "Cybersecurity"],
    },
    {
      icon: LineChart,
      title: "Business & Finance",
      areas: ["Financial Analysis", "Business Development", "Consulting", "Investment Banking"],
    },
    {
      icon: Megaphone,
      title: "Marketing & Sales",
      areas: ["Digital Marketing", "Content Strategy", "Sales Operations", "Brand Management"],
    },
    {
      icon: Palette,
      title: "Design & Creative",
      areas: ["UI/UX Design", "Graphic Design", "Content Creation", "Video Editing"],
    },
  ];

  const learnings = [
    "Hands-on experience with real-world projects",
    "Industry-standard tools and technologies",
    "Professional workplace etiquette and communication",
    "Problem-solving and critical thinking skills",
    "Team collaboration and project management",
    "Building a professional network",
  ];

  const benefits = [
    {
      icon: Briefcase,
      title: "Real Work Experience",
      description: "Work on actual projects that make an impact and contribute to real business outcomes.",
    },
    {
      icon: BookOpen,
      title: "Learn from Experts",
      description: "Get mentored by industry professionals with years of practical experience.",
    },
    {
      icon: Award,
      title: "Certificate & Letter",
      description: "Receive completion certificate and recommendation letter to boost your resume.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Build skills and connections that open doors to full-time opportunities.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl sm:text-5xl font-heading font-bold leading-tight">
                Industry-Ready Internship Programs
              </h1>
              <p className="text-lg text-white/90 font-body leading-relaxed">
                Gain practical experience, build your skills, and kickstart your career with our comprehensive internship programs across multiple domains.
              </p>
              <Link to="/contact">
                <Button variant="hero-outline" size="xl" className="bg-white text-primary hover:bg-white/90 hover:text-primary border-white">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={internshipImage}
                alt="Interns working together"
                className="rounded-3xl shadow-hover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Internship Domains
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Choose from a wide range of fields and specializations that match your interests
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all hover:scale-105 border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <domain.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {domain.title}
                  </h3>
                  <ul className="space-y-2">
                    {domain.areas.map((area, i) => (
                      <li key={i} className="text-sm text-muted-foreground font-body flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Learn Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                What Students Learn
              </h2>
              <p className="text-lg text-muted-foreground font-body">
                Our internship programs are designed to provide comprehensive learning experiences
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {learnings.map((learning, index) => (
                <Card key={index} className="shadow-card border-border/50">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Award className="h-4 w-4" />
                    </div>
                    <p className="text-foreground font-body pt-1">{learning}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose Our Internships?
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Stand out from the crowd with practical experience and industry connections
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all border-border/50">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl gradient-hero flex items-center justify-center text-white">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-hero shadow-hover border-0 max-w-4xl mx-auto">
            <CardContent className="p-10 lg:p-12 text-center text-white space-y-6">
              <Award className="h-20 w-20 mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-heading font-bold">
                Earn Industry-Recognized Certification
              </h2>
              <p className="text-xl text-white/90 font-body max-w-2xl mx-auto">
                Complete your internship successfully and receive a certificate of completion along with a recommendation letter that strengthens your profile for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/contact">
                  <Button variant="hero-outline" size="xl" className="bg-white text-primary hover:bg-white/90 hover:text-primary border-white">
                    Apply for Internship
                  </Button>
                </Link>
                <Link to="/testimonials">
                  <Button variant="hero-outline" size="xl">
                    Read Success Stories
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Internships;
