import { RiSunLine, RiShieldCheckLine, RiRestaurantLine, RiAwardLine } from 'react-icons/ri';

const badgeIcons = [
  <RiSunLine size={26} style={{ color: 'var(--gold-primary)' }} />,
  <RiShieldCheckLine size={26} style={{ color: 'var(--gold-primary)' }} />,
  <RiRestaurantLine size={26} style={{ color: 'var(--gold-primary)' }} />,
  <RiAwardLine size={26} style={{ color: 'var(--gold-primary)' }} />
];

export default function TrustBadges() {
  const trustBadgesList = [
    { title: 'Made Fresh Daily', description: 'Every sweet prepared each morning before we open' },
    { title: '100% Pure Ghee', description: 'No shortcuts or substitutes: only pure desi ghee' },
    { title: '100+ Varieties', description: 'From Kaju Katli to Murukulu, something for everyone' },
    { title: 'Trusted in Guntur', description: 'Serving Kothapeta and beyond with love for generations' }
  ];

  return (
    <section className="section" style={{ background: 'var(--cream-base)', padding: '60px 0' }}>
      <div className="container">
        <div className="trust-badges">
          {trustBadgesList.map((badge, i) => (
            <div key={i} className="trust-badge">
              <div className="trust-badge-icon">
                {badgeIcons[i]}
              </div>
              <h4 className="trust-badge-title">{badge.title}</h4>
              <p className="trust-badge-desc">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
