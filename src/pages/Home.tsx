import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Briefcase, FileText, GraduationCap, Star, Target, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const Home = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Career Counselling",
      description: "Personalized guidance to help you choose the right career path aligned with your interests and skills.",
    },
    {
      icon: Briefcase,
      title: "Internship Programs",
      description: "Industry-ready internships across multiple domains with hands-on experience and certifications.",
    },
    {
      icon: FileText,
      title: "Resume Building",
      description: "Professional resume and portfolio creation to help you stand out to recruiters and employers.",
    },
    {
      icon: TrendingUp,
      title: "Skill Development",
      description: "Workshops and training sessions to develop in-demand skills for the modern workplace.",
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Personalized Approach",
      description: "Tailored counselling based on your unique strengths, interests, and career aspirations.",
    },
    {
      icon: Users,
      title: "Expert Counselors",
      description: "Experienced professionals with deep industry knowledge and proven track records.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Support",
      description: "End-to-end guidance from career selection to placement assistance.",
    },
    {
      icon: Star,
      title: "Proven Success",
      description: "Thousands of successful students placed in top companies and universities.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Engineering Student",
      content: "FutureEdge helped me discover my passion for software development. The counselling was spot-on and the internship opened doors I never imagined!",
      rating: 5,
    },
    {
      name: "Rahul Mehta",
      role: "Commerce Graduate",
      content: "The career guidance I received was life-changing. I'm now pursuing my dream career in finance, thanks to their expert advice.",
      rating: 5,
    },
    {
      name: "Ananya Reddy",
      role: "Medical Student",
      content: "Their internship program gave me real-world experience that set me apart from other candidates. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Shape Your Future with the Right Guidance
              </h1>
              <p className="text-lg sm:text-xl text-white/90 font-body leading-relaxed">
                Personalized counselling & industry-ready internships for students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/counselling">
                  <Button variant="hero-outline" size="xl" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 hover:text-primary border-white">
                    Book Counselling
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/internships">
                  <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                    Apply for Internship
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 gradient-hero rounded-3xl blur-3xl opacity-20" />
              <img
                src={heroImage}
                alt="Students achieving success"
                className="relative rounded-3xl shadow-hover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              About FutureEdge
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              FutureEdge is India's leading education and career guidance platform, dedicated to empowering students with the right direction and opportunities. We combine expert counselling with practical internship experiences to help you build a successful career foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Comprehensive solutions to help you navigate your educational and career journey
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all hover:scale-105 border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose FutureEdge?
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              We're committed to your success with proven methods and dedicated support
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

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Hear from students who transformed their careers with FutureEdge
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground font-body italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-heading font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground font-body">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-hero shadow-hover border-0">
            <CardContent className="p-12 text-center text-white space-y-6">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold">
                Start Your Journey with FutureEdge
              </h2>
              <p className="text-xl text-white/90 font-body max-w-2xl mx-auto">
                Take the first step towards a successful career. Book your counselling session or apply for an internship today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/counselling">
                  <Button variant="hero-outline" size="xl" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 hover:text-primary border-white">
                    Book Counselling
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                    Contact Us
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

export default Home;
