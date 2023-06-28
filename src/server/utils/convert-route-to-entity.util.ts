const mapping: Record<string, string> = {
  compliances: 'compliance',
  financials: 'financial',
  operations: 'operations',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
