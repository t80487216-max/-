import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/restaurantData';
import { Maximize2, X, ChevronRight, ChevronLeft, Camera } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('الكل');

  const filters = ['الكل', 'مشاوي', 'لحوم بلدية', 'المطبخ والشواء', 'أجواء المطعم'];

  const filteredImages = GALLERY_IMAGES.filter(
    (img) => activeFilter === 'الكل' || img.category === activeFilter
  );

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_IMAGES.length);
  };

  const prevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      (selectedImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  };

  return (
    <section id="gallery" className="py-20 bg-[#0f0e13] border-t border-[#1e1c22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4af37] mb-2">
            <Camera className="w-3.5 h-3.5 text-[#dc2626]" />
            <span>معرض الصور الحي</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            لقطات من قلب مطعم أبو علي
          </h2>
          <p className="text-[#a8a195] text-sm sm:text-base leading-relaxed">
            مشاهد حية من شوايات الفحم الطبيعي، أطباق الكباب والكفتة الطازجة، وأجواء صالتنا العائلية الفاخرة في دندرة.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeFilter === filter
                    ? 'bg-[#d4af37] text-[#121114] font-bold shadow-md'
                    : 'bg-[#1a1920] text-[#aba496] hover:text-white hover:bg-[#25232c] border border-[#2e2a25]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid for Mobile, Tablet, Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#16151a] border border-[#2b2722] hover:border-[#d4af37]/60 cursor-pointer shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover filter brightness-95 group-hover:scale-110 group-hover:brightness-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Text content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="p-2 rounded-lg bg-black/50 text-[#f5df88] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider">
                    {img.category}
                  </span>
                  <h3 className="text-sm font-bold text-white mt-0.5 line-clamp-1">
                    {img.title}
                  </h3>
                  <p className="text-[11px] text-[#c2bcb0] mt-1 line-clamp-1">
                    {img.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-5 left-5 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={prevImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="الصورة السابقة"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="الصورة التالية"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Active Image Box */}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={GALLERY_IMAGES[selectedImageIndex].src}
              alt={GALLERY_IMAGES[selectedImageIndex].title}
              className="max-h-[70vh] w-auto object-contain rounded-xl border border-[#3b362e] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="text-center mt-4 px-4">
              <span className="text-xs font-semibold text-[#d4af37]">
                {GALLERY_IMAGES[selectedImageIndex].category}
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                {GALLERY_IMAGES[selectedImageIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#b5ada0] max-w-lg mx-auto mt-1">
                {GALLERY_IMAGES[selectedImageIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
