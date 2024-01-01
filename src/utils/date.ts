export function formatDate(date: string): string | void {
  if ( date && date.length ) {
    return new Date(date).toLocaleDateString('en-US', {
      year:  'numeric',
      month: 'long',
    });
  }
}
