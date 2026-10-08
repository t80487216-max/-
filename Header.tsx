import React, { useState } from 'react';
import { Phone, ShoppingBag, MapPin, Calendar, Menu as MenuIcon, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0d0d10]/95 backdrop-blur-md border-b border-[#262422]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single Brand Wordmark */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#d4af37] via-[#b8860b] to-[#781414] p-0.5 shadow-md flex items-center justify-center transition-transform group-hover:scale-105">
                <div className="w-full h-full bg-[#121114] rounded-[7px] flex items-center justify-center overflow-hidden">
                  <img
                    src="/src/assets/images/abu_ali_brand_logo_1791217376596.jpg"
                    alt="شعار مطعم أبو علي"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight group-hover:text-[#f5df88] transition-colors">
                  {RESTAURANT_INFO.name}
                </span>
                <span className="text-[11px] text-[#a09a8e] font-normal">
                  للمأكولات المشوية · دندرة
                </span>
              </div>
            </a>
          </div>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#d1cbc0]">
            <a href="#menu" className="hover:text-[#f5df88] transition-colors py-1">
              قائمة المشاوي
            </a>
            <a href="#services" className="hover:text-[#f5df88] transition-colors py-1">
              الصالات والخدمات
            </a>
            <a href="#gallery" className="hover:text-[#f5df88] transition-colors py-1">
              معرض الصور
            </a>
            <a href="#reviews" className="hover:text-[#f5df88] transition-colors py-1">
              آراء الزوار (4.3⭐)
            </a>
            <a href="#location" className="hover:text-[#f5df88] transition-colors py-1">
              العنوان والاتصال
            </a>
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="flex items-center gap-3">
            {/* Direct Call Button */}
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#14120f] bg-gradient-to-r from-[#fce082] to-[#d4af37] rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-sm whitespace-nowrap"
              title="اتصال مباشر فوري"
            >
              <Phone className="w-3.5 h-3.5 text-[#14120f]" />
              <span className="font-bold tracking-wider">{RESTAURANT_INFO.phone}</span>
            </a>

            {/* Table Reservation Button */}
            <button
              onClick={onOpenReservation}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#f5df88] border border-[#d4af37]/40 rounded-lg hover:bg-[#d4af37]/10 active:scale-95 transition-colors whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>حجز طاولة</span>
            </button>

            {/* Cart / Order Calculator Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-lg bg-[#1c1b20] border border-[#33302b] text-[#f5df88] hover:border-[#d4af37]/60 transition-colors active:scale-95"
              aria-label="سلة الطلب والحاسبة"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#dc2626] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#d1cbc0] hover:text-white bg-[#1a191d]"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#262422] py-4 space-y-2">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-[#d1cbc0] hover:text-[#f5df88] hover:bg-[#18171b] rounded-md"
            >
              🥩 قائمة المشاوي والأسعار
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-[#d1cbc0] hover:text-[#f5df88] hover:bg-[#18171b] rounded-md"
            >
              🍽️ الصالة العائلية والسفري
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-[#d1cbc0] hover:text-[#f5df88] hover:bg-[#18171b] rounded-md"
            >
              📸 معرض الصور
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-[#d1cbc0] hover:text-[#f5df88] hover:bg-[#18171b] rounded-md"
            >
              ⭐ تقييمات الزوار (4.3 من 461 مراجعة)
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-[#d1cbc0] hover:text-[#f5df88] hover:bg-[#18171b] rounded-md"
            >
              📍 العنوان وخريطة دندرة
            </a>

            <div className="pt-3 border-t border-[#262422] flex flex-col gap-2">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-[#fce082] to-[#d4af37] text-[#14120f] font-bold text-sm rounded-lg"
              >
                <Phone className="w-4 h-4" />
                <span>اتصال فوري: {RESTAURANT_INFO.phone}</span>
              </a>

              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#1f1d24] text-[#f5df88] border border-[#d4af37]/30 text-sm font-medium rounded-lg"
              >
                <MapPin className="w-4 h-4" />
                <span>الموقع على خرائط Google</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
