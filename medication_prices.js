const medication_prices = [
    {
      "Medication": "etodolac",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$19.49"
    },
    {
      "Medication": "etodolac",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$19.49"
    },
    {
      "Medication": "etodolac",
      "Pharmacy": "safeway",
      "Price": "$19.49"
    },
    {
      "Medication": "etodolac",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$19.49"
    },
    {
      "Medication": "etodolac",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$19.49"
    },
    {
      "Medication": "etodolac",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$19.49"
    },
    {
      "Medication": "etodolac",
      "Pharmacy": "SHOPRITE",
      "Price": "$23.53"
    },
    {
      "Medication": "etodolac",
      "Pharmacy": "rite aid",
      "Price": "$24.04"
    },
    {
      "Medication": "etodolac",
      "Pharmacy": "DUANE READE",
      "Price": "$30.78"
    },
    {
      "Medication": "etodolac",
      "Pharmacy": "walgreens",
      "Price": "$30.78"
    },
    {
      "Medication": "etodolac",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$30.78"
    },
    {
      "Medication": "etodolac",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$30.78"
    },
    {
      "Medication": "etodolac",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$30.78"
    },
    {
      "Medication": "etodolac",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$31.55"
    },
    {
      "Medication": "etodolac",
      "Pharmacy": "stop & shop",
      "Price": "$31.73"
    },
    {
      "Medication": "etodolac",
      "Pharmacy": "cvs",
      "Price": "$33.44"
    },
    {
      "Medication": "etodolac",
      "Pharmacy": "target (cvs)",
      "Price": "$33.44"
    },
    {
      "Medication": "etodolac",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$33.44"
    },
    {
      "Medication": "etodolac",
      "Pharmacy": "KMART",
      "Price": "$43.04"
    },
    {
      "Medication": "etodolac",
      "Pharmacy": "MELROSE PHARMACY",
      "Price": "$43.04"
    },
    {
      "Medication": "ibuprofen",
      "Pharmacy": "SHOPRITE",
      "Price": "$8.67"
    },
    {
      "Medication": "ibuprofen",
      "Pharmacy": "cvs",
      "Price": "$9.02"
    },
    {
      "Medication": "ibuprofen",
      "Pharmacy": "target (cvs)",
      "Price": "$9.02"
    },
    {
      "Medication": "ibuprofen",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$9.02"
    },
    {
      "Medication": "ibuprofen",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$10.69"
    },
    {
      "Medication": "ibuprofen",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$10.69"
    },
    {
      "Medication": "ibuprofen",
      "Pharmacy": "safeway",
      "Price": "$10.69"
    },
    {
      "Medication": "ibuprofen",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$10.69"
    },
    {
      "Medication": "ibuprofen",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$10.69"
    },
    {
      "Medication": "ibuprofen",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$10.69"
    },
    {
      "Medication": "ibuprofen",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$11.13"
    },
    {
      "Medication": "ibuprofen",
      "Pharmacy": "stop & shop",
      "Price": "$12.65"
    },
    {
      "Medication": "ibuprofen",
      "Pharmacy": "rite aid",
      "Price": "$15.10"
    },
    {
      "Medication": "ibuprofen",
      "Pharmacy": "DUANE READE",
      "Price": "$15.65"
    },
    {
      "Medication": "ibuprofen",
      "Pharmacy": "walgreens",
      "Price": "$15.65"
    },
    {
      "Medication": "ibuprofen",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$15.65"
    },
    {
      "Medication": "ibuprofen",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$15.65"
    },
    {
      "Medication": "ibuprofen",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$15.65"
    },
    {
      "Medication": "ibuprofen",
      "Pharmacy": "Walmart",
      "Price": "$16.39"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "KMART",
      "Price": "$6.83"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$6.83"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$6.83"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "stop & shop",
      "Price": "$6.83"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "safeway",
      "Price": "$6.83"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$6.83"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "MELROSE PHARMACY",
      "Price": "$6.83"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$6.83"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$6.83"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "SHOPRITE",
      "Price": "$8.92"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "cvs",
      "Price": "$9.21"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "target (cvs)",
      "Price": "$9.21"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$9.21"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "DUANE READE",
      "Price": "$9.57"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "walgreens",
      "Price": "$9.57"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$9.57"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$9.57"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$9.57"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "Walmart",
      "Price": "$11.49"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "rite aid",
      "Price": "$14.69"
    },
    {
      "Medication": "naproxen",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$15.41"
    },
    {
      "Medication": "ketoprofen",
      "Pharmacy": "rite aid",
      "Price": "$19.86"
    },
    {
      "Medication": "ketoprofen",
      "Pharmacy": "DUANE READE",
      "Price": "$20.92"
    },
    {
      "Medication": "ketoprofen",
      "Pharmacy": "walgreens",
      "Price": "$20.92"
    },
    {
      "Medication": "ketoprofen",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$20.92"
    },
    {
      "Medication": "ketoprofen",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$20.92"
    },
    {
      "Medication": "ketoprofen",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$20.92"
    },
    {
      "Medication": "ketoprofen",
      "Pharmacy": "cvs",
      "Price": "$36.46"
    },
    {
      "Medication": "ketoprofen",
      "Pharmacy": "target (cvs)",
      "Price": "$36.46"
    },
    {
      "Medication": "ketoprofen",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$36.46"
    },
    {
      "Medication": "ketoprofen",
      "Pharmacy": "Walmart",
      "Price": "$48.11"
    },
    {
      "Medication": "ketoprofen",
      "Pharmacy": "SHOPRITE",
      "Price": "$635.47"
    },
    {
      "Medication": "ketoprofen",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$646.56"
    },
    {
      "Medication": "ketoprofen",
      "Pharmacy": "stop & shop",
      "Price": "$654.59"
    },
    {
      "Medication": "ketoprofen",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$677.79"
    },
    {
      "Medication": "ketoprofen",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$677.79"
    },
    {
      "Medication": "ketoprofen",
      "Pharmacy": "safeway",
      "Price": "$677.79"
    },
    {
      "Medication": "ketoprofen",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$677.79"
    },
    {
      "Medication": "ketoprofen",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$677.79"
    },
    {
      "Medication": "ketoprofen",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$677.79"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "rite aid",
      "Price": "$21.25"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "KMART",
      "Price": "$21.81"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "SHOPRITE",
      "Price": "$21.81"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$21.81"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$21.81"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$21.81"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "stop & shop",
      "Price": "$21.81"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "safeway",
      "Price": "$21.81"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$21.81"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "MELROSE PHARMACY",
      "Price": "$21.81"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$21.81"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$21.81"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "DUANE READE",
      "Price": "$27.05"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "walgreens",
      "Price": "$27.05"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$27.05"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$27.05"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$27.05"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "cvs",
      "Price": "$27.36"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "target (cvs)",
      "Price": "$27.36"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$27.36"
    },
    {
      "Medication": "flurbiprofen",
      "Pharmacy": "Walmart",
      "Price": "$39.44"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$37.27"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$37.27"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "safeway",
      "Price": "$37.27"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$37.27"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$37.27"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$37.27"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "stop & shop",
      "Price": "$38.98"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "cvs",
      "Price": "$40.58"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "target (cvs)",
      "Price": "$40.58"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$40.58"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "SHOPRITE",
      "Price": "$41.14"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "rite aid",
      "Price": "$42.66"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$45.97"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "Walmart",
      "Price": "$47.17"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "KMART",
      "Price": "$62.01"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "MELROSE PHARMACY",
      "Price": "$62.01"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "DUANE READE",
      "Price": "$64.56"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "walgreens",
      "Price": "$64.56"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$64.56"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$64.56"
    },
    {
      "Medication": "oxaprozin",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$64.56"
    },
    {
      "Medication": "misoprostol",
      "Pharmacy": "DUANE READE",
      "Price": "$4.78"
    },
    {
      "Medication": "misoprostol",
      "Pharmacy": "walgreens",
      "Price": "$4.78"
    },
    {
      "Medication": "misoprostol",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$4.78"
    },
    {
      "Medication": "misoprostol",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$4.78"
    },
    {
      "Medication": "misoprostol",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$4.78"
    },
    {
      "Medication": "misoprostol",
      "Pharmacy": "cvs",
      "Price": "$7.95"
    },
    {
      "Medication": "misoprostol",
      "Pharmacy": "target (cvs)",
      "Price": "$7.95"
    },
    {
      "Medication": "misoprostol",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$7.95"
    },
    {
      "Medication": "misoprostol",
      "Pharmacy": "SHOPRITE",
      "Price": "$8.04"
    },
    {
      "Medication": "misoprostol",
      "Pharmacy": "stop & shop",
      "Price": "$9.72"
    },
    {
      "Medication": "misoprostol",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$9.92"
    },
    {
      "Medication": "misoprostol",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$9.92"
    },
    {
      "Medication": "misoprostol",
      "Pharmacy": "safeway",
      "Price": "$9.92"
    },
    {
      "Medication": "misoprostol",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$9.92"
    },
    {
      "Medication": "misoprostol",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$9.92"
    },
    {
      "Medication": "misoprostol",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$9.92"
    },
    {
      "Medication": "misoprostol",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$10.12"
    },
    {
      "Medication": "misoprostol",
      "Pharmacy": "rite aid",
      "Price": "$10.21"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "SHOPRITE",
      "Price": "$6.50"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$9.73"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$9.73"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "safeway",
      "Price": "$9.73"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$9.73"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$9.73"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$9.73"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "stop & shop",
      "Price": "$10.06"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$10.08"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "Walmart",
      "Price": "$14.15"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "rite aid",
      "Price": "$15.32"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "DUANE READE",
      "Price": "$18.75"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "walgreens",
      "Price": "$18.75"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$18.75"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$18.75"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$18.75"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "KMART",
      "Price": "$22.75"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "MELROSE PHARMACY",
      "Price": "$22.75"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "cvs",
      "Price": "$26.63"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "target (cvs)",
      "Price": "$26.63"
    },
    {
      "Medication": "Meloxicam",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$26.63"
    },
    {
      "Medication": "Celecoxib",
      "Pharmacy": "SHOPRITE",
      "Price": "$11.54"
    },
    {
      "Medication": "Celecoxib",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$12.16"
    },
    {
      "Medication": "Celecoxib",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$14.86"
    },
    {
      "Medication": "Celecoxib",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$14.86"
    },
    {
      "Medication": "Celecoxib",
      "Pharmacy": "safeway",
      "Price": "$14.86"
    },
    {
      "Medication": "Celecoxib",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$14.86"
    },
    {
      "Medication": "Celecoxib",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$14.86"
    },
    {
      "Medication": "Celecoxib",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$14.86"
    },
    {
      "Medication": "Celecoxib",
      "Pharmacy": "stop & shop",
      "Price": "$16.10"
    },
    {
      "Medication": "Celecoxib",
      "Pharmacy": "rite aid",
      "Price": "$16.87"
    },
    {
      "Medication": "Celecoxib",
      "Pharmacy": "DUANE READE",
      "Price": "$21.30"
    },
    {
      "Medication": "Celecoxib",
      "Pharmacy": "walgreens",
      "Price": "$21.30"
    },
    {
      "Medication": "Celecoxib",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$21.30"
    },
    {
      "Medication": "Celecoxib",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$21.30"
    },
    {
      "Medication": "Celecoxib",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$21.30"
    },
    {
      "Medication": "Celecoxib",
      "Pharmacy": "cvs",
      "Price": "$27.71"
    },
    {
      "Medication": "Celecoxib",
      "Pharmacy": "target (cvs)",
      "Price": "$27.71"
    },
    {
      "Medication": "Celecoxib",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$27.71"
    },
    {
      "Medication": "Celecoxib",
      "Pharmacy": "KMART",
      "Price": "$33.27"
    },
    {
      "Medication": "Celecoxib",
      "Pharmacy": "MELROSE PHARMACY",
      "Price": "$33.27"
    },
    {
      "Medication": "Salsalate",
      "Pharmacy": "SHOPRITE",
      "Price": "$22.82"
    },
    {
      "Medication": "Salsalate",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$26.34"
    },
    {
      "Medication": "Salsalate",
      "Pharmacy": "stop & shop",
      "Price": "$27.17"
    },
    {
      "Medication": "Salsalate",
      "Pharmacy": "rite aid",
      "Price": "$28.66"
    },
    {
      "Medication": "Salsalate",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$28.75"
    },
    {
      "Medication": "Salsalate",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$28.75"
    },
    {
      "Medication": "Salsalate",
      "Pharmacy": "safeway",
      "Price": "$28.75"
    },
    {
      "Medication": "Salsalate",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$28.75"
    },
    {
      "Medication": "Salsalate",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$28.75"
    },
    {
      "Medication": "Salsalate",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$28.75"
    },
    {
      "Medication": "Salsalate",
      "Pharmacy": "cvs",
      "Price": "$33.44"
    },
    {
      "Medication": "Salsalate",
      "Pharmacy": "target (cvs)",
      "Price": "$33.44"
    },
    {
      "Medication": "Salsalate",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$33.44"
    },
    {
      "Medication": "Salsalate",
      "Pharmacy": "DUANE READE",
      "Price": "$34.28"
    },
    {
      "Medication": "Salsalate",
      "Pharmacy": "walgreens",
      "Price": "$34.28"
    },
    {
      "Medication": "Salsalate",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$34.28"
    },
    {
      "Medication": "Salsalate",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$34.28"
    },
    {
      "Medication": "Salsalate",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$34.28"
    },
    {
      "Medication": "Salsalate",
      "Pharmacy": "Walmart",
      "Price": "$91.07"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "cvs",
      "Price": "$4.79"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "target (cvs)",
      "Price": "$4.79"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "KMART",
      "Price": "$4.79"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$4.79"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$4.79"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$4.79"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$4.79"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "stop & shop",
      "Price": "$4.79"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "safeway",
      "Price": "$4.79"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$4.79"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "MELROSE PHARMACY",
      "Price": "$4.79"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$4.79"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$4.79"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "DUANE READE",
      "Price": "$7.33"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "walgreens",
      "Price": "$7.33"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$7.33"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$7.33"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$7.33"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "SHOPRITE",
      "Price": "$7.61"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "rite aid",
      "Price": "$10.83"
    },
    {
      "Medication": "Diazepam",
      "Pharmacy": "Walmart",
      "Price": "$17.12"
    },
    {
      "Medication": "Oxazepam",
      "Pharmacy": "cvs",
      "Price": "$11.22"
    },
    {
      "Medication": "Oxazepam",
      "Pharmacy": "target (cvs)",
      "Price": "$11.22"
    },
    {
      "Medication": "Oxazepam",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$11.22"
    },
    {
      "Medication": "Oxazepam",
      "Pharmacy": "DUANE READE",
      "Price": "$14.25"
    },
    {
      "Medication": "Oxazepam",
      "Pharmacy": "walgreens",
      "Price": "$14.25"
    },
    {
      "Medication": "Oxazepam",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$14.25"
    },
    {
      "Medication": "Oxazepam",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$14.25"
    },
    {
      "Medication": "Oxazepam",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$14.25"
    },
    {
      "Medication": "Oxazepam",
      "Pharmacy": "rite aid",
      "Price": "$16.07"
    },
    {
      "Medication": "Oxazepam",
      "Pharmacy": "KMART",
      "Price": "$27.65"
    },
    {
      "Medication": "Oxazepam",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$27.65"
    },
    {
      "Medication": "Oxazepam",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$27.65"
    },
    {
      "Medication": "Oxazepam",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$27.65"
    },
    {
      "Medication": "Oxazepam",
      "Pharmacy": "stop & shop",
      "Price": "$27.65"
    },
    {
      "Medication": "Oxazepam",
      "Pharmacy": "safeway",
      "Price": "$27.65"
    },
    {
      "Medication": "Oxazepam",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$27.65"
    },
    {
      "Medication": "Oxazepam",
      "Pharmacy": "MELROSE PHARMACY",
      "Price": "$27.65"
    },
    {
      "Medication": "Oxazepam",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$27.65"
    },
    {
      "Medication": "Oxazepam",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$27.65"
    },
    {
      "Medication": "Oxazepam",
      "Pharmacy": "SHOPRITE",
      "Price": "$34.34"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "KMART",
      "Price": "$6.57"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$6.57"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$6.57"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$6.57"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "stop & shop",
      "Price": "$6.57"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "safeway",
      "Price": "$6.57"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$6.57"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "MELROSE PHARMACY",
      "Price": "$6.57"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$6.57"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$6.57"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "cvs",
      "Price": "$8.32"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "target (cvs)",
      "Price": "$8.32"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$8.32"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "SHOPRITE",
      "Price": "$9.15"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "Walmart",
      "Price": "$11.88"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "DUANE READE",
      "Price": "$12.24"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "walgreens",
      "Price": "$12.24"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$12.24"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$12.24"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$12.24"
    },
    {
      "Medication": "Lorazepam",
      "Pharmacy": "rite aid",
      "Price": "$15.60"
    },
    {
      "Medication": "Clobazam",
      "Pharmacy": "cvs",
      "Price": "$29.29"
    },
    {
      "Medication": "Clobazam",
      "Pharmacy": "target (cvs)",
      "Price": "$29.29"
    },
    {
      "Medication": "Clobazam",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$29.29"
    },
    {
      "Medication": "Clobazam",
      "Pharmacy": "SHOPRITE",
      "Price": "$30.36"
    },
    {
      "Medication": "Clobazam",
      "Pharmacy": "rite aid",
      "Price": "$30.42"
    },
    {
      "Medication": "Clobazam",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$39.35"
    },
    {
      "Medication": "Clobazam",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$55.12"
    },
    {
      "Medication": "Clobazam",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$55.12"
    },
    {
      "Medication": "Clobazam",
      "Pharmacy": "safeway",
      "Price": "$55.12"
    },
    {
      "Medication": "Clobazam",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$55.12"
    },
    {
      "Medication": "Clobazam",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$55.12"
    },
    {
      "Medication": "Clobazam",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$55.12"
    },
    {
      "Medication": "Clobazam",
      "Pharmacy": "stop & shop",
      "Price": "$72.75"
    },
    {
      "Medication": "Clobazam",
      "Pharmacy": "KMART",
      "Price": "$163.83"
    },
    {
      "Medication": "Clobazam",
      "Pharmacy": "MELROSE PHARMACY",
      "Price": "$163.83"
    },
    {
      "Medication": "Clobazam",
      "Pharmacy": "walgreens",
      "Price": "$299.20"
    },
    {
      "Medication": "Clobazam",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$299.20"
    },
    {
      "Medication": "Clobazam",
      "Pharmacy": "DUANE READE",
      "Price": "$311.61"
    },
    {
      "Medication": "Clobazam",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$311.61"
    },
    {
      "Medication": "Clobazam",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$311.61"
    },
    {
      "Medication": "Alprazolam",
      "Pharmacy": "KMART",
      "Price": "$5.28"
    },
    {
      "Medication": "Alprazolam",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$5.28"
    },
    {
      "Medication": "Alprazolam",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$5.28"
    },
    {
      "Medication": "Alprazolam",
      "Pharmacy": "stop & shop",
      "Price": "$5.28"
    },
    {
      "Medication": "Alprazolam",
      "Pharmacy": "safeway",
      "Price": "$5.28"
    },
    {
      "Medication": "Alprazolam",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$5.28"
    },
    {
      "Medication": "Alprazolam",
      "Pharmacy": "MELROSE PHARMACY",
      "Price": "$5.28"
    },
    {
      "Medication": "Alprazolam",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$5.28"
    },
    {
      "Medication": "Alprazolam",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$5.28"
    },
    {
      "Medication": "Alprazolam",
      "Pharmacy": "SHOPRITE",
      "Price": "$9.26"
    },
    {
      "Medication": "Alprazolam",
      "Pharmacy": "DUANE READE",
      "Price": "$10.79"
    },
    {
      "Medication": "Alprazolam",
      "Pharmacy": "walgreens",
      "Price": "$10.79"
    },
    {
      "Medication": "Alprazolam",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$10.79"
    },
    {
      "Medication": "Alprazolam",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$10.79"
    },
    {
      "Medication": "Alprazolam",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$10.79"
    },
    {
      "Medication": "Alprazolam",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$11.40"
    },
    {
      "Medication": "Alprazolam",
      "Pharmacy": "cvs",
      "Price": "$12.90"
    },
    {
      "Medication": "Alprazolam",
      "Pharmacy": "target (cvs)",
      "Price": "$12.90"
    },
    {
      "Medication": "Alprazolam",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$12.90"
    },
    {
      "Medication": "Alprazolam",
      "Pharmacy": "rite aid",
      "Price": "$15.72"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "rite aid",
      "Price": "$150.57"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "DUANE READE",
      "Price": "$197.84"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "walgreens",
      "Price": "$197.84"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$197.84"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$197.84"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$197.84"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "cvs",
      "Price": "$215.65"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "target (cvs)",
      "Price": "$215.65"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$215.65"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "KMART",
      "Price": "$399.29"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "SHOPRITE",
      "Price": "$399.29"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$399.29"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$399.29"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$399.29"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "stop & shop",
      "Price": "$399.29"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "safeway",
      "Price": "$399.29"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$399.29"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "MELROSE PHARMACY",
      "Price": "$399.29"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$399.29"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$399.29"
    },
    {
      "Medication": "Meprobamate",
      "Pharmacy": "Walmart",
      "Price": "$470.21"
    },
    {
      "Medication": "Clonazepam",
      "Pharmacy": "SHOPRITE",
      "Price": "$6.50"
    },
    {
      "Medication": "Clonazepam",
      "Pharmacy": "WEGMANS FOOD MARKETS, INC.",
      "Price": "$8.10"
    },
    {
      "Medication": "Clonazepam",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$9.06"
    },
    {
      "Medication": "Clonazepam",
      "Pharmacy": "stop & shop",
      "Price": "$9.85"
    },
    {
      "Medication": "Clonazepam",
      "Pharmacy": "walgreens",
      "Price": "$10.74"
    },
    {
      "Medication": "Clonazepam",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$10.74"
    },
    {
      "Medication": "Clonazepam",
      "Pharmacy": "DUANE READE",
      "Price": "$10.74"
    },
    {
      "Medication": "Clonazepam",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$10.74"
    },
    {
      "Medication": "Clonazepam",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$10.74"
    },
    {
      "Medication": "Clonazepam",
      "Pharmacy": "cvs",
      "Price": "$11.53"
    },
    {
      "Medication": "Clonazepam",
      "Pharmacy": "target (cvs)",
      "Price": "$11.53"
    },
    {
      "Medication": "Clonazepam",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$11.53"
    },
    {
      "Medication": "Clonazepam",
      "Pharmacy": "rite aid",
      "Price": "$13.56"
    },
    {
      "Medication": "Clonazepam",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$25.35"
    },
    {
      "Medication": "Clonazepam",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$25.35"
    },
    {
      "Medication": "Clonazepam",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$25.35"
    },
    {
      "Medication": "Clonazepam",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$25.35"
    },
    {
      "Medication": "Clonazepam",
      "Pharmacy": "safeway",
      "Price": "$25.35"
    },
    {
      "Medication": "Clonazepam",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$25.35"
    },
    {
      "Medication": "Estazolam",
      "Pharmacy": "stop & shop",
      "Price": "$28.51"
    },
    {
      "Medication": "Estazolam",
      "Pharmacy": "cvs",
      "Price": "$30.04"
    },
    {
      "Medication": "Estazolam",
      "Pharmacy": "target (cvs)",
      "Price": "$30.04"
    },
    {
      "Medication": "Estazolam",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$30.04"
    },
    {
      "Medication": "Estazolam",
      "Pharmacy": "rite aid",
      "Price": "$35.44"
    },
    {
      "Medication": "Estazolam",
      "Pharmacy": "SHOPRITE",
      "Price": "$36.48"
    },
    {
      "Medication": "Estazolam",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$37.17"
    },
    {
      "Medication": "Estazolam",
      "Pharmacy": "DUANE READE",
      "Price": "$53.78"
    },
    {
      "Medication": "Estazolam",
      "Pharmacy": "walgreens",
      "Price": "$53.78"
    },
    {
      "Medication": "Estazolam",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$53.78"
    },
    {
      "Medication": "Estazolam",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$53.78"
    },
    {
      "Medication": "Estazolam",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$53.78"
    },
    {
      "Medication": "Estazolam",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$78.74"
    },
    {
      "Medication": "Estazolam",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$78.74"
    },
    {
      "Medication": "Estazolam",
      "Pharmacy": "safeway",
      "Price": "$78.74"
    },
    {
      "Medication": "Estazolam",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$78.74"
    },
    {
      "Medication": "Estazolam",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$78.74"
    },
    {
      "Medication": "Estazolam",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$78.74"
    },
    {
      "Medication": "Triazolam",
      "Pharmacy": "SHOPRITE",
      "Price": "$7.00"
    },
    {
      "Medication": "Triazolam",
      "Pharmacy": "DUANE READE",
      "Price": "$7.86"
    },
    {
      "Medication": "Triazolam",
      "Pharmacy": "walgreens",
      "Price": "$7.86"
    },
    {
      "Medication": "Triazolam",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$7.86"
    },
    {
      "Medication": "Triazolam",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$7.86"
    },
    {
      "Medication": "Triazolam",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$7.86"
    },
    {
      "Medication": "Triazolam",
      "Pharmacy": "Walmart",
      "Price": "$9.23"
    },
    {
      "Medication": "Triazolam",
      "Pharmacy": "cvs",
      "Price": "$9.40"
    },
    {
      "Medication": "Triazolam",
      "Pharmacy": "target (cvs)",
      "Price": "$9.40"
    },
    {
      "Medication": "Triazolam",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$9.40"
    },
    {
      "Medication": "Triazolam",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$10.46"
    },
    {
      "Medication": "Triazolam",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$11.19"
    },
    {
      "Medication": "Triazolam",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$11.19"
    },
    {
      "Medication": "Triazolam",
      "Pharmacy": "safeway",
      "Price": "$11.19"
    },
    {
      "Medication": "Triazolam",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$11.19"
    },
    {
      "Medication": "Triazolam",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$11.19"
    },
    {
      "Medication": "Triazolam",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$11.19"
    },
    {
      "Medication": "Triazolam",
      "Pharmacy": "rite aid",
      "Price": "$11.45"
    },
    {
      "Medication": "Triazolam",
      "Pharmacy": "stop & shop",
      "Price": "$13.43"
    },
    {
      "Medication": "Temazepam",
      "Pharmacy": "SHOPRITE",
      "Price": "$9.82"
    },
    {
      "Medication": "Temazepam",
      "Pharmacy": "cvs",
      "Price": "$11.39"
    },
    {
      "Medication": "Temazepam",
      "Pharmacy": "target (cvs)",
      "Price": "$11.39"
    },
    {
      "Medication": "Temazepam",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$11.39"
    },
    {
      "Medication": "Temazepam",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$11.57"
    },
    {
      "Medication": "Temazepam",
      "Pharmacy": "KMART",
      "Price": "$11.91"
    },
    {
      "Medication": "Temazepam",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$11.91"
    },
    {
      "Medication": "Temazepam",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$11.91"
    },
    {
      "Medication": "Temazepam",
      "Pharmacy": "stop & shop",
      "Price": "$11.91"
    },
    {
      "Medication": "Temazepam",
      "Pharmacy": "safeway",
      "Price": "$11.91"
    },
    {
      "Medication": "Temazepam",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$11.91"
    },
    {
      "Medication": "Temazepam",
      "Pharmacy": "MELROSE PHARMACY",
      "Price": "$11.91"
    },
    {
      "Medication": "Temazepam",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$11.91"
    },
    {
      "Medication": "Temazepam",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$11.91"
    },
    {
      "Medication": "Temazepam",
      "Pharmacy": "DUANE READE",
      "Price": "$12.56"
    },
    {
      "Medication": "Temazepam",
      "Pharmacy": "walgreens",
      "Price": "$12.56"
    },
    {
      "Medication": "Temazepam",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$12.56"
    },
    {
      "Medication": "Temazepam",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$12.56"
    },
    {
      "Medication": "Temazepam",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$12.56"
    },
    {
      "Medication": "Temazepam",
      "Pharmacy": "rite aid",
      "Price": "$13.91"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "rite aid",
      "Price": "$69.70"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "walgreens",
      "Price": "$77.35"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$77.35"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$77.35"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$77.35"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "DUANE READE",
      "Price": "$93.00"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "SHOPRITE",
      "Price": "$205.20"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "cvs",
      "Price": "$209.50"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "target (cvs)",
      "Price": "$209.50"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$209.50"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "stop & shop",
      "Price": "$210.55"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$211.00"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$211.00"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "safeway",
      "Price": "$211.00"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$211.00"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$211.00"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$211.00"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$211.10"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "KMART",
      "Price": "$216.00"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "MELROSE PHARMACY",
      "Price": "$216.00"
    },
    {
      "Medication": "Epinephrine",
      "Pharmacy": "Walmart",
      "Price": "$226.11"
    },
    {
      "Medication": "Flunisolide",
      "Pharmacy": "cvs",
      "Price": "$18.82"
    },
    {
      "Medication": "Flunisolide",
      "Pharmacy": "target (cvs)",
      "Price": "$18.82"
    },
    {
      "Medication": "Flunisolide",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$18.82"
    },
    {
      "Medication": "Flunisolide",
      "Pharmacy": "rite aid",
      "Price": "$23.17"
    },
    {
      "Medication": "Flunisolide",
      "Pharmacy": "DUANE READE",
      "Price": "$26.28"
    },
    {
      "Medication": "Flunisolide",
      "Pharmacy": "walgreens",
      "Price": "$26.28"
    },
    {
      "Medication": "Flunisolide",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$26.28"
    },
    {
      "Medication": "Flunisolide",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$26.28"
    },
    {
      "Medication": "Flunisolide",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$26.28"
    },
    {
      "Medication": "Flunisolide",
      "Pharmacy": "SHOPRITE",
      "Price": "$50.70"
    },
    {
      "Medication": "Flunisolide",
      "Pharmacy": "stop & shop",
      "Price": "$62.00"
    },
    {
      "Medication": "Flunisolide",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$62.46"
    },
    {
      "Medication": "Flunisolide",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$62.46"
    },
    {
      "Medication": "Flunisolide",
      "Pharmacy": "safeway",
      "Price": "$62.46"
    },
    {
      "Medication": "Flunisolide",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$62.46"
    },
    {
      "Medication": "Flunisolide",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$62.46"
    },
    {
      "Medication": "Flunisolide",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$62.46"
    },
    {
      "Medication": "Flunisolide",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$63.25"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "DUANE READE",
      "Price": "$25.00"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "walgreens",
      "Price": "$25.00"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$25.00"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$25.00"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$25.00"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "cvs",
      "Price": "$25.21"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "target (cvs)",
      "Price": "$25.21"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$25.21"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "rite aid",
      "Price": "$30.73"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$37.44"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "SHOPRITE",
      "Price": "$52.82"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "KMART",
      "Price": "$61.13"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$61.13"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$61.13"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "stop & shop",
      "Price": "$61.13"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "safeway",
      "Price": "$61.13"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$61.13"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "MELROSE PHARMACY",
      "Price": "$61.13"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$61.13"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$61.13"
    },
    {
      "Medication": "Theophylline",
      "Pharmacy": "Walmart",
      "Price": "$98.76"
    },
    {
      "Medication": "Zafirlukast",
      "Pharmacy": "cvs",
      "Price": "$39.44"
    },
    {
      "Medication": "Zafirlukast",
      "Pharmacy": "target (cvs)",
      "Price": "$39.44"
    },
    {
      "Medication": "Zafirlukast",
      "Pharmacy": "CARE PLUS CVS/PHARMACY",
      "Price": "$39.44"
    },
    {
      "Medication": "Zafirlukast",
      "Pharmacy": "walgreens",
      "Price": "$39.83"
    },
    {
      "Medication": "Zafirlukast",
      "Pharmacy": "WALGREENS SPECIALTY PHARMACY",
      "Price": "$39.83"
    },
    {
      "Medication": "Zafirlukast",
      "Pharmacy": "COMMUNITY, A WALGREENS PHARMACY",
      "Price": "$39.83"
    },
    {
      "Medication": "Zafirlukast",
      "Pharmacy": "DUANE READE",
      "Price": "$43.88"
    },
    {
      "Medication": "Zafirlukast",
      "Pharmacy": "RITE AID (WALGREENS)",
      "Price": "$43.88"
    },
    {
      "Medication": "Zafirlukast",
      "Pharmacy": "rite aid",
      "Price": "$48.58"
    },
    {
      "Medication": "Zafirlukast",
      "Pharmacy": "SHOPRITE",
      "Price": "$49.54"
    },
    {
      "Medication": "Zafirlukast",
      "Pharmacy": "UNITED PHARMACY",
      "Price": "$52.76"
    },
    {
      "Medication": "Zafirlukast",
      "Pharmacy": "WHITMAN PHARMACY",
      "Price": "$52.76"
    },
    {
      "Medication": "Zafirlukast",
      "Pharmacy": "safeway",
      "Price": "$52.76"
    },
    {
      "Medication": "Zafirlukast",
      "Pharmacy": "PRIME CARE PHARMACY",
      "Price": "$52.76"
    },
    {
      "Medication": "Zafirlukast",
      "Pharmacy": "THE MEDICINE SHOPPE",
      "Price": "$52.76"
    },
    {
      "Medication": "Zafirlukast",
      "Pharmacy": "MARKET STREET PHARMACY",
      "Price": "$52.76"
    },
    {
      "Medication": "Zafirlukast",
      "Pharmacy": "ACME PHARMACY",
      "Price": "$54.64"
    },
    {
      "Medication": "Zafirlukast",
      "Pharmacy": "stop & shop",
      "Price": "$55.47"
    },
    {
      "Medication": "Zafirlukast",
      "Pharmacy": "KMART",
      "Price": "$70.74"
    },
    {
      "Medication": "Zafirlukast",
      "Pharmacy": "MELROSE PHARMACY",
      "Price": "$70.74"
    }
  ]
export default medication_prices;
