import { formatDistance } from "date-fns";

// Vietnam date-fns/locale

import { enAU } from "date-fns/locale";

export const getFormatDistanceToNow = (date: number) => {
  const fromNow = formatDistance(date, new Date(), {
    addSuffix: true,
    locale: enAU,
  });
  return `Created  ${fromNow}`;
};
