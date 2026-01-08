import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Salad, Dumbbell, LineChart } from "lucide-react";
import healthyMealImage from "@/assets/healthy-meal.jpg";

const steps = [
  {
    icon: ClipboardCheck,
    step: "Step 1",
    title: "精準評估",
    description: "InBody 身體組成分析＋生活作息諮詢。",
  },
  {
    icon: Salad,
    step: "Step 2",
    title: "飲食指導",
    description: "不強迫斷食，教您外食怎麼吃、營養素如何搭配。",
  },
  {
    icon: Dumbbell,
    step: "Step 3",
    title: "阻力訓練",
    description: "針對核心與大肌群訓練，提升基礎代謝率。",
  },
  {
    icon: LineChart,
    step: "Step 4",
    title: "真人追蹤",
    description: "每週定期回顧數據，動態調整計畫，確保進度。",
  },
];

const MethodologySection = () => {
  return (
    <section id="methodology" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal">
            不只是健身
            <span className="block text-primary mt-2">更是一套完整的「生活管理系統」</span>
          </h2>
          <p className="text-lg text-charcoal-light max-w-3xl mx-auto leading-relaxed">
            Young Sky 的核心理念在於「雙軌並行」。單靠運動很難抵銷錯誤的飲食習慣，因此我們將重點放在飲食教育與肌力建立。
            我們會教您如何選擇食物、如何正確發力，讓這些健康習慣自然融入您的日常，成為帶得走的能力。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex gap-4 p-6 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 gradient-warm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <span className="text-sm font-semibold text-primary">{item.step}</span>
                  <h3 className="text-xl font-bold text-charcoal mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={healthyMealImage}
                alt="均衡營養的健康餐盒"
                className="w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-warm-beige rounded-2xl text-center">
                <div className="text-4xl font-bold text-primary mb-2">70%</div>
                <p className="text-charcoal-light font-medium">飲食管理</p>
              </div>
              <div className="p-6 bg-warm-beige rounded-2xl text-center">
                <div className="text-4xl font-bold text-primary mb-2">30%</div>
                <p className="text-charcoal-light font-medium">阻力訓練</p>
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
            <a href="#contact">了解適合我的專屬方案</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologySection;
