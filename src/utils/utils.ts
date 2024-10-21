import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, parseISO, parse, isValid, startOfDay } from "date-fns";

export const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${month}.${day}.${year}`;
};

export function formatDate(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, "dd.MM.yyyy");
}

export function convertToDisplayFormat(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, "dd.MM.yyyy");
}

export function convertToISO(dateString: string): string {
  const isoFormatRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/;

  if (isoFormatRegex.test(dateString)) {
    return dateString;
  }

  const date = parse(dateString, 'dd.MM.yyyy', new Date());

  if (!isValid(date)) {
    throw new Error('Invalid date');
  }

  const startOfDayLocal = startOfDay(date);

  const nextDay = new Date(startOfDayLocal);
  nextDay.setUTCDate(startOfDayLocal.getUTCDate() + 1);

  const utcYear = nextDay.getUTCFullYear();
  const utcMonth = String(nextDay.getUTCMonth() + 1).padStart(2, '0');
  const utcDay = String(nextDay.getUTCDate()).padStart(2, '0');
  const utcHours = String(nextDay.getUTCHours()).padStart(2, '0');
  const utcMinutes = String(nextDay.getUTCMinutes()).padStart(2, '0');
  const utcSeconds = String(nextDay.getUTCSeconds()).padStart(2, '0');

  const isoDate = `${utcYear}-${utcMonth}-${utcDay}T${utcHours}:${utcMinutes}:${utcSeconds}Z`;

  return isoDate;
}

export function getFormattedBirthday(
  birthday: string | null | undefined
): string {
  if (!birthday) {
    return ""; 
  }

  const parsedDate = parse(birthday, "dd.MM.yyyy", new Date());

  if (isValid(parsedDate) && format(parsedDate, "dd.MM.yyyy") === birthday) {
    return birthday; // Return the formatted date if it matches the input format
  } else {
    const defaultDate = new Date(birthday);
    return isValid(defaultDate) ? format(defaultDate, "dd.MM.yyyy") : ""; // Return formatted default date or empty string if invalid
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


