const menusData = [
  {
    id: "breakfast",
    title: "Breakfast",
    sections: [
      {
        sectionTitle: "Starters",
        items: [
          {
            name: "ASPARAGUS FRIES",
            description: "panko-battered, Irons signature dressing",
            price: "$10",
          },
          {
            name: "SHISHITO PEPPERS",
            description: "Yuzu, soy glaze, chili flakes, crispy onion",
            price: "$14",
          },
          {
            name: "CHILLED SHRIMP COCKTAIL",
            description: "served over ice, zesty cocktail sauce, fresh lemon",
            price: "$14",
          },
          {
            name: "STUFFED MUSHROOMS",
            description:
              "prime rib, Fontina cheese, grated horseradish, cracked 4-pepper, scallions, herb oil, red wine reduction",
            price: "$14",
          },
          {
            name: "TALEGGIO BRUSCHETTA",
            description:
              "toasted ciabatta, prosciutto, Taleggio cheese, Roma tomato, balsamic glaze, balsamic vinegar, EVOO, torn basil, garlic aioli",
            price: "$15",
          },
          {
            name: "KITCHEN CAESAR SALAD",
            description:
              "romaine, grape tomato, artichoke hearts, avocado, Bentons bacon, hearts of palm, Pecorino Romano, house breadcrumbs, Caesar dressing",
            price: "$12",
          },
          {
            name: "CUVÉE SALAD",
            description:
              "chopped romaine, spring greens, blue cheese, hearts of palm, candied walnuts, dried cherries, granny smith apple, champagne vinaigrette",
            price: "$12",
          },
          {
            name: "STEAKHOUSE SALAD",
            description:
              "chopped romaine, grape tomato, cucumber, red onion, white cheddar, Bentons bacon, 10-minute egg, house breadcrumbs, Irons signature dressing",
            price: "$12",
          },
          {
            name: "IRISH ONION SOUP",
            description: "Guinness stout, crouton, Gruyere cheese, fresh thyme",
            price: "$9",
          },
        ],
      },
    ],
  },
  {
    id: "lunch",
    title: "Lunch",
    sections: [
      {
        sectionTitle: "Starters",
        items: [
          {
            name: "ASPARAGUS FRIES",
            description: "panko-battered, Irons signature dressing",
            price: "$10",
          },
          {
            name: "SHISHITO PEPPERS",
            description: "Yuzu, soy glaze, chili flakes, crispy onion",
            price: "$14",
          },
          {
            name: "CHILLED SHRIMP COCKTAIL",
            description: "served over ice, zesty cocktail sauce, fresh lemon",
            price: "$14",
          },
        ],
      },
    ],
  },
  {
    id: "dinner",
    title: "Dinner",
    sections: [
      {
        sectionTitle: "Starters",
        items: [
          {
            name: "ASPARAGUS FRIES",
            description: "panko-battered, Irons signature dressing",
            price: "$10",
          },
          {
            name: "SHISHITO PEPPERS",
            description: "Yuzu, soy glaze, chili flakes, crispy onion",
            price: "$14",
          },
          {
            name: "CHILLED SHRIMP COCKTAIL",
            description: "served over ice, zesty cocktail sauce, fresh lemon",
            price: "$14",
          },
          {
            name: "STUFFED MUSHROOMS",
            description:
              "prime rib, Fontina cheese, grated horseradish, cracked 4-pepper, scallions, herb oil, red wine reduction",
            price: "$14",
          },
          {
            name: "TALEGGIO BRUSCHETTA",
            description:
              "toasted ciabatta, prosciutto, Taleggio cheese, Roma tomato, balsamic glaze, balsamic vinegar, EVOO, torn basil, garlic aioli",
            price: "$15",
          },
          {
            name: "KITCHEN CAESAR SALAD",
            description:
              "romaine, grape tomato, artichoke hearts, avocado, Bentons bacon, hearts of palm, Pecorino Romano, house breadcrumbs, Caesar dressing",
            price: "$12",
          },
          {
            name: "CUVÉE SALAD",
            description:
              "chopped romaine, spring greens, blue cheese, hearts of palm, candied walnuts, dried cherries, granny smith apple, champagne vinaigrette",
            price: "$12",
          },
          {
            name: "STEAKHOUSE SALAD",
            description:
              "chopped romaine, grape tomato, cucumber, red onion, white cheddar, Bentons bacon, 10-minute egg, house breadcrumbs, Irons signature dressing",
            price: "$12",
          },
          {
            name: "IRISH ONION SOUP",
            description: "Guinness stout, crouton, Gruyere cheese, fresh thyme",
            price: "$9",
          },
        ],
      },
      {
        sectionTitle: "Steaks",
        items: [
          { name: "FILET", description: "8 oz", price: "$38" },
          { name: "BAVETTE", description: "10 oz", price: "$32" },
          { name: "NEW YORK STRIP*", description: "14 oz", price: "$36" },
          { name: "BONELESS RIB EYE", description: "16 oz", price: "$38" },
          { name: "PORTERHOUSE", description: "24 oz", price: "$56" },
          {
            name: "PRIME DRY AGED KANSAS CITY STRIP",
            description: "16 oz",
            price: "$64",
          },
        ],
      },
      {
        sectionTitle: "Steak Toppers",
        items: [
          {
            name: "FOUR PEPPER BUTTER",
            description: "pink, white, green, black cracked pepper",
            price: "$6",
          },
          {
            name: "BLUE CHEESE CRUST",
            description: "blue cheese, black pepper, fresh thyme, panko crust",
            price: "$6",
          },
          {
            name: "BORDELAISE SAUCE",
            description: "dry red wine, butter, shallots",
            price: "$6",
          },
          {
            name: "BOURBON GRAVY",
            description:
              "Buffalo Trace, shallots, butter, mustard seed, brown sugar",
            price: "$6",
          },
          {
            name: "GRILLED SHRIMP",
            description: "citrus marinade, house butter",
            price: "$14",
          },
          {
            name: "OSCAR",
            description: "lump crab, asparagus, bearnaise",
            price: "$18",
          },
        ],
      },
      {
        sectionTitle: "Feelin' Lucky",
        items: [
          {
            name: "THE HOUSE FAVORITE: PRIME RIB DINNER (10 oz - Pacesetter)",
            description:
              "Limited amount made daily. Espresso rub, roasted garlic, onions, paprika, olive oil, salt & pepper, au jus, creamy horseradish. CHOICE OF TWO: Roasted Garlic Smashed Potatoes, Steak Fries, Corn Casserole, Summer Squash",
            price: "$42",
          },
          {
            name: "THE HOUSE FAVORITE: PRIME RIB DINNER (16 oz - Overlay Cut)",
            description:
              "Limited amount made daily. Espresso rub, roasted garlic, onions, paprika, olive oil, salt & pepper, au jus, creamy horseradish. CHOICE OF TWO: Roasted Garlic Smashed Potatoes, Steak Fries, Corn Casserole, Summer Squash",
            price: "$64",
          },
        ],
      },
      {
        sectionTitle: "Entrees",
        items: [
          {
            name: "BOURBON GLAZED PORK CHOP",
            description: "12 oz. bone-in, gherkin relish",
            price: "$34",
          },
          {
            name: "IRONS BURGER",
            description:
              "8 oz custom grind patty, American cheese, candied bacon jam, garlic aioli, pickle mustard, butter lettuce, grilled brioche, steak fries",
            price: "$19",
          },
          {
            name: "SHORT RIB RAGU",
            description:
              "braised short rib, tomato ragu, pappardelle pasta, parmesan, parsley",
            price: "$24",
          },
          {
            name: "CHICKEN PARMESAN",
            description:
              "pan-fried chicken breast, spaghetti, San Marzano sauce, provolone, fresh basil",
            price: "$24",
          },
          {
            name: "HALF RACK OF LAMB",
            description:
              "New Zealand lamb, pesto cream sauce, toasted pine nuts, shaved parmesan, torn basil",
            price: "$30",
          },
          {
            name: "BRICK CHICKEN",
            description: "10 oz. chimichurri, red pepper flakes, lemon",
            price: "$26",
          },
          {
            name: "SPRING PEA AND SCALLOP",
            description:
              "creamy parmesan and pea risotto, seared scallops, lemon, parmesan tweel, torn mint",
            price: "$56",
          },
          {
            name: "WILD MUSHROOM SEA BASS",
            description:
              "soy and miso marinated Chilean Sea Bass, wild mushroom consommé, sauteed mushrooms, wilted scallion",
            price: "$64",
          },
          {
            name: "PECAN CRUSTED SALMON",
            description: "pecan-crusted panko, lemon-herb beurre blanc",
            price: "$28",
          },
        ],
      },
      {
        sectionTitle: "Sides",
        items: [
          {
            name: "CORN CASSEROLE",
            description: "crème fraiche, Fresno chili, green onion",
            price: "$9",
          },
          {
            name: "GRILLED ASPARAGUS",
            description: "Irons signature rub",
            price: "$9",
          },
          {
            name: "STEAK FRIES",
            description:
              "Irons signature dressing (+ $3 Truffle fries: garlic butter, parmesan, black truffle, parsley)",
            price: "$9",
          },
          {
            name: "FRIED BRUSSELS SPROUTS",
            description:
              "sweet onion marmalade, Benton's bacon, soy glaze, crispy shallots",
            price: "$9",
          },
          {
            name: "ROASTED GARLIC SMASHED POTATOES",
            description: "roasted garlic cream, white pepper",
            price: "$9",
          },
          {
            name: "TWICE BAKED POTATO",
            description:
              "four pepper butter, crème fraiche, green onion, white cheddar, Benton's bacon",
            price: "$10",
          },
          {
            name: "TRUFFLE MAC N' CHEESE",
            description:
              "white cheddar, truffle salted panko, truffle honey drizzle",
            price: "$14",
          },
          {
            name: "BUTTONS & PEARLS",
            description: "button mushrooms, pearl onions, thyme",
            price: "$9",
          },
          {
            name: "SUMMER SQUASH",
            description: "grilled green and yellow squash, Irons signature rub",
            price: "$9",
          },
          {
            name: "RISOTTO",
            description: "Arborio rice, butter, parmesan, cracked black pepper",
            price: "$12",
          },
          {
            name: "CHARRED CORN AND WILD MUSHROOM",
            description:
              "fresh sweet corn cut from the cob, sauteed mushroom, pecorino, torn basil",
            price: "$9",
          },
        ],
      },
    ],
  },
  {
    id: "dessert",
    title: "Dessert",
    sections: [],
  },
  {
    id: "cocktailWine",
    title: "Cocktail & Wine",
    sections: [],
  },
];

function renderMenus() {
  const menuTypesContainer = document.querySelector(".menu-types");
  const menuContentContainer = document.querySelector(".menu-content");

  menuTypesContainer.innerHTML = "";
  menuContentContainer.innerHTML = "";

  let isFirstPopulated = true;

  menusData.forEach((menu) => {
    const hasContent =
      menu.sections &&
      menu.sections.some(
        (section) => section.items && section.items.length > 0,
      );

    if (hasContent) {
      const button = document.createElement("button");
      button.textContent = menu.title;
      button.dataset.target = menu.id;
      menuTypesContainer.appendChild(button);

      const menuSectionDiv = document.createElement("div");
      menuSectionDiv.classList.add("menu-pane");
      menuSectionDiv.dataset.pane = menu.id;
      menuSectionDiv.style.display = "none";

      let html = `<h2>${menu.title}</h2>`;

      menu.sections.forEach((section) => {
        if (section.items && section.items.length > 0) {
          html += `<div class="menu-subsection"><h3>${section.sectionTitle}</h3>`;
          section.items.forEach((dish) => {
            html += `
                        <div class="menu-item">
                            <div class="menu-item-header">
                                <span class="dish-name">
                                ${dish.name}</span>
                                <span class="dish-price">
                                ${dish.price}</span>
                            </div>
                            <p class="dish-desc">${dish.description}</p>
                        </div>
                        `;
          });
          html += `</div>`;
        }
      });

      menuSectionDiv.innerHTML = html;
      menuContentContainer.appendChild(menuSectionDiv);

      if (isFirstPopulated) {
        button.classList.add("active");
        menuSectionDiv.style.display = "block";
        isFirstPopulated = false;
      }
    }
  });

  const buttons = menuTypesContainer.querySelectorAll("button");
  const panes = menuContentContainer.querySelectorAll(".menu-pane");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      panes.forEach((p) => (p.style.display = "none"));

      btn.classList.add("active");
      const targetPane = menuContentContainer.querySelector(
        `[data-pane="${btn.dataset.target}"]`,
      );
      if (targetPane) {
        targetPane.style.display = "block";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", renderMenus);

const viewMenuButton = document.querySelector(
  ".restaurant-left .buttons button:first-child",
);

if (viewMenuButton) {
  viewMenuButton.addEventListener("click", () => {
    const targetSection = document.getElementById("menu-section-anchor");

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
}
