import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, Users, Quote } from "lucide-react";
import trainerImage from "@/assets/trainer-portrait.jpg";
import studioImage from "@/assets/studio-interior.jpg";

const testimonials = [
  {
    quote: "教練很有耐心，讓我不再害怕重訓。三個月後腰圍少了8公分！",
    author: "陳小姐",
    role: "行銷企劃，32歲",
  },
  {
    quote: "學會飲食觀念後，精神變好了，也不容易餓。終於知道怎麼吃才對。",
    author: "林先生",
    role: "工程師，38歲",
  },
  {
    quote: "產後半年，在這裡找回了自信。教練很理解媽媽的身體狀況。",
    author: "張媽媽",
    role: "全職媽媽，35歲",
  },
];

const TrustSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-warm-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal">
            專業溫暖的教練團隊
            <span className="block text-primary mt-2">打造無壓力的成長空間</span>
          </h2>
          <p className="text-lg text-charcoal-light max-w-3xl mx-auto leading-relaxed">
            我們知道踏入健身房需要勇氣，所以 Young Sky 致力於打造「零壓迫感」的環境。
            我們的教練團隊皆持有國際證照，並定期進修最新的運動科學知識。
            這裡沒有強迫推銷的業務，只有專注教學的導師。
          </p>
        </motion.div>

        {/* Trainer & Studio */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card rounded-3xl overflow-hidden shadow-elevated"
          >
            <img
              src={studioImage}
              alt="Young Sky 工作室環境：明亮舒適的私人訓練空間"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-2">精緻私密的訓練空間</h3>
              <p className="text-muted-foreground">
                台中西區小班制/一對一空間，不用擔心旁人眼光。木質地板、柔和燈光，營造放鬆的運動氛圍。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-card rounded-3xl overflow-hidden shadow-elevated"
          >
            <img
              src={trainerImage}
              alt="Young Sky 專業教練"
              className="w-full h-64 object-cover object-top"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">ACE/NSCA 國際認證</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">專業認證教練團隊</h3>
              <p className="text-muted-foreground">
                擁有國際四大證照，定期進修最新運動科學知識，專注於體態管理與增肌減脂指導。
              </p>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Users className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-charcoal">學員見證</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-charcoal-light mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-charcoal">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button variant="cta" size="lg" asChild>
            <a href="#contact">查看教練介紹與更多案例</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
