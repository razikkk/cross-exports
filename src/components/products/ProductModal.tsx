import { Package, Leaf } from "lucide-react";
import { Product } from "@/data/products";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card">
        <DialogHeader>
          <DialogTitle className="heading-section text-foreground">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {/* Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Available Formats */}
            {product.availableFormats && (
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Package size={16} className="text-primary" />
                  <span className="font-serif text-sm font-medium text-foreground">
                    Available Formats
                  </span>
                </div>
                <p className="text-sm font-sans text-muted-foreground">
                  {product.availableFormats}
                </p>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            {/* Description */}
            <p className="text-body text-muted-foreground">
              {product.fullDescription}
            </p>

            {/* Key Specs */}
            {/* <div>
              <h4 className="font-serif text-lg font-medium text-foreground mb-3">
                Key Specs
              </h4>
              <div className="bg-muted/30 rounded-lg overflow-hidden">
                {product.keySpecs.map((spec, index) => (
                  <div 
                    key={spec.label} 
                    className={`flex justify-between items-center px-4 py-3 ${
                      index !== product.keySpecs.length - 1 ? 'border-b border-border/50' : ''
                    }`}
                  >
                    <span className="text-sm font-sans font-medium text-foreground">
                      {spec.label}
                    </span>
                    <span className="text-sm font-sans text-muted-foreground">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Use Cases */}
            <div>
              <h4 className="font-serif text-lg font-medium text-foreground mb-3">
                Use Cases
              </h4>
              <ul className="space-y-2">
                {product.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-start gap-2">
                    <Leaf size={14} className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm font-sans text-muted-foreground">
                      {useCase}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Packaging & Private Label */}
            <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
              <h4 className="font-serif text-sm font-medium text-foreground mb-2">
                Packaging & Private Label
              </h4>
              <p className="text-sm font-sans text-muted-foreground">
                {product.packagingInfo}
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              onClick={onClose}
              className="btn-primary inline-block w-full text-center"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
