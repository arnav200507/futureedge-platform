import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Compass, FileSearch, Lightbulb, Target, TrendingUp, Users } from "lucide-react";
import counsellingImage from "@/assets/counselling-illustration.jpg";

const Counselling = () => {
  const inclusions = [
    {
      icon: FileSearch,
      title: "Career Assessment",
      description: "Comprehensive evaluation of your strengths, interests, and aptitudes to identify the best career paths.",
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Define clear, achievable career objectives with actionable steps and realistic timelines.",
    },
    {
      icon: Compass,
      title: "Path Planning",
      description: "Detailed roadmap including education requirements, skill development, and career progression.",
    },
    {
      icon: Lightbulb,
      title: "Expert Insights",
      description: "Industry trends, job market analysis, and insider knowledge from experienced professionals.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Free 30-minute session to understand your background, interests, and aspirations.",
    },
    {
      step: "02",
      title: "Assessment Tests",
      description: "Psychometric and aptitude tests to identify your strengths and suitable career options.",
    },
    {
      step: "03",
      title: "One-on-One Sessions",
      description: "Personalized counselling sessions with expert career counselors (3-5 sessions).",
    },
    {
      step: "04",
      title: "Career Roadmap",
      description: "Detailed action plan with milestones, resources, and follow-up support.",
    },
  ];

  const benefits = [
    "Clarity on career options aligned with your interests",
    "Confidence in making important educational decisions",
    "Understanding of market trends and future opportunities",
    "Personalized action plan for skill development",
    "Guidance on entrance exams and admissions",
    "Ongoing support and mentorship",
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
                Expert Career Counselling for Your Success
              </h1>
              <p className="text-lg text-white/90 font-body leading-relaxed">
                Get personalized guidance from experienced counselors to discover your ideal career path and create a roadmap for success.
              </p>
              <Link to="/contact">
                <Button variant="hero-outline" size="xl" className="bg-white text-primary hover:bg-white/90 hover:text-primary border-white">
                  Book Your Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={counsellingImage}
                alt="Career counselling session"
                className="rounded-3xl shadow-hover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              What Counselling Includes
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Comprehensive support to help you make informed career decisions
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inclusions.map((item, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all hover:scale-105 border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Our Counselling Process
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              A structured approach to guide you from confusion to clarity
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <Card className="shadow-card hover:shadow-hover transition-all border-border/50 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="text-6xl font-heading font-bold text-primary/20">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-body">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
                Benefits of Career Counselling
              </h2>
              <p className="text-lg text-muted-foreground font-body mb-8">
                Our counselling program provides you with everything you need to make confident career decisions and achieve your professional goals.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground font-body">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <Card className="gradient-hero shadow-hover border-0">
              <CardContent className="p-10 text-white space-y-6">
                <Users className="h-16 w-16 mb-4" />
                <h3 className="text-2xl font-heading font-bold">
                  Ready to Discover Your Path?
                </h3>
                <p className="text-white/90 font-body">
                  Book a free consultation session and take the first step towards a fulfilling career. Our expert counselors are here to help you succeed.
                </p>
                <Link to="/contact">
                  <Button variant="hero-outline" size="lg" className="w-full bg-white text-primary hover:bg-white/90 hover:text-primary border-white">
                    Schedule Free Consultation
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counselling;
