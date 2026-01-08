import { motion } from "framer-motion";
import { MessageCircle, MapPin, Utensils, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-studio.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Young Sky 體態管理工作室內部環境"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
              台中西區 · 鄰近勤美商圈
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-charcoal">
              台中西區體態管理
              <span className="block text-primary mt-2">Young Sky 私人教練工作室</span>
              <span className="block text-2xl md:text-3xl font-medium text-charcoal-light mt-4">
                啟動你的理想生活
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-charcoal-light leading-relaxed mb-8 max-w-2xl"
          >
            別再盲目節食或無效運動了。Young Sky 專注於
            <strong className="text-primary">「70% 飲食管理＋30% 阻力訓練」</strong>
            的黃金比例，為台中西區的上班族與初學者打造專屬方案。我們不賣誇張的速成奇蹟，只提供科學、可執行的生活習慣調整。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="grid gap-4 sm:grid-cols-3 mb-10"
          >
            <div className="flex items-start gap-3 p-4 bg-card/80 backdrop-blur-sm rounded-xl shadow-card">
              <div className="p-2 gradient-warm rounded-lg">
                <Utensils className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">科學化管理</h3>
                <p className="text-sm text-muted-foreground">七分吃、三分練，從根源改善</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-card/80 backdrop-blur-sm rounded-xl shadow-card">
              <div className="p-2 gradient-warm rounded-lg">
                <Dumbbell className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">客製化課程</h3>
                <p className="text-sm text-muted-foreground">久坐族、產後媽媽量身打造</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-card/80 backdrop-blur-sm rounded-xl shadow-card">
              <div className="p-2 gradient-warm rounded-lg">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal">便利地點</h3>
                <p className="text-sm text-muted-foreground">鄰近勤美，環境舒適隱密</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                領取我的體態評估（加LINE免費諮詢）
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#pain-points" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm">了解更多</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-current rounded-full" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
