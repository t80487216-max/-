import React from 'react';
import { Phone, MapPin, Star, MessageCircle, Navigation, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation: () => void;
  onOpenOrder: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, onOpenOrder }) => {
  return (
    <footer className="bg-[#08080a] border-t border-[#1d1b22] text-[#9c9589] text-xs pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1f1d24]">
          
          {/* Col 1: Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4af37] via-[#b8860b] to-[#781414] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#121114] rounded-[6px] flex items-center justify-center">
                  <span className="text-[#f5df88] font-bold text-lg">أ</span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {RESTAURANT_INFO.name}
                </h3>
                <p className="text-[11px] text-[#9e9688]">للمأكولات المشوية · دندرة قنا</p>
              </div>
            </div>

            <p className="text-xs text-[#8c8578] leading-relaxed">
              رواد شواء اللحوم البلدية والدواجن على الفحم الطبيعي في صعيد مصر. نلتزم بأعلى معايير النظافة والضيافة الكريمة.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-[#f5df88]">
              <Star className="w-4 h-4 fill-[#f5df88] text-[#f5df88]" />
              <span className="font-bold tabular-nums">{RESTAURANT_INFO.rating}</span>
              <span className="text-[#8c8578]">من {RESTAURANT_INFO.reviewCount} مراجعة معتمدة على خرائط Google</span>
            </div>
          </div>

          {/* Col 2: Services & Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white mb-2">الخدمات والمزايا</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span className="text-[#ccc6b9]">الجلوس داخل صالة عائلية مكيفة وفاخرة</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span className="text-[#ccc6b9]">الطعام السفري والتوصيل الفوري الساخن</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span className="text-[#ccc6b9]">متوسط سعر الوجبة: {RESTAURANT_INFO.averagePrice}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span className="text-[#ccc6b9]">لحوم بلدية 100% ذبح يومي معتمد</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span className="text-[#ccc6b9]">تجهيز صواني العزومات والولائم الكبرى</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white mb-2">روابط سريعة</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#menu" className="hover:text-[#f5df88] transition-colors">قائمة المشاوي والأسعار</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#f5df88] transition-colors">الصالة العائلية والسفري</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#f5df88] transition-colors">معرض الصور والأطباق</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#f5df88] transition-colors">تقييمات الزوار (4.3⭐)</a>
              </li>
              <li>
                <button onClick={onOpenReservation} className="hover:text-[#f5df88] transition-colors text-right">
                  طلب حجز طاولة
                </button>
              </li>
              <li>
                <button onClick={onOpenOrder} className="hover:text-[#f5df88] transition-colors text-right">
                  حاسبة الطلب الأونلاين
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white mb-2">العنوان والاتصال</h4>
            <div className="space-y-2">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center gap-2 text-sm font-bold text-[#f5df88] hover:underline tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>

              <p className="flex items-start gap-2 text-xs text-[#a8a194] leading-relaxed">
                <MapPin className="w-4 h-4 text-[#dc2626] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address} ({RESTAURANT_INFO.locationDetails})</span>
              </p>

              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:underline pt-1 font-semibold"
              >
                <Navigation className="w-3.5 h-3.5 text-[#dc2626]" />
                <span>عرض الموقع على خرائط Google</span>
              </a>

              <p className="text-[11px] text-[#736c61] pt-1">
                ساعات العمل: {RESTAURANT_INFO.openingHours}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e685f]">
          <p>© {new Date().getFullYear()} مطعم أبو علي للمأكولات المشوية - دندرة، مركز قنا. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>خدمة تيك أواي وتوصيل فوري</span>
            <span aria-hidden="true">·</span>
            <span>جلسات عائلية خاصة</span>
            <span aria-hidden="true">·</span>
            <span>قنا · مصر</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
