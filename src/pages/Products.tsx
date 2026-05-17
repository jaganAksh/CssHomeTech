import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { productFilters, products } from '../data/products';
import type { Page, Product } from '../types';

interface ProductsProps {
  navigate: (page: Page) => void;
}

export function Products({ navigate }: ProductsProps) {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);

  const filteredProducts = useMemo(() => {
    const normalized = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesFilter = activeFilter === 'All' || product.group === activeFilter;
      const haystack = [product.title, product.description, product.group, ...product.features].join(' ').toLowerCase();
      const matchesSearch = !normalized || haystack.includes(normalized);
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <>
      <PageHero
        eyebrow="Products & solutions"
        title="Door, entrance, lock, and access systems for modern facilities"
        description="Explore product categories that can be specified individually or combined into a complete access and security program."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Find the right product category"
            description="Search by category, application, product family, or operating need."
          />

          <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="relative block">
              <span className="sr-only">Search products</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search products, features, or applications"
                className="w-full rounded-md border border-slate-300 bg-white py-3 pl-12 pr-4 text-sm shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
              />
            </label>
            <div className="flex flex-wrap gap-2" aria-label="Product filters">
              {productFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                    activeFilter === filter
                      ? 'bg-brand-teal text-white'
                      : 'border border-slate-200 bg-white text-slate-700 hover:border-brand-teal hover:text-brand-teal'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10 rounded-lg border border-brand-teal/20 bg-brand-mist p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">Selected category</p>
            <h2 className="mt-3 text-2xl font-semibold text-brand-charcoal">{selectedProduct.title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">{selectedProduct.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedProduct.features.map((feature) => (
                <span key={feature} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {filteredProducts.length ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onLearnMore={setSelectedProduct} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
              <h2 className="text-xl font-semibold text-brand-charcoal">No matching products found</h2>
              <p className="mt-2 text-sm text-slate-600">Try a broader search or clear the current filter.</p>
            </div>
          )}

          <div className="mt-14 flex flex-col justify-between gap-5 rounded-lg bg-brand-charcoal p-6 text-white md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold">Need help specifying a complete solution?</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Share drawings, door schedules, or site requirements and we will help translate them into a practical access plan.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('contact')}
              className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-brand-charcoal transition hover:bg-brand-mist"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
