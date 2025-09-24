export type ProductItem = {
    title: string;
    img: string;
    tag?: "hit" | "new";
  };
  
  export type ProductGroup = {
    id: string;
    title: string;
    items: ProductItem[];
  };
  
  export const PRODUCT_GROUPS: ProductGroup[] = [
    {
      id: "frames-support",
      title: "Каркасы и опорные элементы",
      items: [
        { title: "Арматурные каркасы и сетки", img: "/rebar.jpg" },
        { title: "Металлические балки", img: "/beams.jpg", tag: "hit" },
        { title: "Колонны и опоры", img: "/columns.jpg" },
        { title: "Связи и распорки", img: "/bracing.jpg" },
        { title: "Ригеля", img: "/girders.jpg" },
        { title: "Прогоны", img: "/purlins.jpg" },
        { title: "Металлические каркасы", img: "/frames.jpg", tag: "hit" },
        { title: "Рамы и конструкции", img: "/frames2.jpg" },
        { title: "Металлические фермы", img: "/angars.jpg", tag: "new" }, 
      ],
    },
    {
      id: "mounting-engineering",
      title: "Изделия для монтажа и инженерии",
      items: [
        { title: "Закладные детали", img: "/zakladnye.jpg" },
        {
          title: "Изделия для монтажа и инженерных систем",
          img: "/mep-parts.jpg", tag: "hit"
        },
        { title: "Кронштейны", img: "/brackets.jpg" },
      ],
    },
    {
      id: "storage-transport",
      title: "Хранение и транспортировка",
      items: [
        { title: "Металлические поддоны и паллеты", img: "/pallets.jpg" },
        { title: "Ящики и контейнеры", img: "/containers.jpg" },
        { title: "Металлические стеллажи", img: "/racking.jpg" },
      ],
    },
    {
      id: "access-awnings",
      title: "Лестницы, площадки и навесы",
      items: [
        { title: "Лестницы и площадки", img: "/stairs.jpg" },
        { title: "Козырьки и навесы", img: "/awnings.jpg", tag: "new" },
      ],
    },
    {
      id: "fences-gates",
      title: "Ограждения и ворота",
      items: [
        { title: "Ворота и калитки", img: "/gates.jpg" },
        { title: "Заборы и ограждения", img: "/fence.jpg" },
        {
          title: "Заборы и ограждения с элементами ковки",
          img: "/fence-forged.jpg",
        },
      ],
    },
    {
      id: "custom",
      title: "Индивидуальные решения",
      items: [{ title: "Нестандартные изделия", img: "/custom.jpg", tag: "hit" }],
    },
  ];
  