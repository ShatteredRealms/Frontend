export interface Role {
  name: string;
}

export function getRoleColor(role: Role): string {
  if (role.name.toUpperCase() == 'SUPER ADMIN') return 'primary';
  return 'light';
}
