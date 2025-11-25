import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

interface ContactForm {
  name: string
  email: string
  message: string
}

app.post('/api/contact', (req: Request<{}, {}, ContactForm>, res: Response) => {
  const { name, email, message } = req.body
  
  console.log('Contact form submission:')
  console.log(`Name: ${name}`)
  console.log(`Email: ${email}`)
  console.log(`Message: ${message}`)
  
  // Here you would typically send an email or save to database
  res.json({ success: true, message: 'Message received!' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
