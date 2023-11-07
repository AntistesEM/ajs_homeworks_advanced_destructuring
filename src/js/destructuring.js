export default function destructuring({ special }) {
  const result = special.map(({
    id,
    name,
    description = 'Описание недоступно',
    icon,
  }) => ({
    id,
    name,
    description,
    icon,
  }));

  return result;
}
