import axios from 'axios'

const BASE_URL = 'http://localhost:9000'
export const fetchAllWidgets = (): Promise<Widget[]> => axios.get(`${BASE_URL}/v1/widgets`).then((response) => response.data)

// comment
const BASE = 'http://localhost:9000'
//const BASE = '/widgets'   // Assumes "proxy" is set to backend

export interface Widget {
  name: string
  description: string
  price: number
}

export const getWidgets = async (): Promise<Widget[]> => {
  const res = await fetch(BASE)
  return res.json()
}

export const getWidgetByName = async (name: string): Promise<Widget> => {
  const res = await fetch(`${BASE}/${name}`)
  if (!res.ok) throw await res.json()
  return res.json()
}

export const createWidget = async (widget: Widget): Promise<void> => {
  const res = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(widget),
  })
  if (!res.ok) throw await res.json()
}

export const updateWidget = async (name: string, data: Partial<Widget>): Promise<void> => {
  const res = await fetch(`${BASE}/${name}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw await res.json()
}

export const deleteWidget = async (name: string): Promise<void> => {
  const res = await fetch(`${BASE}/${name}`, { method: 'DELETE' })
  if (!res.ok) throw await res.json()
}
