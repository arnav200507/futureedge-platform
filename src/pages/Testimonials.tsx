import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import successImage from "@/assets/student-success.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      education: "B.Tech Computer Science, IIT Delhi",
      content: "FutureEdge's career counselling was a game-changer for me. I was confused between engineering branches, but their detailed assessment helped me discover my passion for computer science. The counselor's insights about the tech industry and career paths were invaluable. Today, I'm living my dream working at Google!",
      rating: 5,
      image: successImage,
    },
    {
      name: "Rahul Mehta",
      role: "Investment Analyst at Morgan Stanley",
      education: "BCom, Sydenham College",
      content: "I always wanted to be in finance but didn't know where to start. FutureEdge not only guided me through the right courses and certifications but also helped me land an incredible internship that led to my current role. The mentorship and support were outstanding throughout my journey.",
      rating: 5,
      image: successImage,
    },
    {
      name: "Ananya Reddy",
      role: "Medical Student at AIIMS",
      education: "MBBS, AIIMS Delhi",
      content: "The NEET preparation strategy I received from FutureEdge was perfect for my learning style. Beyond exam prep, they helped me understand the medical profession deeply and prepared me mentally for the challenges ahead. Their holistic approach made all the difference.",
      rating: 5,
      image: successImage,
    },
    {
      name: "Arjun Patel",
      role: "Product Designer at Razorpay",
      education: "BDes, NID Ahmedabad",
      content: "I discovered my love for design through FutureEdge's career assessment. They guided me through building a strong portfolio and even connected me with design professionals for mentorship. The internship program was incredibly hands-on and prepared me perfectly for the industry.",
      rating: 5,
      image: successImage,
    },
    {
      name: "Sneha Krishnan",
      role: "Marketing Manager at Unilever",
      education: "MBA, IIM Bangalore",
      content: "FutureEdge helped me transition from engineering to marketing – a decision I was very uncertain about. Their counselors understood my strengths and showed me how my analytical skills could be valuable in marketing. The internship at an FMCG company solidified my career choice.",
      rating: 5,
      image: successImage,
    },
    {
      name: "Vikram Singh",
      role: "Data Scientist at Flipkart",
      education: "M.Tech AI & ML, IIT Bombay",
      content: "The career roadmap created for me was incredibly detailed and practical. From choosing the right specialization to building technical skills and networking, every step was planned out. The internship in data science gave me real-world experience that helped me secure my dream job.",
      rating: 5,
      image: successImage,
    },
    {
      name: "Divya Kapoor",
      role: "Civil Services Aspirant",
      education: "BA Political Science, DU",
      content: "FutureEdge didn't just help me choose UPSC preparation; they created a comprehensive strategy tailored to my strengths. The counselors' understanding of different career paths in public service and their realistic timeline planning has been crucial to my preparation journey.",
      rating: 5,
      image: successImage,
    },
    {
      name: "Karthik Rao",
      role: "Entrepreneur & Startup Founder",
      education: "B.Tech, BITS Pilani",
      content: "I was torn between a corporate career and entrepreneurship. FutureEdge helped me understand both paths thoroughly and supported my decision to start my own venture. They connected me with mentors and even helped me develop business skills through their programs. Best investment in my career!",
      rating: 5,
      image: successImage,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl text-white space-y-6">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold leading-tight">
              Success Stories from Our Students
            </h1>
            <p className="text-lg text-white/90 font-body leading-relaxed">
              Discover how FutureEdge has helped thousands of students find their dream careers and achieve their goals. Real stories from real students who transformed their futures with our guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Students Guided" },
              { number: "95%", label: "Satisfaction Rate" },
              { number: "500+", label: "Partner Companies" },
              { number: "50+", label: "Career Paths" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all border-border/50">
                <CardContent className="p-8 space-y-6">
                  <Quote className="h-10 w-10 text-primary/30" />
                  
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-foreground font-body leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center space-x-4 pt-4 border-t border-border">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover shadow-soft"
                    />
                    <div>
                      <p className="font-heading font-semibold text-foreground text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-primary font-body font-medium">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-muted-foreground font-body">
                        {testimonial.education}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-hero shadow-hover border-0 max-w-3xl mx-auto">
            <CardContent className="p-10 lg:p-12 text-center text-white space-y-6">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-white/90 font-body max-w-2xl mx-auto">
                Join thousands of successful students who found their path with FutureEdge. Your journey to a fulfilling career starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="/counselling">
                  <button className="px-8 py-3 bg-white text-primary hover:bg-white/90 rounded-xl font-heading font-semibold shadow-card hover:shadow-hover transition-all hover:scale-105">
                    Book Counselling
                  </button>
                </a>
                <a href="/contact">
                  <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary rounded-xl font-heading font-semibold transition-all hover:scale-105">
                    Contact Us
                  </button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
