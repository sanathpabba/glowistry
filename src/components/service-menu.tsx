import { categories } from "@/lib/salon-data";

export function ServiceMenu() {
  return (
    <div className="menu-grid">
      {categories.map((category, index) => (
        <article className="menu-card" id={category.id} key={category.id}>
          <div className="menu-number">{String(index + 1).padStart(2, "0")}</div>
          <p className="eyebrow">{category.eyebrow}</p>
          <h3>{category.name}</h3>
          <p className="menu-description">{category.description}</p>
          <ul>
            {category.services.map((service) => (
              <li key={`${category.id}-${service.name}`}>
                <span><strong>{service.name}</strong>{service.note && <small>{service.note}</small>}</span>
                <i aria-hidden="true" />
                <b>{service.price}</b>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
