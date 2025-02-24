const products = [
    {
      id: 1,
      title: "Asus ProArt GeForce RTX 4070",
      price: 999.99,
      category: "Graphic Cards",
      description:
        "The SFF-ready ProArt GeForce RTX™ 4070 SUPER OC Edition 12GB GDDR6X brings elegant and minimalist style to empower creator PC builds.",
      image: "/src/assets/imgs/GPU/Asus_ProArt_GeForce_RTX_4070.jpg",
    },
    {
      id: 2,
      title: "MSI GeForce RTX 4060 Ti VENTUS 2X BLACK",
      price: 2299.99,
      category: "Graphic Cards",
      description:
        "VENTUS brings a fundamentally solid experience to users looking for a performance graphics card with TORX FAN 4.0 for superior cooling.",
      image: "/src/assets/imgs/GPU/MSI_GeForce_RTX_4060_Ti_VENTUS_2X_BLACK.jpg",
    },
    {
      id: 3,
      title: "Gigabyte GeForce RTX 4090 GAMING OC",
      price: 3799.99,
      category: "Graphic Cards",
      description:
        "A powerful RTX 4090 GPU with WINDFORCE cooling technology, ideal for gaming and high-performance computing.",
      image: "/src/assets/imgs/GPU/Gigabyte_GeForce_RTX_4090_GAMING_OC.jpg",
    },
    {
      id: 4,
      title: "AMD Ryzen 9 7950X",
      price: 699.99,
      category: "Processors",
      description:
        "A 16-core, 32-thread processor with boost speeds up to 5.7 GHz, designed for ultimate gaming and content creation performance.",
      image: "/src/assets/imgs/CPU/AMD_Ryzen_9_7950X.jpg",
    },
    {
      id: 5,
      title: "Intel Core i9-13900K",
      price: 649.99,
      category: "Processors",
      description:
        "Intel's 13th Gen flagship processor with 24 cores, 32 threads, and a max turbo frequency of 5.8 GHz.",
      image: "/src/assets/imgs/CPU/Intel_Core_i9_13900K.jpg",
    },
    {
      id: 6,
      title: "MSI MAG B660 TOMAHAWK WIFI",
      price: 189.99,
      category: "Motherboards",
      description:
        "A high-performance motherboard with DDR4 support, PCIe 4.0, and built-in WiFi 6 connectivity.",
      image: "/src/assets/imgs/Motherboards/MSI_MAG_B660_TOMAHAWK_WIFI.jpg",
    },
    {
      id: 7,
      title: "Asus ROG STRIX Z790-E GAMING",
      price: 349.99,
      category: "Motherboards",
      description:
        "A top-tier motherboard designed for Intel’s latest processors with PCIe 5.0 and DDR5 support.",
      image: "/src/assets/imgs/Motherboards/Asus_ROG_STRIX_Z790_E_GAMING.jpg",
    },
    {
      id: 8,
      title: "Corsair Vengeance RGB DDR5 32GB (2x16GB) 6000MHz",
      price: 179.99,
      category: "Memory (RAM)",
      description:
        "High-performance DDR5 RAM with customizable RGB lighting and speeds up to 6000MHz.",
      image: "/src/assets/imgs/RAM/Corsair_Vengeance_RGB_DDR5_32GB.jpg",
    },
    {
      id: 9,
      title: "G.Skill Trident Z5 RGB 32GB (2x16GB) 6400MHz",
      price: 199.99,
      category: "Memory (RAM)",
      description:
        "Premium DDR5 RAM with ultra-fast speeds and dynamic RGB lighting.",
      image: "/src/assets/imgs/RAM/GSkill_Trident_Z5_RGB_32GB.jpg",
    },
    {
      id: 10,
      title: "Samsung 980 PRO 2TB NVMe SSD",
      price: 229.99,
      category: "Storage",
      description:
        "PCIe 4.0 NVMe SSD with blazing-fast read and write speeds for high-performance computing.",
      image: "/src/assets/imgs/Storage/Samsung_980_PRO_2TB_NVMe_SSD.jpg",
    },
    {
      id: 11,
      title: "WD Black SN850X 1TB NVMe SSD",
      price: 149.99,
      category: "Storage",
      description:
        "High-speed gaming SSD with PCIe 4.0 support and read speeds up to 7000MB/s.",
      image: "/src/assets/imgs/Storage/WD_Black_SN850X_1TB_NVMe_SSD.jpg",
    },
    {
      id: 12,
      title: "Seagate FireCuda 8TB HDD",
      price: 249.99,
      category: "Storage",
      description:
        "A high-capacity HDD designed for gamers and professionals who need massive storage space.",
      image: "/src/assets/imgs/Storage/Seagate_FireCuda_8TB_HDD.jpg",
    },
    {
      id: 13,
      title: "NZXT Kraken Z73 360mm AIO Liquid Cooler",
      price: 279.99,
      category: "Cooling",
      description:
        "A powerful liquid cooler with a customizable LCD display and high-efficiency cooling for top-tier CPUs.",
      image: "/src/assets/imgs/Cooling/NZXT_Kraken_Z73_360mm_AIO.jpg",
    },
    {
      id: 14,
      title: "Corsair iCUE H150i ELITE LCD XT",
      price: 289.99,
      category: "Cooling",
      description:
        "A high-performance AIO liquid cooler with a 2.1” LCD screen and powerful cooling capabilities.",
      image: "/src/assets/imgs/Cooling/Corsair_iCUE_H150i_ELITE_LCD_XT.jpg",
    },
    {
      id: 15,
      title: "Lian Li O11 Dynamic EVO Mid Tower Case",
      price: 179.99,
      category: "PC Cases",
      description:
        "A stunning mid-tower case with excellent airflow and customizable layout options.",
      image: "/src/assets/imgs/Cases/Lian_Li_O11_Dynamic_EVO.jpg",
    },
    {
      id: 16,
      title: "Fractal Design Meshify 2 Compact",
      price: 139.99,
      category: "PC Cases",
      description:
        "A stylish and airflow-focused mid-tower case with plenty of room for high-performance components.",
      image: "/src/assets/imgs/Cases/Fractal_Design_Meshify_2_Compact.jpg",
    },
    {
      id: 17,
      title: "Asus ROG Thor 1000W Platinum II PSU",
      price: 299.99,
      category: "Power Supply",
      description:
        "A premium 1000W power supply with 80 PLUS Platinum certification and an OLED display.",
      image: "/src/assets/imgs/PSU/Asus_ROG_Thor_1000W_Platinum_II.jpg",
    },
    {
      id: 18,
      title: "Corsair RM850x 850W 80+ Gold PSU",
      price: 169.99,
      category: "Power Supply",
      description:
        "A reliable and efficient 850W PSU with fully modular cables and silent operation.",
      image: "/src/assets/imgs/PSU/Corsair_RM850x_850W_80Plus_Gold.jpg",
    },
    {
      id: 19,
      title: "Logitech G Pro X Superlight Wireless Gaming Mouse",
      price: 129.99,
      category: "Peripherals",
      description:
        "An ultra-lightweight gaming mouse with HERO 25K sensor and wireless connectivity.",
      image: "/src/assets/imgs/Peripherals/Logitech_G_Pro_X_Superlight.jpg",
    },
    {
      id: 20,
      title: "Razer Huntsman V2 Analog Gaming Keyboard",
      price: 249.99,
      category: "Peripherals",
      description:
        "A high-end gaming keyboard with analog optical switches for precise control.",
      image: "/src/assets/imgs/Peripherals/Razer_Huntsman_V2_Analog.jpg",
    },
  ];
  
  export default products;
  