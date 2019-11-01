export function formatDate(datestr) {
  return new Date(datestr).toLocaleDateString('en-US', { timeZone: 'UTC' });
}
