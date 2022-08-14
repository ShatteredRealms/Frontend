export interface Role {
  id: number,
  name: string;
}

export function getRoleBadgeClasses(role: Role): string {
  if (role.name.toUpperCase() == 'SUPER ADMIN') return 'badge bg-secondary text-white';
  return 'badge bg-dark text-light';
}
