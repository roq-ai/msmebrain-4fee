import { ComplianceInterface } from 'interfaces/compliance';
import { FinancialInterface } from 'interfaces/financial';
import { OperationsInterface } from 'interfaces/operations';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  compliance?: ComplianceInterface[];
  financial?: FinancialInterface[];
  operations?: OperationsInterface[];
  user?: UserInterface;
  _count?: {
    compliance?: number;
    financial?: number;
    operations?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
