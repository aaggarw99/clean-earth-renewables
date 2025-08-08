/**
 * Utility functions for navigation and scrolling
 */

/**
 * Smoothly scrolls to a section with the specified ID
 * @param sectionId - The ID of the section to scroll to
 * @param offset - Optional offset from the top (default: 0)
 */
export function scrollToSection(sectionId: string, offset: number = 0): void {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Smoothly scrolls to the top of the page
 */
export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/**
 * Checks if an element is in the viewport
 * @param element - The element to check
 * @returns True if the element is visible in the viewport
 */
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Scrolls to an element with a specific offset for navbar height
 * @param sectionId - The ID of the section to scroll to
 * @param navbarHeight - Height of the fixed navbar (default: 64px)
 */
export function scrollToSectionWithNavbar(sectionId: string, navbarHeight: number = 64): void {
  scrollToSection(sectionId, navbarHeight);
} 