export const PED_TABS = {
  PED: "ped",
  DAILY_PED: "günlük ped",
  TAMPON: "tampon",
};
export const PED_TYPES = {
  PED: {
    STANDART: "Standart Ped",
    SUPER: "Süper Ped",
    SUPER_PLUS: "Süper+ Ped",
  },
  DAILY: {
    DAILY: "Günlük Ped",
    SUPER_DAILY: "Süper Günlük Ped",
  },
  TAMPON: {
    MINI: "Mini Tampon",
    STANDART: "Standart Tampon",
  },
};
export const prices = {
  [PED_TYPES.PED.STANDART]: 5,
  [PED_TYPES.PED.SUPER]: 7.5,
  [PED_TYPES.PED.SUPER_PLUS]: 10,
  [PED_TYPES.DAILY.DAILY]: 12.5,
  [PED_TYPES.DAILY.SUPER_DAILY]: 15,
  [PED_TYPES.TAMPON.MINI]: 20,
  [PED_TYPES.TAMPON.STANDART]: 25,
};

interface IPedItem {
  count: number;
  totalPrice: number;
}

export interface IItems {
  ped: {
    "Standart Ped": IPedItem;
    "Süper Ped": IPedItem;
    "Süper+ Ped": IPedItem;
  };
  "günlük ped": {
    "Günlük Ped": IPedItem;
    "Süper Günlük Ped": IPedItem;
  };
  tampon: {
    "Mini Tampon": IPedItem;
    "Standart Tampon": IPedItem;
  };
}
