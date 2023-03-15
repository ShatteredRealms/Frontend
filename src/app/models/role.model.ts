
export function getRoleBadgeClasses(role: string): string {
  if (role.toUpperCase() == 'SUPER ADMIN') return 'badge bg-secondary text-white';
  if (role.toUpperCase() == 'MEMBER') return 'badge bg-light text-dark'
  return 'badge bg-dark text-light';
}
