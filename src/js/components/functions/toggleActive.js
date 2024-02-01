export function toggleActive(entry,entries,state) {
  state ? entry.target.classList.add('active') : entry.target.classList.remove('active');
}
