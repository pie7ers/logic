export function isString(string: any) {
  const regex = /^[a-zA-Z]+$/
  if (!regex.test(string) || typeof string !== 'string') return false
  return true
}