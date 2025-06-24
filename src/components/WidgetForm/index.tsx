import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { createWidget, getWidgetByName, updateWidget, Widget } from '../../lib/apiConnect'
import { TextField, Button, Stack, Typography } from '@mui/material'

const WidgetForm = (): JSX.Element => {
  const { name } = useParams()
  const isEdit = Boolean(name)
  const navigate = useNavigate()

  const [widget, setWidget] = useState<Widget>({
    name: '',
    description: '',
    price: 0,
  })

  useEffect(() => {
    if (isEdit) {
      getWidgetByName(name!).then(setWidget).catch(() => alert('Failed to load widget'))
    }
  }, [name])

  const handleChange = (field: keyof Widget, value: string | number) => {
    setWidget(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    try {
      if (isEdit) {
        await updateWidget(name!, {
          description: widget.description,
          price: widget.price,
        })
      } else {
        await createWidget(widget)
      }
      navigate('/')
    } catch (err: any) {
      alert(err.message || 'Submit failed')
    }
  }

  return (
    <Stack spacing={2}>
      <Typography variant="h4">{isEdit ? 'Edit Widget' : 'Create Widget'}</Typography>
      <TextField label="Name" disabled={isEdit} value={widget.name}
        onChange={e => handleChange('name', e.target.value)} />
      <TextField label="Description" value={widget.description}
        onChange={e => handleChange('description', e.target.value)} />
      <TextField type="number" label="Price" value={widget.price}
        onChange={e => handleChange('price', parseFloat(e.target.value))} />
      <Button variant="contained" onClick={handleSubmit}>
        {isEdit ? 'Update' : 'Create'}
      </Button>
    </Stack>
  )
}

export default WidgetForm
