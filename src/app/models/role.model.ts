export interface Role {
  id: number,
  name: string;
}

export function getRoleBadgeClasses(role: Role): string {
  if (role.name.toUpperCase() == 'SUPER ADMIN') return 'bg-secondary text-white';
  return 'bg-dark text-light';
}
