/* ==========================================
   VELOCITY BIKES
   MAIN JAVASCRIPT
========================================== */


/* ==========================================
   BIKE DATABASE
========================================== */

const bikes = [

    {
        id: 1,
        name: "Velocity R1",
        category: "sport",
        categoryName: "Sport",
        price: 1249000,
        engine: "998cc",
        power: "200 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1000&q=85",
        description:
            "A high-performance sport motorcycle engineered for riders who demand exceptional speed, handling and precision.",
        featured: true
    },

    {
        id: 2,
        name: "Thunder 650",
        category: "cruiser",
        categoryName: "Cruiser",
        price: 499000,
        engine: "650cc",
        power: "47 HP",
        transmission: "5-Speed",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=85",
        description:
            "A refined cruiser with relaxed ergonomics, strong torque and timeless styling.",
        featured: true
    },

    {
        id: 3,
        name: "Explorer 800",
        category: "adventure",
        categoryName: "Adventure",
        price: 875000,
        engine: "799cc",
        power: "95 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85",
        description:
            "Built for long-distance journeys, rough terrain and riders who want to explore further.",
        featured: true
    },

    {
        id: 4,
        name: "Falcon 600",
        category: "sport",
        categoryName: "Sport",
        price: 725000,
        engine: "599cc",
        power: "120 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1000&q=85",
        description:
            "Aggressive design and exciting performance make the Falcon 600 perfect for spirited riding.",
        featured: true
    },

    {
        id: 5,
        name: "Iron 500",
        category: "cruiser",
        categoryName: "Cruiser",
        price: 385000,
        engine: "499cc",
        power: "42 HP",
        transmission: "5-Speed",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=85",
        description:
            "Classic cruiser character combined with modern reliability and everyday usability.",
        featured: true
    },

    {
        id: 6,
        name: "Trail Master",
        category: "adventure",
        categoryName: "Adventure",
        price: 695000,
        engine: "700cc",
        power: "74 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85",
        description:
            "A versatile adventure motorcycle ready for highways, trails and weekend escapes.",
        featured: true
    },

    {
        id: 7,
        name: "Street X",
        category: "naked",
        categoryName: "Naked",
        price: 579000,
        engine: "689cc",
        power: "73 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1000&q=85",
        description:
            "A lightweight naked motorcycle combining agile handling with everyday practicality.",
        featured: true
    },

    {
        id: 8,
        name: "Raptor 900",
        category: "sport",
        categoryName: "Sport",
        price: 999000,
        engine: "899cc",
        power: "145 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85",
        description:
            "A premium performance machine designed for riders looking for serious road performance.",
        featured: true
    },

    {
        id: 9,
        name: "Apex GT 1000",
        category: "sport",
        categoryName: "Sport",
        price: 1599000,
        engine: "998cc",
        power: "212 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1000&q=85",
        description:
            "A premium track-inspired superbike with sharp aerodynamics, race-bred electronics and breathtaking acceleration.",
        featured: true
    },

    {
        id: 10,
        name: "Eclipse 1100",
        category: "cruiser",
        categoryName: "Cruiser",
        price: 1299000,
        engine: "1084cc",
        power: "92 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=85",
        description:
            "A luxurious cruiser blending muscular torque, premium comfort and confident long-distance touring manners.",
        featured: true
    },

    {
        id: 11,
        name: "Summit Pro 1200",
        category: "adventure",
        categoryName: "Adventure",
        price: 1475000,
        engine: "1199cc",
        power: "125 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85",
        description:
            "A flagship adventure motorcycle equipped for mountain roads, remote trails and effortless touring.",
        featured: true
    },

    {
        id: 12,
        name: "Urban Prime 900",
        category: "naked",
        categoryName: "Naked",
        price: 899000,
        engine: "890cc",
        power: "115 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1000&q=85",
        description:
            "A premium naked bike with an upright riding position, instant throttle response and agile city handling.",
        featured: true
    },

    {
        id: 13,
        name: "Phantom RR",
        category: "sport",
        categoryName: "Sport",
        price: 1899000,
        engine: "1099cc",
        power: "225 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85",
        description:
            "The ultimate premium road machine, combining elite performance, advanced rider aids and exclusive styling.",
        featured: true
    },

    {
        id: 14,
        name: "Titan V4",
        category: "sport",
        categoryName: "Sport",
        price: 2299000,
        engine: "1103cc",
        power: "218 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1000&q=85",
        description:
            "An exclusive V4 superbike delivering explosive performance, carbon-inspired styling and precise cornering control.",
        featured: true
    },

    {
        id: 15,
        name: "Imperial 1800",
        category: "cruiser",
        categoryName: "Cruiser",
        price: 1999000,
        engine: "1798cc",
        power: "105 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=85",
        description:
            "A commanding luxury cruiser with relaxed ergonomics, rich torque and premium touring comfort.",
        featured: true
    },

    {
        id: 16,
        name: "Terra X 1300",
        category: "adventure",
        categoryName: "Adventure",
        price: 1799000,
        engine: "1301cc",
        power: "150 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85",
        description:
            "A high-spec adventure tourer built for long expeditions, demanding terrain and all-weather confidence.",
        featured: true
    },

    {
        id: 17,
        name: "Volt RS",
        category: "naked",
        categoryName: "Naked",
        price: 1149000,
        engine: "950cc",
        power: "120 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1000&q=85",
        description:
            "A premium streetfighter with instant response, compact handling and a bold modern riding character.",
        featured: true
    },

    {
        id: 18,
        name: "Grand Tourer 1600",
        category: "cruiser",
        categoryName: "Cruiser",
        price: 2499000,
        engine: "1584cc",
        power: "118 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=85",
        description:
            "A flagship touring motorcycle combining effortless highway power, generous comfort and premium finish.",
        featured: true
    },

    {
        id: 19,
        name: "Velocity RS 1200",
        category: "sport",
        categoryName: "Sport",
        price: 1699000,
        engine: "1198cc",
        power: "190 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1000&q=85",
        description:
            "A precision sport motorcycle with premium suspension, strong mid-range torque and confident high-speed stability.",
        featured: true
    },

    {
        id: 20,
        name: "Monarch 1300",
        category: "cruiser",
        categoryName: "Cruiser",
        price: 1849000,
        engine: "1284cc",
        power: "101 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=85",
        description:
            "A handcrafted-inspired cruiser offering relaxed control, premium comfort and an unmistakable road presence.",
        featured: true
    },

    {
        id: 21,
        name: "Expedition 1000",
        category: "adventure",
        categoryName: "Adventure",
        price: 1399000,
        engine: "999cc",
        power: "110 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85",
        description:
            "A versatile adventure bike designed for long-distance travel, rough roads and everyday confidence.",
        featured: true
    },

    {
        id: 22,
        name: "Neon Street 800",
        category: "naked",
        categoryName: "Naked",
        price: 949000,
        engine: "799cc",
        power: "98 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1000&q=85",
        description:
            "A stylish premium street bike with lightweight agility, responsive power and modern rider-focused electronics.",
        featured: true
    },

    {
        id: 23,
        name: "Royal Sprint 750",
        category: "sport",
        categoryName: "Sport",
        price: 1099000,
        engine: "749cc",
        power: "112 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1000&q=85",
        description:
            "A fast and accessible premium sport bike built for sharp handling, daily riding and weekend escapes.",
        featured: true
    },

    {
        id: 24,
        name: "Horizon Touring 1400",
        category: "cruiser",
        categoryName: "Cruiser",
        price: 2199000,
        engine: "1400cc",
        power: "126 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=85",
        description:
            "A premium grand tourer with effortless highway performance, generous luggage capacity and all-day comfort.",
        featured: true
    },

    {
        id: 25,
        name: "E-Rush Carbon",
        category: "bicycle",
        categoryName: "Electric Bicycle",
        price: 189000,
        engine: "750W Motor",
        power: "85 Nm",
        transmission: "12-Speed",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1000&q=85",
        description:
            "A lightweight carbon electric bicycle with responsive pedal assist, premium components and fast urban performance.",
        featured: true
    },

    {
        id: 26,
        name: "TrailVolt Pro",
        category: "bicycle",
        categoryName: "Electric Bicycle",
        price: 239000,
        engine: "850W Motor",
        power: "95 Nm",
        transmission: "11-Speed",
        image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1000&q=85",
        description:
            "A premium electric trail bicycle with balanced suspension, powerful assistance and adventure-ready handling.",
        featured: true
    },

    {
        id: 27,
        name: "Metro Glide S",
        category: "bicycle",
        categoryName: "Electric Bicycle",
        price: 129000,
        engine: "500W Motor",
        power: "60 Nm",
        transmission: "9-Speed",
        image: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=1000&q=85",
        description:
            "A refined city electric bicycle made for smooth commuting, comfortable geometry and dependable daily range.",
        featured: true
    },

    {
        id: 28,
        name: "Aero Sprint E",
        category: "bicycle",
        categoryName: "Electric Bicycle",
        price: 279000,
        engine: "700W Motor",
        power: "80 Nm",
        transmission: "12-Speed",
        image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1000&q=85",
        description:
            "A sleek performance electric bicycle combining aerodynamic design, quick acceleration and precise road control.",
        featured: true
    },

    {
        id: 29,
        name: "Summit E-X",
        category: "bicycle",
        categoryName: "Electric Bicycle",
        price: 319000,
        engine: "900W Motor",
        power: "100 Nm",
        transmission: "12-Speed",
        image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1000&q=85",
        description:
            "A high-performance electric mountain bicycle with strong climbing power, rugged tires and trail-ready control.",
        featured: true
    },

    {
        id: 30,
        name: "Luxe Commuter X",
        category: "bicycle",
        categoryName: "Electric Bicycle",
        price: 169000,
        engine: "600W Motor",
        power: "70 Nm",
        transmission: "10-Speed",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85",
        description:
            "A premium commuter electric bicycle offering elegant comfort, practical range and quiet urban mobility.",
        featured: true
    },

    {
        id: 31,
        name: "Mercedes-AMG GT",
        category: "car",
        categoryName: "Mercedes-Benz",
        price: 27500000,
        engine: "4.0L V8",
        power: "577 HP",
        transmission: "9-Speed Automatic",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=85",
        description:
            "A grand touring sports car combining hand-finished luxury, explosive V8 performance and everyday refinement.",
        featured: true
    },

    {
        id: 32,
        name: "Bentley Continental GT",
        category: "car",
        categoryName: "Bentley",
        price: 52000000,
        engine: "4.0L Twin-Turbo V8",
        power: "542 HP",
        transmission: "8-Speed Dual-Clutch",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=85",
        description:
            "An elegant luxury coupe with handcrafted materials, effortless grand touring power and exceptional cabin comfort.",
        featured: true
    },

    {
        id: 33,
        name: "Phantom VIII",
        category: "car",
        categoryName: "Rolls-Royce",
        price: 95000000,
        engine: "6.75L V12",
        power: "563 HP",
        transmission: "8-Speed Automatic",
        image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1000&q=85",
        description:
            "A stately ultra-luxury saloon delivering serene silence, bespoke craftsmanship and effortless authority.",
        featured: true
    },

    {
        id: 34,
        name: "Huayra Roadster",
        category: "car",
        categoryName: "Pagani",
        price: 260000000,
        engine: "6.0L Twin-Turbo V12",
        power: "827 HP",
        transmission: "7-Speed Sequential",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1000&q=85",
        description:
            "An exclusive hypercar shaped by handcrafted artistry, extreme aerodynamics and breathtaking open-air performance.",
        featured: true
    },

    {
        id: 35,
        name: "Revuelto",
        category: "car",
        categoryName: "Lamborghini",
        price: 65000000,
        engine: "6.5L V12 Hybrid",
        power: "1001 HP",
        transmission: "8-Speed Dual-Clutch",
        image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1000&q=85",
        description:
            "A dramatic V12 hybrid supercar with theatrical styling, instant electric response and all-wheel-drive grip.",
        featured: true
    },

    {
        id: 36,
        name: "RS e-tron GT",
        category: "car",
        categoryName: "Audi",
        price: 18500000,
        engine: "Dual Electric Motor",
        power: "637 HP",
        transmission: "2-Speed Automatic",
        image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=1000&q=85",
        description:
            "A high-performance electric grand tourer pairing instant acceleration with premium Audi comfort and technology.",
        featured: true
    },

    {
        id: 37,
        name: "Volkswagen ID.7 GTX",
        category: "car",
        categoryName: "Volkswagen Group",
        price: 7200000,
        engine: "Dual Electric Motor",
        power: "335 HP",
        transmission: "Single-Speed Automatic",
        image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1000&q=85",
        description:
            "A spacious performance electric fastback built for quiet long-distance travel, intelligent technology and comfort.",
        featured: true
    },

    {
        id: 38,
        name: "Safari EV",
        category: "car",
        categoryName: "Tata Motors",
        price: 3200000,
        engine: "Dual Electric Motor",
        power: "310 HP",
        transmission: "Single-Speed Automatic",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=85",
        description:
            "A premium electric SUV designed for family adventure with commanding space, modern safety and confident range.",
        featured: true
    },

    {
        id: 39,
        name: "296 GTB",
        category: "car",
        categoryName: "Ferrari",
        price: 55000000,
        engine: "3.0L Twin-Turbo V6 Hybrid",
        power: "819 HP",
        transmission: "8-Speed Dual-Clutch",
        image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1000&q=85",
        description:
            "A compact Ferrari berlinetta delivering electrified V6 performance, sharp balance and unmistakable Italian character.",
        featured: true
    },

    {
        id: 40,
        name: "750S",
        category: "car",
        categoryName: "McLaren",
        price: 58000000,
        engine: "4.0L Twin-Turbo V8",
        power: "740 HP",
        transmission: "7-Speed Seamless Shift",
        image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1000&q=85",
        description:
            "A lightweight supercar focused on pure driver engagement, razor-sharp responses and exceptional aerodynamic control.",
        featured: true
    },

    {
        id: 41,
        name: "F-Type R",
        category: "car",
        categoryName: "Jaguar",
        price: 22500000,
        engine: "5.0L Supercharged V8",
        power: "575 HP",
        transmission: "8-Speed Automatic",
        image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1000&q=85",
        description:
            "A charismatic performance coupe blending dramatic styling, a sonorous V8 and confident grand touring ability.",
        featured: true
    },

    {
        id: 42,
        name: "EX90 Twin Motor",
        category: "car",
        categoryName: "Volvo",
        price: 10500000,
        engine: "Dual Electric Motor",
        power: "402 HP",
        transmission: "Single-Speed Automatic",
        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1000&q=85",
        description:
            "A refined electric SUV focused on Scandinavian design, intelligent safety and quiet seven-seat comfort.",
        featured: true
    },

    {
        id: 43,
        name: "XM Label Red",
        category: "car",
        categoryName: "BMW",
        price: 26500000,
        engine: "4.4L Twin-Turbo V8 Hybrid",
        power: "738 HP",
        transmission: "8-Speed Automatic",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=85",
        description:
            "A bold high-performance SUV combining plug-in hybrid power, luxury materials and commanding BMW M dynamics.",
        featured: true
    },

    {
        id: 44,
        name: "911 Turbo S",
        category: "car",
        categoryName: "Porsche",
        price: 32500000,
        engine: "3.7L Twin-Turbo Flat-Six",
        power: "641 HP",
        transmission: "8-Speed PDK",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85",
        description:
            "A legendary sports car with all-weather traction, devastating acceleration and everyday Porsche usability.",
        featured: true
    },

    {
        id: 45,
        name: "Mustang Dark Horse",
        category: "car",
        categoryName: "Ford",
        price: 12500000,
        engine: "5.0L V8",
        power: "500 HP",
        transmission: "6-Speed Manual",
        image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1000&q=85",
        description:
            "A muscular American performance coupe with track-ready hardware, a manual gearbox and unmistakable V8 character.",
        featured: true
    },

    {
        id: 46,
        name: "Lancer Evolution Final",
        category: "car",
        categoryName: "Mitsubishi",
        price: 7800000,
        engine: "2.0L Turbocharged Inline-4",
        power: "303 HP",
        transmission: "6-Speed Manual",
        image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1000&q=85",
        description:
            "A rally-bred performance sedan with intelligent all-wheel drive, turbocharged response and focused handling.",
        featured: true
    },

    {
        id: 47,
        name: "500e La Prima",
        category: "car",
        categoryName: "FIAT",
        price: 3200000,
        engine: "Electric Motor",
        power: "117 HP",
        transmission: "Single-Speed Automatic",
        image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1000&q=85",
        description:
            "A stylish city electric car with charming Italian design, compact agility and effortless urban mobility.",
        featured: true
    },

    {
        id: 48,
        name: "Charger SRT Hellcat",
        category: "car",
        categoryName: "Dodge",
        price: 11500000,
        engine: "6.2L Supercharged V8",
        power: "717 HP",
        transmission: "8-Speed Automatic",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1000&q=85",
        description:
            "A four-door muscle car with supercharged power, dramatic presence and thrilling straight-line performance.",
        featured: true
    },

    {
        id: 49,
        name: "Challenger SRT Demon",
        category: "car",
        categoryName: "Hellcat / SRT",
        price: 14500000,
        engine: "6.2L Supercharged V8",
        power: "840 HP",
        transmission: "8-Speed Automatic",
        image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1000&q=85",
        description:
            "A drag-strip-focused muscle car built around brutal launch performance, supercharged torque and bold SRT attitude.",
        featured: true
    },

    {
        id: 50,
        name: "1500 TRX",
        category: "car",
        categoryName: "RAM",
        price: 13200000,
        engine: "6.2L Supercharged V8",
        power: "702 HP",
        transmission: "8-Speed Automatic",
        image: "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1000&q=85",
        description:
            "A high-performance off-road pickup combining immense power, long-travel suspension and serious desert capability.",
        featured: true
    },

    {
        id: 51,
        name: "Scorpio-N Z8",
        category: "car",
        categoryName: "Mahindra",
        price: 2450000,
        engine: "2.2L Turbo Diesel",
        power: "172 HP",
        transmission: "6-Speed Automatic",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=85",
        description:
            "A rugged premium SUV with commanding road presence, four-wheel drive confidence and versatile family comfort.",
        featured: true
    },

    {
        id: 52,
        name: "Fortuner Legender",
        category: "car",
        categoryName: "Toyota",
        price: 5200000,
        engine: "2.8L Turbo Diesel",
        power: "201 HP",
        transmission: "6-Speed Automatic",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1000&q=85",
        description:
            "A premium seven-seat SUV offering strong touring performance, refined comfort and dependable all-terrain ability.",
        featured: true
    },

    {
        id: 53,
        name: "Spectre",
        category: "car",
        categoryName: "Rolls-Royce",
        price: 75000000,
        engine: "Dual Electric Motor",
        power: "567 HP",
        transmission: "Single-Speed Automatic",
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1000&q=85",
        description:
            "An ultra-luxury electric coupe offering silent grand touring, hand-crafted elegance and effortless power.",
        featured: true
    },

    {
        id: 54,
        name: "Utopia",
        category: "car",
        categoryName: "Pagani",
        price: 280000000,
        engine: "6.0L Twin-Turbo V12",
        power: "852 HP",
        transmission: "7-Speed Manual",
        image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1000&q=85",
        description:
            "A hand-built hypercar celebrating analog driving feel, sculptural carbon design and extraordinary exclusivity.",
        featured: true
    },

    {
        id: 55,
        name: "Urus Performante",
        category: "car",
        categoryName: "Lamborghini",
        price: 49000000,
        engine: "4.0L Twin-Turbo V8",
        power: "657 HP",
        transmission: "8-Speed Automatic",
        image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1000&q=85",
        description:
            "A super-SUV with dramatic design, track-inspired handling and practical performance for every journey.",
        featured: true
    },

    {
        id: 56,
        name: "Q8 Performance",
        category: "car",
        categoryName: "Audi",
        price: 14500000,
        engine: "4.0L Twin-Turbo V8",
        power: "591 HP",
        transmission: "8-Speed Automatic",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=85",
        description:
            "A sophisticated performance SUV blending quattro traction, premium technology and strong everyday practicality.",
        featured: true
    },

    {
        id: 57,
        name: "Touareg R eHybrid",
        category: "car",
        categoryName: "Volkswagen Group",
        price: 11800000,
        engine: "3.0L V6 Plug-in Hybrid",
        power: "456 HP",
        transmission: "8-Speed Automatic",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=85",
        description:
            "A premium hybrid SUV combining electric efficiency, confident towing ability and long-distance comfort.",
        featured: true
    },

    {
        id: 58,
        name: "Harrier EV",
        category: "car",
        categoryName: "Tata Motors",
        price: 2800000,
        engine: "Electric Motor",
        power: "250 HP",
        transmission: "Single-Speed Automatic",
        image: "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1000&q=85",
        description:
            "A bold electric SUV designed for modern Indian roads with spacious comfort, strong safety and quiet performance.",
        featured: true
    },

    {
        id: 59,
        name: "Purosangue",
        category: "car",
        categoryName: "Ferrari",
        price: 75000000,
        engine: "6.5L V12",
        power: "715 HP",
        transmission: "8-Speed Dual-Clutch",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=85",
        description:
            "A rare four-door Ferrari combining V12 theatre, high-speed touring and exceptional Italian craftsmanship.",
        featured: true
    },

    {
        id: 60,
        name: "Artura Spider",
        category: "car",
        categoryName: "McLaren",
        price: 52000000,
        engine: "3.0L Twin-Turbo V6 Hybrid",
        power: "690 HP",
        transmission: "8-Speed Seamless Shift",
        image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1000&q=85&sat=-20",
        description:
            "A lightweight hybrid convertible delivering open-air supercar excitement with precise McLaren balance.",
        featured: true
    },

    {
        id: 61,
        name: "F-Pace SVR",
        category: "car",
        categoryName: "Jaguar",
        price: 18500000,
        engine: "5.0L Supercharged V8",
        power: "542 HP",
        transmission: "8-Speed Automatic",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=85",
        description:
            "A performance luxury SUV with sharp styling, a sonorous V8 and confident high-speed touring manners.",
        featured: true
    },

    {
        id: 62,
        name: "XC90 Recharge",
        category: "car",
        categoryName: "Volvo",
        price: 10500000,
        engine: "2.0L Plug-in Hybrid",
        power: "455 HP",
        transmission: "8-Speed Automatic",
        image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1000&q=85",
        description:
            "A calm and capable seven-seat luxury SUV centered on Scandinavian comfort, electrification and safety.",
        featured: true
    },

    {
        id: 63,
        name: "M5 Competition",
        category: "car",
        categoryName: "BMW",
        price: 19000000,
        engine: "4.4L Twin-Turbo V8 Hybrid",
        power: "717 HP",
        transmission: "8-Speed Automatic",
        image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1000&q=85",
        description:
            "A super-saloon combining executive comfort, electrified V8 power and precise BMW M performance.",
        featured: true
    },

    {
        id: 64,
        name: "Cayenne Turbo GT",
        category: "car",
        categoryName: "Porsche",
        price: 28500000,
        engine: "4.0L Twin-Turbo V8",
        power: "650 HP",
        transmission: "8-Speed Tiptronic",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85",
        description:
            "A performance SUV with sports-car reflexes, premium touring comfort and a powerful Porsche character.",
        featured: true
    },

    {
        id: 65,
        name: "F-150 Raptor R",
        category: "car",
        categoryName: "Ford",
        price: 13500000,
        engine: "5.2L Supercharged V8",
        power: "700 HP",
        transmission: "10-Speed Automatic",
        image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1000&q=85",
        description:
            "A desert-ready performance pickup with huge suspension travel, supercharged power and serious off-road control.",
        featured: true
    },

    {
        id: 66,
        name: "Streetfighter V4 SP",
        category: "sport",
        categoryName: "Premium Motorcycle",
        price: 3499000,
        engine: "1103cc V4",
        power: "208 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=85",
        description:
            "A premium naked motorcycle with superbike performance, advanced electronics and an aggressive riding position.",
        featured: true
    },

    {
        id: 67,
        name: "Adventure Rally 900",
        category: "adventure",
        categoryName: "Premium Motorcycle",
        price: 1899000,
        engine: "889cc Twin-Cylinder",
        power: "105 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85&sat=15",
        description:
            "A premium rally-inspired adventure bike made for long routes, loose surfaces and confident exploration.",
        featured: true
    },

    {
        id: 68,
        name: "Carbon Trail E",
        category: "bicycle",
        categoryName: "Electric Bicycle",
        price: 349000,
        engine: "1000W Motor",
        power: "110 Nm",
        transmission: "12-Speed",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1000&q=85",
        description:
            "A premium carbon electric mountain bicycle with strong climbing assistance, agile handling and trail-ready range.",
        featured: true
    },

    {
        id: 69,
        name: "City Flow E",
        category: "bicycle",
        categoryName: "Electric Bicycle",
        price: 149000,
        engine: "500W Motor",
        power: "65 Nm",
        transmission: "9-Speed",
        image: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=1000&q=85",
        description:
            "A comfortable premium electric bicycle for everyday city riding, efficient commuting and relaxed weekend travel.",
        featured: true
    },

    {
        id: 70,
        name: "Velocity Track 750",
        category: "sport",
        categoryName: "Premium Motorcycle",
        price: 1299000,
        engine: "749cc Inline-4",
        power: "118 HP",
        transmission: "6-Speed",
        image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1000&q=85",
        description:
            "A focused premium sport motorcycle with sharp brakes, balanced chassis control and thrilling acceleration.",
        featured: true
    },

    {
        id: 71,
        name: "Touring E-X",
        category: "bicycle",
        categoryName: "Electric Bicycle",
        price: 219000,
        engine: "750W Motor",
        power: "90 Nm",
        transmission: "10-Speed",
        image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1000&q=85",
        description:
            "A long-range electric touring bicycle with stable geometry, premium comfort and dependable pedal assistance.",
        featured: true
    }

];


/* ==========================================
   LOCAL STORAGE
========================================== */

let cart = JSON.parse(
    localStorage.getItem("velocityCart") || "[]"
);

let wishlist = JSON.parse(
    localStorage.getItem("velocityWishlist") || "[]"
);


/* ==========================================
   DOM HELPERS
========================================== */

const $ = selector =>
    document.querySelector(selector);

const $$ = selector =>
    document.querySelectorAll(selector);


/* ==========================================
   CURRENCY
========================================== */

function formatPrice(price) {

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }
    ).format(price);

}


/* ==========================================
   TOAST
========================================== */

let toastTimer;

function showToast(message) {

    const toast = $("#toast");
    const messageElement = $("#toastMessage");

    if (!toast || !messageElement) return;

    messageElement.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


/* ==========================================
   NAVIGATION
========================================== */

const menuButton = $("#menuButton");
const nav = $("#nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("open");

        menuButton.textContent =
            nav.classList.contains("open")
                ? "×"
                : "☰";

    });


    $$(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menuButton.textContent = "☰";

        });

    });

}


/* ==========================================
   BIKE CARD
========================================== */

function createBikeCard(bike) {

    const isWishlisted =
        wishlist.includes(bike.id);

    return `

        <article class="bike-card">

            <div class="bike-card-image">

                <img
                    src="${bike.image}"
                    alt="${bike.name}"
                    loading="lazy"
                >

                ${
                    bike.featured
                    ? `<span class="bike-badge">FEATURED</span>`
                    : ""
                }

                <button
                    class="wishlist ${
                        isWishlisted ? "active" : ""
                    }"
                    data-wishlist="${bike.id}"
                    aria-label="Add to wishlist"
                >
                    ${isWishlisted ? "♥" : "♡"}
                </button>

            </div>


            <div class="bike-card-content">

                <span class="bike-category">
                    ${bike.categoryName}
                </span>

                <h3>${bike.name}</h3>

                <p class="bike-description">
                    ${bike.description}
                </p>


                <div class="bike-specs">

                    <span>${bike.engine}</span>

                    <span>${bike.power}</span>

                    <span>${bike.transmission}</span>

                </div>


                <div class="bike-card-bottom">

                    <strong class="bike-price">
                        ${formatPrice(bike.price)}
                    </strong>

                    <div class="card-buttons">

                        <button
                            class="card-btn"
                            data-view="${bike.id}"
                        >
                            Details
                        </button>

                        <button
                            class="card-btn primary"
                            data-cart="${bike.id}"
                        >
                            Add
                        </button>

                    </div>

                </div>

            </div>

        </article>
    `;
}


/* ==========================================
   RENDER FEATURED BIKES
========================================== */

function renderFeaturedBikes() {

    const container = $("#featuredBikes");

    if (!container) return;

    const featured =
        bikes.filter(bike => bike.featured);

    container.innerHTML =
        featured
            .map(createBikeCard)
            .join("");

    attachBikeEvents();

}


/* ==========================================
   RENDER ALL BIKES
========================================== */

function renderAllBikes(list = bikes) {

    const container = $("#allBikes");

    if (!container) return;

    const count = $("#bikeCount");
    const noResults = $("#noResults");

    if (count) {
        count.textContent = list.length;
    }

    if (list.length === 0) {

        container.innerHTML = "";

        if (noResults) {
            noResults.style.display = "block";
        }

        return;

    }

    if (noResults) {
        noResults.style.display = "none";
    }

    container.innerHTML =
        list.map(createBikeCard).join("");

    attachBikeEvents();

}


/* ==========================================
   BIKE EVENTS
========================================== */

function attachBikeEvents() {

    $$("[data-cart]").forEach(button => {

        button.addEventListener("click", () => {

            const id =
                Number(button.dataset.cart);

            addToCart(id);

        });

    });


    $$("[data-view]").forEach(button => {

        button.addEventListener("click", () => {

            const id =
                Number(button.dataset.view);

            openBikeModal(id);

        });

    });


    $$("[data-wishlist]").forEach(button => {

        button.addEventListener("click", () => {

            const id =
                Number(button.dataset.wishlist);

            toggleWishlist(id);

        });

    });

}


/* ==========================================
   WISHLIST
========================================== */

function toggleWishlist(id) {

    if (wishlist.includes(id)) {

        wishlist =
            wishlist.filter(item => item !== id);

        showToast("Removed from wishlist");

    } else {

        wishlist.push(id);

        showToast("Added to wishlist ♥");

    }

    localStorage.setItem(
        "velocityWishlist",
        JSON.stringify(wishlist)
    );

    renderFeaturedBikes();
    renderAllBikes(
        window.currentBikeList || bikes
    );

}


/* ==========================================
   CART
========================================== */

function addToCart(id) {

    const existing =
        cart.find(item => item.id === id);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: id,
            quantity: 1
        });

    }

    saveCart();

    updateCartUI();

    showToast("Bike added to your cart");

}


function removeFromCart(id) {

    cart =
        cart.filter(item => item.id !== id);

    saveCart();

    updateCartUI();

    showToast("Bike removed from cart");

}


function changeQuantity(id, amount) {

    const item =
        cart.find(item => item.id === id);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        removeFromCart(id);

        return;

    }

    saveCart();

    updateCartUI();

}


function saveCart() {

    localStorage.setItem(
        "velocityCart",
        JSON.stringify(cart)
    );

}


/* ==========================================
   CART UI
========================================== */

function updateCartUI() {

    const count = $("#cartCount");
    const itemsContainer = $("#cartItems");
    const totalElement = $("#cartTotal");

    const totalQuantity =
        cart.reduce(
            (sum, item) => sum + item.quantity,
            0
        );

    if (count) {
        count.textContent = totalQuantity;
    }

    if (!itemsContainer) return;


    if (cart.length === 0) {

        itemsContainer.innerHTML = `

            <div class="empty-cart">

                <div>🛒</div>

                <h3>Your cart is empty</h3>

                <p>
                    Add a motorcycle to get started.
                </p>

            </div>

        `;

        if (totalElement) {
            totalElement.textContent =
                formatPrice(0);
        }

        return;

    }


    let total = 0;


    itemsContainer.innerHTML =
        cart.map(item => {

            const bike =
                bikes.find(b => b.id === item.id);

            if (!bike) return "";

            total +=
                bike.price * item.quantity;


            return `

                <div class="cart-item">

                    <img
                        src="${bike.image}"
                        alt="${bike.name}"
                    >

                    <div>

                        <h4>${bike.name}</h4>

                        <p>
                            ${formatPrice(bike.price)}
                        </p>

                        <div class="cart-item-controls">

                            <button
                                class="qty-btn"
                                data-minus="${bike.id}"
                            >
                                −
                            </button>

                            <strong>
                                ${item.quantity}
                            </strong>

                            <button
                                class="qty-btn"
                                data-plus="${bike.id}"
                            >
                                +
                            </button>

                            <button
                                class="remove-item"
                                data-remove="${bike.id}"
                            >
                                Remove
                            </button>

                        </div>

                    </div>

                </div>

            `;

        }).join("");


    if (totalElement) {

        totalElement.textContent =
            formatPrice(total);

    }


    $$("[data-minus]").forEach(button => {

        button.addEventListener("click", () => {

            changeQuantity(
                Number(button.dataset.minus),
                -1
            );

        });

    });


    $$("[data-plus]").forEach(button => {

        button.addEventListener("click", () => {

            changeQuantity(
                Number(button.dataset.plus),
                1
            );

        });

    });


    $$("[data-remove]").forEach(button => {

        button.addEventListener("click", () => {

            removeFromCart(
                Number(button.dataset.remove)
            );

        });

    });

}


/* ==========================================
   CART DRAWER
========================================== */

const cartDrawer = $("#cartDrawer");
const cartOverlay = $("#cartOverlay");
const cartButton = $("#cartButton");
const closeCart = $("#closeCart");

function openCart() {

    if (!cartDrawer) return;

    cartDrawer.classList.add("open");
    cartOverlay.classList.add("open");

    document.body.classList.add("no-scroll");

}


function closeCartDrawer() {

    if (!cartDrawer) return;

    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("open");

    document.body.classList.remove("no-scroll");

}


if (cartButton) {

    cartButton.addEventListener(
        "click",
        openCart
    );

}


if (closeCart) {

    closeCart.addEventListener(
        "click",
        closeCartDrawer
    );

}


if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        closeCartDrawer
    );

}


/* ==========================================
   BIKE DETAILS MODAL
========================================== */

function openBikeModal(id) {

    const bike =
        bikes.find(item => item.id === id);

    if (!bike) return;

    const modal = $("#bikeModal");
    const content = $("#bikeModalContent");

    if (!modal || !content) return;


    content.innerHTML = `

        <div class="modal-bike">

            <div>

                <img
                    src="${bike.image}"
                    alt="${bike.name}"
                >

            </div>


            <div>

                <span class="eyebrow">
                    ${bike.categoryName}
                </span>

                <h2>${bike.name}</h2>

                <p>
                    ${bike.description}
                </p>

                <div class="bike-specs">

                    <span>${bike.engine}</span>
                    <span>${bike.power}</span>
                    <span>${bike.transmission}</span>

                </div>

                <div class="price">
                    ${formatPrice(bike.price)}
                </div>

                <button
                    class="btn btn-primary full-width"
                    id="modalAddCart"
                >
                    Add To Cart
                </button>

            </div>

        </div>

    `;


    modal.classList.add("open");

    document.body.classList.add("no-scroll");


    $("#modalAddCart").addEventListener(
        "click",
        () => {

            addToCart(id);

            closeBikeModal();

        }
    );

}


function closeBikeModal() {

    const modal = $("#bikeModal");

    if (!modal) return;

    modal.classList.remove("open");

    document.body.classList.remove("no-scroll");

}


const closeBikeModalButton =
    $("#closeBikeModal");

if (closeBikeModalButton) {

    closeBikeModalButton.addEventListener(
        "click",
        closeBikeModal
    );

}


/* ==========================================
   CHECKOUT
========================================== */

const checkoutButton =
    $("#checkoutButton");

const checkoutModal =
    $("#checkoutModal");

if (checkoutButton) {

    checkoutButton.addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                showToast(
                    "Your cart is empty"
                );

                return;

            }

            checkoutModal.classList.add("open");

        }
    );

}


const closeCheckout =
    $("#closeCheckout");

if (closeCheckout) {

    closeCheckout.addEventListener(
        "click",
        () => {

            checkoutModal.classList.remove("open");

        }
    );

}


const checkoutForm =
    $("#checkoutForm");

if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const name =
                $("#checkoutName").value.trim();

            if (!name) return;

            cart = [];

            saveCart();

            updateCartUI();

            checkoutModal.classList.remove("open");

            closeCartDrawer();

            checkoutForm.reset();

            showToast(
                `Thank you ${name}! Your order has been received.`
            );

        }
    );

}


/* ==========================================
   CONTACT FORM
========================================== */

const contactForm =
    $("#contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const name =
                $("#contactName").value.trim();

            showToast(
                `Thanks ${name}! We'll contact you soon.`
            );

            contactForm.reset();

        }
    );

}


/* ==========================================
   NEWSLETTER
========================================== */

const newsletterForm =
    $("#newsletterForm");

if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const email =
                $("#newsletterEmail").value.trim();

            if (!email) return;

            newsletterForm.reset();

            showToast(
                "You're subscribed successfully!"
            );

        }
    );

}


/* ==========================================
   CATALOG SEARCH + FILTER
========================================== */

const searchInput =
    $("#bikeSearch");

const categoryFilter =
    $("#categoryFilter");

const priceSort =
    $("#priceSort");


function filterBikes() {

    let result = [...bikes];

    const search =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";

    const category =
        categoryFilter
            ? categoryFilter.value
            : "all";


    if (search) {

        result = result.filter(bike =>

            bike.name
                .toLowerCase()
                .includes(search)

            ||

            bike.categoryName
                .toLowerCase()
                .includes(search)

        );

    }


    if (category !== "all") {

        result =
            result.filter(
                bike =>
                    bike.category === category
            );

    }


    const sort =
        priceSort
            ? priceSort.value
            : "default";


    if (sort === "low") {

        result.sort(
            (a, b) =>
                a.price - b.price
        );

    }


    if (sort === "high") {

        result.sort(
            (a, b) =>
                b.price - a.price
        );

    }


    if (sort === "name") {

        result.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    window.currentBikeList = result;

    renderAllBikes(result);

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterBikes
    );

}


if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        filterBikes
    );

}


if (priceSort) {

    priceSort.addEventListener(
        "change",
        filterBikes
    );

}


/* ==========================================
   BACK TO TOP
========================================== */

const backTop =
    $("#backTop");

window.addEventListener(
    "scroll",
    () => {

        if (!backTop) return;

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    }
);


if (backTop) {

    backTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* ==========================================
   CLOSE MODALS WITH ESC
========================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") return;

        closeCartDrawer();
        closeBikeModal();

        if (checkoutModal) {
            checkoutModal.classList.remove("open");
        }

    }
);


/* ==========================================
   CLOSE MODALS WHEN CLICKING BACKDROP
========================================== */

if ($("#bikeModal")) {

    $("#bikeModal").addEventListener(
        "click",
        event => {

            if (
                event.target === $("#bikeModal")
            ) {

                closeBikeModal();

            }

        }
    );

}


if ($("#checkoutModal")) {

    $("#checkoutModal").addEventListener(
        "click",
        event => {

            if (
                event.target === $("#checkoutModal")
            ) {

                $("#checkoutModal")
                    .classList
                    .remove("open");

            }

        }
    );

}


/* ==========================================
   INITIALIZE
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateCartUI();

        if ($("#featuredBikes")) {
            renderFeaturedBikes();
        }

        if ($("#allBikes")) {
            renderAllBikes();
        }

    }
);


/* ==========================================
   CATALOG 3D BACKGROUND
========================================== */

const catalogCanvas =
    document.querySelector("#catalogParticleCanvas");

if (catalogCanvas) {

    const catalogContext =
        catalogCanvas.getContext("2d");

    const catalogOrbs =
        document.querySelectorAll(".catalog-orb");

    const catalogMouse = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        targetX: window.innerWidth / 2,
        targetY: window.innerHeight / 2
    };

    let catalogParticles = [];
    let catalogWidth = 0;
    let catalogHeight = 0;

    function resizeCatalogCanvas() {

        catalogWidth = window.innerWidth;
        catalogHeight = window.innerHeight;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        catalogCanvas.width = catalogWidth * dpr;
        catalogCanvas.height = catalogHeight * dpr;
        catalogCanvas.style.width = `${catalogWidth}px`;
        catalogCanvas.style.height = `${catalogHeight}px`;
        catalogContext.setTransform(dpr, 0, 0, dpr, 0, 0);

        catalogParticles = Array.from(
            { length: catalogWidth < 600 ? 35 : catalogWidth < 1000 ? 60 : 100 },
            () => ({
                x: Math.random() * catalogWidth,
                y: Math.random() * catalogHeight,
                size: Math.random() * 2.5 + .5,
                speedX: (Math.random() - .5) * .25,
                speedY: (Math.random() - .5) * .25,
                depth: Math.random(),
                opacity: Math.random() * .5 + .2
            })
        );
    }

    function animateCatalogBackground() {

        catalogMouse.x += (catalogMouse.targetX - catalogMouse.x) * .08;
        catalogMouse.y += (catalogMouse.targetY - catalogMouse.y) * .08;

        document.documentElement.style.setProperty("--catalog-mouse-x", `${catalogMouse.x}px`);
        document.documentElement.style.setProperty("--catalog-mouse-y", `${catalogMouse.y}px`);

        catalogContext.clearRect(0, 0, catalogWidth, catalogHeight);

        catalogParticles.forEach(particle => {

            const dx = catalogMouse.x - particle.x;
            const dy = catalogMouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 180) {
                const force = (180 - distance) / 180;
                particle.x -= (dx / distance || 0) * force * 1.8 * particle.depth;
                particle.y -= (dy / distance || 0) * force * 1.8 * particle.depth;
            }

            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x < -20) particle.x = catalogWidth + 20;
            if (particle.x > catalogWidth + 20) particle.x = -20;
            if (particle.y < -20) particle.y = catalogHeight + 20;
            if (particle.y > catalogHeight + 20) particle.y = -20;

            catalogContext.beginPath();
            catalogContext.arc(particle.x, particle.y, particle.size * (.6 + particle.depth * 1.4), 0, Math.PI * 2);
            catalogContext.fillStyle = `rgba(100, 210, 255, ${particle.opacity})`;
            catalogContext.fill();
        });

        catalogOrbs.forEach((orb, index) => {
            const depth = (index + 1) * 8;
            orb.style.transform = `translate3d(${((catalogMouse.x - catalogWidth / 2) / (catalogWidth / 2)) * depth}px, ${((catalogMouse.y - catalogHeight / 2) / (catalogHeight / 2)) * depth}px, 0)`;
        });

        requestAnimationFrame(animateCatalogBackground);
    }

    window.addEventListener("mousemove", event => {
        catalogMouse.targetX = event.clientX;
        catalogMouse.targetY = event.clientY;
    }, { passive: true });

    window.addEventListener("resize", resizeCatalogCanvas);
    resizeCatalogCanvas();
    animateCatalogBackground();
}
