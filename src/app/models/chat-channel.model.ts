export interface ChatChannel {
  id: number,
  name: string;
  public: boolean;
}

export function getChatChannelBadgeClasses(chatChannel: ChatChannel): string {
  if (chatChannel.public) return 'badge bg-success';
  return 'badge bg-secondary';
}
