import React from 'react';
import { Phone, MessageCircle, MapPin, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FloatingActionsProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ cartCount, onOpenCart }) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 max-w-md mx-auto pointer-events-none">
      <div className="pointer-events-auto bg-[#141318]/95 backdrop-blur-md border border-[#3b362e] rounded-2xl p-2 shadow-2xl flex items-center justify-between gap-2">
        {/* Direct Call Button */}
        <a
          href={`tel:${RESTAURANT_INFO.phoneInternational}`}
          onClick={(e) => {
            // Direct protocol activation for mobile dialers and desktop softphones
            window.location.href = `tel:${RESTAURANT_INFO.phoneInternational}`;
          }}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-2 bg-gradient-to-r from-[#fce082] to-[#d4af37] text-[#14120f] font-bold text-xs rounded-xl active:scale-95 transition-all shadow-sm cursor-pointer"
          title={`اتصال فوري برقم ${RESTAURANT_INFO.phone}`}
          aria-label={`اتصال فوري برقم ${RESTAURANT_INFO.phone}`}
        >
          <Phone className="w-4 h-4 text-[#14120f]" />
          <span>اتصال: {RESTAURANT_INFO.phone}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={RESTAURANT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 bg-[#25d366]/15 hover:bg-[#25d366]/25 border border-[#25d366]/40 text-[#25d366] rounded-xl active:scale-95 transition-all"
          title="واتساب"
          aria-label="مراسلة واتساب"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        {/* Google Maps Button */}
        <a
          href={RESTAURANT_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 bg-[#dc2626]/15 hover:bg-[#dc2626]/25 border border-[#dc2626]/40 text-[#ef4444] rounded-xl active:scale-95 transition-all"
          title="الموقع على خرائط Google"
          aria-label="الموقع على خرائط Google"
        >
          <MapPin className="w-5 h-5" />
        </a>

        {/* Cart Trigger */}
        {cartCount > 0 && (
          <button
            onClick={onOpenCart}
            className="relative p-2.5 bg-[#dc2626] text-white rounded-xl active:scale-95 transition-all animate-pulse"
            title="السلة"
            aria-label="سلة الطلبات"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-white text-[#dc2626] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow">
              {cartCount}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
