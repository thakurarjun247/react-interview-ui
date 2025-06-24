import React, { useEffect, useState } from 'react'
import { getWidgets, deleteWidget, Widget } from '../../lib/apiConnect'
import { useNavigate } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const WidgetList = (): JSX.Element => {
  const [widgets, setWidgets] = useState<Widget[]>([])
  const navigate = useNavigate()

  const loadWidgets = async () => {
    try {
      const data = await getWidgets()
      setWidgets(data)
    } catch (err) {
      alert('Failed to load widgets')
    }
  }

  const handleDelete = async (name: string) => {
    if (!window.confirm('Are you sure?')) return
    try {
      await deleteWidget(name)
      loadWidgets()
    } catch (err: any) {
      alert(err.message || 'Failed to delete')
    }
  }

  useEffect(() => {
    loadWidgets()
  }, [])

  return (
    <Stack spacing={2}>
      <Typography variant="h4">List of Widgets:</Typography>
      <Button variant="contained" onClick={() => navigate('/create')}>
        Create Widget
      </Button>
      {widgets.map(w => (
        <Stack key={w.name} spacing={1} sx={{ border: '1px solid gray', p: 2 }}>
          <Typography variant="h6">{w.name}</Typography>
          <Typography variant="body2">{w.description}</Typography>
          <Typography variant="body1">${w.price}</Typography>
          <Stack direction="row" spacing={1}>
            <Button onClick={() => navigate(`/widget/${w.name}`)}>View</Button>
            <Button onClick={() => navigate(`/edit/${w.name}`)}>Edit</Button>
            <Button color="error" onClick={() => handleDelete(w.name)}>Delete</Button>
          </Stack>
        </Stack>
      ))}
    </Stack>
  )
}

export default WidgetList
