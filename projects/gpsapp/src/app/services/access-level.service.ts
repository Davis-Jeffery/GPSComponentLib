import { Injectable } from '@angular/core';

import { AccessLevel } from '../app-models/access-level.model';

@Injectable()
export class AccessLevelService {
  public adminAccess: AccessLevel = AccessLevel.ADMIN;
  public tellerAccess: AccessLevel = AccessLevel.TELLER_AGENT;
  public collectionsAccess: AccessLevel = AccessLevel.COLLECTIONS_AGENT;
  constructor() {}

  // Our component will use this function to get the flavors
  getAccessLevel() {
    return this.adminAccess;
  }
}
