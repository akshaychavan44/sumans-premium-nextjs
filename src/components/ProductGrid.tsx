import { ProductCard } from "./ProductCard";
export function ProductGrid({ products, onAdd, onView, onToggleWishlist, wishlist, whatsappLink }: any){
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
      {products.map((p:any)=><ProductCard key={p.id} product={p} onAdd={onAdd} onView={onView} onToggleWishlist={onToggleWishlist} wishlist={wishlist} whatsappLink={whatsappLink}/>)}
    </div>
  )
}
