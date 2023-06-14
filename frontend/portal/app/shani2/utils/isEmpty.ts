export const isEmpty = (
  val: Record<string, unknown> | any[] | null | undefined
) => val == null || !(Object.keys(val) || val).length
