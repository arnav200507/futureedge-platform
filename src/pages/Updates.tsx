import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Bell, Briefcase, GraduationCap, ExternalLink } from "lucide-react";

const Updates = () => {
  const examUpdates = [
    {
      title: "JEE Main 2024 Registration Open",
      date: "December 15, 2024",
      category: "Engineering",
      description: "Registration for JEE Main 2024 January session has started. Last date to apply is December 30, 2024.",
      link: "#",
    },
    {
      title: "NEET UG 2024 Exam Date Announced",
      date: "December 10, 2024",
      category: "Medical",
      description: "NTA has announced NEET UG 2024 exam date. The exam will be conducted on May 5, 2024.",
      link: "#",
    },
    {
      title: "CET 2024 Eligibility Criteria Released",
      date: "December 8, 2024",
      category: "State Entrance",
      description: "Karnataka CET 2024 eligibility criteria and exam pattern have been officially released.",
      link: "#",
    },
  ];

  const collegeUpdates = [
    {
      title: "IIT Delhi Opens Applications for B.Tech Programs",
      date: "December 12, 2024",
      category: "Admissions",
      description: "IIT Delhi has announced direct admission opportunities for exceptional students in various B.Tech programs.",
      link: "#",
    },
    {
      title: "Top Business Schools Accepting CAT Scores",
      date: "December 5, 2024",
      category: "Management",
      description: "List of premier B-schools accepting CAT 2024 scores for MBA admissions 2025-26.",
      link: "#",
    },
    {
      title: "New Scholarship Programs for Undergraduate Students",
      date: "November 30, 2024",
      category: "Scholarships",
      description: "Government announces new scholarship schemes worth ₹10,000 crore for meritorious students.",
      link: "#",
    },
  ];

  const internshipUpdates = [
    {
      title: "Google Summer Internship 2024 Applications Open",
      date: "December 18, 2024",
      category: "Technology",
      description: "Google is hiring summer interns for software engineering, UX design, and business roles.",
      link: "#",
    },
    {
      title: "Investment Banking Internships at Top Firms",
      date: "December 14, 2024",
      category: "Finance",
      description: "Morgan Stanley, Goldman Sachs, and JP Morgan are accepting applications for summer analyst positions.",
      link: "#",
    },
    {
      title: "Marketing Internship Opportunities in FMCG Sector",
      date: "December 10, 2024",
      category: "Marketing",
      description: "Leading FMCG companies like HUL, Nestle, and P&G are offering paid marketing internships.",
      link: "#",
    },
    {
      title: "Tech Startups Hiring Interns Across Multiple Roles",
      date: "December 7, 2024",
      category: "Startups",
      description: "Top funded startups are looking for interns in engineering, design, product, and operations.",
      link: "#",
    },
  ];

  const UpdateCard = ({ update }: { update: any }) => (
    <Card className="shadow-card hover:shadow-hover transition-all border-border/50">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <Badge variant="secondary" className="font-body">
            {update.category}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground font-body">
            <Calendar className="h-4 w-4 mr-1" />
            {update.date}
          </div>
        </div>
        <h3 className="text-xl font-heading font-semibold text-foreground">
          {update.title}
        </h3>
        <p className="text-muted-foreground font-body">
          {update.description}
        </p>
        <a
          href={update.link}
          className="inline-flex items-center text-primary hover:text-primary/80 font-body font-medium transition-colors"
        >
          Read More
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl text-white space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Bell className="h-8 w-8" />
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Latest Updates
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold leading-tight">
              Stay Updated with Latest Education News
            </h1>
            <p className="text-lg text-white/90 font-body leading-relaxed">
              Get the latest information on entrance exams, college admissions, and internship opportunities all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Exam Alerts Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Entrance Exam Alerts
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examUpdates.map((update, index) => (
              <UpdateCard key={index} update={update} />
            ))}
          </div>
        </div>
      </section>

      {/* College Updates Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-heading font-bold text-foreground">
              College Admission Updates
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collegeUpdates.map((update, index) => (
              <UpdateCard key={index} update={update} />
            ))}
          </div>
        </div>
      </section>

      {/* Internship Openings Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <Briefcase className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Latest Internship Openings
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internshipUpdates.map((update, index) => (
              <UpdateCard key={index} update={update} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-hero shadow-hover border-0 max-w-2xl mx-auto">
            <CardContent className="p-10 text-center text-white space-y-4">
              <Bell className="h-12 w-12 mx-auto mb-2" />
              <h3 className="text-2xl font-heading font-bold">
                Never Miss an Update
              </h3>
              <p className="text-white/90 font-body">
                Subscribe to our WhatsApp channel to receive instant notifications about important exam dates, admissions, and opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Updates;
