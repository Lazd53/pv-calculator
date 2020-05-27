export const mountingType = [
  {value: 0, description: "Fixed - Open Rack"},
  {value: 1, description: "Fixed - Roof Mounted"},
  {value: 2, description: "1-Axis"},
  {value: 3, description: "1-Axis Backtracking"},
  {value: 4, description: "2-Axis"}
]

export const panelType = [
  {value: 0, description: "Standard"},
  {value: 1, description: "Premium"},
  {value: 2, description: "Thin Film"}]

export const accessMountingType = (num) => {
  const filter = mountingType.find( x => x.value == num)
  return filter.description;
}

export const accessPanelType = (num) => {
  const filter = panelType.find( x => x.value == num)
  return filter.description;
}
