// import { checkAndUpdateElementInline } from "@angular/core/src/view/element";
export enum AccessLevel {
  Admin = 'ADMIN',
  TELLER_AGENT = 'TELLER_AGENT',
  COLLECTIONS_AGENT = 'COLLECTIONS',
}

export function returnAllAccessLevels(): Array<AccessLevel> {
  return [
    AccessLevel.Admin,
    AccessLevel.TELLER_AGENT,
    AccessLevel.COLLECTIONS_AGENT,
  ];
}

// export class Admin {
//   constructor(public hasHigherSecurity: boolean = true) {}
// }

// export class CollectionsAgent {
//   constructor(public hasHigherSecurity: boolean) {}
// }
// export class CollectionsManager {
//   constructor(public hasHigherSecurity: boolean) {}
// }

// export class TellerAgent {
//   constructor(public hasHigherSecurity: boolean) {}
// }

// export class TellerManager {
//   constructor(public hasHigherSecurity: boolean) {}
// }

// export function createAccessLevel(level: AccessLevel) : any {
//   switch(level) {
//     case AccessLevel.Admin :
//       return new Admin();
//     }
//   }
// }
