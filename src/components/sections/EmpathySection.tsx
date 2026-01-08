import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingDown, HelpCircle, Clock, Baby } from "lucide-react";
import transformationImage from "@/assets/transformation-comparison.jpg";

const painPoints = [
  {
    icon: TrendingDown,
    title: "代謝卡關",
    description: "30+ 年齡層，感覺喝水也會胖，體力大不如前。",
  },
  {
    icon: HelpCircle,
    title: "缺乏方向",
    description: "想運動但不知從何開始，怕受傷或姿勢錯誤。",
  },
  {
    icon: Clock,
    title: "生活忙碌",
    description: "工作家庭兩頭燒，需要高效率的健康解決方案。",
  },
  {
    icon: Baby,
    title: "產後恢復",
    description: "想找回產前的輕盈感，需要溫和漸進的指導。",
  },
];

const EmpathySection = () => {
  return (
    <section id="pain-points" className="py-20 lg:py-32 bg-warm-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal">
            你是否也面臨這些困擾？
            <span className="block text-primary mt-2 text-2xl md:text-3xl font-medium">
              改變，其實沒有那麼難
            </span>
          </h2>
          <p className="text-lg text-charcoal-light max-w-3xl mx-auto leading-relaxed">
            隨著年齡增長，代謝變慢似乎成了不可逆的宿命？您可能試過少吃卻沒瘦，或是辦公室久坐導致腰痠背痛、體態走樣。
            在 Young Sky，我們深刻理解您的焦慮。這裡沒有嚴厲的責備，只有專業的理解與支持。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pain Points Grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="w-12 h-12 gradient-warm rounded-xl flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Transformation Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={transformationImage}
                alt="改變前後對比：從疲憊的辦公室生活到充滿活力的健康狀態"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground text-lg font-medium">
                  穿回那件喜歡的衣服不再是夢想
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="cta" size="lg" asChild>
            <a href="#contact">這就是我！預約諮詢解決方案</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EmpathySection;
