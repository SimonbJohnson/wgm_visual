let regions = [
  {
    "region_id": 1,
    "region_name": "Eastern Africa"
  },
  {
    "region_id": 2,
    "region_name": "Central Africa"
  },
  {
    "region_id": 3,
    "region_name": "North Africa"
  },
  {
    "region_id": 4,
    "region_name": "Southern Africa"
  },
  {
    "region_id": 5,
    "region_name": "Western Africa"
  },
  {
    "region_id": 6,
    "region_name": "Central America and Mexico"
  },
  {
    "region_id": 7,
    "region_name": "Northern America"
  },
  {
    "region_id": 8,
    "region_name": "South America"
  },
  {
    "region_id": 9,
    "region_name": "Central Asia"
  },
  {
    "region_id": 10,
    "region_name": "East Asia"
  },
  {
    "region_id": 11,
    "region_name": "Southeast Asia"
  },
  {
    "region_id": 12,
    "region_name": "South Asia"
  },
  {
    "region_id": 13,
    "region_name": "Middle East"
  },
  {
    "region_id": 14,
    "region_name": "Eastern Europe"
  },
  {
    "region_id": 15,
    "region_name": "Northern Europe"
  },
  {
    "region_id": 16,
    "region_name": "Southern Europe"
  },
  {
    "region_id": 17,
    "region_name": "Western Europe"
  },
  {
    "region_id": 18,
    "region_name": "Aus/NZ"
  }
];


let regionsToCountries = [
  {
    "country id": 1,
    "region": 7
  },
  {
    "country id": 2,
    "region": 3
  },
  {
    "country id": 3,
    "region": 3
  },
  {
    "country id": 4,
    "region": 13
  },
  {
    "country id": 5,
    "region": 13
  },
  {
    "country id": 6,
    "region": 13
  },
  {
    "country id": 8,
    "region": 13
  },
  {
    "country id": 9,
    "region": 12
  },
  {
    "country id": 10,
    "region": 11
  },
  {
    "country id": 11,
    "region": 12
  },
  {
    "country id": 12,
    "region": 15
  },
  {
    "country id": 13,
    "region": 17
  },
  {
    "country id": 14,
    "region": 17
  },
  {
    "country id": 15,
    "region": 17
  },
  {
    "country id": 16,
    "region": 17
  },
  {
    "country id": 17,
    "region": 16
  },
  {
    "country id": 18,
    "region": 16
  },
  {
    "country id": 19,
    "region": 14
  },
  {
    "country id": 20,
    "region": 14
  },
  {
    "country id": 21,
    "region": 14
  },
  {
    "country id": 22,
    "region": 14
  },
  {
    "country id": 23,
    "region": 15
  },
  {
    "country id": 24,
    "region": 16
  },
  {
    "country id": 25,
    "region": 15
  },
  {
    "country id": 26,
    "region": 13
  },
  {
    "country id": 28,
    "region": 11
  },
  {
    "country id": 29,
    "region": 10
  },
  {
    "country id": 30,
    "region": 10
  },
  {
    "country id": 31,
    "region": 12
  },
  {
    "country id": 32,
    "region": 8
  },
  {
    "country id": 33,
    "region": 8
  },
  {
    "country id": 34,
    "region": 6
  },
  {
    "country id": 35,
    "region": 5
  },
  {
    "country id": 36,
    "region": 1
  },
  {
    "country id": 37,
    "region": 1
  },
  {
    "country id": 38,
    "region": 13
  },
  {
    "country id": 39,
    "region": 13
  },
  {
    "country id": 40,
    "region": 5
  },
  {
    "country id": 41,
    "region": 1
  },
  {
    "country id": 42,
    "region": 5
  },
  {
    "country id": 43,
    "region": 1
  },
  {
    "country id": 44,
    "region": 1
  },
  {
    "country id": 45,
    "region": 4
  },
  {
    "country id": 46,
    "region": 7
  },
  {
    "country id": 47,
    "region": 18
  },
  {
    "country id": 48,
    "region": 11
  },
  {
    "country id": 49,
    "region": 12
  },
  {
    "country id": 50,
    "region": 11
  },
  {
    "country id": 51,
    "region": 11
  },
  {
    "country id": 52,
    "region": 11
  },
  {
    "country id": 53,
    "region": 11
  },
  {
    "country id": 54,
    "region": 11
  },
  {
    "country id": 55,
    "region": 18
  },
  {
    "country id": 57,
    "region": 4
  },
  {
    "country id": 60,
    "region": 1
  },
  {
    "country id": 61,
    "region": 5
  },
  {
    "country id": 62,
    "region": 5
  },
  {
    "country id": 63,
    "region": 1
  },
  {
    "country id": 64,
    "region": 5
  },
  {
    "country id": 65,
    "region": 1
  },
  {
    "country id": 66,
    "region": 5
  },
  {
    "country id": 67,
    "region": 1
  },
  {
    "country id": 68,
    "region": 10
  },
  {
    "country id": 69,
    "region": 10
  },
  {
    "country id": 70,
    "region": 12
  },
  {
    "country id": 71,
    "region": 14
  },
  {
    "country id": 72,
    "region": 9
  },
  {
    "country id": 73,
    "region": 9
  },
  {
    "country id": 74,
    "region": 9
  },
  {
    "country id": 75,
    "region": 14
  },
  {
    "country id": 76,
    "region": 14
  },
  {
    "country id": 77,
    "region": 14
  },
  {
    "country id": 78,
    "region": 5
  },
  {
    "country id": 79,
    "region": 2
  },
  {
    "country id": 80,
    "region": 5
  },
  {
    "country id": 81,
    "region": 1
  },
  {
    "country id": 82,
    "region": 6
  },
  {
    "country id": 83,
    "region": 16
  },
  {
    "country id": 84,
    "region": 3
  },
  {
    "country id": 87,
    "region": 8
  },
  {
    "country id": 88,
    "region": 9
  },
  {
    "country id": 89,
    "region": 17
  },
  {
    "country id": 90,
    "region": 9
  },
  {
    "country id": 96,
    "region": 8
  },
  {
    "country id": 97,
    "region": 16
  },
  {
    "country id": 99,
    "region": 14
  },
  {
    "country id": 100,
    "region": 1
  },
  {
    "country id": 103,
    "region": 2
  },
  {
    "country id": 104,
    "region": 8
  },
  {
    "country id": 105,
    "region": 8
  },
  {
    "country id": 106,
    "region": 1
  },
  {
    "country id": 108,
    "region": 2
  },
  {
    "country id": 109,
    "region": 16
  },
  {
    "country id": 111,
    "region": 16
  },
  {
    "country id": 114,
    "region": 6
  },
  {
    "country id": 115,
    "region": 8
  },
  {
    "country id": 116,
    "region": 6
  },
  {
    "country id": 119,
    "region": 15
  },
  {
    "country id": 121,
    "region": 15
  },
  {
    "country id": 122,
    "region": 2
  },
  {
    "country id": 124,
    "region": 6
  },
  {
    "country id": 125,
    "region": 5
  },
  {
    "country id": 128,
    "region": 6
  },
  {
    "country id": 129,
    "region": 6
  },
  {
    "country id": 130,
    "region": 15
  },
  {
    "country id": 131,
    "region": 13
  },
  {
    "country id": 132,
    "region": 15
  },
  {
    "country id": 134,
    "region": 5
  },
  {
    "country id": 137,
    "region": 13
  },
  {
    "country id": 138,
    "region": 15
  },
  {
    "country id": 140,
    "region": 5
  },
  {
    "country id": 141,
    "region": 3
  },
  {
    "country id": 143,
    "region": 15
  },
  {
    "country id": 144,
    "region": 17
  },
  {
    "country id": 145,
    "region": 16
  },
  {
    "country id": 146,
    "region": 11
  },
  {
    "country id": 148,
    "region": 16
  },
  {
    "country id": 150,
    "region": 1
  },
  {
    "country id": 153,
    "region": 10
  },
  {
    "country id": 154,
    "region": 16
  },
  {
    "country id": 155,
    "region": 4
  },
  {
    "country id": 157,
    "region": 12
  },
  {
    "country id": 158,
    "region": 6
  },
  {
    "country id": 160,
    "region": 15
  },
  {
    "country id": 163,
    "region": 6
  },
  {
    "country id": 164,
    "region": 8
  },
  {
    "country id": 165,
    "region": 8
  },
  {
    "country id": 166,
    "region": 16
  },
  {
    "country id": 173,
    "region": 16
  },
  {
    "country id": 175,
    "region": 14
  },
  {
    "country id": 176,
    "region": 16
  },
  {
    "country id": 183,
    "region": 4
  },
  {
    "country id": 184,
    "region": 17
  },
  {
    "country id": 185,
    "region": 9
  },
  {
    "country id": 186,
    "region": 5
  },
  {
    "country id": 187,
    "region": 5
  },
  {
    "country id": 190,
    "region": 3
  },
  {
    "country id": 191,
    "region": 9
  },
  {
    "country id": 193,
    "region": 13
  },
  {
    "country id": 194,
    "region": 8
  },
  {
    "country id": 195,
    "region": 9
  },
  {
    "country id": 197,
    "region": 13
  },
  {
    "country id": 198,
    "region": 0
  },
  {
    "country id": 202,
    "region": 0
  }
];