export function isValidBigInt(value: any){
  try{
    BigInt(value)
    return true
  } catch {
    return false
  }
}