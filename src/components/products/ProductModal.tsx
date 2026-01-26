import { useState } from "react";
import { Package, Leaf, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/data/products";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => setCurrentImg((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  const prevImg = () => setCurrentImg((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto bg-card p-0 md:p-6">
        <div className="grid md:grid-cols-2 gap-0 md:gap-8">
          
          {/* Left Column: Image Carousel */}
          <div className="space-y-4 p-4 md:p-0">
            <DialogHeader className="md:hidden mb-4">
              <DialogTitle className="text-2xl font-serif text-foreground">{product.name}</DialogTitle>
            </DialogHeader>

            <div className="relative aspect-square rounded-xl overflow-hidden bg-muted group shadow-inner">
              <img
                src={product.images[currentImg]}
                alt={`${product.name} view ${currentImg + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              
              {/* Navigation Arrows */}
              <button onClick={prevImg} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100">
                <ChevronLeft size={20} className="text-foreground" />
              </button>
              <button onClick={nextImg} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100">
                <ChevronRight size={20} className="text-foreground" />
              </button>

              {/* Thumbnail Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {product.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImg(idx)}
                    className={`h-1.5 rounded-full transition-all ${idx === currentImg ? "w-6 bg-primary" : "w-2 bg-white/60"}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Preview Row */}
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImg(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${idx === currentImg ? "border-primary shadow-sm" : "border-transparent opacity-60 hover:opacity-100"}`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {product.availableFormats && (
              <div className="hidden md:block bg-muted/50 rounded-xl p-4 border border-border/50">
                <div className="flex items-center gap-2 mb-1">
                  <Package size={16} className="text-primary" />
                  <span className="text-[11px] font-bold text-foreground uppercase tracking-widest">Available Formats</span>
                </div>
                <p className="text-sm font-sans text-muted-foreground">{product.availableFormats}</p>
              </div>
            )}
          </div>

          {/* Right Column: Content */}
          <div className="p-6 md:p-0 space-y-6">
            <DialogHeader className="hidden md:block">
              <DialogTitle className="text-3xl font-serif text-foreground">{product.name}</DialogTitle>
            </DialogHeader>

            <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent/30 pl-4">
              {product.fullDescription}
            </p>

            <div className="grid gap-6">
              <section>
                <h4 className="font-serif text-lg font-medium text-foreground mb-3 flex items-center gap-2 underline decoration-accent/30 underline-offset-8">
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 gap-2.5">
                  {product.keyFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3 bg-muted/30 p-2 rounded-md">
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h4 className="font-serif text-lg font-medium text-foreground mb-3 flex items-center gap-2">
                  Common Applications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.useCases.map((u) => (
                    <span key={u} className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full border border-secondary/20 flex items-center gap-1">
                      <Leaf size={12} /> {u}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
              <h4 className="text-[11px] font-bold text-primary uppercase tracking-widest mb-2">Supply & Export Logistics</h4>
              <p className="text-sm text-muted-foreground leading-snug">{product.packagingInfo}</p>
            </div>

            <Link to="/contact" onClick={onClose} className="btn-primary block w-full text-center py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all font-bold tracking-wide">
              Request Bulk Pricing
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;