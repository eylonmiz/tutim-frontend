export const isEmpty = (
  val: Record<string, unknown> | any[] | null | undefined | string
) => val == null || val == "" || !(Object.keys(val) || val).length
