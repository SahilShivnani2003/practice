// @/lib/data.ts  (add or merge into your existing file)

export const states = [
  { id: "andhra-pradesh", name: "Andhra Pradesh" },
  { id: "arunachal-pradesh", name: "Arunachal Pradesh" },
  { id: "assam", name: "Assam" },
  { id: "bihar", name: "Bihar" },
  { id: "chhattisgarh", name: "Chhattisgarh" },
  { id: "goa", name: "Goa" },
  { id: "gujarat", name: "Gujarat" },
  { id: "haryana", name: "Haryana" },
  { id: "himachal-pradesh", name: "Himachal Pradesh" },
  { id: "jharkhand", name: "Jharkhand" },
  { id: "karnataka", name: "Karnataka" },
  { id: "kerala", name: "Kerala" },
  { id: "madhya-pradesh", name: "Madhya Pradesh" },
  { id: "maharashtra", name: "Maharashtra" },
  { id: "manipur", name: "Manipur" },
  { id: "meghalaya", name: "Meghalaya" },
  { id: "mizoram", name: "Mizoram" },
  { id: "nagaland", name: "Nagaland" },
  { id: "odisha", name: "Odisha" },
  { id: "punjab", name: "Punjab" },
  { id: "rajasthan", name: "Rajasthan" },
  { id: "sikkim", name: "Sikkim" },
  { id: "tamil-nadu", name: "Tamil Nadu" },
  { id: "telangana", name: "Telangana" },
  { id: "tripura", name: "Tripura" },
  { id: "uttar-pradesh", name: "Uttar Pradesh" },
  { id: "uttarakhand", name: "Uttarakhand" },
  { id: "west-bengal", name: "West Bengal" },
  // Union Territories
  { id: "andaman-nicobar", name: "Andaman & Nicobar Islands" },
  { id: "chandigarh", name: "Chandigarh" },
  { id: "dadra-nagar-haveli", name: "Dadra & Nagar Haveli and Daman & Diu" },
  { id: "delhi", name: "Delhi" },
  { id: "jammu-kashmir", name: "Jammu & Kashmir" },
  { id: "ladakh", name: "Ladakh" },
  { id: "lakshadweep", name: "Lakshadweep" },
  { id: "puducherry", name: "Puducherry" },
]

export interface City {
  id: string
  name: string
  stateId: string
}

export const cities: City[] = [
  // Andhra Pradesh
  { id: "visakhapatnam", name: "Visakhapatnam", stateId: "andhra-pradesh" },
  { id: "vijayawada", name: "Vijayawada", stateId: "andhra-pradesh" },
  { id: "guntur", name: "Guntur", stateId: "andhra-pradesh" },
  { id: "nellore", name: "Nellore", stateId: "andhra-pradesh" },
  { id: "kurnool", name: "Kurnool", stateId: "andhra-pradesh" },
  { id: "tirupati", name: "Tirupati", stateId: "andhra-pradesh" },
  { id: "kakinada", name: "Kakinada", stateId: "andhra-pradesh" },
  { id: "rajahmundry", name: "Rajahmundry", stateId: "andhra-pradesh" },

  // Assam
  { id: "guwahati", name: "Guwahati", stateId: "assam" },
  { id: "silchar", name: "Silchar", stateId: "assam" },
  { id: "dibrugarh", name: "Dibrugarh", stateId: "assam" },
  { id: "jorhat", name: "Jorhat", stateId: "assam" },

  // Bihar
  { id: "patna", name: "Patna", stateId: "bihar" },
  { id: "gaya", name: "Gaya", stateId: "bihar" },
  { id: "muzaffarpur", name: "Muzaffarpur", stateId: "bihar" },
  { id: "bhagalpur", name: "Bhagalpur", stateId: "bihar" },
  { id: "darbhanga", name: "Darbhanga", stateId: "bihar" },

  // Chhattisgarh
  { id: "raipur", name: "Raipur", stateId: "chhattisgarh" },
  { id: "bhilai", name: "Bhilai", stateId: "chhattisgarh" },
  { id: "bilaspur-cg", name: "Bilaspur", stateId: "chhattisgarh" },
  { id: "korba", name: "Korba", stateId: "chhattisgarh" },

  // Delhi
  { id: "new-delhi", name: "New Delhi", stateId: "delhi" },
  { id: "delhi-north", name: "North Delhi", stateId: "delhi" },
  { id: "delhi-south", name: "South Delhi", stateId: "delhi" },
  { id: "delhi-east", name: "East Delhi", stateId: "delhi" },
  { id: "delhi-west", name: "West Delhi", stateId: "delhi" },
  { id: "dwarka", name: "Dwarka", stateId: "delhi" },
  { id: "rohini", name: "Rohini", stateId: "delhi" },

  // Goa
  { id: "panaji", name: "Panaji", stateId: "goa" },
  { id: "margao", name: "Margao", stateId: "goa" },
  { id: "vasco-da-gama", name: "Vasco da Gama", stateId: "goa" },
  { id: "mapusa", name: "Mapusa", stateId: "goa" },

  // Gujarat
  { id: "ahmedabad", name: "Ahmedabad", stateId: "gujarat" },
  { id: "surat", name: "Surat", stateId: "gujarat" },
  { id: "vadodara", name: "Vadodara", stateId: "gujarat" },
  { id: "rajkot", name: "Rajkot", stateId: "gujarat" },
  { id: "bhavnagar", name: "Bhavnagar", stateId: "gujarat" },
  { id: "jamnagar", name: "Jamnagar", stateId: "gujarat" },
  { id: "gandhinagar", name: "Gandhinagar", stateId: "gujarat" },
  { id: "anand", name: "Anand", stateId: "gujarat" },

  // Haryana
  { id: "gurugram", name: "Gurugram", stateId: "haryana" },
  { id: "faridabad", name: "Faridabad", stateId: "haryana" },
  { id: "panipat", name: "Panipat", stateId: "haryana" },
  { id: "ambala", name: "Ambala", stateId: "haryana" },
  { id: "hisar", name: "Hisar", stateId: "haryana" },
  { id: "rohtak", name: "Rohtak", stateId: "haryana" },
  { id: "karnal", name: "Karnal", stateId: "haryana" },

  // Himachal Pradesh
  { id: "shimla", name: "Shimla", stateId: "himachal-pradesh" },
  { id: "manali", name: "Manali", stateId: "himachal-pradesh" },
  { id: "dharamshala", name: "Dharamshala", stateId: "himachal-pradesh" },
  { id: "solan", name: "Solan", stateId: "himachal-pradesh" },

  // Jharkhand
  { id: "ranchi", name: "Ranchi", stateId: "jharkhand" },
  { id: "jamshedpur", name: "Jamshedpur", stateId: "jharkhand" },
  { id: "dhanbad", name: "Dhanbad", stateId: "jharkhand" },
  { id: "bokaro", name: "Bokaro", stateId: "jharkhand" },

  // Karnataka
  { id: "bengaluru", name: "Bengaluru", stateId: "karnataka" },
  { id: "mysuru", name: "Mysuru", stateId: "karnataka" },
  { id: "mangaluru", name: "Mangaluru", stateId: "karnataka" },
  { id: "hubli", name: "Hubli-Dharwad", stateId: "karnataka" },
  { id: "belagavi", name: "Belagavi", stateId: "karnataka" },
  { id: "tumkur", name: "Tumkur", stateId: "karnataka" },
  { id: "shivamogga", name: "Shivamogga", stateId: "karnataka" },
  { id: "udupi", name: "Udupi", stateId: "karnataka" },

  // Kerala
  { id: "thiruvananthapuram", name: "Thiruvananthapuram", stateId: "kerala" },
  { id: "kochi", name: "Kochi", stateId: "kerala" },
  { id: "kozhikode", name: "Kozhikode", stateId: "kerala" },
  { id: "thrissur", name: "Thrissur", stateId: "kerala" },
  { id: "kollam", name: "Kollam", stateId: "kerala" },
  { id: "kannur", name: "Kannur", stateId: "kerala" },
  { id: "palakkad", name: "Palakkad", stateId: "kerala" },

  // Madhya Pradesh
  { id: "bhopal", name: "Bhopal", stateId: "madhya-pradesh" },
  { id: "indore", name: "Indore", stateId: "madhya-pradesh" },
  { id: "jabalpur", name: "Jabalpur", stateId: "madhya-pradesh" },
  { id: "gwalior", name: "Gwalior", stateId: "madhya-pradesh" },
  { id: "ujjain", name: "Ujjain", stateId: "madhya-pradesh" },
  { id: "sagar-mp", name: "Sagar", stateId: "madhya-pradesh" },
  { id: "dewas", name: "Dewas", stateId: "madhya-pradesh" },
  { id: "satna", name: "Satna", stateId: "madhya-pradesh" },
  { id: "ratlam", name: "Ratlam", stateId: "madhya-pradesh" },
  { id: "rewa", name: "Rewa", stateId: "madhya-pradesh" },
  { id: "itarsi", name: "Itarsi", stateId: "madhya-pradesh" },
  { id: "hoshangabad", name: "Hoshangabad (Narmadapuram)", stateId: "madhya-pradesh" },

  // Maharashtra
  { id: "mumbai", name: "Mumbai", stateId: "maharashtra" },
  { id: "pune", name: "Pune", stateId: "maharashtra" },
  { id: "nagpur", name: "Nagpur", stateId: "maharashtra" },
  { id: "nashik", name: "Nashik", stateId: "maharashtra" },
  { id: "aurangabad", name: "Aurangabad (Chhatrapati Sambhajinagar)", stateId: "maharashtra" },
  { id: "solapur", name: "Solapur", stateId: "maharashtra" },
  { id: "kolhapur", name: "Kolhapur", stateId: "maharashtra" },
  { id: "thane", name: "Thane", stateId: "maharashtra" },
  { id: "amravati", name: "Amravati", stateId: "maharashtra" },
  { id: "nanded", name: "Nanded", stateId: "maharashtra" },

  // Odisha
  { id: "bhubaneswar", name: "Bhubaneswar", stateId: "odisha" },
  { id: "cuttack", name: "Cuttack", stateId: "odisha" },
  { id: "rourkela", name: "Rourkela", stateId: "odisha" },
  { id: "berhampur", name: "Berhampur", stateId: "odisha" },
  { id: "sambalpur", name: "Sambalpur", stateId: "odisha" },

  // Punjab
  { id: "ludhiana", name: "Ludhiana", stateId: "punjab" },
  { id: "amritsar", name: "Amritsar", stateId: "punjab" },
  { id: "jalandhar", name: "Jalandhar", stateId: "punjab" },
  { id: "patiala", name: "Patiala", stateId: "punjab" },
  { id: "bathinda", name: "Bathinda", stateId: "punjab" },
  { id: "mohali", name: "Mohali", stateId: "punjab" },

  // Rajasthan
  { id: "jaipur", name: "Jaipur", stateId: "rajasthan" },
  { id: "jodhpur", name: "Jodhpur", stateId: "rajasthan" },
  { id: "udaipur", name: "Udaipur", stateId: "rajasthan" },
  { id: "kota", name: "Kota", stateId: "rajasthan" },
  { id: "bikaner", name: "Bikaner", stateId: "rajasthan" },
  { id: "ajmer", name: "Ajmer", stateId: "rajasthan" },
  { id: "alwar", name: "Alwar", stateId: "rajasthan" },
  { id: "bharatpur", name: "Bharatpur", stateId: "rajasthan" },

  // Tamil Nadu
  { id: "chennai", name: "Chennai", stateId: "tamil-nadu" },
  { id: "coimbatore", name: "Coimbatore", stateId: "tamil-nadu" },
  { id: "madurai", name: "Madurai", stateId: "tamil-nadu" },
  { id: "tiruchirappalli", name: "Tiruchirappalli", stateId: "tamil-nadu" },
  { id: "salem", name: "Salem", stateId: "tamil-nadu" },
  { id: "tirunelveli", name: "Tirunelveli", stateId: "tamil-nadu" },
  { id: "vellore", name: "Vellore", stateId: "tamil-nadu" },
  { id: "erode", name: "Erode", stateId: "tamil-nadu" },

  // Telangana
  { id: "hyderabad", name: "Hyderabad", stateId: "telangana" },
  { id: "warangal", name: "Warangal", stateId: "telangana" },
  { id: "nizamabad", name: "Nizamabad", stateId: "telangana" },
  { id: "karimnagar", name: "Karimnagar", stateId: "telangana" },
  { id: "khammam", name: "Khammam", stateId: "telangana" },

  // Uttar Pradesh
  { id: "lucknow", name: "Lucknow", stateId: "uttar-pradesh" },
  { id: "kanpur", name: "Kanpur", stateId: "uttar-pradesh" },
  { id: "agra", name: "Agra", stateId: "uttar-pradesh" },
  { id: "varanasi", name: "Varanasi", stateId: "uttar-pradesh" },
  { id: "prayagraj", name: "Prayagraj", stateId: "uttar-pradesh" },
  { id: "meerut", name: "Meerut", stateId: "uttar-pradesh" },
  { id: "noida", name: "Noida", stateId: "uttar-pradesh" },
  { id: "ghaziabad", name: "Ghaziabad", stateId: "uttar-pradesh" },
  { id: "bareilly", name: "Bareilly", stateId: "uttar-pradesh" },
  { id: "aligarh", name: "Aligarh", stateId: "uttar-pradesh" },
  { id: "moradabad", name: "Moradabad", stateId: "uttar-pradesh" },
  { id: "gorakhpur", name: "Gorakhpur", stateId: "uttar-pradesh" },

  // Uttarakhand
  { id: "dehradun", name: "Dehradun", stateId: "uttarakhand" },
  { id: "haridwar", name: "Haridwar", stateId: "uttarakhand" },
  { id: "roorkee", name: "Roorkee", stateId: "uttarakhand" },
  { id: "haldwani", name: "Haldwani", stateId: "uttarakhand" },
  { id: "nainital", name: "Nainital", stateId: "uttarakhand" },

  // West Bengal
  { id: "kolkata", name: "Kolkata", stateId: "west-bengal" },
  { id: "howrah", name: "Howrah", stateId: "west-bengal" },
  { id: "durgapur", name: "Durgapur", stateId: "west-bengal" },
  { id: "asansol", name: "Asansol", stateId: "west-bengal" },
  { id: "siliguri", name: "Siliguri", stateId: "west-bengal" },
  { id: "bardhaman", name: "Bardhaman", stateId: "west-bengal" },

  // Chandigarh (UT)
  { id: "chandigarh-city", name: "Chandigarh", stateId: "chandigarh" },

  // Jammu & Kashmir
  { id: "srinagar", name: "Srinagar", stateId: "jammu-kashmir" },
  { id: "jammu", name: "Jammu", stateId: "jammu-kashmir" },

  // Puducherry
  { id: "puducherry-city", name: "Puducherry", stateId: "puducherry" },
  { id: "karaikal", name: "Karaikal", stateId: "puducherry" },
]