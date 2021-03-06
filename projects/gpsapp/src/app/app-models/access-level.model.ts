import {
  Product,
  home,
  tellerDrawer,
  collections,
  systemSetup,
  goldViewPlus,
  accounting,
  notificationSetup,
} from './product.model';

export enum AccessLevel {
  ADMIN = 'ADMIN',
  TELLER_AGENT = 'TELLER_AGENT',
  COLLECTIONS_AGENT = 'COLLECTIONS',
}

export function returnAllAccessLevels(): Array<AccessLevel> {
  return [
    AccessLevel.ADMIN,
    AccessLevel.TELLER_AGENT,
    AccessLevel.COLLECTIONS_AGENT,
  ];
}

export function getGlobalProductsByAccessLevel(
  accessLevel: AccessLevel,
): Array<Product> {
  switch (accessLevel) {
    case AccessLevel.ADMIN:
      return [home, tellerDrawer, collections];
    case AccessLevel.COLLECTIONS_AGENT:
      return [home, collections];
    case AccessLevel.TELLER_AGENT:
      return [home, tellerDrawer];
  }
}

export function getAdminProductsByAccessLevel(
  accessLevel: AccessLevel,
): Array<Product> {
  switch (accessLevel) {
    case AccessLevel.ADMIN:
      return [systemSetup, goldViewPlus, accounting, notificationSetup];
    case AccessLevel.COLLECTIONS_AGENT:
      return undefined;
    case AccessLevel.TELLER_AGENT:
      return undefined;
  }
}
