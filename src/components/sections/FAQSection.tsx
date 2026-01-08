import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, FileText, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "完全沒運動經驗可以參加嗎？",
    answer:
      "當然可以！我們 80% 的學員都是從零開始，教練會手把手指導動作，確保您在安全的環境下學習正確的運動姿勢。",
  },
  {
    question: "需要額外購買代餐或營養品嗎？",
    answer:
      "不需要。我們強調「原型食物」與正確擇食，不推銷任何代餐產品。教練會教您如何在日常飲食中做出更健康的選擇。",
  },
  {
    question: "多久可以看到效果？",
    answer:
      "體態調整是循序漸進的，通常在 4-8 週配合飲食指導後，會有明顯的體力與線條改善。我們追求的是長期可持續的健康習慣養成。",
  },
  {
    question: "課程費用如何計算？",
    answer:
      "我們提供單堂體驗課與包堂方案，費用會在免費諮詢時詳細說明。透明收費，沒有隱藏費用，歡迎先預約諮詢了解。",
  },
  {
    question: "工作室地點在哪裡？",
    answer:
      "位於台中市西區，鄰近勤美商圈，交通便利。詳細地址會在預約諮詢後提供，歡迎加入 LINE 官方帳號了解更多。",
  },
];

const FAQSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal">
            現在開始
            <span className="block text-primary mt-2">遇見更好的自己！</span>
          </h2>
          <p className="text-lg text-charcoal-light max-w-3xl mx-auto leading-relaxed">
            改變體態不需要等到「有空」的那一天，現在就是最好的時機。
            加入 Young Sky 非常簡單，只需透過 LINE 聯繫我們，即可安排一次無壓力的諮詢體驗。
            我們承諾，這裡沒有隱藏費用，只有真誠的建議。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-charcoal mb-6">常見問題</h3>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-2xl px-6 shadow-card border-none"
                >
                  <AccordionTrigger className="text-left text-charcoal hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:pl-8"
          >
            <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-charcoal mb-4">立即預約諮詢</h3>
              <p className="text-charcoal-light mb-8">
                給自己一個機會，讓我們陪您走過這段增肌減脂的旅程，找回身體的掌控權。
              </p>

              <div className="space-y-4">
                <Button variant="hero" size="xl" className="w-full" asChild>
                  <a
                    href="https://line.me/ti/p/@YoungSky"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="w-6 h-6" />
                    加 LINE 預約諮詢
                    <span className="text-sm opacity-90">ID: @YoungSky</span>
                  </a>
                </Button>

                <Button variant="heroOutline" size="lg" className="w-full" asChild>
                  <a href="tel:+886900000000" className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    直接撥打電話諮詢
                  </a>
                </Button>

                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    或填寫簡易表單，由專人聯繫
                  </p>
                  <Button variant="link" className="text-primary" asChild>
                    <a href="#" className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      填寫諮詢表單
                    </a>
                  </Button>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">✓ 免費諮詢</span>
                  <span className="flex items-center gap-1">✓ 無推銷壓力</span>
                  <span className="flex items-center gap-1">✓ 透明收費</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
