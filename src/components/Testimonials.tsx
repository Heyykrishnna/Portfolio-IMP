import { TestimonialsColumn } from "@/components/blocks/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
    {
    text: "Working with Yatharth completely transformed our digital presence. From branding to full stack development, every detail was thoughtfully executed and aligned with our business goals.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Arjun Mehta",
    role: "Founder, Startup Venture"
    },
    {
    text: "The UI/UX redesign significantly improved our product usability. The interface feels modern, intuitive, and our customer engagement increased immediately after launch.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya Sharma",
    role: "Product Manager"
    },
    {
    text: "From strategy to execution, the development process was smooth and highly professional. Communication was clear and delivery exceeded expectations.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "Rohit Verma",
    role: "Technical Lead"
    },
    {
    text: "Our brand identity finally feels premium and consistent across all platforms. The creative direction and motion design brought our vision to life.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Ananya Kapoor",
    role: "Brand Manager"
    },
    {
    text: "The full stack solution streamlined our operations and improved performance across web platforms. Clean code and scalable architecture made a huge difference.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Karan Malhotra",
    role: "Operations Head"
    },
    {
    text: "Exceptional design thinking combined with strong development skills. The final product was fast, responsive, and visually outstanding.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Neha Iyer",
    role: "Business Analyst"
    },
    {
    text: "Our website conversion rate improved after the redesign. The digital strategy and UX improvements clearly reflected deep user understanding.",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    name: "Aman Gupta",
    role: "Marketing Director"
    },
    {
    text: "Creative execution, branding clarity, and technical precision all came together perfectly. The collaboration felt seamless from start to finish.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    name: "Ritika Singh",
    role: "Sales Head"
    },
    {
    text: "The combination of innovation and design expertise helped us launch a modern digital experience that truly represents our company.",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    name: "Vikram Desai",
    role: "CEO"
    }
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const Testimonials = () => {
  return (
    <section className="bg-[#000000] py-20 relative">

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-full mx-auto"
        >
          <h2 className="heading-lg">
            What our users say
          </h2>
          <p className="body-lg text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;