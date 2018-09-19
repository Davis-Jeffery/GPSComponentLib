export class Product {
  constructor(public id: string, public title: string, public icon: string) {}
}

export const home: Product = new Product(
  '1',
  'Home',
  `M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,
  1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,
  2.25 0 0,1 12,8.75M12,15C13.5,15 16.5,15.75
  16.5,17.25V18H7.5V17.25C7.5,15.75 10.5,15 12,15Z`,
);

export const tellerDrawer: Product = new Product(
  '2',
  'Teller Drawer',
  `M15,14V11H18V9L22,12.5L18,16V14H15M14,7.7V9H2V7.7L8,4L14,
  7.7M7,10H9V15H7V10M3,10H5V15H3V10M13,10V12.5L11,14.3V10H13M9.1,
  16L8.5,16.5L10.2,18H2V16H9.1M17,15V18H14V20L10,16.5L14,13V15H17Z`,
);

export const collections: Product = new Product(
  '3',
  'Collections',
  `M5,6H23V18H5V6M14,9A3,3 0 0,1 17,12A3,
  3 0 0,1 14,15A3,3 0 0,1 11,12A3,3 0 0,
  1 14,9M9,8A2,2 0 0,1 7,10V14A2,2 0 0,1 9,
  16H19A2,2 0 0,1 21,14V10A2,2 0 0,1 19,
  8H9M1,10H3V20H19V22H1V10Z`,
);

export const systemSetup: Product = new Product(
  '4',
  'System Setup',
  `M12,12H19C18.47,16.11 15.72,19.78 12,20.92V12H5V6.3L12,
  3.19M12,1L3,5V11C3,16.55 6.84,21.73 12,23C17.16,
  21.73 21,16.55 21,11V5L12,1Z`,
);

export const goldViewPlus: Product = new Product(
  '5',
  'GOLDView Plus',
  `M3,13H7V23H3V13M10,14H14V23H10V14M17,
  9H21V23H17V9M17,1H21V5H20V3.06L11.97,
  11.09L8,7.12L3.4,11.72L2.34,10.66L8,
  5L11.97,8.97L18.94,2H17V1Z`,
);

export const accounting: Product = new Product(
  '6',
  'Accounting',
  `M14,12H15.5V14.82L17.94,16.23L17.19,17.53L14,15.69V12M4,2H18A2,
  2 0 0,1 20,4V10.1C21.24,11.36 22,13.09 22,15A7,7 0 0,1 15,22C13.09,22
  11.36,21.24 10.1,20H4A2,2 0 0,1 2,18V4A2,2 0 0,1 4,2M4,
  15V18H8.67C8.24,17.09 8,16.07 8,15H4M4,8H10V5H4V8M18,
  8V5H12V8H18M4,13H8.29C8.63,11.85 9.26,10.82 10.1,
  10H4V13M15,10.15A4.85,4.85 0 0,0 10.15,15C10.15,
  17.68 12.32,19.85 15,19.85A4.85,4.85 0 0,0 19.85,
  15C19.85,12.32 17.68,10.15 15,10.15Z`,
);

export const notificationSetup: Product = new Product(
  '7',
  'Notification Setup',
  `M13.5,10A1.5,1.5 0 0,1 12,11.5C11.16,11.5 10.5,10.83 10.5,
  10A1.5,1.5 0 0,1 12,8.5A1.5,1.5 0 0,1 13.5,10M22,4V16A2,
  2 0 0,1 20,18H6L2,22V4A2,2 0 0,1 4,2H20A2,
  2 0 0,1 22,4M16.77,11.32L15.7,10.5C15.71,
  10.33 15.71,10.16 15.7,10C15.72,9.84 15.72,
  9.67 15.7,9.5L16.76,8.68C16.85,8.6 16.88,
  8.47 16.82,8.36L15.82,6.63C15.76,6.5
  15.63,6.47 15.5,6.5L14.27,7C14,6.8
  13.73,6.63 13.42,6.5L13.23,5.19C13.21,
  5.08 13.11,5 13,5H11C10.88,5 10.77,
  5.09 10.75,5.21L10.56,6.53C10.26,
  6.65 9.97,6.81 9.7,7L8.46,6.5C8.34,
  6.46 8.21,6.5 8.15,6.61L7.15,8.34C7.09,8.45 7.11,8.58
  7.21,8.66L8.27,9.5C8.23,9.82 8.23,10.16 8.27,10.5L7.21,
  11.32C7.12,11.4 7.09,11.53 7.15,11.64L8.15,13.37C8.21,
  13.5 8.34,13.53 8.46,13.5L9.7,13C9.96,13.2 10.24,13.37
  10.55,13.5L10.74,14.81C10.77,14.93 10.88,15 11,15H13C13.12,15
  13.23,14.91 13.25,14.79L13.44,13.47C13.74,13.34 14,13.18 14.28,
  13L15.53,13.5C15.65,13.5 15.78,13.5 15.84,13.37L16.84,11.64C16.9,
  11.53 16.87,11.4 16.77,11.32Z`,
);
