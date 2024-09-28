export function formatDate(date: string): string | void {
  if ( date && date.length ) {
    const [year, month, day] = date.split('-').map((part) => part.padStart(2, '0')); // Ensure two-digit month and day
    const isoFormattedDate = `${ year }-${ month }-${ day }`;

    return new Date(isoFormattedDate).toLocaleDateString('en-US', {
      year:  'numeric',
      month: 'long',
    });
  }
}
