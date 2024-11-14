export interface PinData {
  lat: number
  long: number
  name: string
  description: string
  user: string
}

export interface Pin extends PinData {
  id: number
}
