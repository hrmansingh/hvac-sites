export type MonthlyBudgetOption =
  | "Under $500"
  | "$500–$700"
  | "$700–$1,500"
  | "$1,500–$2,000"
  | "$2,000–$5,000"
  | "$5,000+"
  | "Not currently spending on marketing"
  | "Not sure yet";

export const MONTHLY_BUDGET_OPTIONS: MonthlyBudgetOption[] = [
  "Under $500",
  "$500–$700",
  "$700–$1,500",
  "$1,500–$2,000",
  "$2,000–$5,000",
  "$5,000+",
  "Not currently spending on marketing",
  "Not sure yet",
];

export interface AcquisitionReviewFormData {
  access_key: string;
  subject: string;
  from_name: string;
  botcheck?: string;
  name: string;
  email: string;
  website: string;
  "biggest-issue"?: string;
  "monthly-budget": MonthlyBudgetOption;
  message?: string;
}
