import { Quote } from "lucide-react";

const testimonialsData = [
  {
    name: "Mathew Brown",
    role: "Head Lecturer",
    company: "Life Choices Academy",
    content: "Surur is a dedicated and resourceful web developer who consistently demonstrated a strong work ethic and a genuine passion for learning. During the bootcamp, he built several full-stack projects - from HR and e-commerce platforms to data analytics tools using Oracle APEX - showcasing both technical ability and problem-solving skills. Surur works well in a team, communicates effectively, and always strives to deliver high-quality results",
    avatar: "/images/LCA.jpg",
  },
  {
    name: "Nuraan Essop",
    role: "Lecturer",
    company: "University of the Western Cape",
    content: "It has been an honour to have worked with Moegamat Surur Samaai for the last two years. I had the privilege of teaching Mr Samaai in 2021 and while he was only a second year in 2022, he was nominated and appointed as a tutor. Over the last two years, Mr Samaai has proved his reliability, resilience, and competence, often going beyond his required responsibilities in his position as tutor. As a student his assessments indicated his ability to work independently, and our correspondence showed that he was willing to admit when he needed help. I believe given the space and opportunity, Mr Samaai will be able to flourish in any position. I sincerely hope this short note has successfully relayed my thoughts so that you would positively consider Mr Samaai’s application.",
    avatar: "/images/UWC.png",
  },
  {
    name: "Abigail Wiese",
    role: "Lecturer",
    company: "University of the Western Cape",
    content: "Surur would be an asset to any work environment. He expresses a high level of dedication, diligence and work ethic. He has a maturity in his outlook on life that assists him in seeing the long term gain from repetitive mundane tasks that young adolescents can sometimes feel are meaningless or beneath them.",
    avatar: "/images/UWC.png",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Testimonials</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover:scale-[1.02] transition-transform relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
