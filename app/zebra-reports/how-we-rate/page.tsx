import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Rate Products",
  description:
    "The Zebra Rating System: our transparent, weighted methodology for reviewing EDS products.",
};

const ratingCategories = [
  {
    name: "Comfort",
    weight: "25%",
    description: "How comfortable is this for EDS patients during extended use?",
    scale: [
      { score: "5", label: "Can wear all day without noticing. No pressure points, no irritation." },
      { score: "4", label: "Comfortable for extended wear with minor adjustments needed." },
      { score: "3", label: "Adequate comfort. May need breaks during long use." },
      { score: "2", label: "Uncomfortable after 1-2 hours. Pressure points or irritation." },
      { score: "1", label: "Painful or intolerable for EDS patients." },
    ],
  },
  {
    name: "Effectiveness",
    weight: "30%",
    description: "How well does it address the EDS symptom it targets?",
    scale: [
      { score: "5", label: "Dramatically improves the targeted symptom. Life-changing." },
      { score: "4", label: "Noticeably improves the targeted symptom. Clearly helpful." },
      { score: "3", label: "Some improvement. Better than nothing but not transformative." },
      { score: "2", label: "Minimal improvement. Marginal benefit at best." },
      { score: "1", label: "No benefit or actively makes things worse." },
    ],
  },
  {
    name: "Durability",
    weight: "15%",
    description: "How long does it last with regular use by an EDS patient?",
    scale: [
      { score: "5", label: "Still going strong after 1+ year of daily use." },
      { score: "4", label: "Lasts 6-12 months of regular use without degradation." },
      { score: "3", label: "Lasts 3-6 months before needing replacement." },
      { score: "2", label: "Shows wear within weeks. Replace within 1-3 months." },
      { score: "1", label: "Falls apart quickly. Poor build quality." },
    ],
  },
  {
    name: "Value for Money",
    weight: "15%",
    description: "Is the price justified for what EDS patients get?",
    scale: [
      { score: "5", label: "Incredible value. Would happily pay more." },
      { score: "4", label: "Fair price for the quality and benefit received." },
      { score: "3", label: "Acceptable but there may be better value alternatives." },
      { score: "2", label: "Overpriced for what you get. Consider alternatives." },
      { score: "1", label: "Not worth the money. Significantly overpriced." },
    ],
  },
  {
    name: "Skin-Friendly",
    weight: "15%",
    description: "How gentle is it on fragile, sensitive, or stretchy EDS skin?",
    scale: [
      { score: "5", label: "Completely safe for the most fragile EDS skin." },
      { score: "4", label: "Safe for most EDS skin types. Minor sensitivity possible." },
      { score: "3", label: "Generally okay but some EDS patients report irritation." },
      { score: "2", label: "Likely to irritate sensitive skin. Patch test required." },
      { score: "1", label: "Damages or significantly irritates EDS skin. Avoid for fragile types." },
    ],
  },
];

const badges = [
  { name: "Zebra Pick", criteria: "4.5+ Zebra Rating", color: "bg-purple-100 text-purple-700" },
  { name: "PT Recommended", criteria: "Commonly recommended by PTs for EDS", color: "bg-blue-100 text-blue-700" },
  { name: "Skin Safe", criteria: "4.5+ skin-friendly rating", color: "bg-green-100 text-green-700" },
  { name: "Budget Pick", criteria: "4.5+ value, under $25", color: "bg-amber-100 text-amber-700" },
  { name: "Community Favorite", criteria: "50+ reviews, 90%+ recommend", color: "bg-rose-100 text-rose-700" },
];

export default function HowWeRatePage() {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">How We Rate Products</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Our Zebra Rating system is designed specifically for EDS product evaluation, weighted for the needs of
          connective tissue disorders.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">The Formula</h2>
        <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-6 dark:bg-purple-900/10 dark:border-purple-800">
          <p className="font-mono text-sm text-purple-800 dark:text-purple-300">
            Zebra Rating = Comfort(25%) + Effectiveness(30%) + Durability(15%) + Value(15%) + Skin-Friendly(15%)
          </p>
        </div>
      </section>

      {ratingCategories.map(cat => (
        <section key={cat.name}>
          <div className="flex items-baseline gap-3 mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{cat.name}</h2>
            <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
              {cat.weight}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{cat.description}</p>
          <div className="space-y-2">
            {cat.scale.map(s => (
              <div key={s.score} className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-sm font-bold text-purple-700 dark:text-purple-300">
                  {s.score}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-300 pt-1.5">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Product Badges</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {badges.map(badge => (
            <div
              key={badge.name}
              className="rounded-lg border border-gray-200 p-4 dark:border-gray-700"
            >
              <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${badge.color}`}>
                {badge.name}
              </span>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{badge.criteria}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2>Editorial Independence</h2>
        <p>
          Affiliate relationships never influence Zebra Ratings. Products are rated using the same criteria regardless of
          affiliate status. We review products with no affiliate program alongside those with affiliate partnerships.
        </p>
      </section>
    </div>
  );
}
