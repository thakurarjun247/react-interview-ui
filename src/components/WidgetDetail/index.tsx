import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getWidgetByName, Widget } from '../../lib/apiConnect'
import { Stack, Typography, Button } from '@mui/material'

const WidgetDetail = (): JSX.Element => {
  const { name } = useParams()
  const [widget, setWidget] = useState<Widget | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    getWidgetByName(name!)
      .then(setWidget)
      .catch(() => alert('Failed to load widget'))
  }, [name])

  if (!widget) return <Typography>Loading...</Typography>

  return (
    <Stack spacing={2}>
      <Typography variant="h4">{widget.name}</Typography>
      <Typography>{widget.description}</Typography>
      <Typography>${widget.price}</Typography>
      <Button onClick={() => navigate('/')}>Back</Button>
    </Stack>
  )
}

export default WidgetDetail
