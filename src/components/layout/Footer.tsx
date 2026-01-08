import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 gradient-warm rounded-xl flex items-center justify-center">
                <span className="font-bold text-lg">YS</span>
              </div>
              <div>
                <span className="font-bold text-lg">Young Sky</span>
                <span className="block text-xs opacity-80">體態管理工作室</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              專注於科學化體態管理，以「70% 飲食＋30% 訓練」的黃金比例，
              為台中西區的您打造健康永續的生活方式。
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">聯繫資訊</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                台中市西區（鄰近勤美商圈）
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                LINE ID: @YoungSky
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                預約制，請先 LINE 聯繫
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                info@youngsky.com.tw
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">營業時間</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>週一至週五：10:00 - 21:00</span>
              </li>
              <li className="pl-6">週六：09:00 - 18:00</li>
              <li className="pl-6">週日：預約制</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">快速連結</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#pain-points" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  您的困擾
                </a>
              </li>
              <li>
                <a href="#methodology" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  我們的方法
                </a>
              </li>
              <li>
                <a href="#about" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  關於我們
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  預約諮詢
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
            <p>© {new Date().getFullYear()} Young Sky 體態管理工作室. All rights reserved.</p>
            <p>台中西區私人教練｜增肌減脂｜飲食控制</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
