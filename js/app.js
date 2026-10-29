(function () {
  const root = document.getElementById("app");
  const toast = document.getElementById("toast");
  const { brand, categories, products, services, clients, features, navMega, imgs, quality, ethos, premises, specializations } = AT;

  const cart = JSON.parse(localStorage.getItem("at-cart") || "[]");
  function saveCart() {
    localStorage.setItem("at-cart", JSON.stringify(cart));
    updateCartCount();
  }
  function updateCartCount() {
    const n = cart.reduce((s, i) => s + i.qty, 0);
    document.querySelectorAll(".cart-count").forEach((el) => (el.textContent = n));
  }
  function addToCart(id) {
    const found = cart.find((i) => i.id === id);
    if (found) found.qty += 1;
    else cart.push({ id, qty: 1 });
    saveCart();
    showToast("Added to enquiry cart");
  }
  function showToast(msg) {
    toast.textContent = msg;
    toast.style.display = "block";
    setTimeout(() => (toast.style.display = "none"), 1800);
  }

  const glyphs = {
    ppe: "ðŸª–",
    fall: "ðŸª¢",
    clothing: "ðŸ¦º",
    eyewash: "ðŸ’§",
    fire: "ðŸ§¯",
    lifting: "ðŸ—ï¸",
    traffic: "ðŸš¦",
    spill: "ðŸ§ª",
    signs: "âš ï¸",
    loto: "ðŸ”’",
    electronic: "ðŸš¨",
    firstaid: "â›‘ï¸",
    janitorial: "ðŸ§¹",
    medical: "ðŸ©º",
  };

  function catById(id) {
    return categories.find((c) => c.id === id);
  }
  function productById(id) {
    return products.find((p) => p.id === id);
  }
  function qs(name) {
    return new URLSearchParams(location.hash.split("?")[1] || "").get(name);
  }
  function route() {
    const raw = (location.hash.replace(/^#/, "") || "/").split("?")[0];
    const parts = raw.split("/").filter(Boolean);
    if (!parts.length) return renderHome();
    if (parts[0] === "shop") return renderShop(qs("cat"));
    if (parts[0] === "product" && parts[1]) return renderProduct(parts[1]);
    if (parts[0] === "about") return renderAbout();
    if (parts[0] === "services") return renderServices();
    if (parts[0] === "clients") return renderClients();
    if (parts[0] === "portfolio") return renderPortfolio();
    if (parts[0] === "portfolio") return renderPortfolio();
    if (parts[0] === "contact") return renderContact();
    if (parts[0] === "cart") return renderCart();
    if (parts[0] === "privacy") return renderPrivacy();
    return renderHome();
  }

  function layout(inner, active) {
    root.innerHTML = `
      <div class="topbar">
        <div class="wrap">
          <div>${brand.hours} Â· ${brand.delivery}</div>
          <div><a href="tel:${brand.phone}"><b>${brand.phone}</b></a> Â· <a href="mailto:${brand.email}">${brand.email}</a></div>
        </div>
      </div>
      <header class="header">
        <div class="wrap header-main">
          <a class="logo" href="#/">
            <img src="img/logo.png" alt="Action Traders" class="logo-mark" />
            Action <span>Traders</span>
          </a>
          <form class="search" onsubmit="AT.search(event)">
            <input name="q" placeholder="Search extinguishers, pumps, PPE..." />
            <button type="submit">Search</button>
          </form>
          <div class="header-actions">
            <a class="call-btn" href="tel:${brand.phone}">Call for price</a>
            <a class="cart-btn" href="#/cart">Cart <span class="cart-count">0</span></a>
            <button class="menu-btn" type="button" onclick="AT.toggleNav()">Menu</button>
          </div>
        </div>
        <nav class="primary" id="primary-nav">
          <div class="wrap">
            <a href="#/" class="${active === "home" ? "active" : ""}">Home</a>
            <div class="shop-wrap" id="shop-wrap">
              <button class="mega-toggle" type="button" onclick="AT.toggleMega()">Shop â–¾</button>
              <div class="mega">
                ${navMega
                  .map(
                    (col) => `
                  <div>
                    <h4>${col.title}</h4>
                    ${col.links.map((l) => `<a href="#/shop?cat=${l.cat}">${l.name}</a>`).join("")}
                  </div>`
                  )
                  .join("")}
              </div>
            </div>
            <a href="#/about" class="${active === "about" ? "active" : ""}">About Us</a>
            <a href="#/services" class="${active === "services" ? "active" : ""}">Our Services</a>
            <a href="#/clients" class="${active === "clients" ? "active" : ""}">Our Clients</a>
            <a href="#/portfolio" class="${active === "portfolio" ? "active" : ""}">Portfolio</a>
            <a href="#/portfolio" class="${active === "portfolio" ? "active" : ""}">Portfolio</a>
            <a href="#/contact" class="${active === "contact" ? "active" : ""}">Contact</a>
          </div>
        </nav>
      </header>
      ${inner}
      <footer>
        <div class="wrap footer-grid">
          <div>
            <div class="logo"><img src="img/logo.png" alt="Action Traders" class="logo-mark" /> Action <span>Traders</span></div>
            <p>Leading supplier of fire detection, fire protection, PPE, and safety signs in Pakistan. Established ${brand.established} in Karachi.</p>
            <p>${brand.address1}<br>${brand.workshop}</p>
          </div>
          <div>
            <h4>Shop</h4>
            ${categories.slice(0, 6).map((c) => `<a href="#/shop?cat=${c.id}">${c.name}</a>`).join("")}
          </div>
          <div>
            <h4>Company</h4>
            <a href="#/about">About us</a>
            <a href="#/services">Services</a>
            <a href="#/clients">Clients</a>
            <a href="#/contact">Contact</a>
            <a href="#/privacy">Privacy policy</a>
          </div>
          <div>
            <h4>Need help?</h4>
            <a href="tel:${brand.phone}">${brand.phone} (${brand.phoneAlt})</a>
            <a href="mailto:${brand.email}">${brand.email}</a>
            <a href="tel:${brand.phoneAlt}">${brand.phoneAlt}</a>
            <p>Owner: ${brand.owner} Â· NTN ${brand.ntn}</p>
          </div>
        </div>
        <div class="wrap legal">
          <span>Â© ${new Date().getFullYear()} Action Traders. Layout inspired by a Pakistan safety-supply storefront.</span>
          <span>${brand.tagline}</span>
        </div>
      </footer>
    `;
    updateCartCount();
    window.scrollTo(0, 0);
  }

  function productCard(p) {
    const media = p.img
      ? `<img src="${p.img}" alt="${p.name}">`
      : `<div class="glyph">${glyphs[p.cat] || "ðŸ“¦"}</div>`;
    return `
      <article class="product">
        <a href="#/product/${p.id}">
          <div class="thumb">${p.badge ? `<span class="badge">${p.badge}</span>` : ""}${media}</div>
        </a>
        <div class="product-body">
          <a href="#/product/${p.id}"><h3>${p.name}</h3></a>
          <div class="price">Call for Price</div>
          <div class="row">
            <a class="btn btn-outline" href="#/product/${p.id}">View</a>
            <button class="btn btn-red" type="button" onclick="AT.add('${p.id}')">Add</button>
          </div>
        </div>
      </article>`;
  }

  function renderHome() {
    const hot = products.filter((p) => p.hot);
    const fire = products.filter((p) => ["fire", "hydrant", "alarm", "fittings"].includes(p.cat) && p.featured).slice(0, 8);
    const ppe = products.filter((p) => ["ppe", "clothing", "gloves"].includes(p.cat) && p.featured).slice(0, 8);
    const fall = products.filter((p) => p.cat === "fall").slice(0, 4);
    layout(
      `
      <section class="hero">
        <div class="wrap hero-grid">
          <div>
            <div class="kicker">${brand.tagline} Â· Est. ${brand.established}</div>
            <h1>Supplier of choice for fire detection and fire protection systems</h1>
            <p>Action Traders designs, supplies, installs, tests, and commissions fire hydrant, alarm, and suppression systems â€” plus PPE, signs, and safety gear â€” from Karachi across Pakistan.</p>
            <div class="hero-cta">
              <a class="btn btn-red" href="#/shop">Browse products</a>
              <a class="btn btn-ghost" href="#/services">Our services</a>
            </div>
          </div>
          <div class="hero-card">
            <h3>Fire hydrant system profile</h3>
            <p class="pulse">Pumps, controllers, hose reels, and fittings in stock for project quotes</p>
            <ul class="stock-list">
              ${hot.map((p) => `<li><span>${p.name}</span><a href="#/product/${p.id}">View</a></li>`).join("")}
            </ul>
          </div>
        </div>
      </section>
      <div class="wrap">
        <div class="features">
          ${features.map((f) => `<div class="feature"><strong>${f.title}</strong><span>${f.text}</span></div>`).join("")}
        </div>
      </div>
      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <div>
              <h2>Our products</h2>
              <p>Latest fire-protection technologies from established manufacturers. We trade, supply, and install the accessories used on these systems.</p>
            </div>
            <a class="btn btn-outline" href="#/shop">All categories</a>
          </div>
          <div class="cat-grid">
            ${categories
              .map(
                (c) => `
              <a class="cat-card" href="#/shop?cat=${c.id}">
                <img class="cat-photo" src="${c.img}" alt="${c.name}">
                <b>${c.name}</b>
                <small>${c.count} products</small>
              </a>`
              )
              .join("")}
          </div>
        </div>
      </section>
      <section class="section alt">
        <div class="wrap">
          <div class="section-head"><div><h2>Fire protection & hydrant gear</h2><p>Pumps, extinguishers, alarm panels, couplings, and hose reels.</p></div></div>
          <div class="product-grid">${fire.map(productCard).join("")}</div>
        </div>
      </section>
      <section class="section">
        <div class="wrap">
          <div class="banner">
            <div class="banner-copy">
              <div class="kicker">Fire fighting system</div>
              <h2>Complete piping, hydrant, and alarm installations</h2>
              <p>Commercial customers get turnkey fire-fighting systems. Industrial plants get install and upgrade support that matches site conditions.</p>
              <a class="btn btn-red" href="#/services">See services</a>
            </div>
            <div class="banner-art"><img src="${imgs.system}" alt="Fire fighting system installation"></div>
          </div>
        </div>
      </section>
      <section class="section alt">
        <div class="wrap">
          <div class="section-head"><div><h2>PPE, clothing, and gloves</h2><p>Helmets, goggles, shoes, fire suits, and hand protection from our catalogue.</p></div></div>
          <div class="product-grid">${ppe.map(productCard).join("")}</div>
        </div>
      </section>
      <section class="section">
        <div class="wrap">
          <div class="section-head"><div><h2>Fall protection</h2><p>Harnesses, lanyards, lifelines, and confined-space tripods.</p></div></div>
          <div class="product-grid">${fall.map(productCard).join("")}</div>
        </div>
      </section>
      <section class="ticker-wrap" aria-label="Our valuable clients">
        <div class="ticker-label">Our valuable clients</div>
        <div class="ticker">
          <div class="ticker-track">
            ${clients.concat(clients).map(function (c) { return "<span>" + c + "</span>"; }).join("")}
          </div>
        </div>
      </section>
    `,
      "home"
    );
  }

  function renderShop(catId) {
    const q = (qs("q") || "").toLowerCase();
    let list = products.slice();
    const cat = catId ? catById(catId) : null;
    if (cat) list = list.filter((p) => p.cat === cat.id);
    if (q) list = list.filter((p) => p.name.toLowerCase().includes(q));
    layout(
      `
      <div class="page-hero"><div class="wrap">
        <div class="breadcrumb"><a href="#/">Home</a> / Shop ${cat ? "/ " + cat.name : ""}</div>
        <h1>${cat ? cat.name : "Shop"}</h1>
        <p>${list.length} products Â· Call for price on every item</p>
      </div></div>
      <section class="section">
        <div class="wrap two-col shop-layout">
          <aside class="panel">
            <h3>Categories</h3>
            <a href="#/shop">All products</a>
            ${categories.map((c) => `<a href="#/shop?cat=${c.id}">${c.name} (${c.count})</a>`).join("")}
          </aside>
          <div>
            ${list.length ? `<div class="product-grid">${list.map(productCard).join("")}</div>` : `<div class="empty">No products matched your search.</div>`}
          </div>
        </div>
      </section>
    `,
      "shop"
    );
  }

  function renderProduct(id) {
    const p = productById(id);
    if (!p) return renderShop();
    const cat = catById(p.cat);
    const related = products.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, 4);
    layout(
      `
      <div class="page-hero"><div class="wrap">
        <div class="breadcrumb"><a href="#/">Home</a> / <a href="#/shop">Shop</a> / ${p.name}</div>
        <h1>${p.name}</h1>
      </div></div>
      <section class="section">
        <div class="wrap two-col">
          <div class="panel">
            <div class="detail-photo">${p.img ? `<img src="${p.img}" alt="${p.name}">` : `<div class="thumb" style="height:320px"><div class="glyph">${glyphs[p.cat]}</div></div>`}</div>
          </div>
          <div>
            <p class="muted">${cat ? cat.name : ""}</p>
            <h2>${p.name}</h2>
            <p class="price" style="font-size:28px">Call for Price</p>
            <p>${p.desc || "Industrial-grade equipment supplied across Pakistan. Ask our team for current stock, specifications, and delivery to your city."}</p>
            <p>Phone <b>${brand.phone}</b> Â· ${brand.hours}</p>
            <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px">
              <button class="btn btn-red" type="button" onclick="AT.add('${p.id}')">Add to enquiry cart</button>
              <a class="btn btn-outline" href="#/contact">Ask a question</a>
            </div>
          </div>
        </div>
        <div class="wrap" style="margin-top:40px">
          <h3>Related products</h3>
          <div class="product-grid">${related.map(productCard).join("")}</div>
        </div>
      </section>
    `,
      "shop"
    );
  }

  function renderAbout() {
    layout(
      `
      <div class="page-hero"><div class="wrap"><div class="breadcrumb"><a href="#/">Home</a> / About</div><h1>About Action Traders</h1><p>A name built on quality â€” fire, safety, and security since ${brand.established}.</p></div></div>
      <section class="section"><div class="wrap about-grid">
        <div>
          <h2>Introduction</h2>
          <p>Action Traders is a leading supplier of fire detection and fire protection systems. We offer design, supply, installation, testing, and commissioning, backed by service, engineering, and business-development teams.</p>
          <p>We follow globally accepted standards for developers, retailers, and industry. Solutions are tailored to each clientâ€™s statutory compliance and duty of care. Training, maintenance, and system know-how reduce risk for our clientele.</p>
          <p>Established in Karachi in ${brand.established}, we supply fire extinguishers (dry powder, COâ‚‚, AFFF foam, water, Halotron), fire alarm systems, metal detectors, PPE, and security items â€” with competitive pricing and prompt service.</p>
          <p><b>Owner:</b> ${brand.owner} Â· <b>NTN:</b> ${brand.ntn}</p>
        </div>
        <div class="bleed-img"><img src="${imgs.intro}" alt="Action Traders fire protection"></div>
      </div></section>
      <section class="section alt"><div class="wrap about-grid">
        <div class="bleed-img"><img src="${imgs.cover}" alt="Fire hydrant system profile"></div>
        <div>
          <h2>Our ethos</h2>
          <ul class="list">${ethos.map((e) => `<li>${e}</li>`).join("")}</ul>
          <h3>We believe</h3>
          <p>Everyone should enjoy what they do. Every action has an effect on others. Every job well done leads clients to recommend us to friends and family.</p>
        </div>
      </div></section>
      <section class="section">
        <div class="wrap">
          <div class="section-head"><div><h2>Quality policy</h2><p>Five commitments that sit behind every supply and installation.</p></div></div>
          <div class="quality-grid">
            ${quality.map((q) => `<article class="panel"><b>${q.n}</b><p>${q.t}</p></article>`).join("")}
          </div>
        </div>
      </section>
      <section class="section alt"><div class="wrap bleed-img"><img src="${imgs.letter}" alt="Company introduction letter"></div></section>
    `,
      "about"
    );
  }

  function renderServices() {
    layout(
      `
      <div class="page-hero"><div class="wrap"><div class="breadcrumb"><a href="#/">Home</a> / Services</div><h1>Fire fighting systems & services</h1><p>Supply, design, installation, testing, commissioning, and maintenance.</p></div></div>
      <section class="section">
        <div class="wrap about-grid">
          <div>
            <h2>What we install</h2>
            <p>We handle fire piping and complete systems for commercial, industrial, and residential developments. Growth in this work means we can offer hydrant and fire alarm systems with efficient, safe execution.</p>
            <h3>Commercial customers</h3>
            <p>Turnkey fire-fighting installations are a major part of the business.</p>
            <h3>Industrial services</h3>
            <p>Plant environments need special care. We assist with installing and upgrading fire-fighting systems on site.</p>
            <h3>Typical premises</h3>
            <ul class="list">${premises.map((p) => `<li>${p}</li>`).join("")}</ul>
          </div>
          <div class="bleed-img"><img src="${imgs.system}" alt="Industrial fire piping"></div>
        </div>
      </section>
      <section class="section alt"><div class="wrap product-grid">
        ${services.map((s) => `<article class="panel"><img src="${s.img}" alt="${s.title}" style="height:140px;width:100%;object-fit:cover;border-radius:10px;margin-bottom:12px"><h3>${s.title}</h3><p class="muted">${s.text}</p><a class="btn btn-red" href="#/contact">Enquire</a></article>`).join("")}
      </div></section>
      <section class="section">
        <div class="wrap about-grid">
          <div class="bleed-img"><img src="${imgs.protection}" alt="Fire protection specializations"></div>
          <div>
            <h2>Our specializations</h2>
            <p>Installation and maintenance teams are equipped with experienced consultants and project engineers, and meet project guidelines and construction standards.</p>
            <p><b>Fire extinguishers:</b> ${specializations.extinguishers.join("; ")}</p>
            <p><b>Water-based:</b> ${specializations.water.join("; ")}</p>
            <p><b>Gas-based:</b> ${specializations.gas.join("; ")}</p>
            <p><b>Suppression:</b> ${specializations.suppress.join("; ")}</p>
            <h3>Fire detection products</h3>
            <ul class="list">${specializations.detection.map((d) => `<li>${d}</li>`).join("")}</ul>
          </div>
        </div>
      </section>
    `,
      "services"
    );
  }

  function renderClients() {
    layout(
      `
      <div class="page-hero"><div class="wrap"><div class="breadcrumb"><a href="#/">Home</a> / Clients</div><h1>Our valuable clients</h1><p>Pharma, food, steel, telecom, and industrial names we are proud to supply.</p></div></div>
      <section class="section"><div class="wrap">
        <div class="bleed-img" style="margin-bottom:28px"><img src="${imgs.clients}" alt="Action Traders clients"></div>
        <div class="product-grid">
          ${clients.map((c) => `<div class="panel"><h3>${c}</h3><p class="muted">Fire protection supply, PPE, and site safety support.</p></div>`).join("")}
        </div>
      </div></section>
    `,
      "clients"
    );
  }

  function renderContact() {
    layout(
      `
      <div class="page-hero"><div class="wrap"><div class="breadcrumb"><a href="#/">Home</a> / Contact</div><h1>You can ask us questions</h1><p>Reach the team for stock, specs, and project quotes.</p></div></div>
      <section class="section"><div class="wrap contact-grid">
        <form class="panel" onsubmit="AT.contact(event)">
          <div class="field"><label>Name</label><input required name="name" /></div>
          <div class="field"><label>Email</label><input required type="email" name="email" /></div>
          <div class="field"><label>Phone</label><input name="phone" /></div>
          <div class="field"><label>Message</label><textarea required name="message" rows="5"></textarea></div>
          <button class="btn btn-red" type="submit">Send message</button>
        </form>
        <div>
          <div class="panel">
            <h3>Office & workshop</h3>
            <p>Contact Muhammad Irfan and the Action Traders team for stock, project quotes, refilling, and installation.</p>
            <div class="office">
              <div><h4>Head office</h4><p>${brand.address1}<br>${brand.phone}<br>${brand.email}</p></div>
              <div><h4>F.B Area office</h4><p>${brand.address2}<br>Cell ${brand.phoneAlt}</p></div>
            </div>
            <p><b>Workshop:</b> ${brand.workshop}</p>
            <p>NTN ${brand.ntn} Â· ${brand.hours}</p>
          </div>
        </div>
      </div></section>
    `,
      "contact"
    );
  }

  function renderCart() {
    const rows = cart
      .map((item) => {
        const p = productById(item.id);
        if (!p) return "";
        return `<tr>
          <td>${p.name}</td>
          <td>
            <div class="qty">
              <button type="button" onclick="AT.qty('${item.id}',-1)">âˆ’</button>
              <span>${item.qty}</span>
              <button type="button" onclick="AT.qty('${item.id}',1)">+</button>
            </div>
          </td>
          <td>Call for Price</td>
          <td><button class="btn btn-outline" type="button" onclick="AT.remove('${item.id}')">Remove</button></td>
        </tr>`;
      })
      .join("");
    layout(
      `
      <div class="page-hero"><div class="wrap"><h1>Enquiry cart</h1><p>Prices are quoted by phone or email â€” send the list to our team.</p></div></div>
      <section class="section"><div class="wrap panel">
        ${
          cart.length
            ? `<table class="cart-table"><thead><tr><th>Product</th><th>Qty</th><th>Price</th><th></th></tr></thead><tbody>${rows}</tbody></table>
               <p style="margin-top:20px"><a class="btn btn-red" href="#/contact">Request quote</a></p>`
            : `<div class="empty">Your cart is empty. <a href="#/shop">Browse the shop</a></div>`
        }
      </div></section>
    `,
      "cart"
    );
  }

  function renderPrivacy() {
    layout(
      `
      <div class="page-hero"><div class="wrap"><h1>Privacy policy</h1></div></div>
      <section class="section"><div class="wrap panel">
        <p>Action Traders uses contact details you send only to answer quotes, orders, refilling, and installation enquiries. The enquiry cart is stored in your browser until you submit a request.</p>
        <p>Office: ${brand.address1}. Email: ${brand.email}.</p>
      </div></section>
    `,
      "privacy"
    );
  }

  AT.add = addToCart;
  AT.remove = function (id) {
    const i = cart.findIndex((x) => x.id === id);
    if (i >= 0) cart.splice(i, 1);
    saveCart();
    renderCart();
  };
  AT.qty = function (id, d) {
    const item = cart.find((x) => x.id === id);
    if (!item) return;
    item.qty = Math.max(1, item.qty + d);
    saveCart();
    renderCart();
  };
  AT.search = function (e) {
    e.preventDefault();
    const q = new FormData(e.target).get("q") || "";
    location.hash = "#/shop?q=" + encodeURIComponent(q);
  };
  AT.contact = function (e) {
    e.preventDefault();
    showToast("Thanks â€” we will get back to you shortly.");
    e.target.reset();
  };
  AT.toggleNav = function () {
    document.getElementById("primary-nav").classList.toggle("open");
  };
  AT.toggleMega = function () {
    document.getElementById("shop-wrap").classList.toggle("open");
  };

  
  function renderPortfolio() {
    const portfolioImages = [
      "img/portfolio/project1.jpg",
      "img/portfolio/project2.jpg",
      "img/portfolio/project3.jpg",
      "img/portfolio/project4.jpg"
    ];
    
    layout(
      `<div class="page-hero"><div class="wrap"><div class="breadcrumb"><a href="#/">Home</a> / Portfolio</div><h1>Our Custom Portfolio</h1><p>A showcase of our recent fire safety and installation projects.</p></div></div>
      <section class="section"><div class="wrap">
        <div class="product-grid">
          ${portfolioImages.map((img, index) => <div class="panel" style="padding:10px"><img src="${img}" alt="Project $<button class="cqgq3w"></button>{index + 1}" style="width:100%; border-radius:8px; height:250px; object-fit:cover;"><h3>Project $<button class="cqgq3w"></button>{index + 1}</h3><p class="muted">Custom Fire Safety Installation</p></div>).join("")}
        </div>
      </div></section>`,
      "portfolio"
    );
  }
  
  function renderPortfolio() {
    const portfolioImages = [
      "img/portfolio/project1.jpg",
      "img/portfolio/project2.jpg",
      "img/portfolio/project3.jpg",
      "img/portfolio/project4.jpg"
    ];
    
    layout(
      `<div class="page-hero"><div class="wrap"><div class="breadcrumb"><a href="#/">Home</a> / Portfolio</div><h1>Our Custom Portfolio</h1><p>A showcase of our recent fire safety and installation projects.</p></div></div>
      <section class="section"><div class="wrap">
        <div class="product-grid">
          ${portfolioImages.map((img, index) => <div class="panel" style="padding:10px"><img src="${img}" alt="Project $<button class="cqgq3w"></button>{index + 1}" style="width:100%; border-radius:8px; height:250px; object-fit:cover;"><h3>Project $<button class="cqgq3w"></button>{index + 1}</h3><p class="muted">Custom Fire Safety Installation</p></div>).join("")}
        </div>
      </div></section>`,
      "portfolio"
    );
  }
  window.addEventListener("hashchange", route);
  route();
})();


