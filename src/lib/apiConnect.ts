//const BASE = `${process.env.REACT_APP_API_BASE_URL}/widgets`;
const BASE = 'http://localhost:8081/widgets';
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
